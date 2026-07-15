import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import {
  accordionFaqsData,
  bannerHeading,
  bannerText,
  gridsContent,
  slidesImages,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/SupportAndMaintenance";
import "@/styles/SupportAndMaintenance.css";

export async function generateMetadata() {
  return {
    title:
      "IT Support & App Maintenance Services | Software Maintenance Company | DataOnMatrix",
    description:
      "Data on Matrix offers IT support and maintenance services, including app and software maintenance, ensuring seamless performance and reliability for your business with expert solutions for continuous operations.",
    keywords: [
      "it support and maintenance services",
      "app maintenance and support",
      "software maintenance company",
    ],
    alternates: {
      canonical: "https://www.dataonmatrix.com/support-and-maintenance",
    },
  };
}

export default function SupportAndMaintenance() {
  return (
    <div className="services support-and-maintenance custom-ab-banner">
      <PageBanner
        subHeading="Software Support & Maintenance"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Talk to Our Experts"
        buttonLink="#contact-us"
        bannerImage={Images.SupportBannner}
        bannerClass="right-side-page-banner"
      />
      <FeaturedClients
        title='HAPPY CLIENTS'
        slidesImages={slidesImages}
        belowBanner={true}
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Ensuring business continuity with our maintenance and support in software development."
        whatWeDos={whatWeDos}
      />
      <MultiColorGrid
        title="Why Need Support & Maintenance?"
        description="By investing in application maintenance and support, you can maximize software uptime, reduce costs, and ensure the long-term health of your IT infrastructure."
        gridsContent={gridsContent}
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