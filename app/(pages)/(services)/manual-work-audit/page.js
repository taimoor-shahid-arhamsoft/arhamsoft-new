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
} from "@/data/Services/ManualWorkAudit";
import "@/styles/AIML.css";

export async function generateMetadata() {
	return {
		title: "Manual Work Audit | Business Workflow Automation Services | DataOnMatrix",
		description: "Send us one workflow your team repeats every week. We show where the time goes, what to automate and what should stay human. Get a free consultation.",
		keywords: ["Manual Work Audit"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/manual-work-audit",
		}
	};
}

export default function ManualWorkAudit() {
	return (
		<div className="services ai-mlearing custom-ab-banner">
			<PageBanner
				subHeading="Manual Work Audit"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Start With One Workflow"
				buttonLink="#contact-us"
				bannerImage={Images.ManualWorkAuditBg}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Manual Work Audit"
			/>
			<HowWeDo
				title="What The Audit Uncovers"
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
				title="What We Look For"
				description="The details we check before recommending any automation."
			/>
			<LetsDiscuss
				title="Start With The One Thing"
				description="What's the task your team does every week that everyone quietly hates? Tell us in a sentence. No deck, no pitch."
				buttonText="Send Us One Workflow"
				buttonLink="#contact-us"
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
