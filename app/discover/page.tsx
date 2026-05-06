'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Search, Bell } from 'lucide-react';
import styles from './Discover.module.css';

const profiles = [
  {
    id: 1,
    name: "Andrei Santos",
    role: "Frontend Developer",
    bio: "I build interfaces that feel alive. Looking for a backend partner for my next AI project.",
    skills: ["React", "TypeScript", "Figma", "TailwindCSS"],
    projects: 8,
    style: "Design Heavy",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop"
  },
  {
    id: 2,
    name: "Mia Reyes",
    role: "Data Scientist",
    bio: "I turn messy datasets into decisions. Need a frontend dev who can visualize my models.",
    skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
    projects: 5,
    style: "Analysis Heavy",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop"
  },
  {
    id: 3,
    name: "Carlo Bautista",
    role: "Backend Engineer",
    bio: "I architect APIs that scale. Looking for a frontend or ML partner.",
    skills: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    projects: 11,
    style: "Backend Heavy",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop"
  },
  {
    id: 4,
    name: "Trisha Lim",
    role: "UI/UX Designer",
    bio: "Figma is my native language. I need engineers who respect the design system.",
    skills: ["Figma", "Prototyping", "User Research", "CSS"],
    projects: 6,
    style: "Design Heavy",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop"
  },
  {
    id: 5,
    name: "Rafael Cruz",
    role: "Mobile Developer",
    bio: "I ship iOS and Android. Looking for a backend partner for a health app.",
    skills: ["Swift", "Kotlin", "React Native", "Firebase"],
    projects: 9,
    style: "Mobile Heavy",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop"
  },
  {
    id: 6,
    name: "Jana Villanueva",
    role: "DevOps Engineer",
    bio: "I keep things running. Looking for a product-minded dev to co-build a SaaS tool.",
    skills: ["Kubernetes", "CI/CD", "Terraform", "Linux"],
    projects: 7,
    style: "Infrastructure Heavy",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&fit=crop"
  },
  {
    id: 7,
    name: "Miguel Domingo",
    role: "Full Stack + AI",
    bio: "I do everything badly until I do it well. Looking for a focused specialist.",
    skills: ["Python", "React", "Gemini API", "FastAPI"],
    projects: 14,
    style: "Generalist",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop"
  }
];

export default function DiscoverPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('hackmatch_username');
    const storedEmail = localStorage.getItem('hackmatch_email');
    if (!storedUsername) {
      router.push('/signin');
      return;
    }
    setUsername(storedUsername);
    setEmail(storedEmail);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleAction('left');
      if (e.key === 'ArrowRight') handleAction('right');
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (showProfileDropdown && !(e.target as HTMLElement).closest(`.${styles.avatar}`) && !(e.target as HTMLElement).closest(`.${styles.profileDropdown}`)) {
        setShowProfileDropdown(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [currentIndex, showProfileDropdown]);

  const handleAction = (dir: 'left' | 'right') => {
    if (currentIndex >= profiles.length) return;
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection(null);
    }, 300);
  };

  const activeProfile = profiles[currentIndex];

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.searchBar}>
            <Search size={20} className={styles.searchIcon} />
            <input type="text" placeholder="Search for potential teammates..." />
          </div>
          
          <div className={styles.headerActions}>
            <button className={styles.iconBtn}><Bell size={20} /></button>
            <div className={styles.avatar} onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
              <img src={`https://ui-avatars.com/api/?name=${username || 'User'}&background=8b5cf6&color=fff`} alt="Profile" />
            </div>

            <AnimatePresence>
              {showProfileDropdown && (
                <motion.div 
                  className={styles.profileDropdown}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                >
                  <div className={styles.dropdownUser}>
                    <div className={styles.dropdownAvatar}>{username?.charAt(0) || 'U'}</div>
                    <div className={styles.dropdownInfo}>
                      <span className={styles.dropdownName}>{username}</span>
                      <span className={styles.dropdownEmail}>{email}</span>
                    </div>
                  </div>
                  <div className={styles.dropdownDivider} />
                  <Link href="/settings" className={styles.dropdownItem}>
                    <Search size={16} /> Settings
                  </Link>
                  <button className={`${styles.dropdownItem} ${styles.logout}`} onClick={() => {
                    const logoutBtn = document.querySelector('[class*="logoutBtn"]') as HTMLButtonElement;
                    if (logoutBtn) logoutBtn.click();
                  }}>
                    <X size={16} /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.cardContainer}>
            <AnimatePresence>
              {currentIndex < profiles.length ? (
                <motion.div
                  key={activeProfile.id}
                  className={styles.card}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: direction === 'left' ? -500 : direction === 'right' ? 500 : 0,
                    rotate: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.cardImage}>
                    <img src={activeProfile.photo} alt={activeProfile.name} />
                    <div className={styles.imageOverlay} />
                    <div className={styles.cardInfo}>
                      <div className={styles.nameRow}>
                        <h2>{activeProfile.name}</h2>
                        <span className={styles.roleBadge}>{activeProfile.role}</span>
                      </div>
                      <p className={styles.bio}>{activeProfile.bio}</p>
                    </div>
                  </div>

                  <div className={styles.cardDetails}>
                    <div className={styles.detailSection}>
                      <h3>Skills</h3>
                      <div className={styles.skills}>
                        {activeProfile.skills.map(skill => (
                          <span key={skill} className={styles.skillTag}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <button 
                      className={`${styles.controlBtn} ${styles.reject}`} 
                      onClick={() => handleAction('left')}
                    >
                      <X size={32} />
                    </button>
                    <button 
                      className={`${styles.controlBtn} ${styles.accept}`} 
                      onClick={() => handleAction('right')}
                    >
                      <Check size={32} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className={styles.noMore}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.emptyIcon}>✨</div>
                  <h2>You have seen everyone for now.</h2>
                  <p>Check back later for fresh talent in the ecosystem.</p>
                  <button className="btn-primary" onClick={() => setCurrentIndex(0)}>Refresh List</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
