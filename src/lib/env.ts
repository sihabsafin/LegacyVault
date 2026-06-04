import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "test",
    "production",
  ]),

  DATABASE_URL: z.string(),

  JWT_SECRET: z.string(),

  APP_URL: z.string(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,

  DATABASE_URL: process.env.DATABASE_URL,

  JWT_SECRET: process.env.JWT_SECRET,

  APP_URL: process.env.APP_URL,
});