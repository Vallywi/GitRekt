'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-abyss text-on-surface font-body-md antialiased min-h-screen flex overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Ambient Illumination */}
      <div className="fixed inset-0 pointer-events-none z-0 radial-glow" style={{ background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.15), transparent 60%)' }}></div>
      
      {/* SideNavBar (Desktop) */}
      <nav className="hidden lg:flex flex-col h-screen p-sm fixed left-0 top-0 z-40 bg-surface/5 backdrop-blur-2xl border-r border-outline-variant/10 shadow-2xl w-64">
        <div className="flex items-center gap-xs mb-lg px-xs">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <div>
            <h1 className="font-h3 text-h3 text-primary tracking-tighter">HackMatch</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Engineering Elite</p>
          </div>
        </div>
        <div className="flex-1 space-y-xs">
          <Link href="/discover" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/discover' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary group'}`}>
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={pathname === '/discover' ? { fontVariationSettings: "'FILL' 1" } : {}}>explore</span>
            <span>Discover</span>
          </Link>
          <Link href="/swipe" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/swipe' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary group'}`}>
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={pathname === '/swipe' ? { fontVariationSettings: "'FILL' 1" } : {}}>groups</span>
            <span>Swipe</span>
          </Link>
          <Link href="/dashboard" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/dashboard' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary group'}`}>
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={pathname === '/dashboard' ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link href="/messages" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/messages' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary group'}`}>
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={pathname === '/messages' ? { fontVariationSettings: "'FILL' 1" } : {}}>chat</span>
            <span>Messages</span>
          </Link>
          <Link href="/profile" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/profile' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary group'}`}>
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={pathname === '/profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person_outline</span>
            <span>Profile</span>
          </Link>
        </div>
        <div className="mt-auto space-y-xs">
          <Link href="/swipe" className="block w-full bg-gradient-to-br from-primary-fixed-dim to-primary-container text-on-primary-container font-label-caps text-label-caps py-sm rounded-xl mb-md transition-all hover:brightness-110 text-center">Start Swiping</Link>
          <Link href="/settings" className={`flex items-center gap-xs p-sm font-label-caps text-label-caps rounded-xl transition-all ${pathname === '/settings' ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(208,188,255,0.3)] duration-200' : 'text-on-surface-variant hover:bg-white/5 hover:text-primary'}`}>
            <span className="material-symbols-outlined" style={pathname === '/settings' ? { fontVariationSettings: "'FILL' 1" } : {}}>settings</span>
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 lg:ml-64 relative z-10 w-full pb-24 lg:pb-0">
        {/* TopNavBar (Mobile only) */}
        <header className="lg:hidden fixed top-0 w-full z-50 flex justify-between items-center px-margin py-xs max-w-container-max mx-auto bg-surface/10 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
          <div className="text-h3 font-h3 font-bold text-primary">HackMatch</div>
          <div className="flex gap-sm">
            <button className="text-primary hover:text-primary-container transition-colors duration-300 scale-95 active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link href="/messages" className="text-primary hover:text-primary-container transition-colors duration-300 scale-95 active:scale-90">
              <span className="material-symbols-outlined">forum</span>
            </Link>
            <img alt="User profile photo" className="w-8 h-8 rounded-full border border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaT2MjTX9kavsUa1c_a1D4f4Ki7aJUFiUrnlrle7SePm5JvuQNRuPk-bCoS0nKLjhP2CAstY2GzjXrmcxbBTrXsvXeygqLQ4V1ylPDEci-0TsF2aTTJHGQW-iQiI6Q85O6tn4b5S4RcPzRvmQ62hu-9MmxxPGcZRUsOla9sPIoKki7PfFIjlxF9JQlR8FLiF2fddXqkpJjjqKAmblt5mzKLSE7dlHuqIY-bdAau8vBpZi2cNYRAlj0SmVTvz28WYJwxEfyXxhOCLo"/>
          </div>
        </header>
        
        {children}
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm pb-8 pt-xs bg-surface/20 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-xl">
        <Link href="/discover" className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${pathname === '/discover' ? 'text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined" style={pathname === '/discover' ? { fontVariationSettings: "'FILL' 1" } : {}}>search</span>
          <span>Explore</span>
        </Link>
        <Link href="/swipe" className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${pathname === '/swipe' ? 'text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined" style={pathname === '/swipe' ? { fontVariationSettings: "'FILL' 1" } : {}}>style</span>
          <span>Match</span>
        </Link>
        <Link href="/dashboard" className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${pathname === '/dashboard' ? 'text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined" style={pathname === '/dashboard' ? { fontVariationSettings: "'FILL' 1" } : {}}>rocket_launch</span>
          <span>Teams</span>
        </Link>
        <Link href="/messages" className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${pathname === '/messages' ? 'text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined" style={pathname === '/messages' ? { fontVariationSettings: "'FILL' 1" } : {}}>forum</span>
          <span>Chat</span>
        </Link>
        <Link href="/profile" className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${pathname === '/profile' ? 'text-primary drop-shadow-[0_0_8px_rgba(208,188,255,0.6)] scale-110' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined" style={pathname === '/profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person_outline</span>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
