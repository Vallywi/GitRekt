import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { calculateCompatibility, UserProfile } from '@/lib/scoring';

export async function GET() {
  try {
    // Dynamic import to prevent top-level crashes if Prisma is misconfigured
    const { prisma } = await import('@/lib/prisma');
    const session = await getServerSession(authOptions);
    
    // Check if we can connect to the database
    let profiles = [];
    try {
      if (!prisma) throw new Error('Prisma not initialized');
      
      const currentUser = session?.user ? await prisma.user.findUnique({
        where: { id: session.user.id }
      }) : null;
      
      profiles = await prisma.user.findMany({
        where: {
          id: { not: currentUser?.id },
          role: { not: null },
        },
        take: 20,
      });

      if (profiles.length > 0) {
        const profilesWithScores = profiles.map((profile: any) => ({
          ...profile,
          compatibility: currentUser ? calculateCompatibility(currentUser as unknown as UserProfile, profile as unknown as UserProfile) : 85
        })).sort((a: any, b: any) => b.compatibility - a.compatibility);
        
        return NextResponse.json(profilesWithScores);
      }
    } catch (dbError) {
      console.error('Database connection failed, using mock data:', dbError);
    }

    // Fallback to high-quality mock data if DB is empty or fails
    return NextResponse.json([
      {
        id: 'mock-1',
        name: 'Alex Rivera',
        role: 'Fullstack Engineer',
        bio: 'Looking for a frontend specialist to build an AI-powered dev tool. 3x Hackathon winner.',
        skills: ['Rust', 'Python', 'React', 'Kubernetes'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        compatibility: 92
      },
      {
        id: 'mock-2',
        name: 'Sarah Chen',
        role: 'UI/UX Designer',
        bio: 'Passionate about creating accessible and beautiful developer experiences.',
        skills: ['Figma', 'React', 'Motion', 'Design Systems'],
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
        compatibility: 88
      }
    ]);
  } catch (error) {
    console.error('Discover API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch matches' }, { status: 500 });
  }
}
