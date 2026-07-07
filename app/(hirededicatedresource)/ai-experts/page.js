import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
	accordionData,
	accordionFaqsData,
	bannerHeading,
	bannerText,
	certifiedMainText,
	developmentFlow,
	expertise,
	expertiseHead,
	expertiseHeadTwo,
	hireMainText,
	servicesData,
	stats,
	steps,
	techImages,
	workSliderData
} from "@/data/HireDedicatedResource/AiExperts";
import "@/styles/AIExperts.css";

export async function generateMetadata() {
	return {
		title: "Hire AI/ML Experts for Smarter Business Solutions - DataonMatrix",
		description: "Hire AI/ML experts at DataonMatrix to build intelligent apps—custom models, precise predictions, real business transformation.",
		keywords: ["AI/ML Experts"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ai-experts",
		}
	};
}

export default function AIExperts() {
	return (
		<div className="hdr ai-experts custom-ab-banner">
			<PageBanner
				subHeading="AI/ML Experts"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Hire Dedicated Team"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerHDRAI}
				bannerClass="right-side-page-banner"
				bannerImgAlt="AI/ML Experts"
			/>
			<HireDeveloper
				title="Our AI Development"
				titleTwo="Services"
				content={hireMainText}
				image={Images.aiExpertHireBanner}
				accordionData={accordionData}
			/>
			<DevelopmentsSolutions
				title="AI Solutions We Offer"
				text="Get comprehensive AI development services, from initial data preparation to post-deployment support."
				developmentFlow={developmentFlow}
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo="AI Expert?"
				desc="We don't babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands:"
				stats={stats}
				buttonText="Let’s Connect"
				buttonLink="/contact-us"
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
			<CertifiedDevelopers
				title="Why Partner With Us"
				content={certifiedMainText}
				servicesData={servicesData}
			/>
			<HireFaqs
				title="Frequently Asked Questions"
				text="Find answers to common queries about our service quality."
				accordionFaqsData={accordionFaqsData}
			/>
			<ExpertQuoteBlockWithRecaptcha
				title={expertiseHead}
				expertise={expertise}
				secondTitle={expertiseHeadTwo}
				steps={steps}
				subHeading="Discuss With Team DoM"
				hireHeading="AI Experts"
			/>
		</div>
	);
}