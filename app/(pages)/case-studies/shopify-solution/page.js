import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
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
	teamDetails,
	techStacks,
	workSliderData,
	servicesBoxesContent
} from "@/data/CaseStudies/ShopifySolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Shopify Solution - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail reverse-life simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Shopify Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom Solution"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerReverseLife}
			/>
			<ProjectAbout
				title="Project Overview"
				description="A UK-based brand specializing in nutritional supplements like collagen and vitamins wanted to enhance its online presence and streamline its e-commerce operations. They wanted a visually appealing and user-friendly website to effectively showcase their product line, streamline the online purchasing process, and provide a seamless shopping experience."
			/>
			<div className="client-request">
				<ServicesYouGet
					title="Key Features To Be Delivered"
					animation={Animations.caseStudyAnimationReverseLife}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The primary goal was to create a unified and engaging platform that would resonate with the needs of health-conscious consumers."
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To address these challenges, we implemented a comprehensive solution:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="Implementing a custom Shopify platform has yielded significant improvements in revenue, engagement, and operational efficiency."
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
				clientName="Jane Doe"
				clientDesignation="Managing Director"
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
