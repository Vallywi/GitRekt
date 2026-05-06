'use client';

import { useState, useMemo } from 'react';
import { MOCK_USERS, MOCK_TEAMS, MOCK_EVENTS } from '../../lib/data/mock';
import { Match, TargetType } from '../../lib/types/hackmatch';
import DiscoveryStack from './DiscoveryStack';
import EventLocator from './EventLocator';
import MatchesList from './MatchesList';

export default function HackMatchApp() {
  const [activeTab, setActiveTab] = useState<'discovery' | 'matches' | 'events'>('discovery');
  const [matches, setMatches] = useState<Match[]>([]);

  const discoveryItems = useMemo(() => {
    const users = MOCK_USERS.map(u => ({ item: u, type: 'USER' as TargetType }));
    const teams = MOCK_TEAMS.map(t => ({ item: t, type: 'TEAM' as TargetType }));
    // Shuffle items for a "discovery" feel
    return [...users, ...teams].sort(() => Math.random() - 0.5);
  }, []);

  const handleLike = (targetId: string, targetType: TargetType) => {
    // In a real app, this would check the backend for a mutual like.
    // For this prototype, we'll simulate a match 50% of the time.
    if (Math.random() > 0.5) {
      const newMatch: Match = {
        id: `m${Date.now()}`,
        userId: 'current-user',
        targetId,
        targetType,
        timestamp: Date.now(),
      };
      setMatches(prev => [newMatch, ...prev]);
      alert(`It's a Match! 🎉`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-2xl mx-auto shadow-2xl bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
          HackMatch
        </h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('discovery')}
            className={`p-2 rounded-full transition-colors ${activeTab === 'discovery' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
          >
            🔥
          </button>
          <button 
            onClick={() => setActiveTab('matches')}
            className={`p-2 rounded-full transition-colors ${activeTab === 'matches' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
          >
            💬
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`p-2 rounded-full transition-colors ${activeTab === 'events' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
          >
            📅
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'discovery' && (
          <DiscoveryStack items={discoveryItems} onLike={handleLike} />
        )}
        {activeTab === 'matches' && (
          <MatchesList matches={matches} users={MOCK_USERS} teams={MOCK_TEAMS} />
        )}
        {activeTab === 'events' && (
          <EventLocator events={MOCK_EVENTS} />
        )}
      </main>

      {/* Footer / Navigation for mobile */}
      <nav className="border-t bg-white flex justify-around py-3 px-6">
        <button 
          onClick={() => setActiveTab('discovery')}
          className={`flex flex-col items-center ${activeTab === 'discovery' ? 'text-orange-500' : 'text-gray-400'}`}
        >
          <span className="text-xl">🎴</span>
          <span className="text-xs font-bold uppercase">Discover</span>
        </button>
        <button 
          onClick={() => setActiveTab('matches')}
          className={`flex flex-col items-center ${activeTab === 'matches' ? 'text-orange-500' : 'text-gray-400'}`}
        >
          <span className="text-xl">💬</span>
          <span className="text-xs font-bold uppercase">Matches</span>
        </button>
        <button 
          onClick={() => setActiveTab('events')}
          className={`flex flex-col items-center ${activeTab === 'events' ? 'text-orange-500' : 'text-gray-400'}`}
        >
          <span className="text-xl">📅</span>
          <span className="text-xs font-bold uppercase">Events</span>
        </button>
      </nav>
    </div>
  );
}
