import { cloudinaryImages } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
	bannerHeading,
	bannerText,
	fourBoxesContent,
	howWeDoText,
	howWeDos,
	howWeDosIt,
	techImages,
	workSliderData
} from "@/data/Services/AIProductReadinessReview";
import "@/styles/AIML.css";

export async function generateMetadata() {
	return {
		title: "AI Product Readiness Review | AI Audit Services | DataOnMatrix",
		description: "Scaling an AI product? We review retrieval, evaluation, guardrails, cost and monitoring to find what breaks first. Get a free consultation.",
		keywords: ["AI Product Readiness Review"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ai-product-readiness-review",
		}
	};
}

export default function AIProductReadinessReview() {
	return (
		<div className="services ai-mlearing custom-ab-banner">
			<PageBanner
				subHeading="AI Product Readiness Review"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Book The Review"
				buttonLink="#contact-us"
				bannerImage={cloudinaryImages.AIProductReadinessReview}
				bannerClass="right-side-page-banner"
				bannerImgAlt="AI Product Readiness Review"
			/>
			<HowWeDo
				title="What The Review Covers"
				howWeDoText={howWeDoText}
				howWeDos={howWeDos}
			/>
			<FourCounteredBoxes
				title="Work Process"
				description="To deliver the best result, we take the following strategic steps:"
				fourBoxesContent={fourBoxesContent}
			/>
			<HowItWorks
				items={howWeDosIt}
				title="Where AI Products Break"
				description="The failure points that surface after launch, not in the demo."
			/>
			<LetsDiscuss
				title="Better You Find It Than Your Users"
				description="Send us the one thing you're unsure about. The first read is free and useful either way."
				buttonText="Book The Review"
				buttonLink="#contact-us"
			/>
			<TechStacks
				title="Tools & "
				subTitle="Tech We Use"
				techImages={techImages}
			/>
			<WorkSlider
				title="Case Studies"
				description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
				workSliderData={workSliderData}
			/>
		</div>
	);
}
