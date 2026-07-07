import { Images } from "@/assets/assets";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	gridsContent,
	slidesImages,
	techImages,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/CloudTransformation";
import "@/styles/CloudTransformation.css";

export async function generateMetadata() {
	return {
		title: "Secure Cloud Transformation Services for Modern Ops - DataonMatrix",
		description: "Get cloud transformation services that modernize infrastructure, increase agility, and reduce operational costs strategically.",
		keywords: ["Cloud Transformation Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/cloud-transformation",
		}
	};
}

export default function CloudTransformation() {
	return (
		<div className="services cloud-transformation custom-banner">
			<PageBanner
				subHeading="Cloud Transformation"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get In Touch"
				buttonLink="#contact-us"
				bannerImage={Images.BgBannerCliudTransformation}
				bannerImgAlt="Cloud Transformation Services"
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				whatWeDos={whatWeDos}
				description="Driving growth with agile, cost-efficient cloud transformation services for your business."
			/>
			<TechStacks
				title="Cloud Platforms"
				subTitle="We Use"
				description="Find out the leading cloud platforms we leverage to deliver scalable, secure, and innovative solutions."
				techImages={techImages}
			/>
			<MultiColorGrid
				title="With Our Cloud Solutions"
				subTitle="Achieve Greater Efficiency"
				gridsContent={gridsContent}
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
