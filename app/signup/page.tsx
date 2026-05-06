'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../login/Login.module.css';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('hackmatch_username', formData.username);
    localStorage.setItem('hackmatch_email', formData.email);
    router.push('/discover');
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
          <h1>Create Account</h1>
          <p>Join the elite network of hackathon engineers</p>
        </div>

        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.inputGroup}>
            <label><User size={16} /> Username</label>
            <input 
              type="text" 
              placeholder="johndoe" 
              required 
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

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
            Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>

        <p className={styles.toggleAuth}>
          Already have an account?
          <Link href="/signin" style={{ marginLeft: '8px', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>
            Sign In
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
