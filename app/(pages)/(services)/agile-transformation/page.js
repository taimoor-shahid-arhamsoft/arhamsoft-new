import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import TwoKubernetes from "@/components/Shared/TwoKubernetes/TwoKubernetes";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	boxesContent,
	kubernetes,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/AgileTransformation";

export async function generateMetadata() {
	return {
		title: "Hire Agile Transformation Experts at DataonMatrix",
		description: "Hire agile transformation services to help businesses adopt agile practices—faster results with lasting impact.",
		keywords: ["Agile Transformation Services"],
		alternates: {
			canonical: "https://arhamsoft.u-server.arhamsoft.dev/agile-transformation",
		}
	};
}

export default function AgileTransformation() {
	return (
		<div className="services agile-transformation custom-banner">
			<PageBanner
				subHeading="Agile Transformation"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Transform My Business"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerAgileTransformation}
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="Embrace agility with transformative solutions."
				whatWeDos={whatWeDos}
			/>
			<ThreeColoredBoxes
				title="Modern Enterprise Agility"
				boxesContent={boxesContent}
			/>
			<TwoKubernetes
				subTitle="Agile"
				title="Value-Based Delivery"
				kubernetes={kubernetes}
			/>
			<LetsDiscuss
				title="Let’s Brainstorm"
				description="Looking to transform your business for the digital age with agile practices? Our experts will equip you with the required knowledge, skills and solutions."
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