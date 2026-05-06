'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { 
  User, 
  Mail, 
  Moon, 
  Sun, 
  Bell, 
  Shield, 
  Trash2, 
  CheckCircle2,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Settings.module.css';

export default function SettingsPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    matches: true,
    events: true
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('hackmatch_username') || '');
    setEmail(localStorage.getItem('hackmatch_email') || '');
    const savedTheme = localStorage.getItem('hackmatch_theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('hackmatch_username', username);
    localStorage.setItem('hackmatch_email', email);
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('hackmatch_theme', newTheme ? 'dark' : 'light');
  };

  const handleDeleteAccount = () => {
    localStorage.clear();
    router.push('/signin');
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Account Settings</h1>
          <p>Manage your profile, preferences, and account security</p>
        </header>

        <div className={styles.sections}>
          {/* Profile Settings */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <User size={20} />
              <h2>Profile Settings</h2>
            </div>
            <form className={styles.form} onSubmit={handleSaveProfile}>
              <div className={styles.inputGroup}>
                <label>Username</label>
                <div className={styles.inputWrapper}>
                  <User size={18} />
                  <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Your username"
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} />
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className={styles.formActions}>
                <button type="submit" className="btn-primary">Save Changes</button>
                <AnimatePresence>
                  {showSaveSuccess && (
                    <motion.span 
                      className={styles.successNote}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckCircle2 size={16} /> Changes saved successfully
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </section>

          {/* Appearance */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Moon size={20} />
              <h2>Appearance</h2>
            </div>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <h3>Dark Mode</h3>
                <p>Toggle between light and dark visual themes</p>
              </div>
              <button 
                className={`${styles.toggle} ${isDarkMode ? styles.active : ''}`}
                onClick={toggleTheme}
              >
                <div className={styles.toggleHandle}>
                  {isDarkMode ? <Moon size={12} /> : <Sun size={12} />}
                </div>
              </button>
            </div>
          </section>

          {/* Notifications */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Bell size={20} />
              <h2>Notifications</h2>
            </div>
            <div className={styles.settingList}>
              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <h3>Email Notifications</h3>
                  <p>Receive updates about your account via email</p>
                </div>
                <button 
                  className={`${styles.toggle} ${notifications.email ? styles.active : ''}`}
                  onClick={() => setNotifications({...notifications, email: !notifications.email})}
                >
                  <div className={styles.toggleHandle} />
                </button>
              </div>
              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <h3>Match Alerts</h3>
                  <p>Get notified when you find a new potential teammate</p>
                </div>
                <button 
                  className={`${styles.toggle} ${notifications.matches ? styles.active : ''}`}
                  onClick={() => setNotifications({...notifications, matches: !notifications.matches})}
                >
                  <div className={styles.toggleHandle} />
                </button>
              </div>
              <div className={styles.settingItem}>
                <div className={styles.settingInfo}>
                  <h3>Event Reminders</h3>
                  <p>Stay updated on hackathons you've registered for</p>
                </div>
                <button 
                  className={`${styles.toggle} ${notifications.events ? styles.active : ''}`}
                  onClick={() => setNotifications({...notifications, events: !notifications.events})}
                >
                  <div className={styles.toggleHandle} />
                </button>
              </div>
            </div>
          </section>

          {/* Account */}
          <section className={`${styles.section} ${styles.dangerZone}`}>
            <div className={styles.sectionHeader}>
              <Shield size={20} />
              <h2>Account</h2>
            </div>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <h3>Delete Account</h3>
                <p>Permanently remove your account and all associated data</p>
              </div>
              <button className={styles.deleteBtn} onClick={() => setShowDeleteConfirm(true)}>
                <Trash2 size={18} />
                Delete Account
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <div className={styles.modalOverlay} onClick={() => setShowDeleteConfirm(false)}>
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.modalIcon}><AlertTriangle size={32} /></div>
              <h2>Are you absolutely sure?</h2>
              <p>This action cannot be undone. All your matches, messages, and profile data will be permanently deleted.</p>
              <div className={styles.modalActions}>
                <button className={styles.cancelBtn} onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
                <button className={styles.confirmDeleteBtn} onClick={handleDeleteAccount}>Delete Permanently</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
