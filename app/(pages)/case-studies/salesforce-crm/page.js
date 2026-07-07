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
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/SalesforceCrm";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Salesforce CRM - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail salesforce-crm simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Salesforce CRM"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get A Custom Salesforce Solution "
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerSalesForceCRM}
			/>
			<ProjectAbout
				title="Problem Statement"
				description="The client was facing difficulties in managing customer relationships, optimizing sales processes, and maintaining a clear overview of their business operations across multiple regions."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client's specific requirements were multifaceted, encompassing a wide range of technical specifications and functional needs."
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Key Features Delivered"
					animation={Animations.caseStudyAnimationSalesForceCRM}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="We identified several challenges that hampered our client’s business growth and operational efficiency:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Solution Implementation"
				stagePhaseText="Phase"
				description="We proposed a comprehensive Salesforce CRM implementation tailored to the client requirements. The goal was to unify operations, improve sales performance, and enable data-driven decision-making."
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of Salesforce CRM yielded significant results for our client.  "
				results={results}
			/>
			<TeamDetailBlock
				industryDetails={industryDetails}
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Elijah Maysum"
				clientDesignation="Project Head"
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
			/>
		</div>
	);
}
