'use client';

import AppLayout from '../../components/AppLayout';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  sender: string;
  avatar: string;
  time: string;
  content: string;
  isMe: boolean;
  status?: 'sending' | 'sent' | 'seen';
  file?: {
    name: string;
    size: string;
    type: string;
  };
};

type Chat = {
  id: string;
  name: string;
  type: 'channel' | 'dm';
  description?: string;
  status?: 'online' | 'offline';
  messages: Message[];
  unreadCount?: number;
  lastMessage?: string;
  lastTime?: string;
};

const INITIAL_CHATS: Chat[] = [
  {
    id: 'team-bayanihan',
    name: 'team-bayanihan',
    type: 'channel',
    description: 'Main squad coordination for Manila AI Summit',
    unreadCount: 3,
    messages: [
      {
        id: 1,
        sender: 'Maria Santos',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100',
        time: '10:42 AM',
        content: "I've updated the Figma file with the new Taglish NLP landing page. Check the typography!",
        isMe: false,
        file: { name: 'HackMatch_Design_v3.fig', size: '5.2 MB', type: 'Figma Design' }
      },
      {
        id: 2,
        sender: 'You',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
        time: '10:45 AM',
        content: "Solid design, Maria! The Inter font really works for the professional look. I'll start coding the hero section.",
        isMe: true,
        status: 'seen'
      }
    ]
  },
  {
    id: 'joshua-gomez',
    name: 'Joshua Gomez',
    type: 'dm',
    status: 'online',
    lastMessage: 'Uy, are you going to the hackathon?',
    lastTime: '2m',
    messages: [
      {
        id: 1,
        sender: 'Joshua Gomez',
        avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=100',
        time: '11:05 AM',
        content: "Pre, have you seen the new prize pool for Manila AI Summit? 500k!",
        isMe: false
      },
      {
        id: 2,
        sender: 'You',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
        time: '11:06 AM',
        content: "Oo nga eh, competitive. Need natin ayusin yung pitch natin.",
        isMe: true,
        status: 'seen'
      }
    ]
  }
];

