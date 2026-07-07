export const runCors = (req) => {
  const origin = req.headers.get("origin");
  const allowedOrigins = [process.env.NEXT_PUBLIC_REQUESTED_URL];

  const normalizedAllowedOrigins = allowedOrigins.map((o) =>
    o.replace(/\/$/, "")
  );

  const normalizedOrigin = origin ? origin.replace(/\/$/, "") : null;

  if (normalizedAllowedOrigins.includes(normalizedOrigin)) {
    return {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": normalizedOrigin, // Allow this specific origin
        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "3600",
      },
    };
  } else {
    return {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
