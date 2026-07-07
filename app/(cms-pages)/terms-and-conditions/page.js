import Link from "next/link";
import { Images } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import { companyEmailId } from "@/config";
import {
  bannerHeading,
  bannerText,
  boxesContent,
  howWeDoText
} from "@/data/CmsPages/TermsConditions";
import "@/styles/PrivacyPolicy.css";

export async function generateMetadata() {
  return {
    title: "Read Our Terms & Conditions for Clarity - DataonMatrix",
    description: "Learn about usage rules, rights, and obligations—our Terms & Conditions clarify your legal and service boundaries.",
    keywords: ["Terms & Conditions"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/terms-and-conditions",
    }
  };
}

export default function Page() {
  return (
    <div className="hdr privacy-policy term-conditions">
      <PageBanner
        subHeading="Terms & Conditions"
        heading={bannerHeading}
        text={bannerText}
        bannerImage={Images.policyBanner}
        bannerImgAlt="Terms & Conditions"
      />
      <HowWeDo
        title="Terms of Services "
        howWeDoText={howWeDoText}
      />
      <div className="section-heading privacy-heading text-center">
        <Container>
          <div>
            <p><strong>By using our website, you agree to these terms.</strong> These terms supersede any other agreements you might have with us. We reserve the right to update these terms at any time, so please check back periodically. We reserve the right to modify these Terms of Services at any time, with changes effective immediately upon publication on our Website. If you breach these Terms, we may terminate your access, block future use, and/or take legal action.</p>
          </div>
        </Container>
      </div>
      <div className="privacy-update">
        <Container>
          <div className="section-heading privacy-heading mb-0">
            <h2>
              <span className="d-block">Copyright and Trademarks:</span>
            </h2>
            <p className="mb-0">Everything on our website is copyrighted by us (Data on Matrix) unless otherwise stated. You can download content for personal use on one computer, but you can't share it without our written permission. You also can't deep-link to our website without our authorization.</p>
          </div>
        </Container>
      </div>
      <div className="privacy-data">
        <Container>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Disclaimer:</span>
            </h2>
            <p>We provide our website and information "as is." While we strive for accuracy, we don't guarantee the information's completeness, effectiveness, or timeliness. Use your own judgment and consult with experts before relying on any information.</p>
            <p>Links to other websites are not endorsements by us. We are not responsible for the content or accuracy of these external sites.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Liability:</span>
            </h2>
            <p>We are not responsible for any consequences resulting from using information on our website or linked sites. We disclaim all liability for damages arising from the use of this information.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Severability:</span>
            </h2>
            <p>If any part of these Terms and Conditions is found to be invalid, the remaining terms will still apply.</p>
          </div>
          <div className="section-heading privacy-heading">
            <h2>
              <span className="d-block">Project Refunds and Cancellations:</span>
            </h2>
            <p>Data on Matrix may, under certain circumstances, consider requests for project refunds and cancellations. The following conditions govern such requests:</p>
          </div>
        </Container>
      </div>
      <ThreeColoredBoxes boxesContent={boxesContent} />
      <div className="terms-last-content">
        <Container>
          <div className="section-heading privacy-heading mb-0">
            <h2>
              <span className="d-block">Contact Us:</span>
            </h2>
            <p>For further information on how we handle your data, please contact us at <Link href={`mailto:${companyEmailId}`}>{companyEmailId}</Link></p>
          </div>
        </Container>
      </div>
    </div>
  );
}