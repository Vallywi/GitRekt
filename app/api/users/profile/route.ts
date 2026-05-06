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

    const data = await req.json();
    const userId = session.user.id;

    if (!userId) {
      return NextResponse.json({ error: 'User ID missing in session' }, { status: 400 });
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          role: data.role,
          skills: data.skills,
          bio: data.bio,
          github: data.github,
          website: data.website,
        },
      });

      return NextResponse.json(updatedUser);
    } catch (dbError) {
      console.error('Database Error in Profile Update:', dbError);
      return NextResponse.json({ 
        error: 'Database connection issue. Profile could not be saved.',
        mock: true 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Profile Update Error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
