import {
  hashPassword,
} from "@/lib/auth/password";

import {
  userRepository,
} from "@/server/repositories/user.repository";

import {
  tokenRepository,
} from "@/server/repositories/token.repository";

import {
  eventRepository,
} from "@/server/repositories/event.repository";

import {
  generateToken,
} from "./token.service";

import { TokenType }
from "@prisma/client";

export const authService = {
  async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const existingUser =
      await userRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new Error(
        "Email already exists"
      );
    }

    const passwordHash =
      await hashPassword(
        data.password
      );

    const user =
      await userRepository.create({
        name: data.name,
        email: data.email,
        passwordHash,
      });

    const verifyToken =
      generateToken();

    await tokenRepository.create({
      userId: user.id,

      type:
        TokenType.EMAIL_VERIFY,

      tokenHash:
        verifyToken,

      expiresAt:
        new Date(
          Date.now() +
          1000 *
          60 *
          60 *
          48
        ),
    });

    await eventRepository.create({
      userId: user.id,

      type:
        "USER_REGISTERED",
    });

    return {
      user,
      verifyToken,
    };
  },
};