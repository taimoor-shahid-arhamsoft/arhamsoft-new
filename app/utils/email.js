import nodemailer from "nodemailer";

const sendEmail = async ({ email, subject, message, type = "" }) => {
  const adminEmails = JSON.parse(
    type === "careers" ? process.env.CAREER_EMAIL : process.env.ADMIN_EMAIL
  );

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Data on Matrix <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: adminEmails.join(", "),
    subject: subject,
    html: message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
