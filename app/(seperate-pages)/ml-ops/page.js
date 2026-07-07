import { Images } from "@/assets/assets";
import dynamic from "next/dynamic";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import {
  accordionFaqsData,
  bannerHeading,
  bannerText,
  developmentFlow,
  engagementModels,
  gridsContent,
  stats,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/SeperatePages/MlOps";
import "@/styles/MLOps.css";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
  return {
    title: "MLOps Services & Solutions | DataOnMatrix",
    description: "Accelerate your AI projects with our MLOps Development Services. As a top MLOps Consulting Company, we deliver scalable, automated ML solutions",
    keywords: ["Enterprise MLOps Solutions"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/ml-ops",
    }
  };
}

export default function MlOps() {
  return (
    <div className='services ml-ops-page custom-banner'>
      <PageBanner
        subHeading="Enterprise ML Solutions"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get Started With MLOps"
        buttonLink="#contact-us"
        bannerImage={Images.mlOpsBannerImage}
        bannerClass="rounded-image"
        bannerImgAlt="Enterprise MLOps Solutions"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="As a leading MLOps consulting company, we deliver full-stack development and safeguard the quality and long-term viability of your ML solutions."
        whatWeDos={whatWeDos}
      />
      <MultiColorGrid
        title="Our MLOps Delivery Pipeline"
        description="Our automated ML pipeline streamlines the entire lifecycle."
        gridsContent={gridsContent}
      />
      <StatsBlock
        head={true}
        title="READY TO HIRE"
        titleTwo="MLOps Expert?"
        desc="We don’t babble, we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
        stats={stats}
        buttonText="Let’s Connect"
        buttonLink="#contact-us"
      />
      <DevelopmentsSolutions
        title="Industry ML Solutions"
        text="We deliver industry-specific MLOps services and solutions."
        developmentFlow={developmentFlow}
      />
      <EnagagementModel
        liteTitle="Suitable"
        title="Engagement Models"
        description="Reduce recruitment costs and save hours by accomplishing time-intensive tasks with people-powered & expertise-led technology."
        engagementModels={engagementModels}
      />
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
