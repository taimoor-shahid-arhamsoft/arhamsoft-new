import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import WhatInForYou from "@/components/Shared/WhatInForYou/WhatInForYou";
import {
  bannerHeading,
  bannerText,
  engagementModels,
  howWeDos,
  skillTitle,
  tabData,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/TeamAugmentation";
import "@/styles/TeamAugmentation.css";

export async function generateMetadata() {
  return {
    title: "Hire Skilled Talent with Team Augmentation Services - DataonMatrix",
    description: "Expand your team quickly and efficiently with expert augmentation services—on-demand talent to strengthen your project delivery.",
    keywords: ["Team Augmentation Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/team-augmentation",
		}
  };
}

export default function TeamAugmentation() {
  return (
    <div className="services team-augmentation custom-banner">
      <PageBanner
        subHeading="Team Augmentation"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Onboard Talent"
        buttonLink="/contact-us"
        bannerImage={Images.teamAug}
        bannerImgAlt="Team Augmentation Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="We improve operational processes and workforce performance by outsourcing expertise to clients that deliver optimal results."
        whatWeDos={whatWeDos}
      />
      <HowWeDo
        title="Onboarding Process"
        howWeDos={howWeDos}
      />
      <WhatInForYou
        title={skillTitle}
        tabData={tabData}
        buttonLink={true}
      />
      <EnagagementModel
        liteTitle="Empowering"
        title="Businesses Globally"
        description="To grow exponentially, we empower our partnered clients with expert professionals who understand business requirements and work closely toward goals."
        engagementModels={engagementModels}
      />
      <LetsDiscuss
        title="Let’s Discuss Your Project"
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