import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import TopDynamics from "@/components/MsDynamics/TopDynamics/TopDynamics";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
	bannerHeading,
	bannerText,
	gridsContent,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/MsDynamics";
import "@/styles/MSDynamics.css";

export async function generateMetadata() {
	return {
		title: "Transform Your Workflow with MS Dynamics Services - DataonMatrix",
		description: "Get tailored MS Dynamics services to improve collaboration, flexibility, speed deployment, and strengthen security across your platform.",
		keywords: ["MS Dynamics Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ms-dynamics",
		}
	};
}

export default function MsDynamics() {
	return (
		<div className="services ms-dynamics custom-banner">
			<PageBanner
				subHeading="Dynamics 365"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Dynamics 365 Services"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerMSDynamics}
				bannerImgAlt="MS Dynamics Services"
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="We improve operational processes and workforce performance by outsourcing expertise to clients that deliver optimal results."
				whatWeDos={whatWeDos}
			/>
			<TopDynamics />
			<MultiColorGrid
				title="Customer Service Capabilities"
				subTitle="Core"
				gridsContent={gridsContent}
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