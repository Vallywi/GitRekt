'use client';

import AppLayout from '../../components/AppLayout';
import Link from 'next/link';

export default function DiscoverPage() {
  return (
    <AppLayout>
      <div className="max-w-container-max mx-auto px-sm md:px-margin py-lg md:py-xl mt-16 lg:mt-0">
        {/* Page Header & Search/Filter */}
        <div className="mb-lg space-y-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h2 className="font-h1 text-h1 text-on-surface mb-xs">Upcoming Hackathons</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Discover elite engineering challenges and form your ultimate squad.</p>
            </div>
          </div>
          
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-sm items-center bg-surface-container/50 backdrop-blur-md border border-white/5 rounded-xl p-xs shadow-lg">
            <div className="flex-1 w-full relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-transparent border-none text-on-surface font-body-md text-body-md pl-xl py-sm focus:ring-0 placeholder:text-on-surface-variant/50 focus:border-b focus:border-primary transition-colors outline-none rounded-none" placeholder="Search events, technologies, or locations..." type="text"/>
            </div>
            <div className="h-8 w-px bg-outline-variant/20 hidden md:block"></div>
            <div className="flex items-center gap-xs w-full md:w-auto overflow-x-auto custom-scrollbar pb-2 md:pb-0 px-sm md:px-0">
              <button className="flex items-center gap-1 px-sm py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps whitespace-nowrap hover:bg-primary/20 transition-colors">
                All Events
              </button>
              <button className="flex items-center gap-1 px-sm py-2 rounded-full bg-white/5 border border-white/5 text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-white/10 transition-colors">
                Web3
              </button>
              <button className="flex items-center gap-1 px-sm py-2 rounded-full bg-white/5 border border-white/5 text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-white/10 transition-colors">
                AI/ML
              </button>
              <button className="flex items-center gap-1 px-sm py-2 rounded-full bg-white/5 border border-white/5 text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-white/10 transition-colors">
                Fintech
              </button>
              <button className="flex items-center gap-1 px-sm py-2 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface font-label-caps text-label-caps whitespace-nowrap hover:text-primary hover:border-primary/50 transition-colors ml-auto">
                <span className="material-symbols-outlined text-[16px]">tune</span> Filters
              </button>
            </div>
          </div>
        </div>

        {/* Bento Grid - Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md">
          {/* Event Card 1 (Featured - spans 2 cols on lg) */}
          <article className="md:col-span-2 relative group rounded-2xl bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 flex flex-col min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
            <div className="relative h-48 w-full overflow-hidden shrink-0 z-10">
              <img alt="Cyberpunk server room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkCRw6fLSqxYRezfG7gtTUBql7HJkOxTMzChANwJe92YRRof_L1swJOQZfOp7loE0HchAZkcxLHsaOE5V-BDNIs1aQQbITmluttheDPCF0v-7ZjTsGWqHpyHTH0HRQvG8GsNn4fHiMa8KHtKezsKXK_DsJxeaTPi-memBPijX0GnFglOBf_66lmT7901tR39QC9eSnX47brFVH8arWrslbRMKDuUNmUWV---tnV6-uw3cZinTRBVQHDqCTBX-lrUZ1AnoQjza4Czg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              <div className="absolute top-sm right-sm bg-primary/90 text-on-primary font-label-caps text-label-caps px-sm py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span> Featured
              </div>
            </div>
            <div className="p-md flex flex-col flex-1 relative z-10">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <h3 className="font-h2 text-h2 text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Global AI Challenge 2024</h3>
                  <p className="font-mono text-mono text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_month</span> Oct 15 - 17
                    <span className="mx-2 opacity-50">|</span>
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Virtual / SF
                  </p>
                </div>
                <div className="text-right">
                  <span className="block font-h3 text-h3 text-primary">$100k</span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Prize Pool</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant/80 mb-md flex-1 line-clamp-2">
                Push the boundaries of foundational models. Build the next generation of autonomous agents and generative workflows in this intensive 48-hour sprint.
              </p>
              <div className="flex items-end justify-between mt-auto pt-md border-t border-outline-variant/10">
                <div className="flex flex-wrap gap-xs">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary border border-secondary/20 font-label-caps text-label-caps">LLMs</span>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary border border-secondary/20 font-label-caps text-label-caps">Python</span>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary border border-secondary/20 font-label-caps text-label-caps">PyTorch</span>
                </div>
                <Link href="/swipe" className="px-lg py-2 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps hover:brightness-110 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all">
                  Join Team
                </Link>
              </div>
            </div>
          </article>
          
          {/* Event Card 2 */}
          <article className="relative group rounded-2xl bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-[400px]">
            <div className="p-md flex flex-col flex-1 relative z-10">
              <div className="mb-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tertiary to-inverse-primary p-0.5 mb-sm">
                  <div className="w-full h-full bg-surface rounded-[10px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">currency_bitcoin</span>
                  </div>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">DeFi Summit Hack</h3>
                <p className="font-mono text-mono text-on-surface-variant flex items-center gap-1 text-[12px]">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span> Nov 02 - 05
                </p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant/80 mb-md flex-1">
                Architect zero-knowledge proofs and advanced smart contracts for the decentralized financial future.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">Solidity</span>
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">Rust</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-label-caps text-label-caps hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                  View Details
                </button>
              </div>
            </div>
          </article>
          
          {/* Event Card 3 */}
          <article className="relative group rounded-2xl bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-[400px]">
            <div className="relative h-32 w-full overflow-hidden shrink-0 z-10 border-b border-outline-variant/10">
              <img alt="Abstract data visualization" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHq0xyi9CBn5TCxc8woL739K4OQ2nUYNs3RgeyFdB9eALjd9irk7kby_k9CIF7VBDcS81_aPkW0NagzGZfivq331HeJ93KpdR5jrt8Q-Ho9jvF2YHVCQjTpN-uDu_rzEZdp0-vwGCpqNFZlIDkb06ksiLaoA51NFoUVh_G95kxXEPcYq63asVI8T6qrVi-mZEeuCFO3ZLHGeTfhFZMyhJXDftRXTq4p14-Qpq8eooYP3lPeS8DzQmXuZz_Q3_6yjiOLeYKk7XkBeU"/>
            </div>
            <div className="p-md flex flex-col flex-1 relative z-10">
              <div className="mb-sm">
                <h3 className="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">DataViz Mastery</h3>
                <p className="font-mono text-mono text-on-surface-variant flex items-center gap-1 text-[12px]">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span> Nov 12 - 14
                </p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant/80 mb-md flex-1">
                Transform complex datasets into interactive, high-performance visual narratives.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">D3.js</span>
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">WebGL</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-label-caps text-label-caps hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                  View Details
                </button>
              </div>
            </div>
          </article>
          
          {/* Event Card 4 */}
          <article className="relative group rounded-2xl bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-[400px]">
            <div className="p-md flex flex-col flex-1 relative z-10">
              <div className="mb-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-sm">
                  <div className="w-full h-full bg-surface rounded-[10px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">stadia_controller</span>
                  </div>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">XR Game Jam</h3>
                <p className="font-mono text-mono text-on-surface-variant flex items-center gap-1 text-[12px]">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span> Dec 01 - 03
                </p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant/80 mb-md flex-1">
                Build immersive cross-reality experiences. Pushing the limits of spatial computing.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-xs mb-md">
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">Unity</span>
                  <span className="px-3 py-1 rounded-full bg-surface-bright text-on-surface-variant border border-outline-variant/30 font-label-caps text-label-caps">C#</span>
                </div>
                <button className="w-full py-2 rounded-lg bg-surface border border-outline-variant/30 text-on-surface font-label-caps text-label-caps hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                  View Details
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </AppLayout>
  );
}
