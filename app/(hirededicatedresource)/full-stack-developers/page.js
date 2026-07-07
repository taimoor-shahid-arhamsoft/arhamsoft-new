import { Images } from "@/assets/assets";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import Reviews from "@/components/Shared/Reviews/Reviews";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import SpecificIdustries from "@/components/HireDedicatedResource/SpecificIndustries/SpecificIndustries";
import NeedDeveloper from "@/components/HireDedicatedResource/NeedDeveloper/NeedDeveloper";
import DevelopmentServices from "@/components/HireDedicatedResource/DevelopmentServices/DevelopmentServices";
import {
  reviewTitle,
  accordionFaqsData,
  bannerHeading,
  bannerText,
  developmentServices,
  engagementModels,
  expertise,
  expertiseHead,
  expertiseHeadTwo,
  industries,
  steps,
  techImages,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/HireDedicatedResource/FullStackDeveloper";
import "@/styles/HireDedicatedResource/FullStackDeveloper.css";

export async function generateMetadata() {
  return {
    title: "Hire Full Stack Developers – Frontend & Backend Experts - DataonMatrix",
    description: "Hire full stack developers to deliver faster, reduce costs, and streamline deployments across front and back systems.",
    keywords: ["Hire Full Stack Developers"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/full-stack-developers",
    }
  };
}

const FullStackDeveloper = () => {
  return (
    <div className='hdr full-stack-developer developers-page custom-ab-banner'>
      <PageBanner
        subHeading="Full Stack Development"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Request Full Stack Services"
        buttonLink="/contact-us"
        bannerImage={Images.fullStackDevBanner}
        bannerClass="right-side-page-banner"
        bannerImgAlt="Hire Full Stack Developers"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Build robust cross-platform applications with our full-stack expertise. <br />Our skilled team delivers exceptional solutions to drive your business forward."
        whatWeDos={whatWeDos}
      />
      <TechStacks
        title="Tech"
        subTitle="Stacks"
        description="Plugging objectives in with the following technologies to achieve end goals:"
        techImages={techImages}
      />
      <DevelopmentServices
        title="Why Outsource Full Stack Development"
        description="Expand your team and accelerate development with our skilled full-stack developers."
        developmentServices={developmentServices}
      />
      <NeedDeveloper
        title="Let’s Discuss Your Project"
        description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
        buttonText="Hire Full Stack Developer"
        buttonLink="/contact-us"
        image={Images.NeedDevImage}
      />
      <SpecificIdustries
        title="Industries We Provide Solutions"
        description="Empowering businesses of all sizes with our full-stack development outsourcing"
        industries={industries}
      />
      <EnagagementModel
        liteTitle="Empowering"
        title="Businesses Globally"
        description="To grow exponentially, we empower our partnered clients with the right team of expertise, who understand business requirements and work closely toward goals."
        engagementModels={engagementModels}
      />
      <NeedDeveloper
        title="Design. Develop. Integrate. Maintain. Scale."
        description="From bridging skill gaps to providing dedicated development teams, we ensure on-time delivery, first-time-right code and maximum productivity."
        buttonText="Hire Full Stack Expert"
        buttonLink="/contact-us"
        className="full-width"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <Reviews
        title={reviewTitle}
      />
      <HireFaqs
        title="Frequently Asked Questions"
        text="Find answers to common queries about our service quality."
        accordionFaqsData={accordionFaqsData}
      />
      <ExpertQuoteBlockWithRecaptcha
        title={expertiseHead}
        expertise={expertise}
        secondTitle={expertiseHeadTwo}
        steps={steps}
        subHeading="Discuss With Team DoM"
        hireHeading="Full Stack Developer"
      />
    </div>
  );
};

export default FullStackDeveloper;