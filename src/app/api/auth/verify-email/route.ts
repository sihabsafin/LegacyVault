import { NextRequest } from "next/server";

import {
  authService,
} from "@/server/services/auth.service";

import {
  successResponse,
  errorResponse,
} from "@/lib/api/response";

import {
  verifyTokenSchema,
} from "@/validators/token.validator";

export async function POST(
  req: NextRequest
) {
  try {
    const body =
      await req.json();

    const data =
      verifyTokenSchema.parse(
        body
      );

    await authService.verifyEmail(
      data.token
    );

    return successResponse(
      null,
      "Email verified"
    );
  } catch (error) {
    return errorResponse(
      error instanceof Error
        ? error.message
        : "Verification failed"
    );
  }
}