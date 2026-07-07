import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import sendEmail from "@/app/utils/email";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { requestDemoFormContent } from "../email-templates/request-demo";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    const clientIp = getClientIp(req);

    const {
      name,
      email,
      contactNo,
      selectedOption,
      message,
      timezone,
      dateTime,
      requestFrom,
      reCaptcha,
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
      contactNo: purify.sanitize(contactNo),
      selectedOption: purify.sanitize(selectedOption),
      message: purify.sanitize(message),
      timezone: timezone
        ? {
            value: purify.sanitize(timezone.value),
            label: purify.sanitize(timezone.label),
            offset: timezone.offset || "",
            abbrev: purify.sanitize(timezone.abbrev) || "",
            altName: purify.sanitize(timezone.altName) || "",
          }
        : {},
      dateTime: purify.sanitize(dateTime),
    };

    const emailContent = requestDemoFormContent({
      name: sanitizedData.name,
      email: sanitizedData.email,
      contactNo: sanitizedData.contactNo,
      selectedOption: sanitizedData.selectedOption,
      message: sanitizedData.message,
      timezone: sanitizedData.timezone,
      dateTime: sanitizedData.dateTime,
      ipAddress: clientIp,
      requestFrom,
    });

    // Send email
    await sendEmail({
      email: sanitizedData.email,
      subject: "Request a Demo",
      message: emailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Demo requested successfully",
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
