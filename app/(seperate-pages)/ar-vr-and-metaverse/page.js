import dynamic from "next/dynamic";
import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import HiringProcess from "@/components/Shared/HiringProcess/HiringProcess";
import Achievemnets from "@/components/Homepage/Achievements/Achievements";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import {
  accordionFaqsData,
  bannerHeading,
  gridsContent,
  outcomes,
  processSteps,
  stats,
  servicesBoxesContent,
  whatWeDoTitle,
  whatWeDos,
  workSliderData,
  bannerText
} from "@/data/SeperatePages/ArVrMetaverse";
import "@/styles/ARVRMetaverse.css";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
  return {
    title: "Scalable AR/VR & Metaverse Services for Your Brand",
    description: "Turn ideas into immersive reality with our AR/VR & Metaverse services—engage customers through virtual experiences and interactivity.",
    keywords: ["AR/VR & Metaverse Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/ar-vr-and-metaverse",
    }
  };
}

export default function ARVRMetaverse() {
  return (
    <div className='services ar-vr-metaverse custom-banner case-study-bg-banner'>
      <PageBanner
        subHeading="AR/VR & Metaverse"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Unlock Virtual Reality Possibilities"
        buttonLink="#contact-us"
        bannerImage={Images.bgBannerArVrMetaverse}
        bannerImgAlt="AR/VR & Metaverse Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="We specialize in AR & VR app development, offering innovative interactive solutions that redefine experiences. Our goal is to create groundbreaking projects that set new standards in technology."
        whatWeDos={whatWeDos}
      />
      <ServicesYouGet
        title="Our Expertise"
        description="We help businesses by creating strategic roadmaps and developing cutting-edge, multi-platform experiences. Our extensive range of AR, VR, MR, and Metaverse solutions transforms visions into reality, bridging the gap between concept and execution."
        animation={Animations.arVrNavigation}
        animationTwo={Animations.servicesAnimationTwo}
        servicesBoxesContent={servicesBoxesContent}
        outcomes={outcomes}
        outcomesButton="Book A Consultation"
        titleTwo="Benefits To Reap"
        outcomesButtonLink="/contact-us"
      />
      <MultiColorGrid
        title="Unlock The DoM Edge"
        description="Use AR, VR, and Metaverse solutions to create immersive experiences that boost engagement and streamline operations. Stay competitive by adopting technologies that drive efficiency and growth."
        gridsContent={gridsContent}
      />
      <StatsBlock
        head={true}
        title="READY TO HIRE"
        titleTwo="AR/VR & Metaverse?"
        desc="We don’t babble, we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
        stats={stats}
        buttonText="Book A Call"
        buttonLink="/contact-us"
      />
      <HiringProcess
        title="Hiring"
        lightTitle="Process"
        processSteps={processSteps}
      />
      <Achievemnets />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <HireFaqs
        title="Frequently Asked Questions"
        text="Find answers to common queries about our service quality."
        accordionFaqsData={accordionFaqsData}
      />
      <ContactWithRecaptcha />
    </div>
  );
}
