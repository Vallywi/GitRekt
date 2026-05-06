'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Cpu, 
  Database, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  User,
  Globe
} from 'lucide-react';
import styles from './Onboarding.module.css';

const ROLES = [
  { id: 'frontend', icon: Code2, title: 'Frontend Developer', desc: 'React, Vue, Next.js, UI/UX implementation' },
  { id: 'backend', icon: Database, title: 'Backend Developer', desc: 'Node.js, Rust, Python, API Architecture' },
  { id: 'fullstack', icon: Layers, title: 'Fullstack Engineer', desc: 'The best of both worlds, end-to-end' },
  { id: 'designer', icon: Palette, title: 'UI/UX Designer', desc: 'Figma, Design Systems, Prototyping' },
];

const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Rust', 'Python', 'Figma', 
  'GraphQL', 'Docker', 'Kubernetes', 'Solidity', 'Go', 'Tailwind'
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const storedUsername = localStorage.getItem('hackmatch_username');
    if (!storedUsername) {
      router.push('/signin');
    }
  }, [router]);
  const [formData, setFormData] = useState({
    role: '',
    skills: [] as string[],
    bio: '',
    github: '',
    website: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const completeOnboarding = () => {
    // Save to localStorage
    localStorage.setItem('hackmatch_user', JSON.stringify(formData));
    router.push('/discover');
  };

  return (
    <main className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.step}
          >
            <h1 className={styles.title}>What is your <span className="text-gradient">Primary Role?</span></h1>
            <p className={styles.subtitle}>Select the role that best describes your hackathon expertise.</p>
            
            <div className={styles.roleGrid}>
              {ROLES.map((role) => (
                <button 
                  key={role.id}
                  className={`${styles.roleCard} ${formData.role === role.id ? styles.activeRole : ''}`}
                  onClick={() => {
                    setFormData({ ...formData, role: role.id });
                    setTimeout(nextStep, 300);
                  }}
                >
                  <role.icon size={32} />
                  <div className={styles.roleInfo}>
                    <h3>{role.title}</h3>
                    <p>{role.desc}</p>
                  </div>
                  {formData.role === role.id && <CheckCircle2 className={styles.check} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.step}
          >
            <h1 className={styles.title}>Show off your <span className="text-gradient">Stack</span></h1>
            <p className={styles.subtitle}>Choose at least 3 skills to help others find you.</p>
            
            <div className={styles.skillCloud}>
              {SKILLS.map((skill) => (
                <button 
                  key={skill}
                  className={`${styles.skillTag} ${formData.skills.includes(skill) ? styles.activeSkill : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className={styles.footer}>
              <button onClick={prevStep} className="btn-secondary"><ArrowLeft size={18} /> Back</button>
              <button 
                onClick={nextStep} 
                className="btn-primary" 
                disabled={formData.skills.length < 3}
              >
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.step}
          >
            <h1 className={styles.title}>Final <span className="text-gradient">Touches</span></h1>
            <p className={styles.subtitle}>Complete your profile to start matching.</p>
            
            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Tell us about yourself</label>
                <textarea 
                  placeholder="I'm a passionate engineer looking to build the next big thing in..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>

              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label><User size={16} /> GitHub Profile</label>
                  <input 
                    type="text" 
                    placeholder="github.com/username" 
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><Globe size={16} /> Website/Portfolio</label>
                  <input 
                    type="text" 
                    placeholder="portfolio.com" 
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <button onClick={prevStep} className="btn-secondary">Back</button>
              <button onClick={completeOnboarding} className="btn-primary">
                Launch Experience <CheckCircle2 size={18} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
