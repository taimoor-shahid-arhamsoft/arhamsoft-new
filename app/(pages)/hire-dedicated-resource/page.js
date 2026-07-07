import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import Achievemnets from "@/components/Homepage/Achievements/Achievements";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import Reviews from "@/components/Shared/Reviews/Reviews";
import WhyUs from "@/components/HireDedicatedResource/WhyUs/WhyUs";
import OnboardingProcess from "@/components/HireDedicatedResource/OnboardingProcess/OnboardingProcess";
import { Images } from "@/assets/assets";
import BestMatch from "@/components/HireDedicatedResource/BestMatch/BestMatch";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import Tabber from "@/components/Shared/Tabber/Tabber";
import {
  bestMatchHeading,
  bannerHeading,
  bestMap,
  gridsContent,
  onBoardingData,
  reviewTitle,
  stats,
  tabHeading,
  tabs,
  technologyOptions,
  whatWeDoTitle,
  whatWeDos,
  whyUs
} from "@/data/Pages/HireDedicatedResource";
import "@/styles/HireDedicatedResource.css";

export async function generateMetadata() {
  return {
    title: "Scalable Teams – Hire Dedicated Resources Today - DataonMatrix",
    description: "Hire dedicated developers from DataonMatrix—flexible, full-time resources to build custom web, mobile, or software solutions.",
    keywords: ["Hire Dedicated Developers"],
    alternates: {
			canonical:"https://www.dataonmatrix.com/hire-dedicated-resource",
		}
  };
}
export default function HireDedicatedResources() {
  return (
    <div className="hire-dedicated-resource developers-page">
      <PageBannerWithRecaptcha technologyOptions={technologyOptions} />
      <WhyUs
        buttonLink="#contact-us"
        buttonText="Talk to Team DoM"
        whyUs={whyUs}
      />
      <OnboardingProcess
        subHeading="3 Simple Steps"
        heading={bannerHeading}
        bannerImage={Images.onBoardingProcess}
        buttonText="Book a free consultation"
        buttonLink="#contact-us"
        onBoardingData={onBoardingData}
      />
      <MultiColorGrid
        title="IT Support Outsourcing Models"
        description="Reduce recruitment costs and save hours by accomplishing time-intensive tasks with people-powered & expertise-led technology."
        gridsContent={gridsContent}
      />
      <BestMatch
        heading={bestMatchHeading}
        text="Onboard Team DoM to share your workload, boost efficiency & save money. Stay focused on your business while we accomplish your projects."
        bestMap={bestMap}
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Streamline operations and ensure round-the-clock IT support by outsourcing IT development services to our team."
        whatWeDos={whatWeDos}
      />
      <Tabber
        tabHeading={tabHeading}
        tabsContent={tabs}
      />
      <LetsDiscuss
        title="Let's Discuss Your Project"
        description="Book a free consultation today to find out the outcomes we could drive for your business."
        buttonText="Schedule Consultation"
        buttonLink="#contact-us"
      />
      <Achievemnets />
      <div className="invo-review position-relative">
        <StatsBlock
          mainHeading="Impact We Made"
          stats={stats}
          buttonText="Partner Up"
          buttonLink="#contact-us"
        />
        <Reviews title={reviewTitle} />
      </div>
    </div>
  );
}
