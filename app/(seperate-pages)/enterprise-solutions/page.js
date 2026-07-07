import dynamic from "next/dynamic";
import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import SpecificIdustries from "@/components/HireDedicatedResource/SpecificIndustries/SpecificIndustries";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import ExpertiseSolutions from "@/components/Shared/ExpertiseSolutions/ExpertiseSolutions";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ExpertisePreconfig from "@/components/Shared/ExpertisePreconfig/ExpertisePreconfig";
import {
  dataPreconfig,
  developmentFlow,
  engagementModels,
  gridsContent,
  industries,
  bannerHeading,
  bannerText,
  tabsData,
  techImages,
  whatWeDoTitle,
  whatWeDos
} from "@/data/SeperatePages/EnterpriseSolutions";
import "@/styles/ExpertiseSolutionsPage.css";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
  return {
    title: "Tailored Enterprise Solutions: Cloud, AI & Cybersecurity - DataonMatrix",
    description: "Unlock growth with Data on Matrix's enterprise IT consulting, offering custom software, cloud strategies, and advanced data analytics.",
    keywords: ["Enterprise IT Solutions"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/enterprise-solutions",
    }
  };
}

export default function EnterpriseSolutionsPage() {
  return (
    <div className='services enterprise-solutions-page simple-custom-banner case-study-bg-banner'>
      <PageBanner
        subHeading="Enterprise Solution"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get Your Custom Solution"
        buttonLink="/contact-us"
        bannerImage={Images.expertiseSolutionsBanner}
        bannerClass="rounded-image"
        bannerImgAlt="Enterprise IT Solutions"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Expert-Led Solutions for Seamless Operations & Business Growth"
        whatWeDos={whatWeDos}
      />
      <ExpertiseSolutions
        title="Enterprise Platforms"
        description="Unlock business potential with innovative enterprise solutions"
        tabsData={tabsData}
        initialTab={tabsData[0]?.microsoft}
      />
      <MultiColorGrid
        title="Customization & Integration"
        description="Custom-fit solutions to address the specific demands of your business"
        gridsContent={gridsContent}
      />
      <LetsDiscuss
        title="Let's Discuss Your Project"
        description="Book a free consultation today to find out the outcomes we could drive for your business."
        buttonText="Schedule Free Consultation"
        buttonLink="#contact-us"
      />
      <ExpertisePreconfig
        title="Pre-Configured Solutions"
        description="Customizable, scalable, and reliable pre-configured solutions for maximum performance and security."
        dataPreconfig={dataPreconfig}
      />
      <SpecificIdustries
        title="Client Industries"
        description="Empowering diverse industries with tailored IT solutions for growth and innovation"
        industries={industries}
      />
      <TechStacks
        title="Trusted & Certified"
        description="Proven Partnerships & Industry-Leading Certifications We Have"
        techImages={techImages}
      />
      <DevelopmentsSolutions
        title="Why Choose Us"
        text="Explore the competitive edge that we bring to your business."
        developmentFlow={developmentFlow}
      />
      <EnagagementModel
        liteTitle="Suitable"
        title="Engagement Models"
        description="Reduce recruitment costs and save hours by accomplishing time-intensive tasks with people-powered & expertise-led technology."
        engagementModels={engagementModels}
      />
      <ContactWithRecaptcha />
    </div>
  );
}
