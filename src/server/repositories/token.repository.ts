import { TokenType } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";

export const tokenRepository = {
  create(data: {
    userId: string;
    type: TokenType;
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

  findValidToken(tokenHash: string) {
    return prisma.token.findFirst({
      where: {
        tokenHash,
        usedAt: null,
      },
    });
  },

  markAsUsed(id: string) {
    return prisma.token.update({
      where: {
        id,
      },
      data: {
        usedAt: new Date(),
      },
    });
  },
};