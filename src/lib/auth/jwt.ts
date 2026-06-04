import { SignJWT, jwtVerify } from "jose";

import { env } from "@/lib/env";

const secret = new TextEncoder().encode(
  env.JWT_SECRET
);

export async function createAccessToken(
  userId: string,
  email: string
) {
  return new SignJWT({
    userId,
    email,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(
  token: string
) {
  const result =
    await jwtVerify(token, secret);

  return result.payload;
}