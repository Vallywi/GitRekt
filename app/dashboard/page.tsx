'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import {
  Users,
  Trophy,
  Clock,
  MessageSquare,
  ArrowUpRight,
  Plus,
  Bell,
  X,
  Star,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [skills, setSkills] = useState<string[]>(['JavaScript', 'React', 'Git', 'HTML/CSS']);
  const [newSkill, setNewSkill] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('hackmatch_username');
    const storedEmail = localStorage.getItem('hackmatch_email');
    const storedSkills = localStorage.getItem('hackmatch_skills');

    if (!storedUsername) {
      router.push('/signin');
      return;
    }

    setUsername(storedUsername);
    setEmail(storedEmail);
    if (storedSkills) setSkills(JSON.parse(storedSkills));

    const handleClickOutside = (e: MouseEvent) => {
      if (showProfileDropdown && !(e.target as HTMLElement).closest(`.${styles.avatar}`) && !(e.target as HTMLElement).closest(`.${styles.profileDropdown}`)) {
        setShowProfileDropdown(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [router, showProfileDropdown]);

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updated = [...skills, newSkill.trim()];
      setSkills(updated);
      localStorage.setItem('hackmatch_skills', JSON.stringify(updated));
      setNewSkill('');
      setIsAddingSkill(false);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updated = skills.filter(s => s !== skillToRemove);
    setSkills(updated);
    localStorage.setItem('hackmatch_skills', JSON.stringify(updated));
  };

  if (!username) return null;

  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Welcome back, <span style={{ color: 'var(--primary)' }}>{username}</span></h1>
            <p className={styles.subtitle}>You have 3 new matches and 2 pending team invites.</p>
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
                    <Users size={16} /> Settings
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

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--primary)' }}>
              <Users size={24} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Active Matches</span>
              <span className={styles.statValue}>12</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
              <Trophy size={24} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Hackathons Joined</span>
              <span className={styles.statValue}>4</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>
              <Clock size={24} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Pending Requests</span>
              <span className={styles.statValue}>5</span>
            </div>
          </div>
        </section>

        <div className={styles.grid}>
          <div className={styles.dashboardSection}>
            <section className={styles.activeTeam}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Active Team</h2>
                <button className={styles.textBtn} style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div className={styles.teamHeader} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div className={styles.teamInfo}>
                    <h3>Project: NeuralSync</h3>
                    <p style={{ color: 'var(--outline)', fontSize: '0.875rem' }}>Building a decentralized AI training platform.</p>
                  </div>
                  <span style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', height: 'fit-content' }}>In Progress</span>
                </div>

                <div className={styles.teamMembers} style={{ display: 'flex' }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--surface-container)', marginRight: '-12px', overflow: 'hidden' }}>
                      <img src={`https://ui-avatars.com/api/?name=Member${i}&background=random`} alt="Member" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />                    </div>
                  ))}
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-container-high)', border: '2px dashed var(--outline-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--outline)', marginLeft: '12px', cursor: 'pointer' }}>
                    <Plus size={16} />
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.recentActivity}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>RECENT ACTIVITY</h2>
              </div>

              <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
                <div className={styles.activityList}>
                  {[
                    { icon: Users, text: 'You matched with Miguel Domingo', time: '2h ago' },
                    { icon: Bell, text: 'New hackathon: BUILD Hackathon at FEU Tech', time: '5h ago' },
                    { icon: Check, text: 'Profile viewed by 3 people', time: '1d ago' },
                    { icon: Users, text: 'You matched with Mia Reyes', time: '2d ago' },
                    { icon: Star, text: 'Your match rate increased by 12%', time: '3d ago' },
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      className={styles.activityItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={styles.activityIcon}>
                        <activity.icon size={18} />
                      </div>
                      <div className={styles.activityInfo}>
                        <p className={styles.activityText}>{activity.text}</p>
                        <span className={styles.activityTime}>{activity.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className={styles.dashboardSection}>
            <section className={styles.matchStrength}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>YOUR MATCH STRENGTH</h2>
              </div>
              <div className={styles.card}>
                <div className={styles.matchStrengthContent}>
                  <div className={styles.progressRing}>
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="var(--glass-border)" strokeWidth="8" />
                      <circle
                        cx="60" cy="60" r="54" fill="none"
                        stroke="var(--primary)" strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 54}
                        strokeDashoffset={2 * Math.PI * 54 * (1 - 0.73)}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className={styles.progressText}>
                      <span className={styles.progressValue}>73%</span>
                      <span className={styles.progressLabel}>Match Rate</span>
                    </div>
                  </div>
                  <p className={styles.matchNote}>
                    Your profile is attracting strong matches. Add 2 more skills to reach 90%.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.skillsSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>YOUR SKILLS</h2>
              </div>
              <div className={styles.card}>
                <div className={styles.skillsList}>
                  {skills.map(skill => (
                    <div key={skill} className={styles.skillPill}>
                      {skill}
                      <button className={styles.removeSkill} onClick={() => removeSkill(skill)}>
                        <X size={14} />
                      </button>
                    </div>
                  ))}

                  {isAddingSkill ? (
                    <form onSubmit={addSkill}>
                      <input
                        autoFocus
                        className={styles.skillInput}
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onBlur={() => setIsAddingSkill(false)}
                        placeholder="Type skill..."
                      />
                    </form>
                  ) : (
                    <button className={styles.addSkillBtn} onClick={() => setIsAddingSkill(true)}>
                      <Plus size={16} /> Add Skill
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
