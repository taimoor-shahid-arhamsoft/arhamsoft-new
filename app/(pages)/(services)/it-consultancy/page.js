import { Images } from "@/assets/assets";
import GenerateBusiness from "@/components/GenerateBusiness/GenerateBusiness";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import TwoKubernetes from "@/components/Shared/TwoKubernetes/TwoKubernetes";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import {
  bannerHeading,
  bannerText,
  benefits,
  bulletContent,
  howWeDos,
  kubernetes,
  whatWeDoTitle,
  whatWeDos,
  workSliderData
} from "@/data/Services/ITConsultancy";
import "@/styles/ITConsultancy.css";

export async function generateMetadata() {
  return {
    title: "Expert IT Consulting Services for Business Growth - DataonMatrix",
    description: "Empower your business with IT consulting services—cut costs, boost efficiency, and leverage expert technology strategy.",
    keywords: ["IT Consulting Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/it-consultancy",
		}
  };
}

export default function ItConsultancy() {
  return (
    <div className="services it-consultancy custom-banner">
      <PageBanner
        subHeading="IT Consultancy"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Request Expert Advice"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerItConsultancy}
        bannerImgAlt="IT Consulting Services"
      />
      <WhatWeDo
        title={whatWeDoTitle}
        description="Our advisors help you make your business agile at scale."
        whatWeDos={whatWeDos}
      />
      <HowWeDo
        title="Core Areas of Software Consulting"
        howWeDos={howWeDos}
      />
      <TwoKubernetes
        subTitle="IT Service"
        title="Management"
        kubernetes={kubernetes}
      />
      <GenerateBusiness
        liteTitle="Safeguard Your Business"
        title="Managed Security Services"
        description="Our consultants provide the guidance and expertise to manage risk, build resilience and ensure your organization's ongoing security."
        benefits={benefits}
      />
      <TextualContentBlock
        subTitle="Why Data on Matrix for"
        title="IT Solutions Services"
        bulletContent={bulletContent}
        image={Images.bgBannerSteamlinedTeam}
      />
      <LetsDiscuss
        title="Let’s Discuss Your Project"
        description="Are you looking for expert technology and IT consultants? Let us guide you towards optimal solutions."
        buttonText="Get Free Consultation"
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
