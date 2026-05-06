'use client';

import { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import { Send, Bell, User, Search, MoreVertical, Phone, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Messages.module.css';

const threads = [
  {
    id: 'system',
    name: 'System Notifications',
    isSystem: true,
    unread: 2,
    messages: [
      { id: 1, text: 'Welcome to HackMatch!', sender: 'system', time: 'Yesterday' },
      { id: 2, text: 'You have a new match with Miguel Domingo', sender: 'system', time: '10:00 AM' }
    ]
  },
  {
    id: 'miguel',
    name: 'Miguel Domingo',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop',
    interactive: true,
    messages: [
      { id: 1, text: 'Hey! I saw your profile, want to team up for the next hackathon?', sender: 'miguel', time: '10:05 AM' }
    ]
  },
  {
    id: 'andrei',
    name: 'Andrei Santos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop',
    messages: [
      { id: 1, text: 'Hi! Are you interested in a frontend project?', sender: 'andrei', time: '2 days ago' },
      { id: 2, text: 'Yeah, sounds great. What stack?', sender: 'me', time: '2 days ago' },
      { id: 3, text: 'Next.js and Tailwind. We need something fast.', sender: 'andrei', time: '1 day ago' }
    ]
  },
  {
    id: 'mia',
    name: 'Mia Reyes',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop',
    messages: [
      { id: 1, text: 'Your data models look really clean.', sender: 'mia', time: '3 days ago' },
      { id: 2, text: 'Thanks! Let me know if you want to collaborate.', sender: 'me', time: '2 days ago' }
    ]
  },
  {
    id: 'trisha',
    name: 'Trisha Lim',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop',
    messages: [
      { id: 1, text: 'Sent you the Figma files for the design system.', sender: 'trisha', time: '5 days ago' }
    ]
  }
];

export default function MessagesPage() {
  const [activeThreadId, setActiveThreadId] = useState('miguel');
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeThread = threads.find(t => t.id === activeThreadId);

  useEffect(() => {
    if (activeThread) {
      setMessages(activeThread.messages);
    }
  }, [activeThreadId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeThread?.interactive) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <div className={styles.threadsSidebar}>
          <div className={styles.threadsHeader}>
            <h2>Messages</h2>
            <div className={styles.searchBox}>
              <Search size={18} />
              <input type="text" placeholder="Search conversations..." />
            </div>
          </div>
          
          <div className={styles.threadsList}>
            {threads.map(thread => (
              <button 
                key={thread.id}
                className={`${styles.threadItem} ${activeThreadId === thread.id ? styles.active : ''}`}
                onClick={() => setActiveThreadId(thread.id)}
              >
                <div className={styles.threadAvatar}>
                  {thread.isSystem ? (
                    <div className={styles.systemIcon}><Bell size={20} /></div>
                  ) : (
                    <img src={thread.avatar} alt={thread.name} />
                  )}
                  {thread.unread && <span className={styles.unreadBadge}>{thread.unread}</span>}
                </div>
                <div className={styles.threadInfo}>
                  <div className={styles.threadNameRow}>
                    <span className={styles.threadName}>{thread.name}</span>
                    <span className={styles.threadTime}>
                      {thread.messages[thread.messages.length - 1].time}
                    </span>
                  </div>
                  <p className={styles.lastMessage}>
                    {thread.messages[thread.messages.length - 1].text}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.chatPanel} ${!activeThreadId ? styles.hiddenMobile : ''}`}>
          {activeThread ? (
            <>
              <header className={styles.chatHeader}>
                <div className={styles.chatUserInfo}>
                  <div className={styles.chatAvatar}>
                    {activeThread.isSystem ? (
                      <div className={styles.systemIcon}><Bell size={20} /></div>
                    ) : (
                      <img src={activeThread.avatar} alt={activeThread.name} />
                    )}
                  </div>
                  <div>
                    <h3>{activeThread.name}</h3>
                    <span className={styles.status}>Online</span>
                  </div>
                </div>
                <div className={styles.chatActions}>
                  <button><Phone size={20} /></button>
                  <button><Video size={20} /></button>
                  <button><MoreVertical size={20} /></button>
                </div>
              </header>

              <div className={styles.messagesList}>
                {messages.map(msg => (
                  <div 
                    key={msg.id} 
                    className={`${styles.messageWrapper} ${msg.sender === 'me' ? styles.mine : styles.theirs} ${msg.sender === 'system' ? styles.system : ''}`}
                  >
                    <div className={styles.messageBubble}>
                      {msg.text}
                      <span className={styles.messageTime}>{msg.time}</span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {activeThread.interactive && (
                <form className={styles.inputArea} onSubmit={handleSend}>
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button type="submit" disabled={!inputText.trim()}>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className={styles.emptyChat}>
              <div className={styles.emptyIcon}>💬</div>
              <h2>Select a conversation</h2>
              <p>Choose a thread from the sidebar to start collaborating.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
