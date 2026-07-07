import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import DevelopmentServices from "@/components/HireDedicatedResource/DevelopmentServices/DevelopmentServices";
import {
	bannerHeading,
	bannerText,
	challengeKeyPoints,
	developmentServices,
	expertiseDetails,
	feedbackText,
	industryDetails,
	results,
	solutionTabContent,
	teamDetails,
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/OdooIntegration";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Odoo Integration - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail odoo-integration simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Odoo Integration"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Quickstart Your Odoo Journey"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerOdooIntegration}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Oakland Real Estate, a leading provider of residential and commercial real estate services, sought to enhance its customer relationship management (CRM) capabilities by integrating a robust dialer solution with Odoo 17. The primary goal was to streamline outbound and inbound call operations, improve agent productivity, and gain valuable insights from call data."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client’s specific requirements included:"
					whatWeDos={whatWeDos}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="Our analysis revealed several obstacles impeding the client's business growth and operational efficiency."
				keyPoints={challengeKeyPoints}
			/>
			<DevelopmentServices
				title="Our Solution"
				description="To address these requirements, we implemented a comprehensive Odoo integration solution:"
				developmentServices={developmentServices}
			/>
			<OurSolutionsTaber
				title="Project Execution"
				stagePhaseText="Phase"
				description="The project was successfully executed and delivered on time and within budget, meeting all client requirements."
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful integration of Odoo 17 with the Call Mantra dialer has yielded significant benefits for our client."
				results={results}
			/>
			<TeamDetailBlock
				industryDetails={industryDetails}
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="William Jane"
				clientDesignation="Project Head "
				companyName="Oakland Real Estate"
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
