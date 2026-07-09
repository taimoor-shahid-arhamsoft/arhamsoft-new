import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import WhatInForYou from "@/components/Shared/WhatInForYou/WhatInForYou";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
  bannerHeading,
  bannerText,
  howWeDos,
  skillTitle,
  tabData,
  workSliderData,
  techImages
} from "@/data/Services/AiEnablement";
import "@/styles/AiEnablement.css";

export async function generateMetadata() {
  return {
    title: "AI Enablement Services | Put AI Into Daily Operations | DataOnMatrix",
    description: "We build machine learning, generative AI and automation into the workflows your team runs every week, and stay for the monitoring that keeps it working.",
    keywords: ["AI Enablement Services"],
    alternates: {
      canonical: "https://www.dataonmatrix.com/ai-enablement",
    }
  };
}

export default function AiEnablement() {
  return (
    <div className="services ai-enablement custom-banner">
      <PageBanner
        subHeading="AI Enablement"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Start With One Workflow"
        buttonLink="#contact-us"
        bannerImage={Images.AiMl}
        bannerImgAlt="AI Enablement Services"
      />
      <HowWeDo
        title="What Enablement Covers"
        howWeDos={howWeDos}
      />
      <WhatInForYou
        title={skillTitle}
        tabData={tabData}
        buttonLink={true}
      />
      <TechStacks
				title="Tools & "
				subTitle="Tech We Use"
				techImages={techImages}
			/>
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
}
