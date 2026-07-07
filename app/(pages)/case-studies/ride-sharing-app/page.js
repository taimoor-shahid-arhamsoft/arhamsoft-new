import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import ProjectScopeBlock from "@/components/CaseStudies/ProjectScopeBlock/ProjectScopeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import ResultsBlock from "@/components/CaseStudies/ResultsBlock/ResultsBlock";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	challengeKeyPoints,
	expertiseDetails,
	feedbackText,
	firstSection,
	leftBlockBullets,
	leftBlockHeading,
	resultSliderImages,
	rightBlockBullets,
	rightBlockHeading,
	secondSection,
	servicesBoxesContent,
	solutionTabContent,
	teamDetails,
	techStacks,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/CaseStudies/RideSharingApp";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Ride-Sharing App by Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail mi-ryde simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Ride-Sharing App"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerMiRide}
			/>
			<ProjectAbout
				title="Project Overview"
				description="A ridesharing platform designed to revolutionize the transportation industry. Our goal was to create a user-friendly and efficient solution for both riders and drivers, streamlining the process of requesting and providing rides."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="A transportation network company (TNC) wanted to transform their taxi booking platform into a comprehensive mobility solution for riders, drivers, and fleet managers. Their vision was to create a platform that would cater to a diverse range of transportation needs, including:"
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Key Features To Be Delivered"
					animation={Animations.caseStudyAnimationMiryde}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
					animationCenterImage={Images.logoMiRyde}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The project complexity brought forth the following challenges:"
				keyPoints={challengeKeyPoints}
			/>
			<ProjectScopeBlock
				title="Project Scope"
				description="In developing this project, our goal was to build a comprehensive transportation platform that would:"
				leftBlockHeading={leftBlockHeading}
				leftBlockBullets={leftBlockBullets}
				rightBlockHeading={rightBlockHeading}
				rightBlockBullets={rightBlockBullets}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="We implemented a comprehensive solution to meet all of the client's specific requirements."
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlock
				title="Results"
				description="In creating MiRyde, our goal was to build a comprehensive transportation platform that would:"
				firstSection={firstSection}
				secondSection={secondSection}
				resultSliderImages={resultSliderImages}
			/>
			<TeamDetailBlock
				industry="Transportation"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Riz Victor"
				clientDesignation="Product Development Manager"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Let's Discuss Your Project"
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
