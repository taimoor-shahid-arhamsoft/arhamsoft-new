import { Animations, Images } from "@/assets/assets";
import GameBanner from "@/components/GameDevelopment/GameBanner/GameBanner";
import AreYouReady from "@/components/Shared/AreYouReadyBlock/AreYouReadyBlock";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ComprehensiveContent from "@/components/Shared/ComprehensiveContent/ComprehensiveContent";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
	bulletContent,
	comprehensiveItems,
	content,
	techImages,
	workSliderData
} from "@/data/Services/GameDevelopment";

export async function generateMetadata() {
	return {
		title: "Custom Game Development Services for All Platforms",
		description: "From concept to launch, our game development services bring your ideas to life with engaging gameplay and smooth UX.",
		keywords: ["Game Development Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/game-development",
		},
	};
}

export default function GameDevelopment() {
	return (
		<div className="services game-development">
			<GameBanner />
			<AreYouReady
				title="Our Services"
				boxColor="orange"
				areYouReadyLottie={Animations.areYouReadyGD}
				content={content}
			/>
			<TextualContentBlock
				subTitle="AI-Powered"
				title="Game Development"
				bulletContent={bulletContent}
				image={Images.imgBannerGD}
			/>
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="We deliver exceptional results with cutting-edge technology and a creative team. Our expertise spans the latest platforms, tech and engines, ensuring your project benefits from the best solutions available."
				techImages={techImages}
			/>
			<ComprehensiveContent
				subTitle="Full-Spectrum"
				title="Gaming Solutions"
				description="From AI consultants to R&D specialists, game developers and big data experts, we assemble an ideal team for each project, ensuring a diverse and efficient approach."
				comprehensiveItems={comprehensiveItems}
			/>
			<LetsDiscuss
				title="Let’s Create a Hit Game"
				description="From concept to reality, our expert team delivers top-tier game development services."
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