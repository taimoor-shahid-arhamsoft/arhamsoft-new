import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
  bannerHeading,
  bannerText,
  boxesContent,
  slidesImages,
  techImages,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/MultiCloudStrategy";
import "@/styles/MultiCloudStrategy.css";

export async function generateMetadata() {
  return {
    title: "Multi-Cloud Solutions for Scalable Business Agility - DataonMatrix",
    description: "Harness smarter infrastructure with multi-cloud solutions—boost resilience, cut costs, enhance performance, and stay compliant across clouds.",
    keywords: ["Multi-Cloud Solutions"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/multi-cloud-strategy",
    }
  };
}

export default function MultiCloudStrategy() {
  return (
    <div className="services multi-cloud-strategy custom-ab-banner">
      <PageBanner
        subHeading="Multi-Cloud Solutions"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Maximize Cloud Performance"
        buttonLink="#contact-us"
        bannerImage={Images.multiCloudBannner}
        bannerClass="right-side-page-banner"
        bannerImgAlt="Multi-Cloud Solutions"
      />
      <FeaturedClients
        title='HAPPY CLIENTS'
        slidesImages={slidesImages}
        belowBanner={true}
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Delivering seamless multi-cloud solutions that enhance efficiency, ensure security, and maximize value for your business."
        whatWeDos={whatWeDos}
      />
      <TechStacks
        title="Cloud Platforms We Use "
        description="Explore the leading cloud platforms we leverage to deliver scalable, secure, and innovative solutions tailored to your business needs."
        techImages={techImages}
      />
      <ThreeColoredBoxes
        title="Our Approach"
        text="We follow a structured process to deliver customized and efficient solutions for your business."
        boxesContent={boxesContent}
      />
      <LetsDiscuss
        title="Let's Discuss Your Project"
        description="Book a free consultation today to find out the outcomes we could drive for your business."
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