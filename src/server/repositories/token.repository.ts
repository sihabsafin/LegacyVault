import { prisma } from "@/lib/db/prisma";

export const tokenRepository = {
  create(data: {
    userId: string;
    type: any;
    tokenHash: string;
    expiresAt: Date;
  }) {
    return prisma.token.create({
      data,
    });
  },

  findByHash(tokenHash: string) {
    return prisma.token.findFirst({
      where: {
        tokenHash,
      },
    });
  },
};