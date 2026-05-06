'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      >
        <span className={styles.badge}>
          <Sparkles size={14} style={{ marginRight: '8px' }} />
          Beta Access Now Open
        </span>
        
        <h1 className={styles.title}>
          Elite Teams for <br /> 
          <span style={{ color: 'var(--primary)' }}>High-Stakes</span> Code.
        </h1>
        
        <p className={styles.subtitle}>
          Stop searching, start matching. The first Tinder-style platform <br />
          exclusively for finding top-tier hackathon collaborators.
        </p>
        
        <div className={styles.actions}>
          <Link href="/discover" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Get Started <ArrowRight size={18} />
          </Link>
          <Link href="/events" className="btn-secondary">
            View Hackathons
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
