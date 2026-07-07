import { Animations, Images } from "@/assets/assets";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import {
  bannerHeading,
  bannerText,
  howWeDoText,
  howWeDos,
  workSliderData,
  whatWeDoTitle,
  whatWeDos
} from "@/data/Services/UIUX";
import "@/styles/UIUX.css";

export async function generateMetadata() {
  return {
    title: "Custom Design Solutions for Web, Brand & UI/UX - DataonMatrix",
    description: "Create flawless user journeys with custom UI/UX services focused on clarity, performance, and experience.",
    keywords: ["Graphic Designing Services | Graphic designing Company"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/design-graphics",
		},
  };
}

export default function UIUX() {
  return (
    <div className="services ui-ux custom-banner">
      <PageBanner
        subHeading="UI/UX Design"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get Captivating Designs"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerUIUX}
        bgBannerBeforeAfter={Animations.bgBannerBeforeAfter}
        lottieBannerOne={true}
        lottieBannerTwo={true}
        bannerImgAlt="Web and Graphic Design Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="A creative and strategic blend that defines our design process includes:"
        whatWeDos={whatWeDos}
      />
      <HowWeDo
        title="Work Process"
        howWeDoText={howWeDoText}
        howWeDos={howWeDos}
      />
      <div className="content-top-section">
        <LetsDiscuss
          title="Let’s Discuss Your Project "
          description="Book a free consultation today to find out the outcomes we could drive for your business."
          buttonText="Schedule Consultation"
          buttonLink="/contact-us"
        />
      </div>
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
}