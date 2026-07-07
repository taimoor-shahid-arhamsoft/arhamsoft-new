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
} from "@/data/CaseStudies/DefiSolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "DeFi Solution - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail annex-finance simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="DeFi Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom Blockchain Solution"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerAnnexFinance}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Developing a DeFi solution on the Binance Smart Chain (BSC) to bridge the gap between traditional finance and blockchain technology by offering a comprehensive suite of financial services, including borderless stablecoins and a decentralized marketplace for lenders and borrowers. The platform prioritizes user experience, performance, and security to provide a seamless and secure financial ecosystem."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client approached us for developing a robust, scalable, and secure decentralized finance platform on Binance Smart Chain."
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Key Features To Be Delivered"
					animation={Animations.caseStudyAnimationAnnexFinance}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="Here are some challenges our developers faced while developing this platform:"
				keyPoints={challengeKeyPoints}
			/>
			<ProjectScopeBlock
				title="Project Scope"
				description="To successfully translate the technical design into a fully functional and operational system and deploy it to production."
				leftBlockHeading={leftBlockHeading}
				leftBlockBullets={leftBlockBullets}
				rightBlockHeading={rightBlockHeading}
				rightBlockBullets={rightBlockBullets}
			/>
			<OurSolutionsTaber
				title="Solution Implementation"
				stagePhaseText="Phase"
				description="Our project development process adheres to a structured methodology, encompassing:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="Our custom blockchain solution has become a leading force in the DeFi space."
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
				clientName="Mark Lamb"
				clientDesignation="Product Lead"
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
