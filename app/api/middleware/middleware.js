import { NextResponse } from "next/server";
import { contactFormLimiter } from "@/app/utils/rate-limiter";
import { runCors } from "@/app/utils/cors";

export const handleCors = async (req) => {
  const corsResponse = runCors(req);
  if (corsResponse.status !== 200) {
    return NextResponse.json(
      { message: "CORS policy violation" },
      { status: corsResponse.status, headers: corsResponse.headers }
    );
  }
  req.corsHeaders = corsResponse.headers;
  return null;
};

export const handleRateLimiting = (req) => {
  const rateLimitResponse = contactFormLimiter(req);
  if (rateLimitResponse) {
    return NextResponse.json(
      { message: rateLimitResponse.message },
      { status: rateLimitResponse.status }
    );
  }
  return null;
};
