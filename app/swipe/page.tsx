'use client';

import { useState } from 'react';
import AppLayout from '../../components/AppLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SwipePage() {
  const router = useRouter();

  const handleMatch = () => {
    // Navigate to match success
    router.push('/match');
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center p-sm md:p-margin relative h-full min-h-[calc(100vh-80px)]">
        {/* Swipe Container */}
        <div className="relative w-full max-w-[420px] aspect-[3/4] max-h-[819px] perspective-1000 mt-16 lg:mt-0">
          {/* Match Card */}
          <div className="absolute inset-0 glass-panel rounded-[24px] overflow-hidden flex flex-col glow-effect transform transition-transform duration-300 hover:scale-[1.02] cursor-grab active:cursor-grabbing">
            {/* Image Section */}
            <div className="relative h-[55%] w-full">
              <img alt="Profile Match" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3HkLzRm6s4KrjkfeUwVkG_RLEtM6XN8tsopqhO7VY6JgmMrBlOnWpBIlUTiBT0sJfifXbyFToE1UR9ZfPOitG2qsrXpXTbS2T4nWBhArjH5Zao0ZqvebUDg_oDOb_JozkV8oFJ7Iu4_JIfhDD80P4x56Tyv7BFzma22bBHZxvqBnWC3Eppk0-ADD239H9KuDKYnWgx7VBXcy0UujOoSQR7lNU3noRO6QukqDi49pEcnKo6fnG_8T4TgT8Bz80kL-vc2fl7NthfI"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              {/* Top Badges */}
              <div className="absolute top-sm left-sm flex gap-2">
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1 shadow-[0_0_10px_rgba(160,120,255,0.4)]">
                  <span className="material-symbols-outlined text-[14px]">search</span>
                  Looking for Team
                </span>
              </div>
            </div>
            {/* Content Section */}
            <div className="flex-1 p-md flex flex-col justify-end bg-gradient-to-t from-surface to-transparent relative -mt-16 z-10">
              <div className="mb-xs">
                <h2 className="font-h2 text-h2 text-on-background m-0 flex items-center gap-2">
                  Alex Chen, 22
                  <span className="material-symbols-outlined text-primary text-[20px]" title="Verified">verified</span>
                </h2>
                <p className="font-body-md text-body-md text-primary m-0 mt-1">Frontend Architect</p>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-md">
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>B.S. Computer Science, Stanford</span>
              </div>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-md">
                <span className="bg-surface-container text-primary border border-primary/20 px-3 py-1 rounded-full font-label-caps text-label-caps">React</span>
                <span className="bg-surface-container text-primary border border-primary/20 px-3 py-1 rounded-full font-label-caps text-label-caps">Three.js</span>
                <span className="bg-surface-container text-primary border border-primary/20 px-3 py-1 rounded-full font-label-caps text-label-caps">Tailwind</span>
              </div>
              {/* Bio (Scrollable if long) */}
              <div className="font-body-sm text-body-sm text-on-surface-variant overflow-y-auto max-h-[60px] pr-2">
                Building hyper-fast, accessible web experiences. Currently exploring WebGL and immersive 3D interfaces. Looking for a backend wizard to build the next big productivity tool at the upcoming hackathon.
              </div>
            </div>
          </div>
          
          {/* Action Buttons (Floating over card bottom) */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center items-center gap-md z-20">
            {/* Pass Button */}
            <button className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-error hover:border-error/50 hover:bg-error/10 transition-all duration-300 shadow-lg group">
              <span className="material-symbols-outlined text-[32px] group-active:scale-90 transition-transform">close</span>
            </button>
            {/* Super Match Button */}
            <button onClick={handleMatch} className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-tertiary hover:text-primary-container hover:border-primary-container/50 hover:bg-primary-container/10 transition-all duration-300 shadow-lg group -mt-4">
              <span className="material-symbols-outlined text-[28px] group-active:scale-90 transition-transform">star</span>
            </button>
            {/* Like Button */}
            <button onClick={handleMatch} className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-fixed-dim to-primary-container flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(208,188,255,0.4)] hover:shadow-[0_0_30px_rgba(208,188,255,0.6)] hover:brightness-110 transition-all duration-300 group">
              <span className="material-symbols-outlined text-[32px] group-active:scale-90 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
        </div>

        {/* Swipe Instructions (Desktop) */}
        <div className="hidden lg:flex absolute right-margin top-1/2 -translate-y-1/2 flex-col gap-sm text-on-surface-variant opacity-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center font-mono text-xs">←</div>
            <span className="font-body-sm text-body-sm">Pass</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center font-mono text-xs">→</div>
            <span className="font-body-sm text-body-sm">Like</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center font-mono text-xs">↑</div>
            <span className="font-body-sm text-body-sm">Super</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
