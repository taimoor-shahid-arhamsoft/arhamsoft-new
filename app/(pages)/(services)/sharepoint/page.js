import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	boxesContent,
	bulletContent,
	fourBoxesContent,
	gridsContent,
	workSliderData
} from "@/data/Services/Sharepoint";
import "@/styles/SharePoint.css";

export async function generateMetadata() {
	return {
		title: "Custom SharePoint Services to Drive Productivity - DataonMatrix",
		description: "Get SharePoint services that centralize file management, streamline approvals, and support remote access across devices.",
		keywords: ["SharePoint Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/sharepoint",
		}
	};
}

export default function Sharepoint() {
	return (
		<div className="services share-point custom-banner">
			<PageBanner
				subHeading="SharePoint"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get in touch"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerSharepoint}
				bannerImgAlt="SharePoint Services"
			/>
			<FourCounteredBoxes
				title="Our Services"
				description="Extraordinary results look for extraordinary services, for which, we can help you with the following:"
				fourBoxesContent={fourBoxesContent}
			/>
			<TextualContentBlock
				subTitle="Boost Team"
				title="Productivity"
				bulletContent={bulletContent}
				image={Images.bgBannerSteamlinedTeam}
			/>
			<ThreeColoredBoxes
				title="Our Approach"
				boxesContent={boxesContent}
			/>
			<MultiColorGrid
				title="Unlock The DoM Edge"
				subTitle="Why Choose Us"
				gridsContent={gridsContent}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
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
