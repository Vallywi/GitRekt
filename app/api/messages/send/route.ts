import Pusher from 'pusher';
import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || '',
  key: process.env.NEXT_PUBLIC_PUSHER_KEY || '',
  secret: process.env.PUSHER_SECRET || '',
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER || '',
  useTLS: true,
});

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export async function POST(request: Request) {
  try {
    const { chatId, message } = await request.json();

    if (!chatId || !message) {
      return NextResponse.json({ error: 'Missing chatId or message' }, { status: 400 });
    }

    // 1. Trigger Pusher event for real-time delivery
    await pusher.trigger(`chat-${chatId}`, 'new-message', message);

    // 2. Persist to Redis list for history
    await redis.rpush(`chat_history:${chatId}`, message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Pusher trigger error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
