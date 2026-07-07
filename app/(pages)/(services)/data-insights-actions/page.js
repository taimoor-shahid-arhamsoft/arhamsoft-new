import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import TwoColumns from "@/components/Shared/TwoColumns/TwoColumns";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	boxesContent,
	expertise,
	howWeDos,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/DataInsightsActions";
import "@/styles/DataInsightActions.css";

export async function generateMetadata() {
	return {
		title: "Data Insights & Actions Services for Strategic Growth - DataonMatrix",
		description: "Data insights & actions services that deliver clarity and enable strategic moves—uncover anomalies, trends, and next steps fast.",
		keywords: ["Data Insights & Actions Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/data-insights-actions",
		}
	};
}

export default function DataInsightsActions() {
	return (
		<div className="services data-insigts-actions custom-banner">
			<PageBanner
				subHeading="Data & Analytics"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Connect With Our Experts"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerDataIActions}
				bannerImgAlt="Data Insights & Actions Services"
			/>
			<ThreeColoredBoxes
				title="Core Competencies"
				text="Empowering you to make better business decisions."
				boxesContent={boxesContent}
			/>
			<TwoColumns
				title="Solutions For You"
				description="Explore our data and analytics solutions for enhanced visibility, better insights and proactive decision-making."
				animation={Animations.whatWeDoAnimation}
				expertise={expertise}
				buttonText="Let’s Connect"
				buttonLink="#contact-us"
			/>
			<HowItWorks
				title="Data-Analytics-As-A-Service"
				description="Grow smarter by leveraging the potential of DAaaS for better performance."
				items={howWeDos}
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				whatWeDos={whatWeDos}
			/>
			<LetsDiscuss
				title="Explore What’s Possible"
				description="Are you ready to unlock the benefits of advanced data insights and analytics for your enterprise?"
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