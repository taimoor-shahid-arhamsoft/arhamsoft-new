import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import SimpleMulticolorGrid from "@/components/Shared/SimpleMulticolorGrid/SimpleMulticolorGrid";
import {
	bannerHeading,
	bannerText,
	gridsContent,
	gridsContentSimple,
	techImages,
	workSliderData
} from "@/data/Services/AcceleratedDevSecOps";
import "@/styles/AcceleratedDevops.css";

export async function generateMetadata() {
	return {
		title: "Accelerated DevSecOps Services for Zero-Time Risk - DataonMatrix",
		description: "Accelerated DevSecOps services that embed automated security from the start—shift-left testing, faster delivery, scalable compliance.",
		keywords: ["Accelerated DevSecOps Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/accelerated-devSecOps",
		}
	};
}

export default function AcceleratedDevSecOps() {
	return (
		<div className="services accelerated-devops custom-banner">
			<PageBanner
				subHeading="Accelerated DevSecOps"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Transform Your DevSecOps Today"
				buttonLink="/contact-us"
				bannerImage={Images.DevopsBanner}
				bannerImgAlt="Accelerated DevSecOps Services"
			/>
			<SimpleMulticolorGrid
				title="Services We Offer"
				description="Empowering clients to embrace DevSecOps for resilient software."
				gridsContentSimple={gridsContentSimple}
			/>
			<TechStacks
				title="Cutting-Edge"
				subTitle="Technologies"
				description="Plugging objectives in with the following technologies to achieve end goals."
				techImages={techImages}
			/>
			<MultiColorGrid
				title="Accelerate Secure Software Delivery"
				subTitle="Competitive Edge"
				gridsContent={gridsContent}
			/>
			<LetsDiscuss
				title="Let's Discuss Your Project"
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