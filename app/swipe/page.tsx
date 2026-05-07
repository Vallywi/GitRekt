'use client';

import { useState } from 'react';
import AppLayout from '../../components/AppLayout';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Angelo Reyes',
    age: 22,
    role: 'Frontend Architect',
    school: 'BS Computer Science, UP Diliman',
    image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&q=80&w=800',
    skills: ['React', 'Next.js', 'Tailwind'],
    bio: 'Building hyper-fast web apps for the local startup scene. Exploring modern UI/UX for Filipino-centric platforms. Looking for a backend lodi to build the next super-app.'
  },
  {
    id: 2,
    name: 'Maria Santos',
    age: 21,
    role: 'Product Designer',
    school: 'AB Interactive Design, DLSU',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800',
    skills: ['Figma', 'Prototyping', 'User Research'],
    bio: 'Obsessed with accessibility in local gov apps. I turn complex problems into simple, beautiful interfaces. Seeking a team that values Pinoy-centric design.'
  },
  {
    id: 3,
    name: 'Kevin Panganiban',
    age: 23,
    role: 'Backend Developer',
    school: 'BS Information Tech, UST',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=800',
    skills: ['Node.js', 'PostgreSQL', 'Golang'],
    bio: 'I scale systems for peak traffic during Shopee/Lazada sales. Expert in high-performance API design. Let’s build something for the massive local market!'
  },
  {
    id: 4,
    name: 'Bianca Dela Cruz',
    age: 20,
    role: 'AI/ML Researcher',
    school: 'Computer Science, ADMU',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=800',
    skills: ['Python', 'PyTorch', 'NLP'],
    bio: 'Developing NLP models for Taglish sentiment analysis. Looking to integrate generative AI into educational tools for public schools.'
  },
  {
    id: 5,
    name: 'Joshua Gomez',
    age: 22,
    role: 'Fullstack Developer',
    school: 'BS Software Dev, Mapua',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=800',
    skills: ['TypeScript', 'Supabase', 'GraphQL'],
    bio: 'The generalist you need. I ship features end-to-end and love building community-driven projects. Ready to grind for 48 hours in the next Manila hackathon!'
  }
];

export default function SwipePage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const currentProfile = MOCK_PROFILES[currentIndex % MOCK_PROFILES.length];

  const handleSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDirection(null);
      if (dir === 'right') {
        // Only trigger match on right swipe for demo purposes
        if (Math.random() > 0.6) {
          router.push('/match');
        }
      }
    }, 200);
  };

  const handleMatch = () => {
    router.push('/match');
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center p-sm md:p-margin relative h-full min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Swipe Container */}
        <div className="relative w-full max-w-[420px] aspect-[3/4] max-h-[819px] perspective-1000 mt-16 lg:mt-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                x: direction === 'left' ? -500 : direction === 'right' ? 500 : 0,
                rotate: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
              }}
              exit={{ 
                x: direction === 'left' ? -800 : 800, 
                rotate: direction === 'left' ? -30 : 30,
                opacity: 0 
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleSwipe('right');
                else if (info.offset.x < -100) handleSwipe('left');
              }}
              className="absolute inset-0 glass-panel rounded-[24px] overflow-hidden flex flex-col glow-effect cursor-grab active:cursor-grabbing bg-surface-dim shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-[55%] w-full pointer-events-none">
                <img alt={currentProfile.name} className="w-full h-full object-cover" src={currentProfile.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                {/* Top Badges */}
                <div className="absolute top-sm left-sm flex gap-2">
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1 shadow-[0_0_15px_rgba(160,120,255,0.4)] border border-primary/20">
                    <span className="material-symbols-outlined text-[14px]">search</span>
                    Looking for Team
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-md flex flex-col justify-end bg-gradient-to-t from-[#0a0a0c] to-transparent relative -mt-16 z-10 pointer-events-none">
                <div className="mb-xs">
                  <h2 className="font-h2 text-h2 text-white m-0 flex items-center gap-2">
                    {currentProfile.name}, {currentProfile.age}
                    <span className="material-symbols-outlined text-primary text-[20px]" title="Verified">verified</span>
                  </h2>
                  <p className="font-body-md text-body-md text-primary m-0 mt-1 font-bold">{currentProfile.role}</p>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-md opacity-80">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  <span>{currentProfile.school}</span>
                </div>
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-md">
                  {currentProfile.skills.map(skill => (
                    <span key={skill} className="bg-surface-container/50 text-primary border border-primary/20 px-3 py-1 rounded-full font-label-caps text-label-caps">
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Bio */}
                <div className="font-body-sm text-body-sm text-on-surface-variant overflow-hidden pr-2 leading-relaxed opacity-80 line-clamp-3">
                  {currentProfile.bio}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Action Buttons */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center items-center gap-6 z-30">
            <button 
              onClick={() => handleSwipe('left')}
              className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-error hover:border-error/50 hover:bg-error/10 transition-all duration-300 shadow-xl bg-surface/80 group"
            >
              <span className="material-symbols-outlined text-[32px] group-active:scale-90 transition-transform">close</span>
            </button>
            <button 
              onClick={handleMatch}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-[#c4c1fb] hover:text-primary-container hover:border-primary-container/50 hover:bg-primary-container/10 transition-all duration-300 shadow-xl bg-surface/80 group -mt-4"
            >
              <span className="material-symbols-outlined text-[28px] group-active:scale-90 transition-transform">star</span>
            </button>
            <button 
              onClick={() => handleSwipe('right')}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-container to-[#6d3bd7] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.6)] hover:brightness-110 transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-[32px] group-active:scale-90 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
        </div>

        {/* Swipe Instructions (Desktop) */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 text-on-surface-variant opacity-30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center font-mono text-xs bg-surface/20">←</div>
            <span className="font-body-sm text-body-sm uppercase tracking-widest text-[11px] font-bold">Pass</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center font-mono text-xs bg-surface/20">→</div>
            <span className="font-body-sm text-body-sm uppercase tracking-widest text-[11px] font-bold">Like</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center font-mono text-xs bg-surface/20">↑</div>
            <span className="font-body-sm text-body-sm uppercase tracking-widest text-[11px] font-bold">Super</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
