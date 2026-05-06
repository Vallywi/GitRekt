import { NextResponse } from 'next/server';

const MOCK_PROFILES = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Fullstack Engineer',
    bio: 'Looking for a frontend specialist to build an AI-powered dev tool. 3x Hackathon winner. I handle the heavy lifting on the API side.',
    skills: ['Rust', 'Python', 'React', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    bio: 'Passionate about creating accessible and beautiful developer experiences. Looking for a team that values design as much as performance.',
    skills: ['Figma', 'React', 'Motion', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Blockchain Developer',
    bio: 'Building the future of decentralized computing. Need a backend dev who knows their way around distributed systems.',
    skills: ['Solidity', 'Go', 'Foundry', 'Ethereum'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
  }
];

export async function GET() {
  return NextResponse.json(MOCK_PROFILES);
}
