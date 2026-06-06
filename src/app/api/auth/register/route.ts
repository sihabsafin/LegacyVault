import { NextRequest } from "next/server";

import {
  registerSchema,
} from "@/validators/auth.validator";

import {
  authService,
} from "@/server/services/auth.service";

import {
  successResponse,
  errorResponse,
} from "@/lib/api/response";

export async function POST(
  req: NextRequest
) {
  try {
    const body =
      await req.json();

    const data =
      registerSchema.parse(body);

 const result =
  await authService.register(
    data
  );

return successResponse(
  {
    id: result.user.id,

    verifyToken:
      result.verifyToken,
  },

  "User registered"
);
  } catch (error) {
    return errorResponse(
      error instanceof Error
        ? error.message
        : "Something went wrong"
    );
  }
}