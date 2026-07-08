import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import ProjectScopeBlock from "@/components/CaseStudies/ProjectScopeBlock/ProjectScopeBlock";
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
	leftBlockBullets,
	leftBlockHeading,
	results,
	rightBlockBullets,
	rightBlockHeading,
	solutionTabContent,
	servicesBoxesContent,
	techStacks,
	teamDetails,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/CaseStudies/BlockchainSolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Blockchain Solution - DataOnMatrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail dayta simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Blockchain Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="#contact-us"
				bannerImage={Images.BgBannerDayta}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Building a unique personal data service platform that combines the user needs for security with the financial need for compensation of their data’s usage. Moreover, it creates an ecosystem in which marketing and data analytics industries are disrupted, with the users at the center of financial gain and complete control over their personal data. Individuals can manage, monitor and trade their personal information with companies in exchange for custom tokens."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="A visionary tech startup approached us with a bold mission: to revolutionize the way individuals interact with their personal data."
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Features To Be Delivered"
					servicesBoxesContent={servicesBoxesContent}
					image={Images.daytaKeyFeature}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The project presented several significant challenges:"
				keyPoints={challengeKeyPoints}
			/>
			<ProjectScopeBlock
				title="Project Scope"
				description="The project scope encompassed the development of a comprehensive data management platform, incorporating blockchain technology to ensure transparency, security, and user autonomy. Key areas of focus included:"
				leftBlockHeading={leftBlockHeading}
				leftBlockBullets={leftBlockBullets}
				rightBlockHeading={rightBlockHeading}
				rightBlockBullets={rightBlockBullets}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To address these challenges, we implemented a multi-faceted solution, following a structured project methodology:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of the platform has led to several significant outcomes:"
				results={results}
			/>
			<TeamDetailBlock
				industry="FinTech"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Tony Lockwood"
				clientDesignation="Co-Founder"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title=" Let’s Discuss Your Project"
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