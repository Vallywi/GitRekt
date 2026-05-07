'use client';

import Link from 'next/link';

export default function MatchSuccessPage() {
  return (
    <div className="bg-abyss text-on-surface antialiased min-h-screen flex items-center justify-center overflow-hidden relative font-body-md">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]"></div>
      </div>
      
      {/* Confetti Particles (Static representation) */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full opacity-60 top-[20%] left-[30%] bg-primary"></div>
        <div className="absolute w-3 h-3 rounded-full opacity-60 top-[40%] left-[70%] bg-secondary"></div>
        <div className="absolute w-2 h-2 rounded-full opacity-60 top-[70%] left-[40%] bg-tertiary"></div>
        <div className="absolute w-2 h-2 opacity-60 top-[30%] left-[80%] bg-primary-container transform rotate-45"></div>
        <div className="absolute w-2 h-2 opacity-60 top-[60%] left-[20%] bg-secondary-container transform -rotate-12"></div>
        <div className="absolute w-2 h-2 rounded-full opacity-60 top-[80%] left-[60%] bg-primary"></div>
        <div className="absolute w-4 h-4 rounded-full opacity-60 top-[10%] left-[50%] bg-tertiary-container"></div>
      </div>
      
      {/* Match Modal Container */}
      <main className="relative z-20 w-full max-w-2xl px-sm md:px-margin">
        <div className="glass-panel rounded-2xl p-lg md:p-xl flex flex-col items-center text-center shadow-[0_0_60px_rgba(139,92,246,0.15)] relative overflow-hidden bg-surface/10 backdrop-blur-2xl border border-white/10">
          
          {/* Central Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(139,92,246,0)_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
          
          {/* Header */}
          <div className="relative z-10 mb-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-sm ring-1 ring-primary/30 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-xs tracking-tighter">It's a Match!</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">You and Alex have exceptional synergy.</p>
          </div>
          
          {/* Avatars & Compatibility */}
          <div className="relative z-10 flex items-center justify-center gap-xs md:gap-md w-full mb-lg">
            {/* User Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-outline-variant/30 glass-panel shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <img alt="Your profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn-4tyOpCEA1Y5C0L1PAHFj04rD6Rk3tyfCnGUCXI5kr7JPYkU6u0pWh9SUa0Cd57-aED6OrDnMqdRJ_ZEwo4us6dQgE83CLMN9Ea-nfySO2091mGH61YBManmHEIX2_j-jnl-GYqUMZ7AvxgB8Pf-BUskh5Ysp_g5mnFd5uRH-9G1Jf9nnntTLaZqIujNpASujE8J-bABqFuBA9sa7wBgBNWOGaFPaFs5siu39zPNr_kCH9t2y-LQyBV9dyQtc5GGun1zK6v0xew"/>
              </div>
            </div>
            {/* Compatibility Badge */}
            <div className="flex flex-col items-center justify-center z-20 -mx-4 md:-mx-8 mt-8">
              <div className="glass-panel rounded-full px-sm py-xs border border-primary/30 shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center gap-2 bg-surface/80">
                <span className="font-h3 text-h3 text-primary">98%</span>
                <span className="material-symbols-outlined text-primary text-sm">join_inner</span>
              </div>
            </div>
            {/* Match Avatar */}
            <div className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-outline-variant/30 glass-panel shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <img alt="Match profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAopfEt8g3MK7Z1crl5gsVUDopTo2_Dp9h8XHikCuxtxrxz_apCbGyAjnbME-pzCil3-HmqEYSh-BETD7dxQJs6W0fOAWN-UlOP3Jo75cBt5PMuQxjd5DgCyJVWgXudxlqCSpWHfF2stOalHUgnNIo8rsOxkQJtgqj16XQiEMJTj8-WCPQheUENHO2CY25UHq8m-T7TWruVN5XHUYRotjEUc4xGEixh80P6Okx2ziUzBVGYoxp9kzDg_f0M8tIxcM7eAXurTavqfqc"/>
              </div>
            </div>
          </div>
          
          {/* Shared Interests */}
          <div className="relative z-10 w-full mb-xl">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-md">Shared Technical Stack</p>
            <div className="flex flex-wrap justify-center gap-xs">
              <span className="px-sm py-xs rounded-full bg-secondary-container/40 text-on-secondary-container font-label-caps text-label-caps border border-secondary-container/50">React</span>
              <span className="px-sm py-xs rounded-full bg-secondary-container/40 text-on-secondary-container font-label-caps text-label-caps border border-secondary-container/50">Node.js</span>
              <span className="px-sm py-xs rounded-full bg-secondary-container/40 text-on-secondary-container font-label-caps text-label-caps border border-secondary-container/50">System Design</span>
              <span className="px-sm py-xs rounded-full bg-secondary-container/40 text-on-secondary-container font-label-caps text-label-caps border border-secondary-container/50">GraphQL</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="relative z-10 w-full flex flex-col gap-sm">
            <Link href="/messages" className="w-full py-md px-lg rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-h3 text-h3 flex items-center justify-center gap-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              Start Chat
            </Link>
            <div className="flex gap-sm w-full">
              <Link href="/dashboard" className="flex-1 py-sm px-md rounded-xl glass-panel text-on-surface font-body-md text-body-md flex items-center justify-center gap-xs hover:bg-white/10 transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined">group_add</span>
                Create Team
              </Link>
              <Link href="/swipe" className="flex-1 py-sm px-md rounded-xl glass-panel text-on-surface font-body-md text-body-md flex items-center justify-center gap-xs hover:bg-white/10 transition-colors border border-outline-variant/30">
                <span className="material-symbols-outlined">style</span>
                Keep Swiping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
