import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ProjectGoals from "@/components/CaseStudies/ProjectGoals/ProjectGoals";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import OurSolutions from "@/components/CaseStudies/OurSolutions/OurSolutions";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
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
} from "@/data/CaseStudies/HeavyDutyEquip";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Heavy-Duty Equip - DataOnMatrix",
	};
}

export default function MaritimeTechnology() {
	return (
		<div className="case-study-detail maritime-tech simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Heavy-Duty Equip"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerMAritimeTech}
			/>
			<ProjectAbout
				title="Client Request"
				description="Our client, a leading player in the heavy machinery industry, required a digital solution to streamline their operations coupled with enhanced online presence. They aimed to create a robust web platform that would enable their suppliers to easily list and manage their equipment products and services, while providing a seamless experience for potential buyers to discover and compare relevant offerings."
			/>
			<ProjectGoals
				title="Project Goals"
				description="The primary objective of this project was to develop a user-friendly, high-performing web application."
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
				description="To overcome these challenges, we adopted a comprehensive approach:"
				solutions={solutions}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of this project has resulted in several benefits for our client:"
				results={results}
			/>
			<TeamDetailBlock
				industry="Merchandising"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technologies to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Kevin"
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

