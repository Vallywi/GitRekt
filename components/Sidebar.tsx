'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Users, 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';
import styles from './Sidebar.module.css';

const navItems = [
  { icon: Users, label: 'Discover', href: '/discover' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Zap className={styles.logoIcon} fill="var(--primary)" />
        <span className={styles.logoText}>HackMatch</span>
      </div>

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
        <Link href="/settings" className={styles.navLink}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <button className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
