import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import ProjectScopeBlock from "@/components/CaseStudies/ProjectScopeBlock/ProjectScopeBlock";
import {
	bannerHeading,
	bannerText,
	challengeKeyPoints,
	expertiseDetails,
	feedbackText,
	industryDetails,
	leftBlockBullets,
	leftBlockHeading,
	results,
	rightBlockBullets,
	rightBlockHeading,
	servicesBoxesContent,
	solutionTabContent,
	techStacks,
	teamDetails,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/CaseStudies/CustomWebBuilder";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Custom Web Builder - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail control-panda simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Custom Web Builder"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerControlPanda}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Develop a user-friendly website builder that empowers individuals and businesses to create stunning, responsive websites without coding knowledge. The platform should offer a seamless user experience, handle complex designs, and deliver high-performance results across all devices."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client envisioned a website builder that would empower users to create websites without coding knowledge."
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Features To Be Delivered"
					image={Images.controlPandaFeature}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				keyPoints={challengeKeyPoints}
			/>
			<ProjectScopeBlock
				title="Project Scope"
				description="Our primary goal was to design and develop a website builder."
				leftBlockHeading={leftBlockHeading}
				leftBlockBullets={leftBlockBullets}
				rightBlockHeading={rightBlockHeading}
				rightBlockBullets={rightBlockBullets}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To address these challenges, our team adopted a rigorous, agile development methodology:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of the platform has resulted in:"
				results={results}
			/>
			<TeamDetailBlock
				industryDetails={industryDetails}
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Kris Tyson"
				clientDesignation="Product Manager"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
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
