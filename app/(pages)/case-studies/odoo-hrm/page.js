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
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import {
	bannerHeading,
	bannerText,
	bulletContent,
	challengeKeyPoints,
	expertiseDetails,
	feedbackText,
	industryDetails,
	results,
	solutionTabContent,
	teamDetails,
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/OdooHrm";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Odoo HRM - Data on Matrix",
		alternates: {
			canonical: "https://www.dataonmatrix.com/case-studies/odoo-hrm",
		},
	};
}

export default function Page() {
	return (
		<div className="case-study-detail odoo-hrm simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Odoo HRM"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Custom Odoo Implementation"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerOdooHRM}
			/>
			<ProjectAbout
				title="Problem Statement"
				description="The client was facing significant challenges in managing its human resources that resulted in time-consuming tasks, errors, and difficulties in adhering to company policies and procedures and industry best practices."
			/>
			<ChallengeBlock
				title="Challenges"
				description="We identified several HR-related challenges that hampered the client’s business growth and operational efficiency."
				keyPoints={challengeKeyPoints}
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="To address the client's specific needs, we propose a comprehensive Odoo HR solution integrated with accounting. This solution was intended to streamline HR operations, enhance efficiency, and ensure compliance with financial regulations. The solution includes:"
					whatWeDos={whatWeDos}
				/>
			</div>
			<TextualContentBlock
				sectionHeading="Custom Odoo Implementation"
				sectionDescription="To tailor the Odoo HR solution to the client's specific needs, we implemented several key customizations to address advanced workflows and specific scenarios. "
				bulletContent={bulletContent}
				image={Images.imageOdooHrm}
			/>
			<OurSolutionsTaber
				title="Project Execution"
				stagePhaseText="Phase"
				description="The project was successfully executed and delivered on time and within budget, meeting the client requirements."
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The implementation of Odoo HR has yielded significant benefits for the client:"
				results={results}
			/>
			<TeamDetailBlock
				industryDetails={industryDetails}
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Olu Michael"
				clientDesignation="CTO, DigiAnt"
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
