import { prisma } from "@/lib/db/prisma";

export const eventRepository = {
  create(data: {
    userId: string;
    type: string;
    details?: any;
  }) {
    return prisma.eventLog.create({
      data,
    });
  },
};