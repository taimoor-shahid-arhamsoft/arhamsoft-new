import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import WhatInForYou from "@/components/Shared/WhatInForYou/WhatInForYou";
import SalesforceService from "@/components/Shared/SalesforceService/SalesforceService";
import SalesforceRoadmap from "@/components/Shared/SalesforceRoadmap/SalesforceRoadmap";
import SalesforceProducts from "@/components/Shared/SalesforceProducts/SalesforceProducts";
import {
  bannerHeading,
  bannerText,
  productTabs,
  salesForceData,
  salesRoadmapData,
  skillTitle,
  tabData,
  workSliderData
} from "@/data/Services/Salesforce";
import "@/styles/Salesforce.css";

export async function generateMetadata() {
  return {
    title: "Expert Salesforce Services for Scalable Growth - DataonMatrix",
    description: "Salesforce services that unify CRM, automate sales, and deliver AI-powered insights for scalable, customer-first operations.",
    keywords: ["Salesforce Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/salesforce",
		}
  };
}

export default function Salesforce() {
  return (
    <div className="services sales-force custom-ab-banner">
      <PageBanner
        subHeading="Salesforce"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get Started With Salesforce"
        buttonLink="/contact-us"
        bannerImage={Images.salesforceBG}
        bannerClass="right-side-page-banner"
        bannerImgAlt="Salesforce Services"
      />
      <SalesforceService
        title='Our Services'
        description="Maximize your Salesforce value with our best-in-breed expertise"
        salesForceData={salesForceData}
      />
      <SalesforceRoadmap
        title='Salesforce Project Roadmap'
        description="Here’s our proven approach to Salesforce implementation, designed to deliver efficient and successful projects."
        salesRoadmapData={salesRoadmapData}
      />
      <WhatInForYou
        title={skillTitle}
        tabData={tabData}
        buttonLink={false}
      />
      <SalesforceProducts
        title="Salesforce Suite: Our Areas of Expertise"
        description="Our team of Salesforce experts provides tailored solutions to drive your business forward."
        animationTwo={Animations.servicesAnimationTwo}
        image={Images.productsChart}
        buttonText="Hire A Certified Salesforce Partner"
        buttonLink="/contact-us"
        productTabs={productTabs}
      />
      <LetsDiscuss
        title="Find The Right Solution"
        description="Let’s explore the diverse world of Salesforce and discover its limitless potential for innovation and growth."
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
