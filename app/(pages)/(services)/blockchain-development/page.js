import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import AreYouReady from "@/components/Shared/AreYouReadyBlock/AreYouReadyBlock";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ComprehensiveContent from "@/components/Shared/ComprehensiveContent/ComprehensiveContent";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
	bannerHeading,
	bannerText,
	bulletContent,
	comprehensiveItems,
	content,
	techImages,
	workSliderData
} from "@/data/Services/BlockChainDevelopment";

export async function generateMetadata() {
	return {
		title: "Custom Blockchain Development Services That Scale - DataonMatrix",
		description: "From strategy to deployment, our blockchain development services help modern businesses innovate with secure tech.",
		keywords: ["blockchain development services | blockchain development company"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/blockchain-development",
		},
	};
}

export default function BlockChainDevelopment() {
	return (
		<div className="services blockchain-development custom-ab-banner">
			<PageBanner
				subHeading="Technology Intelligence"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Custom Blockchain Solutions"
				buttonLink="/contact-us"
				isLotti={true}
				bannerLottie={Animations.bannerBCD}
				bannerImgAlt="blockchain development services"
			/>
			<AreYouReady
				title="Our Services"
				boxColor="blue"
				areYouReadyLottie={Animations.areYouReadyBCD}
				content={content}
			/>
			<TextualContentBlock
				subTitle="Business Benefits of"
				title="Blockchain Technology"
				bulletContent={bulletContent}
				image={Images.imgBannerBCD}
			/>
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="Utilizing a powerful technological infrastructure, we ensure that our solutions are scalable, reliable, and secure."
				techImages={techImages}
			/>
			<ComprehensiveContent
				subTitle="Custom-Fit"
				title="Blockchain Solutions"
				description="We build fully integrated, customized blockchain applications and integrations for multiple industries, delivering added flexibility and scalability."
				comprehensiveItems={comprehensiveItems}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
				description="Initiate a project consultation with us to discover how our innovative solutions can streamline your processes and deliver exceptional value."
				buttonText="Schedule Consultation "
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