import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import Modernization from "@/components/DataModernization/Modernization/Modernization";
import Tabber from "@/components/Shared/Tabber/Tabber";
import EmpowerData from "@/components/DataModernization/EmpowerData/EmpowerData";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	boxesContent,
	empowerItems,
	tabHeading,
	tabs,
	workSliderData
} from "@/data/Services/DataModernization";
import "@/styles/DataModernization.css";

export async function generateMetadata() {
	return {
		title: "Data Modernization Services for Scalable Insight - DataonMatrix",
		description: "Data modernization services to migrate legacy systems, unify disparate sources, and enable real-time insights and stronger governance.",
		keywords: ["Data Modernization Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/data-modernization",
		}
	};
}

export default function DataModernization() {
	return (
		<div className="services data-modernization custom-banner">
			<PageBanner
				subHeading="Data Transformation"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Talk to Our Data Expert"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerDatamodern}
				bannerImgAlt="Data Modernization Services"
			/>
			<ThreeColoredBoxes
				title="What We Do"
				text="Risk-proof your data transformation with advanced modernization solutions."
				boxesContent={boxesContent}
			/>
			<Modernization />
			<Tabber
				tabHeading={tabHeading}
				tabsContent={tabs}
			/>
			<EmpowerData
				titleOne="Modernize. The Modern Way"
				titleTwo="Streamline Your Journey to Cloud"
				description="Grow and scale your business with data modernization"
				empowerItems={empowerItems}
			/>
			<LetsDiscuss
				title="Rearchitect Your Data"
				description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
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