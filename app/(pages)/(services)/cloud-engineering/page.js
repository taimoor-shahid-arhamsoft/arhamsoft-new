import { Images } from "@/assets/assets";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
  bannerHeading,
  bannerText,
  boxesContent,
  fourBoxesContent,
  gridsContent,
  slidesImages,
  techImages,
  workSliderData
} from "@/data/Services/CloudEngineering";
import "@/styles/CloudEngineering.css";

export async function generateMetadata() {
  return {
    title: "Expert Cloud Engineering Services for Agility - DataonMatrix",
    description: "Build scalable cloud infrastructure with expert cloud engineering services—optimized performance, cost efficiency, and security.",
    keywords: ["Cloud Engineering Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/cloud-engineering",
    }
  };
}

export default function CloudEngineering() {
  return (
    <div className="services cloud-engineering custom-banner">
      <PageBanner
        subHeading="Cloud Engineering Services"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get Cloud-Ready Fast"
        buttonLink="#contact-us"
        bannerImage={Images.BgBannerCliudEngineering}
        bannerImgAlt="Cloud Engineering Services"
      />
      <FeaturedClients
        title='HAPPY CLIENTS'
        slidesImages={slidesImages}
        belowBanner={true}
      />
      <MultiColorGrid
        title="Services We Offer"
        gridsContent={gridsContent}
      />
      <TechStacks
        title="Supported Cloud"
        subTitle="Platforms"
        description="Delivering scalable, secure, and innovative solutions tailored to client needs across leading cloud platforms."
        techImages={techImages}
      />
      <ThreeColoredBoxes
        title="Why Choose Us"
        text="Providing reliable, scalable cloud solutions that empower businesses to innovate and achieve their goals."
        boxesContent={boxesContent}
      />
      <FourCounteredBoxes
        title="Our Work Process"
        description="We follow a streamlined process to deliver efficient, tailored cloud solutions that drive results for your business."
        fourBoxesContent={fourBoxesContent}
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