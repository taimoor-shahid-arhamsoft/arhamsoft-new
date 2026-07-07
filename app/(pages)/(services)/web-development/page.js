import { Images } from "@/assets/assets";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import CuttingEdge from "@/components/Shared/CuttingEdge/CuttingEdge";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import {
  bannerHeading,
  bannerText,
  howWeDos,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/WebAppDevelopment";
import "@/styles/WebAppDevelopment.css";

export async function generateMetadata() {
  return {
    title: "Advanced Web Development Services - DataonMatrix",
    description: "We deliver expert web development services designed to build fast, secure, and scalable websites that drive results.",
    keywords: ["Web development services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/web-development",
		},
  };
}

export default function WebAppDevelopment() {
  return (
    <div className="services web-app-development custom-banner">
      <PageBanner
        subHeading="Web App Development"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get A Custom App"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerWADevelopment}
        bannerImgAlt="Web development services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Our comprehensive expertise empowers businesses to achieve success and create lasting value."
        whatWeDos={whatWeDos}
      />
      <HowItWorks
        items={howWeDos}
        title="Work Process"
        description="To deliver the best result, we take the following strategic steps:"
      />
      <CuttingEdge />
      <LetsDiscuss
        title="Let’s Discuss Your Project "
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
}
