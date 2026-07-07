// app/utils/rate-limiter.js
const rateLimitMap = new Map();

export const contactFormLimiter = (req) => {
  const xForwardedFor = req.headers["x-forwarded-for"];
  const ip = xForwardedFor ? xForwardedFor.split(",")[0] : "unknown";

  const limit = 2;
  const windowMs = 10 * 1000;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get(ip);

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    return {
      status: 429,
      message: "Too Many Requests",
    };
  }

  ipData.count += 1;
  return null;
};
