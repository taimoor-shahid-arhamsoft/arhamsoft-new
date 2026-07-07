import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowWeDo from "@/components/UiUx/HowWeDo/HowWeDo";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import YouGetNow from "@/components/Shared/YouGetNow/YouGetNow";
import {
	bannerHeading,
	bannerText,
	howWeDoText,
	howWeDos,
	techImages,
	workSliderData
} from "@/data/Services/DevOps";
import "@/styles/DevOps.css";

export async function generateMetadata() {
	return {
		title: "Efficient DevOps Services for Agile Delivery - DataonMatrix",
		description: "Transform your workflow with DevOps services—boost automation, reduce errors, and enable faster, more secure deployments.",
		keywords: ["DevOps Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/devops",
		}
	};
}

export default function DevOps() {
	return (
		<div className="services dev-ops custom-banner">
			<PageBanner
				subHeading="DevOps Enablement"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Start Your DevOps Journey"
				buttonLink="/contact-us"
				bannerImage={Images.devOps}
				bannerImgAlt="DevOps Services"
			/>
			<HowWeDo
				title="Our Services"
				howWeDoText={howWeDoText}
				howWeDos={howWeDos}
			/>
			<YouGetNow />
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="Using high-end DevOps tools, we power up our tech veterans to collaborate efficiently, automate processes and fast-track the most important initiatives, delivering high-quality software to clients at unprecedented speed."
				techImages={techImages}
			/>
			<LetsDiscuss
				title="Let's Brainstorm"
				description="Looking to streamline and automate your software development pipeline? Let’s discuss your personal DevOps strategy."
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