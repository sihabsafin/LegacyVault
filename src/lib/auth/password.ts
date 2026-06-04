import bcrypt from "bcryptjs";

import { AUTH_CONFIG } from "@/constants/auth";

export async function hashPassword(
  password: string
) {
  return bcrypt.hash(
    password,
    AUTH_CONFIG.BCRYPT_ROUNDS
  );
}

export async function verifyPassword(
  password: string,
  hash: string
) {
  return bcrypt.compare(password, hash);
}