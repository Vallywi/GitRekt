'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import { Send, Phone, Video, Info, Search } from 'lucide-react';
import { pusherClient } from '@/lib/pusher';
import { useSession } from 'next-auth/react';
import styles from './Messages.module.css';

export default function MessagesPage() {
  const { data: session } = useSession();
  const [chats, setChats] = useState<any[]>([]);
  const [activeChat, setActiveChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch Chat List
  useEffect(() => {
    fetch('/api/messages/chats')
      .then(res => res.json())
      .then(data => {
        setChats(data);
        if (data.length > 0) setActiveChat(data[0]);
        setLoading(false);
      });
  }, []);

  // Fetch Messages and Subscribe to Pusher
  useEffect(() => {
    if (!activeChat || !session?.user) return;

    const currentUserId = session.user.id;
    const channelName = [currentUserId, activeChat.id].sort().join('-');

    // Fetch message history (To be implemented in API)
    // fetch(`/api/messages/history?otherUserId=${activeChat.id}`)
    //   .then(res => res.json())
    //   .then(data => setMessages(data));

    if (!pusherClient) return;

    const channel = pusherClient.subscribe(channelName);
    
    channel.bind('new-message', (newMessage: any) => {
      setMessages(prev => [...prev, newMessage]);
    });

    return () => {
      pusherClient?.unsubscribe(channelName);
    };
  }, [activeChat, session]);

  // Scroll to bottom on new message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeChat) return;

    const text = messageText;
    setMessageText('');

    try {
      await fetch('/api/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          receiverId: activeChat.id,
          content: text
        }),
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  if (loading) return <div className={styles.loading}>Initializing chat...</div>;

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
            {chats.map((chat) => (
              <button 
                key={chat.id}
                className={`${styles.chatItem} ${activeChat?.id === chat.id ? styles.activeChat : ''}`}
                onClick={() => setActiveChat(chat)}
              >
                <div className={styles.chatAvatar}>
                  <Image 
                    src={chat.avatar || `https://ui-avatars.com/api/?name=${chat.name}`} 
                    alt={chat.name} 
                    width={40}
                    height={40}
                  />
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

        {activeChat ? (
          <section className={styles.chatWindow}>
            <header className={styles.windowHeader}>
              <div className={styles.activeUser}>
                <div className={styles.chatAvatar}>
                  <Image 
                    src={activeChat.avatar || `https://ui-avatars.com/api/?name=${activeChat.name}`} 
                    alt={activeChat.name} 
                    width={40}
                    height={40}
                  />
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
              {messages.map((msg, index) => (
                <div 
                  key={msg.id || index} 
                  className={`${styles.msgGroup} ${msg.senderId === session?.user.id ? styles.msgSentGroup : ''}`}
                >
                  <div className={msg.senderId === session?.user.id ? styles.msgSent : styles.msgReceived}>
                    {msg.content}
                  </div>
                  <span className={styles.msgTime}>
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>

            <footer className={styles.inputFooter}>
              <form onSubmit={sendMessage} className={styles.inputWrapper}>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <button type="submit" className={styles.sendBtn}>
                  <Send size={20} />
                </button>
              </form>
            </footer>
          </section>
        ) : (
          <div className={styles.noChat}>
            <h2>Select a match to start chatting</h2>
            <p>You haven&apos;t matched with anyone yet. Go to Discover to find teammates!</p>
          </div>
        )}
      </main>
    </div>
  );
}

