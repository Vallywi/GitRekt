'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.glow} />
      
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <img 
          src="/logo/logo.png" 
          alt="HackMatch Logo" 
          className={styles.heroLogo}
        />
        
        <h1 className={styles.title} style={{ color: 'white', fontWeight: 'bold', fontSize: '3.5rem', marginBottom: '1rem' }}>
          Find Your Hackathon Team
        </h1>
        
        <p className={styles.subtitle} style={{ color: 'var(--outline)', maxWidth: '600px', marginBottom: '2.5rem' }}>
          Match with developers, designers, and builders who complement your skills.
        </p>
        
        <div className={styles.actions} style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/signin" className="btn-primary">
            Get Started
          </Link>
          <Link href="/events" className="btn-secondary">
            Browse Events
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', color: 'var(--outline-variant)', fontSize: '0.875rem' }}
      >
        Trusted by 10,000+ developers worldwide.
      </motion.div>
    </main>
  );
}
