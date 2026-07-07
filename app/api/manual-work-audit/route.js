import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import sendEmail from "@/app/utils/email";
import { generateManualWorkAuditEmailContent } from "../email-templates/manual-work-audit";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";
import { validateManualWorkAuditInput } from "../validations/validation";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    const clientIp = getClientIp(req);

    const { name, email, task, requestFrom, reCaptcha } = await req.json();

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
      task: purify.sanitize(task),
    };

    const { error } = validateManualWorkAuditInput(sanitizedData);
    if (error) {
      return NextResponse.json(
        { success: false, message: error.details[0].message },
        { status: 400, headers: req.corsHeaders }
      );
    }

    const emailContent = generateManualWorkAuditEmailContent({
      name: sanitizedData.name,
      email: sanitizedData.email,
      task: sanitizedData.task,
      ipAddress: clientIp,
      requestFrom,
    });

    await sendEmail({
      email: sanitizedData.email,
      subject: "Manual Work Audit Submission",
      message: emailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to us. We have received your submission, and one of our representatives will respond to you at the earliest opportunity.",
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
