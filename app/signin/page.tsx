'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../login/Login.module.css';

export default function SigninPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    const username = localStorage.getItem('hackmatch_username');
    if (username) {
      router.push('/dashboard');
    } else {
      router.push('/signup');
    }
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
          <h1 style={{ color: 'white', fontWeight: 'bold' }}>Welcome back.</h1>
          <p style={{ color: 'var(--outline)' }}>Your next teammate is waiting.</p>
        </div>

        <form className={styles.form} onSubmit={handleSignin}>
          <div className={styles.inputGroup}>
            <label><Mail size={16} /> Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label><Lock size={16} /> Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Sign In <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>

        <p className={styles.toggleAuth}>
          Don't have an account?
          <Link href="/signup" style={{ marginLeft: '8px', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>
            Sign up
          </Link>
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
