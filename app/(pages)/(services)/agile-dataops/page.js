import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import GenerateBusiness from "@/components/GenerateBusiness/GenerateBusiness";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
  bannerHeading,
  bannerText,
  benefits,
  fourBoxesContent,
  howWeDos,
  workSliderData,
  whatWeDoTitle,
  whatWeDos
} from "@/data/Services/AgileDataops";
import "@/styles/AgileDataOps.css";

export async function generateMetadata() {
  return {
    title: "Modern Agile DataOps Services for Reliable Insights - DataonMatrix",
    description: "Agile DataOps services streamline pipelines, ensure data quality, and enable faster insights with automation and feedback loops.",
    keywords: ["Agile DataOps Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/agile-dataops",
		}
  };
}

export default function AgileDataOps() {
  return (
    <div className="services agile-dataops custom-banner">
      <PageBanner
        subHeading="Agile DataOps"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Power Up Your DataOps"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerAiDataOps}
        bannerImgAlt="Agile DataOps Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Extraordinary results look for extraordinary services, for which, we can help you with the following:"
        whatWeDos={whatWeDos}
      />
      <GenerateBusiness
        liteTitle="Unlock"
        title="The Benefits"
        description="We take strategic steps as per your requirements so that you can reap the following benefits:"
        benefits={benefits}
      />
      <FourCounteredBoxes
        title="Work Process"
        description="To deliver the best result, we take the following strategic steps:"
        fourBoxesContent={fourBoxesContent}
      />
      <HowItWorks
        title="Why Choose Us"
        description="Partner with us to unlock new growth opportunities."
        items={howWeDos}
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