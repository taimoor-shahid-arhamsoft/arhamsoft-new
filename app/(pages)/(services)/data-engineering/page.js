import { Images } from "@/assets/assets";
import BenefitsOfDataEng from "@/components/BenefitsOfDataEng/BenefitsOfDataEng";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	boxesContent,
	howWeDos,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/DataEngineering";
import "@/styles/DataEngineering.css";

export async function generateMetadata() {
	return {
		title: "Tailored Data Engineering Services to Boost Insights - DataonMatrix",
		description: "Get data engineering services that ensure quality, integrate diverse sources, and empower analytics and machine learning workflows.",
		keywords: ["Data Engineering Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/data-engineering",
		}
	};
}

export default function DataEngineering() {
	return (
		<div className="services data-engineering custom-banner">
			<PageBanner
				subHeading="Data Solutions"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Talk to Our Data Expert"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerDataEngineering}
				bannerImgAlt="Data Engineering Services"
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="Empower innovation with our best-in-breed data solutions."
				whatWeDos={whatWeDos}
			/>
			<BenefitsOfDataEng />
			<ThreeColoredBoxes
				title="What Sets Us Apart?"
				text="Empowering organizations to gain complete control over their data pipelines."
				boxesContent={boxesContent}
			/>
			<HowItWorks
				title="Our Expertise "
				description="Developing a high-quality data infrastructure for your organization."
				items={howWeDos}
			/>
			<LetsDiscuss
				title="Build Your Cloud Data"
				description="Ready to unlock the power of your cloud data? Let our experts help you get started."
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