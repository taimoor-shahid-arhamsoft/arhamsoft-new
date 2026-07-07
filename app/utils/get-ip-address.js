export const getClientIp = (req) => {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  return xForwardedFor
    ? xForwardedFor.split(",")[0].trim()
    : "IP not available";
};
