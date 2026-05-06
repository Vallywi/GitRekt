'use client';

import { useState } from 'react';
import { User, Team, TargetType } from '../../lib/types/hackmatch';
import DiscoveryCard from './DiscoveryCard';

interface DiscoveryStackProps {
  items: Array<{ item: User | Team; type: TargetType }>;
  onLike: (targetId: string, targetType: TargetType) => void;
}

export default function DiscoveryStack({ items, onLike }: DiscoveryStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'LIKE' | 'PASS') => {
    const currentItem = items[currentIndex];
    if (direction === 'LIKE') {
      onLike(currentItem.item.id, currentItem.type);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= items.length) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl text-gray-400">✨</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800">You've reached the end!</h3>
        <p className="text-gray-500">Check back later for more hackers and teams.</p>
        <button 
          onClick={() => setCurrentIndex(0)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Reset Stack
        </button>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-sm mx-auto">
      <DiscoveryCard 
        key={currentItem.item.id}
        item={currentItem.item}
        type={currentItem.type}
        onSwipe={handleSwipe}
      />
    </div>
  );
}
