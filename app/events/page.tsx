'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Calendar, MapPin, Trophy, Tag, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Events.module.css';

const events = [
  {
    id: 1,
    name: "BUILD Hackathon",
    date: "May 6-7 2025",
    location: "FEU Tech Manila",
    prize: "Recognition + Prizes",
    tags: ["Student", "Web", "AI"],
    description: "The flagship innovation challenge at FEU Tech. Build cutting-edge solutions using AI and web technologies to solve real-world campus problems.",
    longDescription: "Join the most prestigious student hackathon in the university belt. BUILD 2025 focuses on practical applications of artificial intelligence and modern web frameworks. Whether you're a designer, developer, or pitch master, there's a place for you in the FEU Tech innovation ecosystem."
  },
  {
    id: 2,
    name: "PH DevCon Hackathon",
    date: "Aug 3-4 2025",
    location: "Quezon City",
    prize: "₱50,000 prize",
    tags: ["Philippines", "Fullstack", "Open Source"],
    description: "A nationwide competition for developers to showcase their fullstack skills and contribute to open source initiatives in the Philippines.",
    longDescription: "PH DevCon returns with its biggest hackathon yet. This year, we're challenging the community to build sustainable open-source solutions for local government and public services. Collaborate with the brightest minds in QC and compete for a significant cash prize and mentorship opportunities."
  },
  {
    id: 3,
    name: "Google DevFest Manila 2025",
    date: "Nov 15-16 2025",
    location: "Manila",
    prize: "Free entry",
    tags: ["Google", "AI", "Community"],
    description: "The ultimate gathering for Google technology enthusiasts. Learn, build, and connect with experts and the developer community.",
    longDescription: "DevFest Manila is back! Experience two days of intense learning and building with Google technologies. From Gemini and Vertex AI to Flutter and Firebase, explore the latest tools and connect with Googlers and GDEs from across the region."
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsRegistered(false);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Upcoming Events</h1>
          <p>Find your next challenge and meet potential teammates</p>
        </header>

        <div className={styles.grid}>
          {events.map((event) => (
            <motion.div 
              key={event.id}
              className={styles.eventCard}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedEvent(event)}
            >
              <div className={styles.eventHeader}>
                <Calendar size={18} />
                <span>{event.date}</span>
              </div>
              
              <h3>{event.name}</h3>
              <p className={styles.description}>{event.description}</p>
              
              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Trophy size={16} />
                  <span>{event.prize}</span>
                </div>
              </div>
              
              <div className={styles.tags}>
                {event.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedEvent && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <motion.div 
              className={styles.modal} 
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className={styles.closeBtn} onClick={closeModal}>
                <X size={24} />
              </button>

              <div className={styles.modalContent}>
                <h2>{selectedEvent.name}</h2>
                <div className={styles.modalMeta}>
                  <div className={styles.metaDetail}>
                    <Calendar size={20} />
                    <div>
                      <label>Date</label>
                      <span>{selectedEvent.date}</span>
                    </div>
                  </div>
                  <div className={styles.metaDetail}>
                    <MapPin size={20} />
                    <div>
                      <label>Location</label>
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                  <div className={styles.metaDetail}>
                    <Trophy size={20} />
                    <div>
                      <label>Prizes</label>
                      <span>{selectedEvent.prize}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.fullDescription}>
                  <h3>About the Event</h3>
                  <p>{selectedEvent.longDescription}</p>
                </div>

                <div className={styles.modalTags}>
                  {selectedEvent.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {!isRegistered ? (
                  <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={handleRegister}>
                    Register for this Event
                  </button>
                ) : (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle2 size={48} color="#22c55e" />
                    <p>Your registration is pending approval. We will notify you soon.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
