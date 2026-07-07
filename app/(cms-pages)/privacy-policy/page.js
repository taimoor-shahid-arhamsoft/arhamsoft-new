import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { companyEmailId } from "@/config";
import {
  bannerHeading,
  bannerText,
  howWeDos
} from "@/data/CmsPages/PrivacyPolicy";
import "@/styles/PrivacyPolicy.css";

export async function generateMetadata() {
  return {
    title: "Privacy Policy for User Data Protection - DataonMatrix",
    description: "Read our Privacy Policy to understand how your data is collected, used, and safeguarded with strict confidentiality.",
    keywords: ["Privacy Policy"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/privacy-policy",
		}
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="hdr privacy-policy">
      <PageBanner
        subHeading="Privacy Policy"
        heading={bannerHeading}
        text={bannerText}
        bannerImage={Images.policyBanner}
        bannerImgAlt="Privacy Policy"
      />
      <HowWeDo
        title="Privacy Notice"
        howWeDos={howWeDos}
      />
      <div className="privacy-data">
        <Container>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Why we collect your information</span>
            </h2>
            <p>We collect your information for several key reasons, primarily to understand your interests and the services you need most. This data helps us process your requests, deliver our services effectively, and pursue Data on Matrix's legitimate business interests related to those requests and services. Specifically, we use your data to:</p>
            <p><strong>Foster a strong business relationship and connect you with relevant services:</strong> This includes building a robust connection with you and ensuring you can easily access the services that best meet your needs.</p>
            <p><strong>Improve our operations and marketing efforts:</strong> We conduct basic marketing analyses to plan, analyze, and enhance our operations. This also includes sending you relevant promotional materials and newsletters, but only if you've given us your consent.</p>
            <p><strong>Enhance your website experience:</strong> We use your data to personalize and optimize your interactions on our website, making it a smoother and more user-friendly experience.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">How we use your information</span>
            </h2>
            <p>We collect and use only basic personal data when you use our website. Personal data is any information that can identify you, such as:</p>
            <ul>
              <li>
                <p>Your name, email address, phone number, company name, or other personal information you provide through our "Contact Us" forms.</p>
              </li>
              <li>
                <p>Information about your device (e.g., IP address, which can indicate your country, region, or city, and operating system).</p>
              </li>
              <li>
                <p>Information about how you use our website.</p>
              </li>
            </ul>
            <p>When you visit the website, we use cookies and similar technologies to collect information about your visit, including:</p>
            <ul>
              <li>
                <p><strong>Usage Data:</strong> How you use our site, such as pages visited, time spent on pages, and links clicked.</p>
              </li>
              <li>
                <p><strong>Device Information:</strong> Details about your device, including IP address, browser type, and operating system.</p>
              </li>
              <li>
                <p><strong>Personal Data:</strong> If provided, this may include your email address, phone number, or other contact details.</p>
              </li>
            </ul>
            <p>We may also combine this automatically collected information with data from third-party sources, such as data providers and marketing partners, to create a more comprehensive profile. This profile helps us communicate with you, including providing personalized advertising and promotional content based on your interests and browsing behavior. You can opt out of this personalized advertising at any time.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">How we use cookies and similar technologies</span>
            </h2>
            <p>When you visit our website, we collect browsing statistics and other data to understand the value of our content and improve the services we offer. We use various technologies to gather this information, including cookies, tags, and scripts.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">What are cookies?</span>
            </h2>
            <p>Cookies (also known as browser cookies) are small text files downloaded to your computer when you visit a website that uses them. They act as identification tags, allowing the website to recognize your browser on subsequent visits.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Our use of cookies</span>
            </h2>
            <p>We use cookies to enhance your browsing experience by improving website functionality. Specifically, cookies help us:</p>
            <ul>
              <li>
                <p><strong>Understand Content Preferences:</strong> Monitor which content you find most engaging.</p>
              </li>
              <li>
                <p><strong>Deliver Targeted Information and Ads:</strong> Provide information and advertisements tailored to your interests and location.</p>
              </li>
              <li>
                <p><strong>Facilitate Social Sharing:</strong> Enable easy sharing of content on social media platforms.</p>
              </li>
            </ul>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Analytics partners</span>
            </h2>
            <p>We use analytics tools like Google Analytics and Google Tag Manager to monitor website traffic, user behavior, and customer engagement. We also leverage conversion tracking from Google Ads and Facebook Ads to connect advertising efforts with website actions. Additionally, WordPress Stats provides insights into website visits and user interactions.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Data retention</span>
            </h2>
            <p>We retain your data only for as long as necessary to fulfill the purpose for which it was collected, such as analyzing our performance and improving our services. We regularly review the necessity of the data we hold and delete or anonymize it when it's no longer needed. Data stored in backups or inaccessible remote storage is not used for any purpose. Please note that our marketing and advertising partners may have their own data retention policies.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Changes to this privacy policy</span>
            </h2>
            <p>This privacy notice will be updated periodically to reflect changes to our website and operations.</p>
          </div>
          <div className="section-heading privacy-heading mb-0">
            <h2>
              <span className="d-block">Contact Us</span>
            </h2>
            <p>For more information about our data practices, please contact us at <Link href={`mailto:${companyEmailId}`}>{companyEmailId}</Link></p>
          </div>
        </Container>
      </div>
    </div>
  );
}
