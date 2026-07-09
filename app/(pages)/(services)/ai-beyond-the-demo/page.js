import { cloudinaryImages } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import {
	bannerHeading,
	bannerText,
	fourBoxesContent,
	howWeDoText,
	howWeDos,
	howWeDosIt,
	workSliderData
} from "@/data/Services/AIBeyondTheDemo";
import "@/styles/AIML.css";

export async function generateMetadata() {
	return {
		title: "AI Beyond the Demo | Our Approach | DataOnMatrix",
		description: "Discover how DataOnMatrix takes AI beyond the demo with a proven approach to strategy, implementation, and scalable AI solutions that deliver measurable business results.",
		keywords: ["AI Beyond the Demo"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ai-beyond-the-demo",
		}
	};
}

export default function AIBeyondTheDemo() {
	return (
		<div className="services ai-mlearing custom-ab-banner">
			<PageBanner
				subHeading="Our Approach"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Start With One Workflow"
				buttonLink="#contact-us"
				bannerImage={cloudinaryImages.AIBeyondTheDemo}
				bannerClass="right-side-page-banner"
				bannerImgAlt="AI Beyond The Demo"
			/>
			<HowWeDo
				title="Why AI Projects Stall"
				howWeDoText={howWeDoText}
				howWeDos={howWeDos}
			/>
			<FourCounteredBoxes
				title="How We Work Instead"
				description="To deliver the best result, we take the following strategic steps:"
				fourBoxesContent={fourBoxesContent}
			/>
			<HowItWorks
				items={howWeDosIt}
				title="What Changes For Your Business"
				description="The difference shows up in the workweek, not the slide deck."
			/>
			<LetsDiscuss
				title="If Your AI Changed Nothing"
				description="You're not behind. You just bought the demo. The useful version starts with one workflow, not a roadmap."
				buttonText="Start With One Workflow"
				buttonLink="#contact-us"
			/>
			<WorkSlider
				title="Case Studies"
				description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
				workSliderData={workSliderData}
			/>
		</div>
	);
}
