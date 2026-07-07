import { Images } from "@/assets/assets";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import CuttingEdge from "@/components/Shared/CuttingEdge/CuttingEdge";
import OurExpertiesWorkProcess from "@/components/CustomSoftwareDevelopment/OurExpertiesWorkProcess/OurExpertiesWorkProcess";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import SoftwareDiverseClients from "@/components/CustomSoftwareDevelopment/SoftwareDiverseClients/SoftwareDiverseClients";
import {
  bannerHeading,
  bannerText,
  workSliderData
} from "@/data/Services/CustomSoftwareDevelopment";

export async function generateMetadata() {
  return {
    title: "Build Custom Software That Fits Your Business - DataonMatrix",
    description: "As a trusted custom software development company, we deliver advanced systems that drive growth, efficiency, and digital success.",
    keywords: ["Custom software development services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/custom-software-development",
		},
  };
}

export default function CustomSoftwareDevelopment() {
  return (
    <div className="services custom-software-development custom-banner">
      <PageBanner
        subHeading="Custom Software Development"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Begin custom development"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerCSDevelopment}
        bannerImgAlt="Custom software development services"
      />
      <OurExpertiesWorkProcess />
      <SoftwareDiverseClients />
      <CuttingEdge />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
}