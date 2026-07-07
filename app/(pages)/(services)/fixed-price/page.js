import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import {
	bannerHeading,
	bannerText,
	fourBoxesContent,
	howWeDos,
	slidesImages,
	workSliderData
} from "@/data/Services/FixedPrice";
import "@/styles/FixedPrice.css";

export async function generateMetadata() {
	return {
		title: "Reliable Fixed Price Solution for Software Projects - DataonMatrix",
		description: "With fixed price services, you know the cost and timeline upfront—perfect for projects with clear requirements and tight budgets.",
		keywords: ["Fixed Price Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/fixed-price",
		}
	};
}

export default function FixedPrice() {
	return (
		<div className="services fixed-price custom-ab-banner">
			<PageBanner
				subHeading="Fixed Price Projects"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Start Your Project Today"
				buttonLink="/contact-us"
				bannerImage={Images.bgFixedPrice}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Fixed Price Services"
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<FourCounteredBoxes
				title="Unlock The Benefits"
				description="Know exactly what you are paying for from the very start."
				fourBoxesContent={fourBoxesContent}
			/>
			<HowItWorks
				items={howWeDos}
				title="Our Work Process"
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