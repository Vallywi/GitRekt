import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export async function GET() {
  try {
    const emails = await redis.smembers('global_swipable_users');
    const profiles = [];

    for (const email of emails) {
      const profile = await redis.get(`user_profile:${email}`);
      if (profile) profiles.push(profile);
    }

    return NextResponse.json(profiles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch swipable users' }, { status: 500 });
  }
}
