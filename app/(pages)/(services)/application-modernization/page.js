import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import Modernize from "@/components/Services/ApplicationModernization/Modernize/Modernize";
import {
  bannerHeading,
  bannerText,
  modernizeComponentsData,
  howWeDos,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/ApplicationModernization";
import "@/styles/ApplicationModernization.css";

export async function generateMetadata() {
  return {
    title: "Secure & Efficient App Modernization Services - DataonMatrix",
    description: "Transform your systems with app modernization services—scale faster, enhance UX, and streamline operations securely and efficiently.",
    keywords: ["Application Modernization Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/application-modernization",
    }
  };
}

const ApplicationModernization = () => {
  return (
    <div className='services application-modernization custom-ab-banner'>
      <PageBanner
        subHeading="App Modernization"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get in Touch"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerApplicationModernization}
        bannerClass="right-side-page-banner"
        bannerImgAlt="Application Modernization Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Accelerate your digital journey by modernizing your applications. <br /> We'll help you migrate to the cloud and optimize your infrastructure."
        whatWeDos={whatWeDos}
      />
      <Modernize
        modernizeComponentsData={modernizeComponentsData}
      />
      <HowItWorks
        items={howWeDos}
        subtitle="Legacy Modernization with Data on Matrix"
        title="How it Works"
        columnThree={true}
      />
      <LetsDiscuss
        title="Let’s Discuss Your Project"
        description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
        buttonText="Schedule Consultation"
        buttonLink="/contact-us"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
};

export default ApplicationModernization;