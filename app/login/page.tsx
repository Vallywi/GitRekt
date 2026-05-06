'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Zap, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    router.push('/onboarding');
  };

  return (
    <main className={styles.container}>
      <div className={styles.glow} />
      
      <motion.div 
        className={styles.authCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <img src="/logo/logo.png" alt="HackMatch" style={{ width: '100px', height: 'auto', marginBottom: '1.5rem' }} />
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isLogin ? 'Enter your credentials to access HackMatch' : 'Join the elite network of hackathon engineers'}</p>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialBtn}>
            <Globe size={20} />
            <span>Google</span>
          </button>
          <button className={styles.socialBtn}>
            <User size={20} />
            <span>GitHub</span>
          </button>
        </div>

        <div className={styles.divider}>
          <span>or continue with email</span>
        </div>

        <form className={styles.form} onSubmit={handleAuth}>
          <div className={styles.inputGroup}>
            <label><Mail size={16} /> Email Address</label>
            <input type="email" placeholder="name@example.com" required />
          </div>

          <div className={styles.inputGroup}>
            <label><Lock size={16} /> Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>

        <p className={styles.toggleAuth}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>

      <footer className={styles.footer}>
        <p>&copy; 2024 HackMatch System. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
