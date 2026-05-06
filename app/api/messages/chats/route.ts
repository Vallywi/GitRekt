import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const { prisma } = await import('@/lib/prisma');
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    try {
      if (!prisma || !userId) throw new Error('Database or session unavailable');

      // Fetch all matches that are ACCEPTED
      const matches = await prisma.match.findMany({
        where: {
          OR: [
            { user1Id: userId, status: 'ACCEPTED' },
            { user2Id: userId, status: 'ACCEPTED' }
          ]
        },
        include: {
          user1: true,
          user2: true,
        }
      });

      if (matches.length > 0) {
        const chats = matches.map((match: any) => {
          const otherUser = match.user1Id === userId ? match.user2 : match.user1;
          return {
            id: otherUser.id,
            name: otherUser.name,
            avatar: otherUser.image,
            status: 'Offline',
            lastMsg: 'Start a conversation!',
            time: '',
          };
        });
        return NextResponse.json(chats);
      }
    } catch (dbError) {
      console.error('Database connection failed for chats, using mock data:', dbError);
    }

    // Fallback mock chats
    return NextResponse.json([
      {
        id: '1',
        name: 'Sarah Chen',
        status: 'Online',
        lastMsg: "Hey! Let's talk about the AI project.",
        time: '12:45 PM',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
      }
    ]);
  } catch (error) {
    console.error('Fetch Chats Error:', error);
    return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 });
  }
}
