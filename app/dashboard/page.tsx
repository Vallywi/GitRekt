'use client';

import Sidebar from '@/components/Sidebar';
import { 
  Users, 
  Trophy, 
  Clock, 
  MessageSquare,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Welcome back, <span style={{ color: 'var(--primary)' }}>Cynthia</span></h1>
            <p className={styles.subtitle}>You have 3 new matches and 2 pending team invites.</p>
          </div>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Create New Team
          </button>
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
          <section className={styles.activeTeam}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Active Team</h2>
              <button className={styles.textBtn}>View Details <ArrowUpRight size={14} /></button>
            </div>
            
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div className={styles.teamHeader}>
                <div className={styles.teamInfo}>
                  <h3>Project: NeuralSync</h3>
                  <p>Building a decentralized AI training platform.</p>
                </div>
                <span className={styles.statusBadge}>In Progress</span>
              </div>
              
              <div className={styles.teamMembers}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className={styles.memberAvatar}>
                    <img src={`https://ui-avatars.com/api/?name=Member${i}&background=random`} alt="Member" />
                  </div>
                ))}
                <div className={styles.addMember}>
                  <Plus size={16} />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.recentActivity}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Recent Activity</h2>
            </div>
            
            <div className={styles.activityList}>
              {[
                { type: 'match', text: 'New match with Sarah Chen', time: '2h ago' },
                { type: 'invite', text: 'Invite from Team "Alpha" to join EthGlobal', time: '5h ago' },
                { type: 'message', text: 'Marcus Thorne sent you a message', time: '1d ago' },
              ].map((activity, i) => (
                <div key={i} className={styles.activityItem}>
                  <div className={styles.activityDot} />
                  <div className={styles.activityContent}>
                    <p>{activity.text}</p>
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
