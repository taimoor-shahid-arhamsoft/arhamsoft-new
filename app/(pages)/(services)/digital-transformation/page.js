import React from "react";
import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import CuttingEdge from "@/components/Shared/CuttingEdge/CuttingEdge";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import {
  bannerHeading,
  bannerText,
  fourBoxesContent,
  howWeDoText,
  howWeDos,
  howwewedos,
  workSliderData
} from "@/data/Services/DigitalTransformation";
import "@/styles/DigitalTransformation.css";

export async function generateMetadata() {
  return {
    title: "Digital Transformation Services for Business Agility - DataonMatrix",
    description: "Accelerate your journey with digital transformation services—cloud, AI, automation, and remote-ready tools for futureproof operations.",
    keywords: [ "Digital Transformation Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/digital-transformation",
		}
  };
}

const DigitalTransformation = () => {
  return (
    <div className='services digital-transformation custom-banner'>
      <PageBanner
        subHeading="Digital Transformation"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get a Tailored Solution"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerDigitalTransformation}
        bannerImgAlt="Digital Transformation Services"
      />
      <HowWeDo
        title="Digital Transformation For All"
        howWeDoText={howWeDoText}
        howWeDos={howWeDos}
      />
      <CuttingEdge />
      <HowItWorks
        items={howwewedos}
        title="Core Competencies"
        description="Data on Matrix delivers comprehensive digital transformation IT services"
      />
      <FourCounteredBoxes
        title="Our Unified Approach"
        description="Optimize your business with Data on Matrix's tailored digital transformation solutions."
        fourBoxesContent={fourBoxesContent}
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

export default DigitalTransformation;
