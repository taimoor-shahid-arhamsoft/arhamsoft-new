import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import sendEmail from "@/app/utils/email";
import { hireDedicatedFormContent } from "@/app/api/email-templates/hire-dedicated";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";
import { awsS3BaseUrl } from "@/config";
import { generateFileName } from "../../utils/filename-generator";
import uploadFileToS3 from "../../utils/s3-upload";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    const clientIp = getClientIp(req);

    const data = await req.formData();
    const reCaptcha = data.get("reCaptcha");

    const isReCaptchaValid = await verifyReCaptcha(reCaptcha);

    if (!isReCaptchaValid) {
      return NextResponse.json(
        { success: false, recaptchaInvalid: true },
        { status: 400, headers: req.corsHeaders }
      );
    }

    const sanitizedData = {
      name: purify.sanitize(data.get("name")),
      email: purify.sanitize(data.get("email")),
      phone: purify.sanitize(data.get("phone")),
      message: purify.sanitize(data.get("message")),
      requestFrom: purify.sanitize(data.get("requestFrom")),
    };

    const file = data.get("file");

    if (file && typeof file.name !== "string") {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400, headers: req.corsHeaders }
      );
    }

    let fullFileUrl = "";
    if (file) {
      const timestamp = new Date().toISOString().replace(/[:.-]/g, "");
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = generateFileName(file.name, timestamp);
      const fileUrl = await uploadFileToS3(buffer, fileName);
      fullFileUrl = `${awsS3BaseUrl}${fileUrl}`;
    }

    const emailContent = hireDedicatedFormContent({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      requiredExperts: data.get("requiredExperts"),
      ipAddress: clientIp,
      requestFrom: sanitizedData.requestFrom,
      message: sanitizedData.message,
      fileUrl: fullFileUrl,
    });

    await sendEmail({
      email: sanitizedData.email,
      subject: "Hire dedicated resource",
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
