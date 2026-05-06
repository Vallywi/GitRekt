'use client';

import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { Calendar, MapPin, Trophy, ArrowRight } from 'lucide-react';
import styles from './Events.module.css';

const MOCK_EVENTS = [
  {
    id: '1',
    title: 'EthGlobal Brussels',
    date: 'Jul 12-14, 2024',
    location: 'Brussels, Belgium',
    prize: '$250,000',
    tags: ['Web3', 'Ethereum', 'DeFi'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    title: 'AI Innovation Summit',
    date: 'Aug 5-7, 2024',
    location: 'San Francisco, CA',
    prize: '$100,000',
    tags: ['AI', 'LLMs', 'Open Source'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    title: 'Chainlink Constellation',
    date: 'Sep 20 - Oct 15, 2024',
    location: 'Remote',
    prize: '$500,000',
    tags: ['Smart Contracts', 'Oracles', 'Cross-chain'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60'
  }
];

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Upcoming Hackathons</h1>
            <p className={styles.subtitle}>Discover elite competitions and find your dream team.</p>
          </div>
        </header>

        <section className={styles.eventGrid}>
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className={styles.eventImage}>
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.prizeBadge}>
                  <Trophy size={14} /> {event.prize}
                </div>
              </div>
              
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className={styles.tagList}>
                  {event.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  Find Partners <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
