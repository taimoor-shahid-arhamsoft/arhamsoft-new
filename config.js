const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsS3BaseUrl = process.env.NEXT_PUBLIC_AWS_S3_BASE_URL;
const awsS3BucketName = process.env.AWS_S3_BUCKET_NAME;
const awsS3Domain = process.env.AWS_S3_DOMAIN;
const awsS3Region = process.env.AWS_S3_REGION;
const awsS3AnimationBaseUrl = `${awsS3BaseUrl}animations/`;
const awsS3FontBaseUrl = `${awsS3BaseUrl}fonts/`;
const awsS3ImgBaseUrl = `${awsS3BaseUrl}images/`;
const awsS3VideoBaseUrl = `${awsS3BaseUrl}videos/`;
const googleSiteVerificationKey = process.env.NEXT_GOOGLE_SITE_VERIFICATION_KEY;
const googleTagId = process.env.NEXT_GOOGLE_TAG_ID;
const siteUrl = process.env.SITE_URL
const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const reCaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY
const reCaptchaVerifyUrl = process.env.RECAPTCHA_VERIFY_URL
const companyLogo = "https://res.cloudinary.com/arhamsoft-ltd/image/upload/v1735815701/white-logo_fl6lwj.png"
const companyEmailId = "info@dataonmatrix.com"
const companySalesEmailId = "sales@dataonmatrix.com"
const copmanySupportEmailId = "support@dataonmatrix.com"
const companyHrEmailId = "hr@dataonmatrix.com"
const companySkypeId = "dataonmatrix"
const companyWhatsApp = "12018142046"
const companyContactNumberOne = "+1 (201) 814-2046"
const companyContactNumberTwo = "+971 50 240 4722"
const companySalesNumber = "+1 (201) 814-2046"
const companyUsEmail = "info@dataonmatrix.com"
const companyUAENumberOne = "+971 50 240 4722"
const companyUAEEmail = "info@dataonmatrix.com"
const companyUsAddress = "80 Broad St 5th floor, New York, NY 10004"
const companyUAEAddress = "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E."
const replyTo = "Data on Matrix <noreply@dataonmatrix.com>";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const fileSizeLimit = 15728640;
const tokenRefreshTime = 90000;
const allowedFileTypes = "JPEG, PNG, DOCX, XLSX, PDF, ZIP";
const allowedJobApplicationFileTypes = "PDF, DOC, DOCX, TXT, RTF, ODT"
const allowedResumeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text'];
const countryDropdownConfig = {
  defaultCountry: "us",
  preferredCountries: ["us", "gb", "ca", "au"],
  separateDialCode: true
};
const socialLinks = {
  fb: "https://www.facebook.com/Dataonmatrixx",
  li: "https://www.linkedin.com/company/dataonmatrix/",
  wa: "https://wa.me/12018142046",
  x: "https://x.com/DataonMatrixx",
};

module.exports = {
  awsAccessKeyId,
  awsSecretAccessKey,
  awsS3BaseUrl,
  awsS3BucketName,
  awsS3Domain,
  awsS3Region,
  awsS3AnimationBaseUrl,
  awsS3FontBaseUrl,
  awsS3ImgBaseUrl,
  awsS3VideoBaseUrl,
  emailRegex,
  fileSizeLimit,
  allowedFileTypes,
  siteUrl,
  reCaptchaSiteKey,
  reCaptchaSecretKey,
  reCaptchaVerifyUrl,
  countryDropdownConfig,
  googleSiteVerificationKey,
  googleTagId,
  companyLogo,
  companyEmailId,
  companySalesEmailId,
  copmanySupportEmailId,
  companyHrEmailId,
  companySkypeId,
  companyWhatsApp,
  companyContactNumberOne,
  companyContactNumberTwo,
  companySalesNumber,
  companyUsEmail,
  companyUAENumberOne,
  companyUAEEmail,
  socialLinks,
  allowedResumeTypes,
  allowedJobApplicationFileTypes,
  replyTo,
  tokenRefreshTime,
  companyUsAddress,
  companyUAEAddress
};
