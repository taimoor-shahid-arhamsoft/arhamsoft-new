import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import Achievemnets from "@/components/Homepage/Achievements/Achievements";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import {
  accordionFaqsData,
  bannerHeading,
  boxesContent,
  gridsContent,
  outcomes,
  servicesBoxesContent,
  whatWeDoTitle,
  whatWeDos,
  workSliderData,
  bannerText
} from "@/data/SeperatePages/DataScience";
import "@/styles/DataScience.css";

export async function generateMetadata() {
  return {
    title: "Data Science Services for Smarter Business Decisions",
    description: "Our data science services help you unlock insights, optimize operations, and drive innovation through advanced analytics.",
    keywords: ["Data Science Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/data-science",
    }
  };
}

export default function DataScience() {
  return (
    <div className='services data-science simple-custom-banner case-study-bg-banner'>
      <PageBanner
        subHeading="Data Science Services"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Talk To Data Science Expert"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerDataScience}
        bannerClass="rounded-image"
        bannerImgAlt="Data Science Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Get end-to-end support for exceptional data science solutions that enhance your analytical capabilities and drive impactful insights."
        whatWeDos={whatWeDos}
      />
      <ServicesYouGet
        title="Our Approach"
        description="By combining deep industry knowledge with advanced data science techniques & the latest technology, we ensure every solution meets your unique objectives."
        animation={Animations.dataScienceAnimation}
        animationTwo={Animations.servicesAnimationTwo}
        servicesBoxesContent={servicesBoxesContent}
        outcomes={outcomes}
        titleTwo="Benefits To Reap"
        outcomesButton="Book A Free Consultation"
        outcomesButtonLink="/contact-us"
      />
      <MultiColorGrid
        title="Our Capabilities"
        gridsContent={gridsContent}
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <ThreeColoredBoxes
        title="Engagement Models"
        boxesContent={boxesContent}
      />
      <Achievemnets />
      <HireFaqs
        title="Frequently Asked Questions"
        text="Find answers to common queries about our service quality."
        accordionFaqsData={accordionFaqsData}
      />
    </div>
  );
}