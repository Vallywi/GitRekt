export interface UserProfile {
  id: string;
  role: string | null;
  skills: string[];
  // Other fields can be added
}

export function calculateCompatibility(user1: UserProfile, user2: UserProfile): number {
  let score = 0;

  // 1. Role Complementarity (Max 50 points)
  const complementMap: Record<string, string[]> = {
    'frontend': ['backend', 'fullstack', 'designer'],
    'backend': ['frontend', 'fullstack', 'designer'],
    'designer': ['frontend', 'fullstack'],
    'fullstack': ['frontend', 'backend', 'designer']
  };

  if (user1.role && user2.role) {
    if (complementMap[user1.role.toLowerCase()]?.includes(user2.role.toLowerCase())) {
      score += 40;
    }
    if (user1.role === user2.role) {
      score += 10; // Same roles can still collaborate but less "complementary"
    }
  }

  // 2. Skill Synergy (Max 30 points)
  const sharedSkills = user1.skills.filter(skill => user2.skills.includes(skill));
  score += Math.min(sharedSkills.length * 5, 30);

  // 3. Experience/Diversity bonus (Max 20 points)
  // This could be based on other factors like GitHub stats later
  score += 10; // Base baseline

  return Math.min(score, 100);
}
