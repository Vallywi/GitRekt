'use client';

import AppLayout from '../../components/AppLayout';
import { useState, useRef, useEffect } from 'react';

type Message = {
  id: number;
  sender: string;
  avatar: string;
  time: string;
  content: string;
  isMe: boolean;
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
    id: 'frontend-core',
    name: 'frontend-core',
    type: 'channel',
    description: 'Discussion for primary UI components',
    unreadCount: 3,
    messages: [
      {
        id: 1,
        sender: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
        time: '10:42 AM',
        content: "I've updated the component library based on yesterday's sync. Take a look at the new Glassmorphic card variations.",
        isMe: false,
        file: { name: 'Core_UI_Kit_v2.fig', size: '2.4 MB', type: 'Figma Design' }
      },
      {
        id: 2,
        sender: 'You',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
        time: '10:45 AM',
        content: "Looks super clean! The deeper backdrop blur really sells the premium feel. I'll start implementing the CSS variables for the ambient glows today.",
        isMe: true
      }
    ]
  },
  {
    id: 'backend-api',
    name: 'backend-api',
    type: 'channel',
    description: 'API documentation and endpoint discussion',
    messages: [
      {
        id: 1,
        sender: 'Marcus Wright',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
        time: 'Yesterday',
        content: "The new auth endpoints are live on staging. Please test and let me know if you hit any CORS issues.",
        isMe: false
      }
    ]
  },
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    type: 'dm',
    status: 'online',
    lastMessage: 'LGTM. Go ahead and merge.',
    lastTime: '2m',
    messages: [
      {
        id: 1,
        sender: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
        time: '11:05 AM',
        content: "Hey, did you see the PR for the swipe animations?",
        isMe: false
      },
      {
        id: 2,
        sender: 'You',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
        time: '11:06 AM',
        content: "Checking it now. Looks like you used Framer Motion?",
        isMe: true
      },
      {
        id: 3,
        sender: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
        time: '11:07 AM',
        content: "LGTM. Go ahead and merge.",
        isMe: false
      }
    ]
  }
];

