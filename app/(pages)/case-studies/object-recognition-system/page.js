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
} from "@/data/CaseStudies/ObjectRecognitionSystem";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Object Recognition System - Data on Matrix",
		description: "Explore our AI-powered Object Recognition System that uses advanced computer vision to identify objects, automate workflows, and improve operational efficiency.",
	};
}

export default function BiiView() {
	return (
		<div className="case-study-detail biiview simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Object Recognition System"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom AI Solution"
				buttonLink="#contact-us"
				banneVideo={Videos.caseStudyBiiView}
			/>
			<ProjectAbout
				title="Problem Statement"
				description="The client's goal was to revolutionize video marketing through an AI-powered platform. However, they were hindered by the manual process of video analysis, which was time-consuming and error-prone. The primary challenge was to automate the detection, recognition, and extraction of objects from video content to improve efficiency and accuracy."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The product owner sought a solution that could automate the analysis of video content and help businesses improve their video marketing campaigns. The solution should be:"
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					sectionTitle="Our Solution"
					sectionText="To meet the client's needs, we developed an AI-powered solution that leverages machine learning to deliver:"
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
					animationCenterImage={Images.imgCSBiiViewAnimation}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The intricate nature of the project led to several challenges, including:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Solution Implementation"
				stagePhaseText="Phase"
				description="Our project development process adheres to a structured methodology, encompassing:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlock
				title="Results"
				firstSection={firstSection}
				secondSection={secondSection}
				resultSliderImages={resultSliderImages}
			/>
			<TeamDetailBlock
				industry="Advertising & Marketing"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Sean Bain"
				clientDesignation="Product Owner"
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
