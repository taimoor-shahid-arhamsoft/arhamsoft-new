import { Animations, Images } from "@/assets/assets";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentServices from "@/components/HireDedicatedResource/DevelopmentServices/DevelopmentServices";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import {
  accordionFaqsData,
  bannerHeading,
  bannerText,
  developmentServices,
  engagementModels,
  expertise,
  expertiseHead,
  expertiseHeadTwo,
  outcomes,
  servicesBoxesContent,
  stats,
  steps,
  textualContentBlockText,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/HireDedicatedResource/DigitalMarketing";
import "@/styles/HireDedicatedResource/DigitalMarketing.css";

export async function generateMetadata() {
  return {
    title: "Results-Driven Digital Marketing Services for ROI - DataonMatrix",
    description: "Grow your brand with digital marketing services—cost-effective campaigns, precise targeting, real-time analytics, and scalable results.",
    keywords: ["Digital Marketing Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/digital-marketing",
    }
  };
}

const DigitalMarketing = () => {
  return (
    <div className='hdr digital-marketing custom-ab-banner'>
      <PageBanner
        subHeading="Digital Marketing Services"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Grow Your Brand With Us"
        buttonLink="/contact-us"
        bannerImage={Images.digitalMarketingBanner}
        bannerClass="right-side-page-banner"
        bannerImgAlt="Digital Marketing Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Boost your online presence with our specialized services and targeted strategies"
        whatWeDos={whatWeDos}
      />
      <TextualContentBlock
        subTitle="Amplify Brand"
        title="Visibility By 90%"
        image={Images.businessGrowth}
        text={textualContentBlockText}
      />
      <DevelopmentServices
        title="Unlock The Benefits"
        description="Hire a team of certified digital marketers to reap the following benefits:"
        developmentServices={developmentServices}
      />
      <StatsBlock
        head={true}
        title="Generate Massive"
        titleTwo="Leads"
        desc="We don't babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands:"
        stats={stats}
        buttonText="Hire Us"
        buttonLink="/contact-us"
      />
      <ServicesYouGet
        title="Competitive Edge"
        description="Empowering businesses to become the client's first choice"
        image={Images.marketingServiceMain}
        animationTwo={Animations.servicesAnimationTwo}
        servicesBoxesContent={servicesBoxesContent}
        outcomes={outcomes}
        titleTwo="Book A Free Consultation"
        outcomesButtonLink="#contact-us"
      />
      <EnagagementModel
        liteTitle="Expand"
        title="Brand Reach Globally"
        description="We empower our partnered clients with the right team, who understand business requirements and work closely toward goals. For this, you can choose from two flexible outsourcing models."
        engagementModels={engagementModels}
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <HireFaqs
        title="Frequently Asked Questions"
        text="Find answers to common queries about our service quality"
        accordionFaqsData={accordionFaqsData}
      />
      <ExpertQuoteBlockWithRecaptcha
        title={expertiseHead}
        expertise={expertise}
        secondTitle={expertiseHeadTwo}
        steps={steps}
        subHeading="Discuss With Team DoM"
        hireHeading="Marketers"
      />
    </div>
  );
};

export default DigitalMarketing;
