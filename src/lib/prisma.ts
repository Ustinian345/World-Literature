import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let _client: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (_client) return _client;
  if (globalForPrisma.prisma) {
    _client = globalForPrisma.prisma;
    return _client;
  }
  const url = process.env.DATABASE_URL || "file:./prisma/dev.db";
  _client = new PrismaClient({ datasourceUrl: url } as unknown as undefined);
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = _client;
  return _client;
}

// Lazy proxy: defers PrismaClient creation until first actual DB call
function makeLazyProxy(): PrismaClient {
  let real: PrismaClient | null = null;
  return new Proxy({} as PrismaClient, {
    get(_target, key: string | symbol) {
      if (!real) real = getPrismaClient();
      return (real as unknown as Record<string | symbol, unknown>)[key];
    },
  });
}

export const prisma = makeLazyProxy();
