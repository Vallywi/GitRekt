'use client';

import AppLayout from '../../components/AppLayout';

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="px-sm md:px-margin max-w-container-max mx-auto pb-32 lg:pb-margin mt-16 lg:mt-0 pt-lg">
        {/* Profile Header */}
        <section className="glass-panel rounded-2xl p-md md:p-lg flex flex-col md:flex-row gap-lg items-start md:items-center relative overflow-hidden mb-gutter glow-active">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-primary/30 flex-shrink-0 z-10 bg-surface">
            <img alt="Profile Image" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&q=80&w=300"/>
          </div>
          <div className="flex-1 z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="font-h1 text-h1 text-on-surface mb-1">Angelo Reyes</h2>
                <p className="font-h3 text-h3 text-primary">Full-Stack Architect</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => alert('Profile link copied! Share your Pinoy tech journey. 🇵🇭')}
                  className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary px-6 py-2 rounded-lg font-label-caps text-label-caps flex items-center gap-2 hover:brightness-110 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">share</span> Share Profile
                </button>
                <button 
                  onClick={() => alert('Opening Profile Editor...')}
                  className="glass-panel px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-on-surface">edit</span>
                </button>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-6">
              Building hyper-fast web apps for the local startup scene. Exploring modern UI/UX for Filipino-centric platforms. Looking for a backend lodi to build the next super-app. Obsessed with performance and clean architecture.
            </p>
            <div className="flex flex-wrap gap-4 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span> Manila, Philippines
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">school</span> UP Diliman
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">link</span> github.com/angelo-reyes
              </div>
            </div>
          </div>
        </section>

        {/* Grid Layout for Details */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
          {/* Left Column (Tech & Preferences) */}
          <div className="xl:col-span-1 flex flex-col gap-gutter">
            {/* Tech Stack */}
            <section className="glass-panel rounded-2xl p-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">code</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-primary/20">React</span>
                <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-primary/20">TypeScript</span>
                <span className="bg-primary-container/20 text-primary px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-primary/20">Next.js</span>
                <span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-outline-variant/30">Node.js</span>
                <span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-outline-variant/30">Taglish NLP</span>
                <span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-full font-label-caps text-label-caps border border-outline-variant/30">PostgreSQL</span>
              </div>
            </section>

            {/* Team Preferences */}
            <section className="glass-panel rounded-2xl p-md">
              <h3 className="font-h3 text-h3 text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">group</span> Ideal Team
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">design_services</span>
                  <div>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">UI/UX Designer</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Focus on Pinoy-centric aesthetics and accessibility.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">database</span>
                  <div>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">Backend Lodi</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Scaling systems for peak local traffic (Shopee/Lazada style).</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column (Hackathons & Achievements) */}
          <div className="xl:col-span-2 flex flex-col gap-gutter">
            {/* Past Hackathons Bento */}
            <section className="glass-panel rounded-2xl p-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">emoji_events</span> Pinoy Hack History
                </h3>
                <button className="font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="glass-panel bg-surface-container/30 rounded-xl p-4 border border-outline-variant/20 hover:border-primary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-label-caps text-label-caps text-secondary bg-secondary/10 px-2 py-1 rounded">1st Place</span>
                    <span className="font-mono text-mono text-on-surface-variant">2024</span>
                  </div>
                  <h4 className="font-h3 text-h3 text-on-surface mb-2">Manila AI Summit</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Built a real-time Taglish NLP pipeline for customer support automation.</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface flex items-center justify-center font-label-caps text-label-caps text-on-surface">You</div>
                      <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface overflow-hidden">
                        <img alt="Teammate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=100"/>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="glass-panel bg-surface-container/30 rounded-xl p-4 border border-outline-variant/20 hover:border-primary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">Finalist</span>
                    <span className="font-mono text-mono text-on-surface-variant">2023</span>
                  </div>
                  <h4 className="font-h3 text-h3 text-on-surface mb-2">Sari-Sari Digitalize</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Digitizing local mom-and-pop stores with offline-first inventory management.</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface flex items-center justify-center font-label-caps text-label-caps text-on-surface">You</div>
                      <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface overflow-hidden">
                        <img alt="Teammate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=100"/>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
