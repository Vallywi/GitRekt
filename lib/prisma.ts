import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaInstance: PrismaClient | undefined;

try {
  // Check if DATABASE_URL is present and not a placeholder
  const isDbConfigured = 
    process.env.DATABASE_URL && 
    !process.env.DATABASE_URL.includes('johndoe:randompassword') &&
    !process.env.DATABASE_URL.includes('localhost:5432');

  if (isDbConfigured || process.env.NODE_ENV === 'production') {
    prismaInstance =
      globalForPrisma.prisma ??
      new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
      });

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaInstance;
  } else {
    console.warn('⚠️ DATABASE_URL is not configured or using default placeholder. Prisma will run in mock mode.');
  }
} catch (error) {
  console.error('❌ Prisma initialization failed:', error);
}

// Export a proxy that warns or throws if the instance is missing
export const prisma = new Proxy({} as PrismaClient, {
  get: (target, prop) => {
    if (prismaInstance) {
      return (prismaInstance as unknown as Record<string, unknown>)[prop as string];
    }
    
    // In dev, we can return a function that returns null/empty or warns
    // instead of crashing the whole app immediately on import
    return () => {
      console.warn(`Prisma.${String(prop)} called but database is not connected.`);
      return null;
    };
  }
});
