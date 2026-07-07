import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import { Images } from "@/assets/assets";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentServices from "@/components/HireDedicatedResource/DevelopmentServices/DevelopmentServices";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import ElevateBusinessSlider from "@/components/Services/EcommerceSolutions/ElevateBusinessSlider";
import WhyHireUs from "@/components/Services/EcommerceSolutions/WhyHireUs";
import {
  accordionFaqsData,
  bannerHeading,
  bannerText,
  boxContent,
  bulletContent,
  developmentServices,
  developmentServices2,
  skills,
  stats,
  techImages,
  workSliderData,
  whatWeDoTitle,
  whatWeDos
} from "@/data/Services/EcommerceSolutions";
import "@/styles/EcommerceSolutions.css";

export async function generateMetadata() {
  return {
    title: "Ecommerce Solutions to Boost Online Business Growth - DataonMatrix",
    description: "Unlock scalable ecommerce solutions with automated workflows, data insights, and seamless multi-channel selling.",
    keywords: ["Ecommerce Solutions"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/ecommerce-solutions",
		}
  };
}

const EcommerceSolutions = () => {
  return (
    <div className="services ecommerce-solutions custom-banner">
      <PageBanner
        subHeading="Ecommerce Solutions"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Start Your Ecommerce Journey"
        buttonLink="#contact-us"
        bannerImage={Images.bgBannerEcommerceSolutions}
        bannerImgAlt="Ecommerce Solutions"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Explore our comprehensive suite of E-commerce services and solutions designed to drive growth across your entire retail value chain."
        whatWeDos={whatWeDos}
      />
      <ElevateBusinessSlider
        title="Ecommerce Platforms We Specialize In"
        description="Our expert ecommerce solution providers build advanced technology solutions to help retailers streamline their operations and fuel sustainable growth."
        boxContent={boxContent}
      />
      <StatsBlock
        head={true}
        title="Ready to Start"
        titleTwo="Your Ecommerce Journey?"
        desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
        stats={stats}
        buttonText="Let’s Connect"
        buttonLink="#contact-us"
      />
      <DevelopmentServices
        title="Our Ecommerce Project Roadmap"
        count='true'
        developmentServices={developmentServices}
      />
      <TechStacks
        title="Tech"
        subTitle="Stacks"
        description="Ecommerce technologies we use to build digital storefronts."
        techImages={techImages}
      />
      <WhyHireUs
        title='Ecommerce Solutions We Develop'
        description='We offer a wide range of ecommerce website development services, from small-scale projects to large-scale enterprise implementations. Our feature-rich, custom solutions include:'
        Skills={skills}
      />
      <TextualContentBlock
        subTitle="Hire eCommerce"
        title="Developers"
        bulletContent={bulletContent}
        image={Images.hireEcommerceDevelopers}
        button='true'
        buttonText='Hire Dedicated Developers'
        buttonLink='#contact-us'
      />
      <DevelopmentServices
        title="Benefits of Working with Us"
        description="As a leading ecommerce development agency, we've helped hundreds of businesses achieve online success."
        count='true'
        developmentServices={developmentServices2}
      />
      <HireFaqs
        title="Frequently Asked Questions"
        text="Find answers to common queries about our service quality."
        accordionFaqsData={accordionFaqsData}
      />
      <LetsDiscuss
        title="Let’s Discuss Your Project"
        description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
        buttonText="Schedule Consultation"
        buttonLink="#contact-us"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
};

export default EcommerceSolutions;
