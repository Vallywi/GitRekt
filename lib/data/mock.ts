import { User, Team, Event } from '../types/hackmatch';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Alice Chen',
    bio: 'Full-stack dev loving React and Go. Seeking a team for AI hackathons.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    skills: ['React', 'TypeScript', 'Go', 'Next.js'],
    interests: ['AI', 'Sustainability', 'FinTech'],
  },
  {
    id: 'u2',
    name: 'Bob Smith',
    bio: 'Backend wizard specializing in Python and PostgreSQL. I build scalable systems.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    skills: ['Python', 'PostgreSQL', 'Docker', 'FastAPI'],
    interests: ['Infrastructure', 'Web3', 'Open Source'],
  },
  {
    id: 'u3',
    name: 'Charlie Davis',
    bio: 'UX/UI Designer with a passion for accessible design and rapid prototyping.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    skills: ['Figma', 'UI/UX', 'Tailwind CSS', 'Framer Motion'],
    interests: ['Design Systems', 'Social Impact', 'Gaming'],
  },
];

export const MOCK_TEAMS: Team[] = [
  {
    id: 't1',
    name: 'EcoTrackers',
    description: 'Building a carbon footprint tracking app for the GreenFuture hackathon.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=ET',
    memberIds: ['u1'],
    skillsNeeded: ['Python', 'Data Science', 'React'],
    eventId: 'e1',
  },
  {
    id: 't2',
    name: 'BlockBusters',
    description: 'Decentralized movie ticketing system. Looking for a frontend dev!',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=BB',
    memberIds: ['u2'],
    skillsNeeded: ['React', 'Solidity', 'Tailwind CSS'],
    eventId: 'e2',
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    name: 'GreenFuture Hack 2026',
    date: '2026-06-15',
    location: 'San Francisco, CA',
    description: 'Join us to build solutions for a greener world.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'e2',
    name: 'Web3 Summit Hackathon',
    date: '2026-07-22',
    location: 'London, UK',
    description: 'The premier event for decentralized technology builders.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400',
  },
];
