'use client';

import { Match, User, Team } from '../../lib/types/hackmatch';

interface MatchesListProps {
  matches: Match[];
  users: User[];
  teams: Team[];
}

export default function MatchesList({ matches, users, teams }: MatchesListProps) {
  if (matches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl text-gray-400">💬</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800">No matches yet</h3>
        <p className="text-gray-500">Keep swiping to find your perfect team!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Your Matches</h2>
      <div className="divide-y divide-gray-100">
        {matches.map((match) => {
          const target = match.targetType === 'USER' 
            ? users.find(u => u.id === match.targetId)
            : teams.find(t => t.id === match.targetId);

          if (!target) return null;

          return (
            <div key={match.id} className="flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer rounded-xl">
              <img src={target.avatar} alt={match.targetType === 'USER' ? (target as User).name : (target as Team).name} className="w-14 h-14 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <div className="font-bold text-gray-800">{match.targetType === 'USER' ? (target as User).name : (target as Team).name}</div>
                <div className="text-sm text-gray-500 truncate">
                  {match.targetType === 'USER' ? (target as User).bio : (target as Team).description}
                </div>
              </div>
              <div className="text-xs text-gray-400">
                {new Date(match.timestamp).toLocaleDateString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
