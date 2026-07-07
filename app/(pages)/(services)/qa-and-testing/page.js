import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import Autonomous from "@/components/QaTesting/Autonomous/Autonomous";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import {
	atonomousTitle,
	atomonousDecription,
	bannerHeading,
	bannerText,
	boxesContent,
	howWeDos,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/Services/QATesting";
import "@/styles/QATesting.css";

export async function generateMetadata() {
	return {
		title: "Hire QA Testing Services to Boost Software Reliability - DataonMatrix",
		description: "Hire QA testing services at DataonMatrix to ensure bug-free apps and flawless user experience—trusted testing for modern software.",
		keywords: ["QA Testing Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/qa-and-testing",
		}
	};
}

export default function QATesting() {
	return (
		<div className="services qa-and-testing custom-banner">
			<PageBanner
				subHeading="QA & Testing"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Talk to Our Experts"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerQATesting}
				bannerImgAlt="QA Testing Services"
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="Identify defects and level up performance of your software products with our expertise in the following:"
				whatWeDos={whatWeDos}
			/>
			<ThreeColoredBoxes
				title="Unlock The Benefits"
				boxesContent={boxesContent}
			/>
			<Autonomous
				title={atonomousTitle}
				description={atomonousDecription}
				buttonText="Hire Our QA Experts"
				buttonLink="#contact-us"
				animation={Animations.autonomous}
			/>
			<HowItWorks
				items={howWeDos}
				title="Our Expertise"
				description="We ensure that every test delivers robust and reliable software, leveraging our hands-on experience with tools and technologies such as:"
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