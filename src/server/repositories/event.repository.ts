import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";

export const eventRepository = {
  create(data: {
    userId: string;
    type: string;
    details?: Prisma.InputJsonValue;
  }) {
    return prisma.eventLog.create({
      data,
    });
  },
};