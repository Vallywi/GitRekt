'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WelcomePage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#000000] text-on-surface font-body-md min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-full border border-white/[0.03] bg-white/[0.01] -z-10"></div>
      <div className="absolute top-[10%] right-[20%] w-32 h-20 bg-white/[0.02] border border-white/[0.05] rounded-xl rotate-12 -z-10 backdrop-blur-sm shadow-2xl"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-margin flex flex-col lg:flex-row items-center justify-between gap-xl">
        {/* Left side: Hero */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Logo Area */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-10 h-10 bg-[#1e1333] rounded-xl flex items-center justify-center border border-primary/10">
              <span className="material-symbols-outlined text-[#8b5cf6] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
            </div>
            <h1 className="text-[32px] font-bold text-white tracking-tight">HackMatch</h1>
          </div>
          
          <h2 className="text-[48px] md:text-[56px] font-bold text-white leading-[1.1] max-w-[600px]">
            Find Your Perfect <span className="text-[#dbb8ff]">Hackathon</span> <br className="hidden md:block" /> Team.
          </h2>
          
          <p className="text-[18px] text-on-surface-variant max-w-[580px] leading-[1.6] opacity-60">
            Swipe, match, and collaborate with student innovators. Build the <br className="hidden md:block" /> future, together.
          </p>
        </div>

        {/* Right side: Auth Card */}
        <div className="w-full max-w-[420px] relative group">
          {/* Subtle Outer Card Glow */}
          <div className="absolute -inset-[2px] bg-[#8b5cf6]/20 blur-xl rounded-[34px] -z-10 opacity-50"></div>
          
          <div className="p-10 rounded-[32px] shadow-2xl relative z-10 bg-[#0a0a0c]/90 backdrop-blur-3xl border border-[#ffffff]/[0.05] shadow-[0_0_40px_rgba(139,92,246,0.1)]">
            {/* Inner top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent"></div>
            
            <h3 className="text-2xl text-white mb-10 text-center font-bold tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/onboarding'); }}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Full Name</label>
                  <input 
                    className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                    placeholder="Enter your name" 
                    type="text"
                    required
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Email</label>
                <input 
                  className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                  placeholder="Enter your email" 
                  type="email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Password</label>
                <div className="relative">
                  <input 
                    className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10 pr-12" 
                    placeholder="Enter your password" 
                    type={showPassword ? 'text' : 'password'}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#8b5cf6] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">University</label>
                    <input 
                      className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                      placeholder="e.g. UP Diliman" 
                      type="text"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Course</label>
                    <input 
                      className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                      placeholder="e.g. BS Computer Science" 
                      type="text"
                      required
                    />
                  </div>
                </>
              )}

              <button type="submit" className="w-full py-4 rounded-full bg-[#8b5cf6] text-white text-[14px] font-bold flex items-center justify-center hover:brightness-110 shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-all mt-8">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>

              <div className="text-center mt-6">
                <p className="text-[13px] text-[#64748b]">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    type="button" 
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-[#8b5cf6] font-bold hover:underline transition-all"
                  >
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </div>

              <div className="flex items-center gap-4 py-2 mt-4">
                <div className="h-[1px] bg-white/[0.05] flex-1"></div>
                <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest">Or</span>
                <div className="h-[1px] bg-white/[0.05] flex-1"></div>
              </div>

              <button className="w-full py-4 rounded-full bg-[#1e1e24] border border-white/[0.05] text-white text-[13px] font-bold flex items-center justify-center gap-3 hover:bg-[#25252d] transition-all" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
