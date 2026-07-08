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
	expertiseDetails,
	feedbackText,
	challengeKeyPoints,
	results,
	servicesBoxesContent,
	solutionTabContent,
	techStacks,
	teamDetails,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/HrmSolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "HRM Solution - DataOnMatrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail lynx-hrm simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="HRM Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom SaaS Solution"
				buttonLink="#contact-us"
				bannerImage={Images.BgBannerLynxHRM}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Our dedicated team of developers assisted Lynx, an HR consulting firm, in developing a high-performing software solution that streamlines workforce management and empowers businesses to focus on strategic objectives. A swiftly developed and highly successful platform that catered to diverse industries and facilitated numerous global partnerships for Lynx Systems Ltd. Within a year, Lynx secured six significant deals with both Fortune 500 companies and mid-market enterprises."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="Lynx wants to expand its market reach and provide a comprehensive HR solution to a wider audience. To achieve this, they required a vendor who can ensure:"
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Modules To Be Developed"
					animation={Animations.caseStudyAnimationLynxHRM}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="Developing a robust and scalable HR solution presents several challenges that require careful consideration. These include:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="We built an innovative SaaS platform to streamline HR processes and enhance customer satisfaction for Lynx and its clients."
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful project completion yielded the following results:"
				results={results}
			/>
			<TeamDetailBlock
				industry="HR Tech"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Byrne Tiziani"
				clientDesignation="Product Owner"
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
