import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { targetUserId, direction } = await req.json();
    const currentUserId = session.user.id;

    if (direction === 'left') {
      // Record rejection (optional, depending on if you want to store "left" swipes)
      return NextResponse.json({ status: 'ignored' });
    }

    // Check if the target user has swiped right on the current user
    // In a full implementation, we'd have a 'Swipes' table. 
    // For this prototype, we'll check if a 'PENDING' match already exists where target is user1.
    
    const existingMatch = await prisma.match.findFirst({
      where: {
        user1Id: targetUserId,
        user2Id: currentUserId,
        status: 'PENDING'
      }
    });

    if (existingMatch) {
      // It's a match!
      const updatedMatch = await prisma.match.update({
        where: { id: existingMatch.id },
        data: { status: 'ACCEPTED' }
      });
      
      // Here we could trigger a Pusher notification
      
      return NextResponse.json({ status: 'match', matchId: updatedMatch.id });
    } else {
      // Create a pending match (current user swiped right)
      // Check if we already swiped right
      const alreadySwiped = await prisma.match.findFirst({
        where: {
          user1Id: currentUserId,
          user2Id: targetUserId
        }
      });

      if (!alreadySwiped) {
        await prisma.match.create({
          data: {
            user1Id: currentUserId,
            user2Id: targetUserId,
            status: 'PENDING'
          }
        });
      }
      
      return NextResponse.json({ status: 'pending' });
    }
  } catch (error) {
    console.error('Swipe API Error:', error);
    return NextResponse.json({ error: 'Failed to process swipe' }, { status: 500 });
  }
}