export default function MessagesPage() {
  const [chats, setChats] = useState<Chat[]>(INITIAL_CHATS);
  const [activeChatId, setActiveChatId] = useState('frontend-core');
  const [messageInput, setMessageInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChatId, activeChat.messages]);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'You',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: messageInput,
      isMe: true
    };

    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
          unreadCount: 0
        };
      }
      return chat;
    }));

    setMessageInput('');
  };

  return (
    <AppLayout>
      <div className="flex-1 flex overflow-hidden lg:pt-0 pt-16 h-[calc(100vh-80px)] lg:h-screen bg-[#000000]">
        {/* Left Sidebar */}
        <aside className="w-72 border-r border-white/[0.05] bg-[#0a0a0c]/80 backdrop-blur-xl flex flex-col m-3 rounded-2xl overflow-hidden hidden md:flex shrink-0 border border-white/[0.05]">
          <div className="p-4 border-b border-white/[0.05]">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
              <input className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-white focus:border-[#8b5cf6]/40 focus:bg-white/[0.05] transition-all outline-none" placeholder="Search chats..." type="text"/>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-6 custom-scrollbar">
            {/* Team Channels */}
            <div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 px-2">Team Channels</h3>
              <div className="space-y-1">
                {chats.filter(c => c.type === 'channel').map(chat => (
                  <button 
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all ${activeChatId === chat.id ? 'bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <span className="material-symbols-outlined text-lg opacity-60">tag</span>
                    <span className="text-sm font-semibold">{chat.name}</span>
                    {chat.unreadCount && (
                      <span className="ml-auto bg-[#8b5cf6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]">{chat.unreadCount}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Messages */}
            <div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 px-2">Direct Messages</h3>
              <div className="space-y-1">
                {chats.filter(c => c.type === 'dm').map(chat => (
                  <button 
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${activeChatId === chat.id ? 'bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    <div className="relative">
                      <img alt={chat.name} className="w-8 h-8 rounded-full object-cover border border-white/10" src={chat.messages[0].avatar} />
                      {chat.status === 'online' && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a0c]"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className={`text-sm font-bold truncate ${activeChatId === chat.id ? 'text-[#8b5cf6]' : 'text-white'}`}>{chat.name}</p>
                        <span className="text-[10px] text-slate-500">{chat.lastTime || '1h'}</span>
                      </div>
                      <p className="text-[12px] text-slate-500 truncate opacity-70">{chat.lastMessage || chat.messages[chat.messages.length - 1].content}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col m-3 ml-0 md:ml-3 rounded-2xl bg-[#0a0a0c]/60 backdrop-blur-3xl border border-white/[0.05] relative overflow-hidden">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-white/[0.05] flex justify-between items-center bg-[#0a0a0c]/40 backdrop-blur-md z-10">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#8b5cf6] text-xl hidden md:block">tag</span>
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  {activeChat.name}
                  {activeChat.type === 'channel' && (
                    <span className="bg-white/[0.03] text-slate-500 text-[10px] px-2.5 py-0.5 rounded-full border border-white/[0.05] uppercase tracking-widest font-bold">Public</span>
                  )}
                </h2>
                <p className="text-xs text-slate-500 font-medium">{activeChat.description || (activeChat.status === 'online' ? 'Active now' : 'Offline')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 mr-4">
                <img className="w-7 h-7 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"/>
                <img className="w-7 h-7 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"/>
                <div className="w-7 h-7 rounded-full border-2 border-[#0a0a0c] bg-[#1e1333] flex items-center justify-center text-[10px] text-white font-bold">+4</div>
              </div>
              <button className="p-2 hover:bg-[#8b5cf6]/10 rounded-xl transition-all text-slate-400 hover:text-[#8b5cf6] border border-transparent hover:border-[#8b5cf6]/20"><span className="material-symbols-outlined text-[22px]">person_add</span></button>
              <button className="p-2 hover:bg-[#8b5cf6]/10 rounded-xl transition-all text-slate-400 hover:text-[#8b5cf6] border border-transparent hover:border-[#8b5cf6]/20"><span className="material-symbols-outlined text-[22px]">push_pin</span></button>
            </div>
          </div>
          
          {/* Messages Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col pb-32 custom-scrollbar"
          >
            <div className="flex items-center gap-4 my-4 opacity-30">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Today</span>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            
            {activeChat.messages.map((msg, i) => (
              <div key={msg.id} className={`flex gap-4 group ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                <img alt={msg.sender} className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/10" src={msg.avatar} />
                <div className={`flex flex-col gap-1.5 w-full max-w-2xl ${msg.isMe ? 'items-end' : ''}`}>
                  <div className={`flex items-baseline gap-2 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-[13px] font-bold ${msg.isMe ? 'text-white' : 'text-[#8b5cf6]'}`}>{msg.isMe ? 'You' : msg.sender}</span>
                    <span className="text-[10px] font-bold text-slate-600">{msg.time}</span>
                  </div>
                  <div className={`text-sm leading-relaxed p-4 rounded-2xl border border-white/[0.05] ${msg.isMe ? 'bg-[#8b5cf6] text-white rounded-tr-none shadow-[0_4px_20px_rgba(139,92,246,0.2)]' : 'bg-white/[0.03] text-slate-200 rounded-tl-none'}`}>
                    <p>{msg.content}</p>
                    {msg.file && (
                      <div className="mt-4 p-3 bg-black/40 rounded-xl border border-white/5 flex items-center gap-4 w-fit cursor-pointer hover:border-[#8b5cf6]/40 transition-all group/file">
                        <div className="bg-[#8b5cf6]/20 p-2.5 rounded-lg border border-[#8b5cf6]/20">
                          <span className="material-symbols-outlined text-[#8b5cf6] text-xl">folder</span>
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-white group-hover/file:text-[#8b5cf6] transition-colors">{msg.file.name}</p>
                          <p className="text-[11px] text-slate-500 font-medium">{msg.file.size} • {msg.file.type}</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 ml-4 hover:text-[#8b5cf6] transition-colors">download</span>
                      </div>
                    )}
                  </div>
                  {msg.isMe && i === activeChat.messages.length - 1 && (
                    <div className="text-[10px] text-[#8b5cf6] flex items-center gap-1 font-bold mt-1">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                      Sent
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent">
            <div className="bg-white/[0.02] rounded-2xl border border-white/[0.05] flex flex-col focus-within:border-[#8b5cf6]/40 focus-within:bg-white/[0.04] transition-all shadow-2xl overflow-hidden backdrop-blur-xl">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-white resize-none p-4 max-h-32 placeholder-slate-600 outline-none scrollbar-hide" 
                placeholder={`Message #${activeChat.name}...`} 
                rows={1}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              ></textarea>
              <div className="flex justify-between items-center px-4 pb-3">
                <div className="flex gap-1 text-slate-500">
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all hover:text-[#8b5cf6]"><span className="material-symbols-outlined text-[20px]">add_circle</span></button>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all hover:text-[#8b5cf6]"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all hover:text-[#8b5cf6]"><span className="material-symbols-outlined text-[20px]">code</span></button>
                  <button className="p-2 hover:bg-white/5 rounded-xl transition-all hover:text-[#8b5cf6]"><span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span></button>
                </div>
                <button 
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${messageInput.trim() ? 'bg-[#8b5cf6] text-white shadow-[0_4px_15px_rgba(139,92,246,0.4)]' : 'bg-white/5 text-slate-600 cursor-not-allowed'}`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: messageInput.trim() ? "'FILL' 1" : "" }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
