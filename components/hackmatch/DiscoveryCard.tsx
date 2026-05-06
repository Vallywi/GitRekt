'use client';

import { useState } from 'react';
import { User, Team, TargetType } from '../../lib/types/hackmatch';

interface DiscoveryCardProps {
  item: User | Team;
  type: TargetType;
  onSwipe: (direction: 'LIKE' | 'PASS') => void;
}

export default function DiscoveryCard({ item, type, onSwipe }: DiscoveryCardProps) {
  const [swipeDir, setSwipeDir] = useState<'LIKE' | 'PASS' | null>(null);
  
  const isTeam = type === 'TEAM';
  const name = isTeam ? (item as Team).name : (item as User).name;
  const description = isTeam ? (item as Team).description : (item as User).bio;
  const tags = isTeam ? (item as Team).skillsNeeded : (item as User).skills;

  const handleSwipe = (dir: 'LIKE' | 'PASS') => {
    setSwipeDir(dir);
    setTimeout(() => {
      onSwipe(dir);
    }, 500);
  };

  const animationClass = swipeDir === 'LIKE' ? 'swipe-right' : swipeDir === 'PASS' ? 'swipe-left' : '';

  return (
    <div className={`relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 ${animationClass}`}>
      <div className="h-64 bg-gray-200 relative">
        <img 
          src={item.avatar} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="px-2 py-1 bg-blue-600 rounded text-xs uppercase font-semibold">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <button 
            disabled={!!swipeDir}
            onClick={() => handleSwipe('PASS')}
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            <span className="text-2xl font-bold">✕</span>
          </button>
          
          <button 
            disabled={!!swipeDir}
            onClick={() => handleSwipe('LIKE')}
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 hover:bg-green-50 transition-colors disabled:opacity-50"
          >
            <span className="text-2xl font-bold">♥</span>
          </button>
        </div>
      </div>
    </div>
  );
}

