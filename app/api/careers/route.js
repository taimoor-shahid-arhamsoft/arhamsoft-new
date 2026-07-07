import { NextResponse } from "next/server";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import sendEmail from "../../utils/email";
import { getClientIp } from "../../utils/get-ip-address";
import { apiSecurity } from "../../utils/api-security";
import { verifyReCaptcha } from "../../utils/verify-recaptcha";
import { awsS3BaseUrl } from "@/config";
import { generateFileName } from "../../utils/filename-generator";
import uploadFileToS3 from "../../utils/s3-upload";

import { careers } from "../email-templates/careers";

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
      firstName: purify.sanitize(data.get("firstName")),
      lastName: purify.sanitize(data.get("lastName")),
      email: purify.sanitize(data.get("email")),
      phone: purify.sanitize(data.get("phone")),
      experience: purify.sanitize(data.get("experience")),
    };

    const requestFrom = data.get("requestFrom");
    const resumeFile = data.get("resume");
    const coverLetterFile = data.get("coverLetter");

    if (resumeFile && typeof resumeFile.name !== "string") {
      return NextResponse.json(
        { success: false, error: "No resume file provided" },
        { status: 400, headers: req.corsHeaders }
      );
    }

    if (coverLetterFile && typeof coverLetterFile.name !== "string") {
      return NextResponse.json(
        { success: false, error: "No cover letter file provided" },
        { status: 400, headers: req.corsHeaders }
      );
    }

    const timestamp = new Date().toISOString().replace(/[:.-]/g, "");

    let resumeFileFullUrl = "";
    if (resumeFile) {
      const resumeFileBuffer = Buffer.from(await resumeFile.arrayBuffer());
      const resumeFilename = generateFileName(resumeFile.name, timestamp);
      const resumeFileUrl = await uploadFileToS3(resumeFileBuffer, resumeFilename);
      resumeFileFullUrl = `${awsS3BaseUrl}${resumeFileUrl}`;
    }

    let coverLetterFileFullUrl = "";
    if (coverLetterFile) {
      const coverLetterBuffer = Buffer.from(await coverLetterFile.arrayBuffer());
      const coverLetterFilename = generateFileName(coverLetterFile.name, timestamp);
      const coverLetterFileUrl = await uploadFileToS3(coverLetterBuffer, coverLetterFilename);
      coverLetterFileFullUrl = `${awsS3BaseUrl}${coverLetterFileUrl}`;
    }

    const emailContent = careers({
      name: sanitizedData.firstName + " " + sanitizedData.lastName,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      ipAddress: clientIp,
      experience: sanitizedData.experience,
      requestFrom,
      resumeUrl: resumeFileFullUrl,
      coverLetterUrl: coverLetterFileFullUrl,
    });
    await sendEmail({
      email: sanitizedData.email,
      subject: "Career Application",
      message: emailContent,
      type: "careers"
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for submitting your application. We will review it and get back to you shortly.",
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
