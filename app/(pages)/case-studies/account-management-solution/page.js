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
import {
	bannerHeading,
	bannerText,
	challengeKeyPoints,
	expertiseDetails,
	feedbackText,
	industryDetails,
	results,
	solutionTabContent,
	servicesBoxesContent,
	teamDetails,
	techStacks,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/CaseStudies/AccountManagementSolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Account Management System - DataOnMatrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail ams simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Account Management Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerAMS}
			/>
			<ProjectAbout
				title="Client Request"
				description="Novatus Manufacturing, a leading manufacturer of auto parts, faced challenges in managing their diverse customer base efficiently. Their existing account management processes were manual, time-consuming, and prone to errors. They sought a robust, automated solution to streamline operations, improve customer relationships, increase sales, and drive business growth."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The objective of this project was to develop an efficient account management system, equipped with advanced features to enhance sales productivity and customer satisfaction."
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Modules To Be Developed"
					animation={Animations.caseStudyAnimationAMS}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The technical challenges involved in implementing the account management system included:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To overcome these challenges, we adopted a comprehensive approach:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of AMS has yielded significant benefits for our client, including: "
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
				clientName="Paul Byrne"
				clientDesignation="Product Director"
				companyName="Account Management Solution"
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