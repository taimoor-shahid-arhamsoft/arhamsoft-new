import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { validateContactFormInput } from "../validations/validation";
import sendEmail from "@/app/utils/email";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { generateSupportEmailContent } from "../email-templates/contactus";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    const clientIp = getClientIp(req);

    const {
      subject,
      name,
      email,
      phone,
      company,
      message,
      requestFrom,
      reCaptcha,
    } = await req.json();

    const isReCaptchaValid = await verifyReCaptcha(reCaptcha);
    if (!isReCaptchaValid) {
      return NextResponse.json(
        { success: false , recaptchaInvalid: true},
        { status: 400, headers: req.corsHeaders }
      );
    }
    const sanitizedData = {
      name: purify.sanitize(name),
      email: purify.sanitize(email),
      phone: purify.sanitize(phone),
      company: purify.sanitize(company),
      message: purify.sanitize(message),
    };

    const { error } = validateContactFormInput(sanitizedData);
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400, headers }
      );
    }

    const emailContent = generateSupportEmailContent({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      company: sanitizedData.company,
      ipAddress: clientIp,
      requestFrom,
      message: sanitizedData.message,
    });

    await sendEmail({
      email: sanitizedData.email,
      subject,
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
