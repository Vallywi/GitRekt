'use client';

import AppLayout from '../../components/AppLayout';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="p-margin md:p-xl max-w-container-max mx-auto w-full pb-32 mt-16 lg:mt-0">
        <header className="mb-lg">
          <h2 className="font-h1 text-h1 text-on-surface">Settings</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Manage your premium elite profile and preferences.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Navigation/Summary within content area (optional, for complex settings) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="glass-panel rounded-xl p-sm flex flex-col gap-2">
              <a className="text-primary font-body-sm p-2 rounded-lg bg-white/5 hover:text-primary transition-colors" href="#profile">Edit Profile</a>
              <a className="text-on-surface-variant font-body-sm p-2 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="#security">Security & Password</a>
              <a className="text-on-surface-variant font-body-sm p-2 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="#notifications">Notifications</a>
              <a className="text-on-surface-variant font-body-sm p-2 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="#privacy">Privacy</a>
            </div>

            <div className="glass-panel rounded-xl p-md mt-4 flex items-center justify-between group cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">dark_mode</span>
                <span className="font-body-md text-on-surface">Theme</span>
              </div>
              <div className="w-12 h-6 bg-surface-container-highest rounded-full p-1 relative flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full absolute right-1 shadow-[0_0_10px_rgba(208,188,255,0.8)]"></div>
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 text-error hover:text-error-container font-label-caps text-label-caps transition-colors p-2">
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </div>

          {/* Right Column: Forms */}
          <div className="lg:col-span-9 flex flex-col gap-gutter">
            {/* Profile Settings */}
            <section className="glass-panel rounded-xl p-md md:p-lg" id="profile">
              <h3 className="font-h3 text-h3 text-on-surface border-b border-white/10 pb-4 mb-6">Edit Profile</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="relative group cursor-pointer shrink-0">
                  <img alt="User Avatar" className="w-24 h-24 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3FLqY0D99DOxlePOFL1Keg7aHiSd1yQ0C10tQ2eRWYO2dZb_-DWqXbn9f37o1yBiVsL0T-iJxH6FR0rf7DbF5XpQH0SHCT9nQmgPiBuUi0avSFf_GvECGVu4ek5f4NjTUwCsxkc-x6JUV5NyO6RGw3SiL4E8n8Bg_a4nMXTZNPzshnBYHPe35ZPI9sbTXnIyhDGfDaopedGGYUPkbJ3mKkZ45T_mIX21wLs2bw6MC7U0wOUkgINBdho91yTI5VBHcTN0YSd3IDoU"/>
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                </div>

                <div className="flex-1 w-full space-y-4">
                  <div>
                    <label className="block font-label-caps text-label-caps text-outline mb-2">Display Name</label>
                    <input className="w-full bg-white/5 border-b border-outline/30 text-on-surface font-body-md py-2 px-3 focus:outline-none focus:bg-white/10 input-focus-border transition-all" type="text" defaultValue="Alex Vance"/>
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-outline mb-2">Headline</label>
                    <input className="w-full bg-white/5 border-b border-outline/30 text-on-surface font-body-md py-2 px-3 focus:outline-none focus:bg-white/10 input-focus-border transition-all" type="text" defaultValue="Senior Backend Engineer @ Neura"/>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">Bio</label>
                  <textarea className="w-full bg-white/5 border border-outline/20 rounded-lg text-on-surface font-body-sm p-3 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(208,188,255,0.1)] transition-all resize-none" rows={3} defaultValue="Specializing in distributed systems and high-frequency trading infrastructure. Looking for ambitious co-founders."></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-primary-container to-inverse-primary text-white font-label-caps text-label-caps py-2 px-6 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">Save Changes</button>
              </div>
            </section>

            {/* Security Settings */}
            <section className="glass-panel rounded-xl p-md md:p-lg" id="security">
              <h3 className="font-h3 text-h3 text-on-surface border-b border-white/10 pb-4 mb-6">Security</h3>
              <div className="space-y-6">
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">Current Password</label>
                  <input className="w-full max-w-md bg-white/5 border-b border-outline/30 text-on-surface font-body-md py-2 px-3 focus:outline-none focus:bg-white/10 input-focus-border transition-all" placeholder="••••••••" type="password"/>
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-outline mb-2">New Password</label>
                  <input className="w-full max-w-md bg-white/5 border-b border-outline/30 text-on-surface font-body-md py-2 px-3 focus:outline-none focus:bg-white/10 input-focus-border transition-all" placeholder="••••••••" type="password"/>
                </div>
                <div>
                  <button className="border border-white/20 text-on-surface font-label-caps text-label-caps py-2 px-6 rounded-lg hover:bg-white/5 hover:border-primary/50 transition-all">Update Password</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
