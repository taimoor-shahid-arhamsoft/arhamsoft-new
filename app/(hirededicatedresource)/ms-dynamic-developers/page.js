import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import {
  accordionData,
  accordionFaqsData,
  bannerHeading,
  bannerText,
  certifiedMainText,
  developmentFlow,
  expertise,
  expertiseHead,
  expertiseHeadTwo,
  hireMainText,
  servicesData,
  stats,
  steps,
  workSliderData
} from "@/data/HireDedicatedResource/MsDynamicDeveloper";
import "@/styles/SalesforceDevelopers.css";

export async function generateMetadata() {
  return {
    title: "Hire MS Dynamics Developers for Custom Solutions - DataonMatrix",
    description: "Hire MS Dynamics developers to customize workflows, automate tasks, integrate systems, and drive scalable business optimization.",
    keywords: ["Hire MS Dynamics Developers"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/ms-dynamic-developers",
    }
  };
}

export default function MsDynamicDevelopers() {
  return (
    <div className="hdr salesforce-developers ms-dynamic-developers custom-banner">
      <PageBanner
        subHeading="Business Applications"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get A Custom Solution"
        buttonLink="/contact-us"
        bannerImage={Images.MsDynamicBannerBG}
        bannerImgAlt="Hire MS Dynamics Developers"
      />
      <HireDeveloper
        title="Hire Microsoft Dynamics Experts"
        titleTwo="Services We Offer"
        content={hireMainText}
        image={Images.HireMsDynamicImage}
        accordionData={accordionData}
      />
      <DevelopmentsSolutions
        title="Industries We Serve"
        text="Transforming businesses across diverse sectors with expert-led services"
        developmentFlow={developmentFlow}
      />
      <StatsBlock
        head={true}
        title="READY TO HIRE"
        titleTwo="MS Dynamics Developer?"
        desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
        stats={stats}
        buttonText="Partner Up"
        buttonLink="/contact-us"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <CertifiedDevelopers
        title="Unlock The Benefits"
        content={certifiedMainText}
        servicesData={servicesData}
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
        hireHeading="Microsoft Dynamics Developer"
      />
    </div>
  );
}
