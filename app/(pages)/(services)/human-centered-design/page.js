import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import {
	bannerHeading,
	bannerText,
	gridsContent,
	howWeDoText,
	howWeDos,
	workSliderData
} from "@/data/Services/HumanCenteredDesign";
import "@/styles/HumanCenteredDesign.css";

export async function generateMetadata() {
	return {
		title: "User-First Human Centered Design Solutions - DataonMatrix",
		description: "Human centered design that blends creativity, usability, and empathy for better user engagement.",
		keywords: ["Human Centered Design"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/human-centered-design",
		}
	};
}

export default function HumanCenteredDesign() {
	return (
		<div className="services human-centered-design custom-ab-banner">
			<PageBanner
				subHeading="Human-Centered Design"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Elevate Your Product with HCD"
				buttonLink="/contact-us"
				bannerImage={Images.HUmanCenBanner}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Human Centered Design"
			/>
			<HowWeDo
				title="Services We Offer"
				howWeDoText={howWeDoText}
				howWeDos={howWeDos}
			/>
			<MultiColorGrid
				title="Foster Loyalty Through Thoughtful Designs"
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