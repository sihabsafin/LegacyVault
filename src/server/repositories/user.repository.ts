import { prisma } from "@/lib/db/prisma";

export const userRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  create(data: {
    name?: string;

    email: string;

    passwordHash: string;
  }) {
    return prisma.user.create({
      data,
    });
  },

  verifyEmail(id: string) {
    return prisma.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: true,
      },
    });
  },
};