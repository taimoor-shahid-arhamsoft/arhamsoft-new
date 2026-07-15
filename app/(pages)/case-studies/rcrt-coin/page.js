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
	teamDetails,
	techStacks,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/RcrtCoin";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "RCRTCoin - Data on Matrix",
		alternates: {
			canonical: "https://www.dataonmatrix.com/case-studies/rcrt-coin",
		},
	};
}
export default function Page() {
	return (
		<div className="case-study-detail recruit-coin simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="RCRTCoin"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom Blockchain Solution"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerRecruitCion}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Betts Recruiting, a leading recruitment agency, embarked on a pioneering project to revolutionize the industry with a custom RCRTCoin. By harnessing the power of blockchain technology, Betts aimed to reward individuals for their active participation, referrals, and data contributions to their platform."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="Betts approached us with the following objectives:"
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Key Features To Be Delivered"
					animation={Animations.caseStudyAnimationRecruitCoin}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="During the project, we encountered the following challenges:"
				keyPoints={challengeKeyPoints}
			/>
			<ProjectScopeBlock
				title="Project Scope"
				description="The project scope encompassed the following key areas:"
				leftBlockHeading={leftBlockHeading}
				leftBlockBullets={leftBlockBullets}
				rightBlockHeading={rightBlockHeading}
				rightBlockBullets={rightBlockBullets}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To address these challenges, we implemented a comprehensive solution:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of RCRTCoin has yielded the following outcomes:"
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
				clientName="Glenn M. Philips"
				clientDesignation="VP Product Management"
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