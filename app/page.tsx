'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Mock database of registered users for the demo
const MOCK_REGISTERED_USERS = ['angelo@up.edu.ph', 'test@hackmatch.com'];

export default function WelcomePage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate database check delay
    setTimeout(() => {
      if (isLogin) {
        // LOGIN LOGIC: Check if user exists
        if (MOCK_REGISTERED_USERS.includes(email.toLowerCase())) {
          // Fetch persistent profile from Redis
          fetch(`/api/user/profile?email=${email.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
              if (data && data.name) {
                localStorage.setItem('hackmatch_user_profile', JSON.stringify(data));
              }
              router.push('/dashboard');
            })
            .catch(() => router.push('/dashboard'));
        } else {
          setError('Account not found. Mangyaring mag-Sign Up muna! 🇵🇭');
          setIsLoading(false);
        }
      } else {
        const newProfile = {
          name: fullName,
          university: university,
          course: course,
          email: email,
          interests: [],
          skills: [],
          role: '',
          isFirstTime: true
        };
        
        localStorage.setItem('hackmatch_user_profile', JSON.stringify(newProfile));
        
        // Sync to cloud immediately so friends can search for them
        fetch('/api/user/profile', {
          method: 'POST',
          body: JSON.stringify({ email: email, profile: newProfile }),
          headers: { 'Content-Type': 'application/json' }
        }).catch(err => console.error('Sign-up cloud sync failed:', err));

        MOCK_REGISTERED_USERS.push(email.toLowerCase());
        router.push('/onboarding');
      }
    }, 1500);
  };

  return (
    <div className="bg-[#000000] text-on-surface font-body-md min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      
      <main className="relative z-10 w-full max-w-[480px]">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white tracking-tighter mb-2">HackMatch</h1>
          <p className="text-[#94a3b8] uppercase tracking-[0.3em] text-[10px] font-bold">Engineering Elite • 🇵🇭</p>
        </div>

        <div className="glass-panel border border-white/[0.05] rounded-[32px] overflow-hidden shadow-2xl relative bg-[#0a0a0c]/80 backdrop-blur-3xl">
          <div className="p-8 md:p-10">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
              <p className="text-[#64748b] text-[14px]">
                {isLogin ? 'Sign in to find your next dream team.' : 'Join the elite community of Filipino student developers.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-error/10 border border-error/20 text-error text-[13px] py-3 px-4 rounded-xl animate-pulse flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Email Address</label>
                <input 
                  className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                  placeholder="name@university.edu.ph" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Full Name</label>
                    <input 
                      className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                      placeholder="e.g. Juan Dela Cruz" 
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">University</label>
                      <input 
                        className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                        placeholder="UP Diliman" 
                        type="text"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] ml-1">Course</label>
                      <input 
                        className="w-full bg-black/40 border border-white/[0.05] rounded-xl px-5 py-4 text-white font-body-sm focus:border-[#8b5cf6]/40 focus:bg-black/60 outline-none transition-all placeholder:text-white/10" 
                        placeholder="BS CS" 
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-[#8b5cf6] text-white text-[14px] font-bold flex items-center justify-center hover:brightness-110 shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Checking...
                  </div>
                ) : (
                  isLogin ? 'Login' : 'Create Account'
                )}
              </button>

              <div className="text-center mt-6">
                <p className="text-[13px] text-[#64748b]">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                    }}
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
