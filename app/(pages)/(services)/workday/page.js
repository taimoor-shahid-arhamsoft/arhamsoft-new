import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import Tabber from "@/components/Shared/Tabber/Tabber";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
  bannerHeading,
  bannerText,
  howWeDos,
  tabs,
  tabHeading,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/Workday";
import "@/styles/Workday.css";

export async function generateMetadata() {
  return {
    title: "Scalable Workday Consulting Services for Enterprises - DataonMatrix",
    description: "Enhance efficiency with Workday consulting services—streamline operations, gain insights, and achieve scalable cloud HR and finance integration.",
    keywords: ["Workday Consulting Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/workday",
		}
  };
}

export default function Workday() {
  return (
    <div className="services workday-page custom-banner">
      <PageBanner
        subHeading="Workday Consulting Services"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Unlock Workday Potential"
        buttonLink="#contact-us"
        bannerImage={Images.WorkdayBanner}
        bannerImgAlt="Workday Consulting Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Simplify workday adoption for smarter workforce management"
        whatWeDos={whatWeDos}
      />
      <HowItWorks
        items={howWeDos}
        title="Key Expertise"
        description="Through years of consistent practice, we have honed our core expertise to deliver on our commitments."
      />
      <Tabber
        tabHeading={tabHeading}
        description="Enhance productivity and streamline HR & financial workflows with tailored models that drive business success."
        tabsContent={tabs}
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