import { handleCors, handleRateLimiting } from "../api/middleware/middleware";

export const apiSecurity = async (req) => {
  const corsError = await handleCors(req);
  if (corsError) return corsError;

  const rateLimitError = handleRateLimiting(req);
  if (rateLimitError) return rateLimitError;

  return null;
};
