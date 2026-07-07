import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import AreYouReady from "@/components/Shared/AreYouReadyBlock/AreYouReadyBlock";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import ComprehensiveContent from "@/components/Shared/ComprehensiveContent/ComprehensiveContent";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
	bannerHeading,
	bannerText,
	bulletContent,
	comprehensiveItems,
	content,
	workSliderData
} from "@/data/Services/DesktopDevelopment";

export async function generateMetadata() {
	return {
		title: "Custom Desktop App Development Services - DataonMatrix",
		description: "Get custom desktop applications tailored to your needs—secure, offline-capable, hardware-integrated, and optimized for speed.",
		keywords: ["Desktop App Development Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/desktop-development",
		}
	};
}

export default function DesktopDevelopment() {
	return (
		<div className="services desktop-development custom-ab-banner">
			<PageBanner
				subHeading="Desktop Development"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get in Touch"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerDskDvlpmnt}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Desktop App Development Services"
			/>
			<AreYouReady
				title="Holistic Desktop App Services"
				boxColor="farozi"
				areYouReadyLottie={Animations.areYouReadyDD}
				content={content}
			/>
			<TextualContentBlock
				subTitle="Our Five-Pillar Approach"
				title="To Desktop Development"
				bulletContent={bulletContent}
				image={Images.imgBannerDsktDplmnt}
			/>
			<ComprehensiveContent
				subTitle="Robust"
				title="Desktop Solutions"
				description="Develop dynamic and responsive desktop applications optimized for speed, performance and scalability."
				comprehensiveItems={comprehensiveItems}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
				description="You have a groundbreaking idea, and we have the expertise to transform it into a tangible, clickable reality."
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
