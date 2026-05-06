'use client';

import { motion, PanInfo } from 'framer-motion';
import { User, ExternalLink, Code2, Cpu, Palette, Globe } from 'lucide-react';
import styles from './MatchCard.module.css';

interface UserProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

interface MatchCardProps {
  profile: UserProfile;
  onSwipe: (direction: 'left' | 'right') => void;
}

export default function MatchCard({ profile, onSwipe }: MatchCardProps) {
  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe('right');
    } else if (info.offset.x < -100) {
      onSwipe('left');
    }
  };

  return (
    <motion.div
      className={styles.cardContainer}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05, rotate: 5 }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
    >
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <img src={profile.image} alt={profile.name} className={styles.image} />
          <div className={styles.imageOverlay}>
            <div className={styles.socials}>
              <Globe size={20} />
              <User size={20} />
              <ExternalLink size={20} />
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.header}>
            <h2 className={styles.name}>{profile.name}</h2>
            <span className={styles.role}>{profile.role}</span>
          </div>

          <p className={styles.bio}>{profile.bio}</p>

          <div className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>Key Skills</h3>
            <div className={styles.skills}>
              {profile.skills.map((skill) => (
                <span key={skill} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Code2 size={16} />
              <span>12 Projects</span>
            </div>
            <div className={styles.stat}>
              <Cpu size={16} />
              <span>Backend Heavy</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
