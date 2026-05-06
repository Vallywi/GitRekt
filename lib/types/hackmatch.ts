export type Skill = string;

export interface User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  skills: Skill[];
  interests: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  avatar: string;
  memberIds: string[];
  skillsNeeded: Skill[];
  eventId?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export type TargetType = 'USER' | 'TEAM';

export interface Swipe {
  id: string;
  actorId: string;
  targetId: string;
  targetType: TargetType;
  direction: 'LIKE' | 'PASS';
}

export interface Match {
  id: string;
  userId: string;
  targetId: string;
  targetType: TargetType;
  timestamp: number;
}
