'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Send, Phone, Video, Info, Search, MoreVertical } from 'lucide-react';
import styles from './Messages.module.css';

const CHATS = [
  { id: '1', name: 'Sarah Chen', status: 'Online', lastMsg: "Hey! Let's talk about the AI project.", time: '12:45 PM', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60' },
  { id: '2', name: 'Alex Rivera', status: 'Offline', lastMsg: 'I can handle the Rust backend.', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60' },
  { id: '3', name: 'Marcus Thorne', status: 'Online', lastMsg: 'Have you seen the latest EthGlobal rules?', time: '2d ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60' },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(CHATS[0]);
  const [message, setMessage] = useState('');

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <section className={styles.chatList}>
          <div className={styles.searchHeader}>
            <h2>Messages</h2>
            <div className={styles.searchBar}>
              <Search size={16} />
              <input type="text" placeholder="Search chats..." />
            </div>
          </div>
          
          <div className={styles.chats}>
            {CHATS.map((chat) => (
              <button 
                key={chat.id}
                className={`${styles.chatItem} ${activeChat.id === chat.id ? styles.activeChat : ''}`}
                onClick={() => setActiveChat(chat)}
              >
                <div className={styles.chatAvatar}>
                  <img src={chat.avatar} alt={chat.name} />
                  {chat.status === 'Online' && <div className={styles.onlineDot} />}
                </div>
                <div className={styles.chatInfo}>
                  <div className={styles.chatHeader}>
                    <span className={styles.chatName}>{chat.name}</span>
                    <span className={styles.chatTime}>{chat.time}</span>
                  </div>
                  <p className={styles.lastMsg}>{chat.lastMsg}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.chatWindow}>
          <header className={styles.windowHeader}>
            <div className={styles.activeUser}>
              <div className={styles.chatAvatar}>
                <img src={activeChat.avatar} alt={activeChat.name} />
              </div>
              <div>
                <h3>{activeChat.name}</h3>
                <span className={styles.status}>{activeChat.status}</span>
              </div>
            </div>
            <div className={styles.windowActions}>
              <button className={styles.iconBtn}><Phone size={20} /></button>
              <button className={styles.iconBtn}><Video size={20} /></button>
              <button className={styles.iconBtn}><Info size={20} /></button>
            </div>
          </header>

          <div className={styles.messages}>
            <div className={styles.msgGroup}>
              <div className={styles.msgReceived}>
                Hi! I saw your profile on HackMatch. I'm really interested in your AI project idea.
              </div>
              <span className={styles.msgTime}>12:45 PM</span>
            </div>
            <div className={`${styles.msgGroup} ${styles.msgSentGroup}`}>
              <div className={styles.msgSent}>
                Hey Sarah! Glad you reached out. Your design work is exactly what I'm looking for.
              </div>
              <span className={styles.msgTime}>12:48 PM</span>
            </div>
          </div>

          <footer className={styles.inputFooter}>
            <div className={styles.inputWrapper}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={styles.sendBtn}>
                <Send size={20} />
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
