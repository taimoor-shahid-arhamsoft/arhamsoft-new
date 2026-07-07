import { siteUrl, companyLogo } from "@/config";

export const getInTouchContactUsFormContent = ({
  name,
  email,
  phone,
  location,
  interests,
  comments,
  idealStartDate,
  ipAddress,
  requestFrom,
  message,
  fileUrl,
}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const fileContent = fileUrl
    ? `<strong>File: <a href="${fileUrl}" target="_blank">View File</a></strong>`
    : "<strong>File:</strong> No file attached";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Support Request</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: #F17700;
          text-align: center;
          padding: 20px;
        }
        .header img {
          max-width: 100%;
          height: auto;
        }
        .content {
          padding: 20px;
        }
        .footer {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #777777;
          background: #f4f4f4;
        }
        a {
          color: #F17700 !important;
          text-decoration: none;
          transition: color 0.3s;
        }
        a:hover {
          color: black !important;
        }
        .details {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          margin-top: 10px;
        }
        .button {
          display: block;
          padding: 10px 20px;
          margin: 20px auto;
          background-color: #F17700;
          color: white !important;
          text-align: center;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s, color 0.3s;
          width: 200px;
        }
        .button:hover {
          background-color: #d16f00;
          color: black !important;
        }
        .ii a[href] {
          color: #F17700 !important;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${companyLogo}" alt="Company Logo" />
        </div>
        <div class="content">
          <p>Dear Support Team,</p>
          <p>You have received a new support request from a user. Below are the details:</p>
          <div class="details">
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Location:</strong> ${location}<br>
            <strong>Interests:</strong> ${interests}<br>
            <strong>Ideal start date:</strong> ${idealStartDate}<br>
            <strong>Comments:</strong> ${comments}<br>
            <strong>IP Address:</strong> ${ipAddress}<br>
            <strong>Message:</strong> ${message}<br>
            <strong>Submitted Request From Screen:</strong> <a href="${requestFrom}">${requestFrom}</a><br>
            ${fileContent}
          </div>
          <p>Please address this request as soon as possible. Thank you!</p>
          <p>Or click on the button below to navigate to the screen from where the request is submitted:</p>
          <a href="${requestFrom}" class="button">Navigate to Screen</a>
        </div>
        <div class="footer">
          <p>&copy; ${currentYear} Data on Matrix | All Rights Reserved.</p>
          <p><a href="${`${siteUrl}privacy-policy`}">Privacy Policy</a> | <a href="${`${siteUrl}terms-and-conditions`}">Terms of Service</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};
