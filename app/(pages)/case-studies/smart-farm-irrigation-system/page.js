import { Animations, Images, Videos } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import ResultsBlock from "@/components/CaseStudies/ResultsBlock/ResultsBlock";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	challengeKeyPoints,
	expertiseDetails,
	feedbackText,
	firstSection,
	resultSliderImages,
	solutionTabContent,
	teamDetails,
	techStacks,
	whatWeDoTitle,
	whatWeDos,
	workSliderData,
	servicesBoxesContent,
	secondSection
} from "@/data/CaseStudies/SmartFarmIrrigationSystem";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Smart Farm Irrigation System - DataOnMatrix",
		description: "Explore how DataOnMatrix built a real-time irrigation monitoring and alerting platform for large farms that catches machine faults early and reduces water wastage.",
	};
}

export default function SmartFarmIrrigationSystem() {
	return (
		<div className="case-study-detail biiview simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Smart Farm Irrigation System"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom IoT Solution"
				buttonLink="#contact-us"
				banneVideo={Videos.caseStudyBiiView}
			/>
			<ProjectAbout
				title="Problem Statement"
				description="On a large farm, irrigation gear is spread across dozens of fields and almost impossible to watch by hand. A pivot stalls, drifts off schedule, or turns the wrong way — and nobody knows until the crop shows it. By then the water’s already gone and a routine fix has become an urgent one. The client was running blind between field checks: faults surfaced late, water was wasted on over-irrigation and late shutdowns, and every missed problem added cost. They didn’t need more machines. They needed to see what the machines they had were doing."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client wanted a platform that could watch their irrigation operation for them and catch problems early. The solution had to be:"
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					sectionTitle="Our Solution"
					sectionText="We built a real-time monitoring and alerting platform that watches every irrigation machine and helps the team act on problems sooner."
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
					animationCenterImage={Images.imgCSBiiViewAnimation}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="A working farm brought a few real obstacles:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Solution Implementation"
				stagePhaseText="Phase"
				description="Our development process followed a structured methodology:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlock
				title="Results"
				firstSection={firstSection}
				secondSection={secondSection}
				resultSliderImages={resultSliderImages}
			/>
			<TeamDetailBlock
				industry="Agriculture & AgriTech"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="The technology stack used to deliver this project"
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="[Client name]"
				clientDesignation="Farm Operations Lead"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Let's Discuss Your Project"
				description="Our expert team collaborates with you to develop, optimize, and deploy solutions that scale with your business."
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
