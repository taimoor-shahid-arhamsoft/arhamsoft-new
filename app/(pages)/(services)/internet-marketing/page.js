import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import AreYouReady from "@/components/Shared/AreYouReadyBlock/AreYouReadyBlock";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import ComprehensiveContent from "@/components/Shared/ComprehensiveContent/ComprehensiveContent";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import {
	bulletContent,
	comprehensiveItems,
	content,
	bannerHeading,
	bannerText,
	workSliderData
} from "@/data/Services/InternetMarketing";

export async function generateMetadata() {
	return {
		title: "Result-Driven SEO Services to Boost Your Ranking - DataonMatrix",
		description: "Boost rankings with SEO services from DataonMatrix—custom strategies to grow traffic, leads, and visibility for your business.",
		keywords: [ "SEO Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/internet-marketing",
		}
	};
}

export default function SEO() {
	return (
		<div className="services seo custom-banner">
			<PageBanner
				subHeading="SEO Professional Services"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Check My SEO Score"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerSEO}
				bannerImgAlt="SEO Services"
			/>
			<AreYouReady
				title="SEO Services We Offer"
				boxColor="orange"
				areYouReadyLottie={Animations.areYouReadySEO}
				content={content}
			/>
			<TextualContentBlock
				subTitle="Our Four-Step"
				title="Growth Formula"
				bulletContent={bulletContent}
				image={Images.imgBannerSEO}
			/>
			<ComprehensiveContent
				subTitle="Invest In"
				title="Lasting Growth"
				description="Experience robust and intuitive digital marketing solutions designed to enhance engagement and drive conversions."
				comprehensiveItems={comprehensiveItems}
			/>
			<LetsDiscuss
				title="Do You Need Assistance?"
				description="We are here to help optimize your website to rank higher and increase conversions with our data-driven SEO solutions."
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