import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ProjectGoals from "@/components/CaseStudies/ProjectGoals/ProjectGoals";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import OurSolutions from "@/components/CaseStudies/OurSolutions/OurSolutions";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	expertiseDetails,
	goals,
	results,
	servicesBoxesContent,
	solutions,
	teamDetails,
	techStacks,
	workSliderData
} from "@/data/CaseStudies/DigitalStoreFront";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Digital Storefront - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail market24 simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Digital Storefront"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Custom Solution"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerMarket24}
			/>
			<ProjectAbout
				title="Client Request"
				description="Building a go-to destination for various services to make people’s daily life chores stress-free. To bring this vision to life, they partnered with us to create a high-grade website that delivers a seamless user experience."
			/>
			<ProjectGoals
				title="Project Goals"
				goals={goals}
			/>
			<ServicesYouGet
				sectionTitle="Challenges"
				sectionText="The primary objective was to develop a user-friendly website with seamlessly integrated e-commerce functionality and dynamic content. "
				animation={Animations.caseStudyBuzzFli}
				animationTwo={Animations.servicesAnimationTwo}
				servicesBoxesContent={servicesBoxesContent}
			/>
			<OurSolutions
				title="Our Solution"
				solutions={solutions}
			/>
			<ResultsBlockColored
				title="Results"
				description="The successful implementation of this project has resulted in several benefits for our client:"
				results={results}
			/>
			<TeamDetailBlock
				industry="eCommerce"
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technology stack to deliver this project."
				techStacks={techStacks}
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
