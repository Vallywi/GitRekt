'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MessageSquare, Users, Sparkles, X } from 'lucide-react';
import styles from './MatchSuccess.module.css';

export default function MatchSuccessPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('hackmatch_username');
    if (!storedUsername) {
      router.push('/signin');
    } else {
      setUsername(storedUsername);
    }
  }, [router]);

  if (!username) return null;

  return (
    <main className={styles.container}>
      <div className={styles.glow} />
      
      <button className={styles.closeBtn} onClick={() => router.back()}>
        <X size={24} />
      </button>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className={styles.sparkleContainer}>
          <Sparkles className={styles.sparkleIcon} size={48} />
        </div>

        <h1 className={styles.title}>It's a <span className="text-gradient">Match!</span></h1>
        <p className={styles.subtitle}>You and Sarah Chen have liked each other. Time to build something legendary.</p>

        <div className={styles.matchVisual}>
          <motion.div 
            className={styles.avatarWrapper}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src={`https://ui-avatars.com/api/?name=${username}&background=8b5cf6&color=fff`} alt="User" />
          </motion.div>
          <div className={styles.connectionLine} />
          <motion.div 
            className={styles.avatarWrapper}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60" alt="Match" />
          </motion.div>
        </div>

        <div className={styles.actions}>
          <button 
            className="btn-primary" 
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            onClick={() => router.push('/messages')}
          >
            <MessageSquare size={18} /> Send a Message
          </button>
          <button 
            className="btn-secondary" 
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            onClick={() => router.back()}
          >
            <Users size={18} /> Keep Discovering
          </button>
        </div>
      </motion.div>
    </main>
  );
}
