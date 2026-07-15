import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import IntroBlock from "@/components/Careers/IntroBlock/IntroBlock";
import JobListings from "@/components/Careers/JobsListing/JobsListing";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import {
  bannerHeading,
  bannerText,
  processSteps,
  whatWeDoTitle,
  whatWeDos
} from "@/data/CmsPages/Careers";
import "@/styles/Careers.css";

export async function generateMetadata() {
  return {
    title: "Careers at Data on Matrix - Join Our Team of Experts",
    description:
      "Explore exciting career opportunities at Data on Matrix. Join our innovative team and contribute to cutting-edge projects in technology, development, and consulting. Apply today!",
    alternates: {
      canonical: "https://www.dataonmatrix.com/careers",
    },
  };
}

export default function Careers() {
  return (
    <div className="careers custom-banner">
      <PageBanner
        subHeading="Careers at Data on Matrix"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Explore Opportunities"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerCareers}
      />
      <IntroBlock />
      <JobListings />
      <OurProcess
        title="Our Hiring Process"
        description="Process we follow to quickly and efficiently find and onboard the right talent"
        processSteps={processSteps}
      />
      <WhatWeDo
        title={whatWeDoTitle}
        whatWeDos={whatWeDos}
      />
    </div>
  );
}