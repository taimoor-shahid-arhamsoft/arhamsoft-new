import { cloudinaryImages } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import WhatInForYou from "@/components/Shared/WhatInForYou/WhatInForYou";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
	bannerHeading,
	bannerText,
	howWeDos,
	skillTitle,
	tabData,
	workSliderData,
	techImages
} from "@/data/Services/AIProductReadinessReview";
import "@/styles/ProductReview.css";

export async function generateMetadata() {
	return {
		title: "AI Product Readiness Review | Find What Breaks Before Users Do | DataOnMatrix",
		description: "A fixed-scope review of your AI product: retrieval, evaluation, guardrails, cost and monitoring. Know what breaks first, before you scale.",
		keywords: ["AI Product Readiness Review", "AI Audit Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ai-product-readiness-review",
		}
	};
}

export default function AIProductReadinessReview() {
	return (
		<div className="services ai-product-review custom-ab-banner">
			<PageBanner
				subHeading="Product Readiness"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Book The Review"
				buttonLink="#contact-us"
				bannerImage={cloudinaryImages.AIProductReadinessReview}
				bannerClass="right-side-page-banner"
				bannerImgAlt="AI Product Readiness Review"
			/>
			<HowWeDo
				title="What We Review"
				howWeDos={howWeDos}
			/>
			<WhatInForYou
				title={skillTitle}
				tabData={tabData}
				buttonLink={true}
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
