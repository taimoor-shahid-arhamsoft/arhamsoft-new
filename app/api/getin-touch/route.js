import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import sendEmail from "@/app/utils/email";
import { generateGetInTouchContent } from "../email-templates/get-in-touch-hire-dedicated";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    const clientIp = getClientIp(req);

    const {
      technology,
      name,
      email,
      phone,
      expertCount,
      message,
      requestFrom,
      reCaptcha
    } = await req.json();

    const isReCaptchaValid = await verifyReCaptcha(reCaptcha);
    if (!isReCaptchaValid) {
      return NextResponse.json(
        { success: false, recaptchaInvalid: true },
        { status: 400, headers: req.corsHeaders }
      );
    }

    const sanitizedData = {
      name: purify.sanitize(name),
      email: purify.sanitize(email),
      phone: purify.sanitize(phone),
      message: purify.sanitize(message),
    };

    let teams = "";
    if (technology.length) {
      teams = technology.length > 1 ? technology.slice(0, -1).join(", ") + " and " + technology[technology.length - 1] : technology[0];
    }
  
    const emailContent = generateGetInTouchContent({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      teams,
      expertCount,
      ipAddress: clientIp,
      requestFrom,
      message: sanitizedData.message,
    });

    await sendEmail({
      email: sanitizedData.email,
      subject: teams || "Hire Dedicated Resource",
      message: emailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to us. We have received your email, and one of our representatives will respond to you at the earliest opportunity.",
      },
      { status: 200, headers: req.corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500, headers: req.corsHeaders }
    );
  }
};
