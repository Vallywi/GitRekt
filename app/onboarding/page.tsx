'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [selectedInterests, setSelectedInterests] = useState<string[]>(['AI/ML', 'FinTech', 'Gaming']);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const interests = ['AI/ML', 'Web3 & Crypto', 'FinTech', 'Social Good', 'Cybersecurity', 'Gaming', 'HealthTech', 'EdTech'];
  const roles = ['Frontend', 'Backend', 'Full Stack', 'UI/UX Design', 'Product Manager', 'Data Scientist', 'DevOps', 'Mobile Dev'];
  const skills = ['React', 'Python', 'Node.js', 'Figma', 'TypeScript', 'AWS', 'TensorFlow', 'PostgreSQL'];

  const toggleSelection = (item: string, list: string[], setList: (val: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.push('/');
    }
  };

  const currentOptions = step === 1 ? interests : step === 2 ? roles : skills;
  const currentSelections = step === 1 ? selectedInterests : step === 2 ? selectedRoles : selectedSkills;
  const currentSetSelection = step === 1 ? setSelectedInterests : step === 2 ? setSelectedRoles : setSelectedSkills;

  const stepTitle = step === 1 ? "Hackathon Categories" : step === 2 ? "Your Role" : "Your Skills";
  const stepDesc = step === 1 
    ? "Select the types of projects and industries that interest you most." 
    : step === 2 
    ? "What role do you usually take on in a team?" 
    : "Select the tools and languages you are proficient in.";

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-body-md text-body-md bg-abyss text-on-surface">
      {/* Ambient Illumination */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      
      <main className="w-full max-w-2xl px-margin md:px-0 relative z-10 flex flex-col items-center">
        {/* Brand Header */}
        <div className="mb-lg text-center">
          <h1 className="font-h1 text-h1 text-primary tracking-tighter mb-xs">HackMatch</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Engineering Elite</p>
        </div>

        {/* Glassmorphic Card */}
        <div className="glass-panel w-full rounded-xl p-md md:p-lg shadow-[0_0_40px_rgba(0,0,0,0.8)] relative bg-white/5 backdrop-blur-xl border border-white/15">
          {/* Progress Indicator */}
          <div className="w-full flex items-center justify-between mb-lg relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 -z-10 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-primary -z-10 -translate-y-1/2 shadow-[0_0_10px_rgba(208,188,255,0.5)] transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
            
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center gap-xs">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  s < step ? 'bg-primary/20 text-primary border border-primary/50' :
                  s === step ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(208,188,255,0.4)]' :
                  'bg-surface-variant text-on-surface-variant border border-outline-variant/50'
                }`}>
                  {s < step ? <span className="material-symbols-outlined text-sm">check</span> : s}
                </div>
                <span className={`font-label-caps text-label-caps ${s <= step ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {s === 1 ? 'Interests' : s === 2 ? 'Role' : s === 3 ? 'Skills' : 'Vibe'}
                </span>
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex flex-col gap-md">
            <div className="text-center">
              <h2 className="font-h2 text-h2 text-on-surface mb-xs">{stepTitle}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{stepDesc}</p>
            </div>

            {/* Skill Chips Container */}
            <div className="flex flex-wrap gap-sm justify-center py-sm">
              {currentOptions.map((item) => {
                const isActive = currentSelections.includes(item);
                return (
                  <button 
                    key={item}
                    onClick={() => toggleSelection(item, currentSelections, currentSetSelection as any)}
                    className={`rounded-full px-4 py-2 font-label-caps text-label-caps flex items-center gap-xs transition-all duration-200 ${
                      isActive 
                        ? 'bg-on-primary-container text-primary border border-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
                        : 'bg-on-tertiary-container text-primary border border-transparent hover:bg-on-primary-container'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {step === 1 && (
              <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 mt-sm">
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">First-time Hacker?</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Let us know if you're new to hackathons so we can match you with beginner-friendly teams.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-lg flex items-center justify-between pt-md border-t border-outline-variant/20">
            <button onClick={handleBack} className="btn-ghost border border-white/20 bg-transparent hover:bg-white/5 transition-all font-label-caps text-label-caps text-on-surface-variant px-md py-sm rounded-lg flex items-center gap-xs">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
              Back
            </button>
            <button onClick={handleNext} className="bg-gradient-to-r from-primary-container to-inverse-primary font-label-caps text-label-caps text-on-primary px-lg py-sm rounded-lg flex items-center gap-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:brightness-110 transition-all">
              Continue
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
