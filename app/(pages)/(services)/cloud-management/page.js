import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
  bannerHeading,
  bannerText,
  boxesContent,
  gridsContent,
  slidesImages,
  techImages,
  workSliderData,
  whatWeDoTitle,
  whatWeDos
} from "@/data/Services/CloudManagement";
import "@/styles/CloudManagement.css";

export async function generateMetadata() {
  return {
    title: "Scalable Cloud Management Services for Your Business",
    description: "Get cloud management services that ensure performance, scalability, and security across your cloud environment.",
    keywords: ["Cloud Management Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/cloud-management",
    }
  };
}

export default function CloudManagement() {
  return (
    <div className='services cloud-management custom-banner'>
      <PageBanner
        subHeading="Cloud Management"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Unlock Cloud Efficiency"
        buttonLink="#contact-us"
        bannerImage={Images.bgBannerCloudManagement}
        bannerClass="rounded-image"
        bannerImgAlt="Cloud Management Services"
      />
      <FeaturedClients
        title='HAPPY CLIENTS'
        slidesImages={slidesImages}
        belowBanner={true}
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Building a Future-Ready Business through Advanced Cloud Management Solutions"
        whatWeDos={whatWeDos}
      />
      <TechStacks
        title="Cloud Platforms"
        subTitle="We Use"
        description="Explore the leading cloud platforms we leverage to deliver scalable, secure, and innovative solutions tailored to your business needs."
        techImages={techImages}
      />
      <ThreeColoredBoxes
        title="Hire Certified Experts for Optimal Cloud Management"
        text="Optimize cloud performance with our highly skilled cloud management professionals."
        boxesContent={boxesContent}
      />
      <MultiColorGrid
        title="Reap The Benefits"
        description="Explore unparalleled advantages tailored to enhance your business growth."
        gridsContent={gridsContent}
      />
      <LetsDiscuss
        title="Let's Discuss Your Project"
        description="Book a free consultation today to find out the outcomes we could drive for your business."
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
}
