import AppLayout from '../../components/AppLayout';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-container-max mx-auto px-margin lg:px-margin pt-xl lg:pt-margin pb-xl min-h-screen flex flex-col gap-gutter">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-sm mt-16 lg:mt-0">
          <div>
            <h2 className="font-h1 text-h1 text-primary-fixed">Team Nexus</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Managing Team 'Quantum Leaps' for Global AI Hack 2024</p>
          </div>
          <div className="flex gap-sm">
            <button className="glass-panel text-primary font-label-caps text-label-caps px-sm py-xs rounded-full flex items-center gap-xs glow-effect transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-[16px]">edit</span> Edit Team
            </button>
            <button className="bg-gradient-to-br from-primary-fixed-dim to-primary-container text-on-primary-container font-label-caps text-label-caps px-md py-xs rounded-full flex items-center gap-xs transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <span className="material-symbols-outlined text-[16px]">add</span> Invite Member
            </button>
          </div>
        </div>

        {/* Main Dashboard Grid (Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Roster Section (Spans 8 cols) */}
          <div className="md:col-span-8 glass-panel rounded-xl p-md flex flex-col gap-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            <div className="flex justify-between items-center border-b border-white/10 pb-sm">
              <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">groups</span> Active Roster
              </h3>
              <span className="font-mono text-mono text-primary bg-primary/10 px-xs py-base rounded-md">3/4 Members</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {/* Member Card 1 */}
              <div className="glass-panel rounded-lg p-sm flex items-center gap-sm transition-all cursor-pointer border border-white/5 hover:border-primary/50 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img alt="Team Lead Avatar" className="w-12 h-12 rounded-full border-2 border-primary object-cover z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2-FJ5YJOgy9en3pPwDEB-zAD8neelxraY-YePQRoA0I9xKAy0zIgQ_RtN3ZMYwyVIkVpJrZvxOGXbm75OPmHT0w2tnO7aN1qfwGfcJ5fAlSaV0lczSCfmsORyt04IkW0_XSpzqLEazMLJ7xo9pAYfekmZro_ooxRGIMOfHdkZhvpIkHH_J203ApqPsUcNfq5ljjN37mN7_mumMkZIxspqyRfb3fqCbHDCgJZ8RsHudb_ItUuOse8ruzXyV53oOAtejSIhS5QFsUI"/>
                <div className="flex-1 z-10">
                  <h4 className="font-body-md text-body-md font-semibold text-primary-fixed-dim">Alex Rivera</h4>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Full Stack / AI</p>
                </div>
                <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 z-10">star</span>
              </div>
              {/* Member Card 2 */}
              <div className="glass-panel rounded-lg p-sm flex items-center gap-sm transition-all cursor-pointer border border-white/5 hover:border-primary/50 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img alt="Frontend Avatar" className="w-12 h-12 rounded-full border-2 border-surface-variant object-cover z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7IJpujrOR7L6QTx7_ZOWWOBA11BcaA9fGkD4QboEwbuLt4yuLDXANERKGeuypAlDRbfyrzowxz8K22pT8Ng6E98l583g8HHKxHms_WJ5K8yM_aJD9j1poVS5k1m45XltovUxfwLqsytC3ye_p2PX2sgb455AR70eTVHIXtKG5iVDJYVUUR01OzbGqWfTjwv_p5g6vIf_WDEaf_D8UE9SMBcQPcGiQfIT_5HoAAwyAqb8erBwQy9CsRbq-nLvWltOwhi_FTvzb7wA"/>
                <div className="flex-1 z-10">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">Sarah Chen</h4>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Frontend React</p>
                </div>
              </div>
              {/* Member Card 3 */}
              <div className="glass-panel rounded-lg p-sm flex items-center gap-sm transition-all cursor-pointer border border-white/5 hover:border-primary/50 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img alt="Backend Avatar" className="w-12 h-12 rounded-full border-2 border-surface-variant object-cover z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-BvXv3k2uVR2-amsGAkREKkkQBk8FasGzCxzUxIJuw0syvE9urUFw6dINKiOivh7JfRBinBAlzz4vs7M6U57esnY38jDvt_XEwqHDDCA2Ngz4F2wKlYdKxul5LbexEq9IYjQTQpzBDlUlqmLJT30U8uD5-srXZiFIl70vCiu_Qeyhi3hm5qJ4la3GXbmaN4mu3c2uoShPQvfizyfrEUcBki4R0nGrhusX48jaeg4MQV2ojSDrFRhOBCD6GbKFDpIpAsmWuyq3k1E"/>
                <div className="flex-1 z-10">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface">Marcus Thorne</h4>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Systems Architecture</p>
                </div>
              </div>
              {/* Missing Role Indicator */}
              <div className="glass-panel rounded-lg p-sm flex items-center gap-sm border border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center bg-surface">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body-md text-body-md font-semibold text-primary/70 group-hover:text-primary transition-colors">Missing Role</h4>
                  <p className="font-label-caps text-label-caps text-secondary-fixed-dim">UX/UI Designer needed</p>
                </div>
                <button className="bg-primary-container text-on-primary-container text-xs px-2 py-1 rounded">Find</button>
              </div>
            </div>
          </div>

          {/* Chemistry & Event Info (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            {/* Team Chemistry Meter */}
            <div className="glass-panel rounded-xl p-md flex flex-col items-center justify-center relative transition-all min-h-[240px] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant absolute top-md left-md">Team Chemistry</h3>
              <div className="relative w-32 h-32 mt-sm flex items-center justify-center">
                {/* Conic Gradient Meter */}
                <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: 'conic-gradient(from 180deg, #d0bcff 0%, #a078ff 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 100%)' }}></div>
                <div className="absolute inset-1 rounded-full bg-surface-container flex items-center justify-center flex-col z-10 border border-white/5">
                  <span className="font-h2 text-h2 text-primary-fixed leading-none">75<span className="text-body-sm">%</span></span>
                  <span className="font-label-caps text-label-caps text-outline text-[10px]">Synergy</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-center text-on-surface-variant mt-md">High technical overlap. Consider adding design expertise to balance.</p>
            </div>

            {/* Event Details */}
            <div className="glass-panel rounded-xl p-md flex flex-col gap-sm relative overflow-hidden group border border-primary/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-full blur-[40px] -z-10 group-hover:bg-primary-container/30 transition-colors"></div>
              <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary-fixed-dim">rocket_launch</span> Global AI Hack
              </h3>
              <div className="flex flex-col gap-xs mt-xs">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-mono text-on-surface-variant">Status</span>
                  <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Registration Open</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-mono text-on-surface-variant">Starts In</span>
                  <span className="font-mono text-mono text-on-surface">14d 08h 22m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-mono text-on-surface-variant">Prize Pool</span>
                  <span className="font-mono text-mono text-secondary-fixed-dim">$50,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Task List (Spans full width below) */}
          <div className="md:col-span-12 glass-panel rounded-xl p-md flex flex-col gap-md">
            <div className="flex justify-between items-center border-b border-white/10 pb-sm">
              <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">checklist</span> Objective Queue
              </h3>
              <button className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1 font-label-caps text-label-caps">
                <span className="material-symbols-outlined text-[16px]">add_task</span> Add Task
              </button>
            </div>
            <div className="flex flex-col gap-xs">
              {/* Task Item */}
              <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-white/5 transition-colors group">
                <button className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center text-transparent hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </button>
                <div className="flex-1">
                  <p className="font-body-md text-body-md text-on-surface">Finalize API Architecture Schema</p>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="font-label-caps text-label-caps px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant border border-outline/20">Backend</span>
                  <img alt="Assignee" className="w-6 h-6 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8ttelslUWO3mjlmuA0Eq6tJFrKB7i-ECy8itadut2eUWIJ-Kr3ZrlA3IVcNvWbl4oILHx2zSef9DOBVW8Ip8Je1xxm0eJ7FtDww5mfzOPw3XnA9YC1i_VPhFgXa2BP-isP69j1PMNmZS4t-WrCQVz_gKh2gN1yCEBBB8pULRHFZXwLqM_OLaWTFeDZTrc1UftCCImZ8VRu7mA4I0Q_TYK5I7V2Cg1aNiPmy36O_gqTwxGgv0ZaQzpiEL4O8MCfmDhjmWBkPA2RI"/>
                </div>
              </div>
              {/* Task Item */}
              <div className="flex items-center gap-sm p-sm rounded-lg hover:bg-white/5 transition-colors group">
                <button className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center text-transparent hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </button>
                <div className="flex-1">
                  <p className="font-body-md text-body-md text-on-surface">Mockup primary user flow screens</p>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="font-label-caps text-label-caps px-2 py-1 rounded-full bg-error-container/20 text-error border border-error/20 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">warning</span> Unassigned</span>
                </div>
              </div>
              {/* Completed Task Item */}
              <div className="flex items-center gap-sm p-sm rounded-lg opacity-50">
                <button className="w-5 h-5 rounded border border-primary bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </button>
                <div className="flex-1">
                  <p className="font-body-md text-body-md text-outline line-through">Brainstorm project name and repository setup</p>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="font-label-caps text-label-caps px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant border border-outline/20">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
