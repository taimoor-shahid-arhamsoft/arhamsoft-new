import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import {
	bannerHeading,
	bannerText,
	fourBoxesContent,
	howWeDoText,
	howWeDos,
	howWeDosIt,
	techImages,
	workSliderData
} from "@/data/Services/AiMachineLearning";
import "@/styles/AIML.css";

export async function generateMetadata() {
	return {
		title: "AI Consulting Services & Machine Learning Consulting Company | DataOnMatrix",
		description: "Most AI gets bought and never used. DataOnMatrix builds AI that changes how work gets done: workflow automation, custom models and production-ready systems. Get a free consultation.",
		keywords: ["AI & Machine Learning Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/ai-and-machine-learning",
		}
	};
}

export default function AiMLearning() {
	return (
		<div className="services ai-mlearing custom-ab-banner">
			<PageBanner
				subHeading="AI & Machine Learning"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Start With One Workflow"
				buttonLink="#contact-us"
				bannerImage={Images.AiMl}
				bannerClass="right-side-page-banner"
				bannerImgAlt="AI & Machine Learning Services"
			/>
			<HowWeDo
				title="Start Where The Work Is"
				howWeDoText={howWeDoText}
				howWeDos={howWeDos}
			/>
			<FourCounteredBoxes
				title="Work Process"
				description="To deliver the best result, we take the following strategic steps:"
				fourBoxesContent={fourBoxesContent}
			/>
			<HowItWorks
				items={howWeDosIt}
				title="Key Expertise"
				description="The core skills behind every build, from the first workflow map to production."
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
				description="Book a free consultation, or just send us one workflow your team repeats every week. A sentence is enough to start."
				buttonText="Schedule Consultation"
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
		</div>
	);
}
