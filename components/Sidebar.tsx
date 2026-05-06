'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Users,
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';

const navItems = [
  { icon: Users, label: 'Discover', href: '/discover' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('hackmatch_username') || 'User');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('hackmatch_username');
    localStorage.removeItem('hackmatch_email');
    router.push('/signin');
  };

  return (
    <>
      <aside className={styles.sidebar}>
        <Link href="/dashboard" className={styles.logo}>
          <img src="/logo/logo.png" alt="HackMatch" style={{ height: '145px', width: 'auto' }} />
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.footer}>
          <Link href="/settings" className={`${styles.navLink} ${pathname === '/settings' ? styles.active : ''}`}>
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <button className={styles.logoutBtn} onClick={() => setShowLogoutModal(true)}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <nav className={styles.mobileNav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.mobileNavLink} ${pathname === item.href ? styles.mobileActive : ''}`}
          >
            <item.icon size={24} />
          </Link>
        ))}
        <button
          className={styles.mobileNavLink}
          onClick={() => setShowLogoutModal(true)}
        >
          <LogOut size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {showLogoutModal && (
          <div className={styles.modalOverlay} onClick={() => setShowLogoutModal(false)}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div className={styles.logoutIcon}><LogOut size={24} /></div>
                <button className={styles.closeBtn} onClick={() => setShowLogoutModal(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className={styles.modalBody}>
                <h3>Confirm Logout</h3>
                <p>{username}, are you sure you want to logout?</p>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.cancelBtn} onClick={() => setShowLogoutModal(false)}>Cancel</button>
                <button className={styles.confirmBtn} onClick={handleLogout}>Yes, Logout</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
