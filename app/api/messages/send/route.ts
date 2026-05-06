import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { pusherServer } from '@/lib/pusher';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { prisma } = await import('@/lib/prisma');
    const { receiverId, content } = await req.json();
    const senderId = (session.user as any).id;

    let message;
    if (prisma) {
      // Save message to DB
      message = await prisma.message.create({
        data: {
          content,
          senderId,
          receiverId,
        },
        include: {
          sender: true
        }
      });
    } else {
      // Create a mock message if DB is unavailable
      message = {
        id: Date.now().toString(),
        content,
        senderId,
        receiverId,
        createdAt: new Date().toISOString(),
        sender: { name: session.user.name, image: session.user.image }
      };
    }

    // Trigger Pusher event
    if (pusherServer) {
      const channelName = [senderId, receiverId].sort().join('-');
      await pusherServer.trigger(channelName, 'new-message', message);
    }

    return NextResponse.json(message);
  } catch (error) {
    console.error('Send Message Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
