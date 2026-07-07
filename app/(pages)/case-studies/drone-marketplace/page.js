import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ProjectGoals from "@/components/CaseStudies/ProjectGoals/ProjectGoals";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import OurSolutions from "@/components/CaseStudies/OurSolutions/OurSolutions";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	expertiseDetails,
	feedbackText,
	goals,
	results,
	servicesBoxesContent,
	solutions,
	techStacks,
	teamDetails,
	workSliderData
} from "@/data/CaseStudies/DroneMarketplace";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Drone Marketplace - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail buzz-fli simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Drone Marketplace"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerBuzzFli}
			/>
			<ProjectAbout
				title="Project Overview"
				description="This project involved creating an online platform that automates the process of connecting drone professionals, such as pilots and aerial surveyors, with clients seeking high-quality, cost-effective aerial services. The drone professional marketplace, developed by Data on Matrix, aims to streamline the process and facilitate efficient collaboration between both parties."
			/>
			<ProjectGoals
				title="Project Goals"
				description="The primary objective of this project was to develop a user-friendly, high-performing web application featuring:"
				goals={goals}
			/>
			<ServicesYouGet
				sectionTitle="Challenges"
				sectionText="To achieve these goals, we faced several technical challenges:"
				animation={Animations.caseStudyMaritimeTech}
				animationTwo={Animations.servicesAnimationTwo}
				servicesBoxesContent={servicesBoxesContent}
			/>
			<OurSolutions
				title="Our Solution"
				description="We addressed these challenges through a comprehensive approach:"
				solutions={solutions}
			/>
			<ResultsBlockColored
				title="Results"
				description="We helped BuzzFli become a leading platform for drone professionals."
				results={results}
			/>
			<TeamDetailBlock
				industry="Technology"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technologies to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Simon B"
				clientDesignation="Project Director"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Let's Discuss Your Project"
				description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
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