function MessagesContent() {
  const searchParams = useSearchParams();
  const targetUser = searchParams.get('user');
  
  const [chats, setChats] = useState<Chat[]>(INITIAL_CHATS);
  const [activeChatId, setActiveChatId] = useState<string>(INITIAL_CHATS[0].id);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-Select or Create Chat
  useEffect(() => {
    if (targetUser) {
      const existingChat = chats.find(c => c.name.toLowerCase().includes(targetUser.toLowerCase()));
      if (existingChat) {
        setActiveChatId(existingChat.id);
      } else {
        const newChat: Chat = {
          id: targetUser.toLowerCase().replace(/\s+/g, '-'),
          name: targetUser,
          type: 'dm',
          status: 'online',
          messages: [
            {
              id: Date.now(),
              sender: targetUser,
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
              time: 'Just now',
              content: `Hi! I saw we matched for the AgriTech PH Challenge. Excited to work with you!`,
              isMe: false
            }
          ]
        };
        setChats([newChat, ...chats]);
        setActiveChatId(newChat.id);
      }
    }
  }, [targetUser]);

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  // Live Auto-Reply Simulation
  useEffect(() => {
    const lastMessage = activeChat.messages[activeChat.messages.length - 1];
    
    if (lastMessage && lastMessage.isMe && lastMessage.sender === 'You') {
      // Simulate "Seen" after 1 second
      setTimeout(() => {
        setChats(prev => prev.map(chat => {
          if (chat.id === activeChatId) {
            const updatedMessages = [...chat.messages];
            updatedMessages[updatedMessages.length - 1] = { ...lastMessage, status: 'seen' };
            return { ...chat, messages: updatedMessages };
          }
          return chat;
        }));
      }, 1000);

      // Simulate "Typing..." after 2 seconds
      setTimeout(() => {
        setIsTyping(true);
        
        // Simulate "Reply" after 4 seconds
        setTimeout(() => {
          setIsTyping(false);
          const replyMessage: Message = {
            id: Date.now(),
            sender: activeChat.name,
            avatar: activeChat.type === 'dm' ? activeChat.messages[0].avatar : 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            content: "Solid lodi! G ako dyan. Let's build it! 🚀",
            isMe: false
          };
          
          setChats(prev => prev.map(chat => 
            chat.id === activeChatId 
              ? { ...chat, messages: [...chat.messages, replyMessage] }
              : chat
          ));
        }, 2000);
      }, 2000);
    }
  }, [activeChat.messages.length, activeChatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat.messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'You',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: inputValue,
      isMe: true,
      status: 'sent'
    };

    setChats(chats.map(chat => 
      chat.id === activeChatId 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));
    setInputValue('');
  };

  return (
    <AppLayout>
      <div className="flex h-screen bg-abyss overflow-hidden pt-16 lg:pt-0">
        {/* Chat List Sidebar */}
        <aside className="w-full md:w-80 lg:w-96 bg-[#0f0f12]/60 backdrop-blur-3xl border-r border-white/[0.05] flex flex-col hidden md:flex">
          <div className="p-md border-b border-white/[0.05]">
            <div className="flex items-center justify-between mb-md">
              <h2 className="text-xl font-bold text-white tracking-tight">Messages</h2>
              <button className="text-primary hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-body-sm text-white focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {chats.map(chat => (
              <button
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`w-full p-md flex items-center gap-4 transition-all border-b border-white/[0.02] hover:bg-white/[0.02] ${activeChatId === chat.id ? 'bg-primary/10 border-l-4 border-l-primary' : ''}`}
              >
                <div className="relative">
                  <img alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-white/10" src={chat.type === 'dm' ? chat.messages[0].avatar : 'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=100'} />
                  {chat.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] rounded-full border-2 border-[#0a0a0c]"></div>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[15px] font-bold ${chat.type === 'channel' ? 'text-primary' : 'text-white'}`}>
                      {chat.type === 'channel' ? `#${chat.name}` : chat.name}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{chat.lastTime || '10:45 AM'}</span>
                  </div>
                  <p className="text-[13px] text-slate-500 line-clamp-1 opacity-80">{chat.lastMessage || chat.messages[chat.messages.length - 1].content}</p>
                </div>
                {chat.unreadCount && (
                  <div className="bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">{chat.unreadCount}</div>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Message View */}
        <main className="flex-1 flex flex-col relative">
          {/* Chat Header */}
          <header className="p-md bg-[#0f0f12]/40 backdrop-blur-md border-b border-white/[0.05] flex items-center justify-between z-10">
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <button className="text-slate-400">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
              </div>
              <div className="relative">
                <img alt={activeChat.name} className="w-10 h-10 rounded-full object-cover border border-white/10" src={activeChat.type === 'dm' ? activeChat.messages[0].avatar : 'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=100'} />
                {activeChat.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10b981] rounded-full border-2 border-[#0a0a0c]"></div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-white text-[16px] flex items-center gap-2">
                  {activeChat.type === 'channel' ? `#${activeChat.name}` : activeChat.name}
                  {isTyping && <span className="text-[10px] text-primary italic lowercase tracking-tight animate-pulse ml-2">Typing...</span>}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium uppercase tracking-widest">{activeChat.type === 'channel' ? activeChat.description : (activeChat.status === 'online' ? 'Online' : 'Offline')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">call</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">videocam</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">info</span></button>
            </div>
          </header>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-md space-y-md custom-scrollbar bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_100%)]">
            {activeChat.messages.map((msg, index) => (
              <div key={msg.id} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                  {!msg.isMe && <img alt={msg.sender} className="w-8 h-8 rounded-full object-cover mt-1 flex-shrink-0" src={msg.avatar} />}
                  <div className="flex flex-col gap-1">
                    <div className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ${msg.isMe ? 'bg-primary text-on-primary rounded-tr-none shadow-lg' : 'bg-white/[0.03] border border-white/[0.05] text-white rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                    {msg.isMe && (
                      <div className="flex items-center justify-end gap-1 px-1 opacity-60">
                        <span className="text-[9px] text-slate-400 font-bold uppercase">{msg.status === 'seen' ? 'Seen' : 'Sent'}</span>
                        <span className="material-symbols-outlined text-[10px] text-primary" style={{ fontVariationSettings: msg.status === 'seen' ? "'FILL' 1" : "'FILL' 0" }}>
                          {msg.status === 'seen' ? 'check_circle' : 'check'}
                        </span>
                      </div>
                    )}
                    {msg.file && (
                      <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl mt-2 flex items-center gap-3 group cursor-pointer hover:bg-white/[0.04] transition-all">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">description</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-[12px] font-bold text-white truncate">{msg.file.name}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest">{msg.file.size} • {msg.file.type}</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">download</span>
                      </div>
                    )}
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <AnimatePresence>
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 text-primary ml-10"
                >
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <footer className="p-md pt-0 bg-[#0a0a0c]">
            <form 
              onSubmit={handleSendMessage}
              className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-2 flex items-center gap-2 focus-within:border-primary/40 transition-all shadow-xl"
            >
              <button type="button" className="text-slate-500 hover:text-primary p-2 transition-colors"><span className="material-symbols-outlined">add_circle</span></button>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Message ${activeChat.type === 'channel' ? '#' + activeChat.name : activeChat.name}...`} 
                className="flex-1 bg-transparent border-none focus:outline-none text-white text-body-sm py-2 px-2"
              />
              <div className="flex items-center gap-1">
                <button type="button" className="text-slate-500 hover:text-primary p-2 transition-colors"><span className="material-symbols-outlined">sentiment_satisfied</span></button>
                <button 
                  type="submit"
                  className="bg-primary text-on-primary w-10 h-10 rounded-xl flex items-center justify-center hover:brightness-110 transition-all shadow-lg active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                </button>
              </div>
            </form>
          </footer>
        </main>
      </div>
    </AppLayout>
  );
}

export default function MessagesPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen flex items-center justify-center text-white">Loading Chats...</div>}>
      <MessagesContent />
    </Suspense>
  );
}
