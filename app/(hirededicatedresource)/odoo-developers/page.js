import { Images } from "@/assets/assets";
import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import Tabber from "@/components/Shared/Tabber/Tabber";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
  accordionData,
  accordionFaqsData,
  bannerHeading,
  bannerText,
  bulletContent,
  boxesContent,
  certifiedMainText,
  developmentFlow,
  hireMainText,
  processSteps,
  stats,
  servicesData,
  tabHeading,
  tabs,
  techImages,
  technologyOptions,
  workSliderData
} from "@/data/HireDedicatedResource/OdooDeveloper";
import "@/styles/SalesforceDevelopers.css";

export async function generateMetadata() {
  return {
    title: "Hire Odoo Developers for Custom ERP Development - DataonMatrix",
    description: "Hire Odoo developers for custom modules, seamless system integrations, and tailored workflows to elevate business efficiency.",
    keywords: ["Hire Odoo Developers"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/odoo-developers",
		}
  };
}

export default function OdooDevelopers() {
  return (
    <div className="hdr salesforce-developers odoo-developers developers-page">
      <PageBannerWithRecaptcha
        subHeading="Hire Odoo Developers"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Drop Us a Line"
        buttonTextTwo="Custom Implementation"
        buttonLink="#contact-us"
        technologyOptions={technologyOptions}
      />
      <HireDeveloper
        title="Odoo Services"
        titleTwo="We Offer"
        content={hireMainText}
        image={Images.HireOdooImage}
        accordionData={accordionData}
        buttonText='Hire A Certified Odoo Expert'
        buttonLink="#contact-us"
      />
      <ThreeColoredBoxes
        title="Odoo Consulting & Development"
        text="Get an end-to-end support for optimal Odoo performance."
        boxesContent={boxesContent}
        ButtonFoot={true}
        buttonText="Hire Odoo Experts"
        buttonLink="#contact-us"
      />
      <DevelopmentsSolutions
        title="Industries We Serve"
        text="Transforming businesses across diverse sectors with expert-led services."
        developmentFlow={developmentFlow}
      />
      <Tabber
        tabHeading={tabHeading}
        description="Ensure smooth transitions, optimal system performance, and rapid deployment with our following proven methodologies:"
        tabsContent={tabs}
        developerPages={true}
      />
      <OurProcess
        processSteps={processSteps}
        title="Hiring"
        lightTitle="Process"
      />
      <TextualContentBlock
        subTitle="Outsource Team DoM"
        title="We Guarantee"
        bulletContent={bulletContent}
        image={Images.odooPricing}
        button={true}
        buttonText="Outsource To Us"
        buttonLink="#contact-us"
      />
      <StatsBlock
        head={true}
        title="Hire Odoo Experts"
        titleTwo="to Optimize Processes"
        desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
        stats={stats}
        buttonText="Book A Free Consultation"
        buttonLink="#contact-us"
      />
      <CertifiedDevelopers
        title="Unlock The Benefits"
        content={certifiedMainText}
        servicesData={servicesData}
      />
      <TechStacks
        title="Odoo Tech"
        subTitle="Stacks"
        description="Plugging objectives in with the following technologies to achieve end goals:"
        techImages={techImages}
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
    </div>
  );
}
