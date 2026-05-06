'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MatchCard from '@/components/MatchCard';
import { AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Bell } from 'lucide-react';
import styles from './Discover.module.css';

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users/discover')
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
        setLoading(false);
      });
  }, []);

  const handleSwipe = async (direction: 'left' | 'right') => {
    const targetUser = profiles[activeProfileIndex];
    console.log(`Swiped ${direction} on ${targetUser.name}`);

    try {
      const response = await fetch('/api/matches/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetUserId: targetUser.id,
          direction
        }),
      });

      const result = await response.json();
      if (result.status === 'match') {
        // Trigger match success animation/navigation
        window.location.href = `/match-success?id=${targetUser.id}`;
      }
    } catch (error) {
      console.error('Failed to record swipe:', error);
    }

    setActiveProfileIndex(prev => prev + 1);
  };

  if (loading) return <div className={styles.loading}>Loading elite matches...</div>;

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.searchBar}>
            <Search size={20} className={styles.searchIcon} />
            <input type="text" placeholder="Search by skill, role, or interest..." />
          </div>
          
          <div className={styles.headerActions}>
            <button className={styles.iconBtn}><SlidersHorizontal size={20} /></button>
            <button className={styles.iconBtn}><Bell size={20} /></button>
            <div className={styles.avatar}>
              <img src="https://ui-avatars.com/api/?name=User&background=8b5cf6&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.cardStack}>
            <AnimatePresence mode="popLayout">
              {activeProfileIndex < profiles.length ? (
                <MatchCard 
                  key={profiles[activeProfileIndex].id}
                  profile={profiles[activeProfileIndex]}
                  onSwipe={handleSwipe}
                />
              ) : (
                <div className={styles.noMore}>
                  <h2>All caught up!</h2>
                  <p>Check back later for more potential matches or refine your filters.</p>
                  <button className="btn-primary" onClick={() => setActiveProfileIndex(0)}>
                    Restart Search
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
