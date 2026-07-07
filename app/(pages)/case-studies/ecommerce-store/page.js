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
	industryDetails,
	results,
	servicesBoxesContent,
	solutions,
	techStacks,
	teamDetails,
	workSliderData
} from "@/data/CaseStudies/EcommerceStore";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Ecommerce Store - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail geni-hair simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Ecommerce Store"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Your Ecommerce Solution"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerGeniHair}
			/>
			<ProjectAbout
				title="Project Overview"
				description="A premium hair care brand specialized in natural hair products wanted to cater to a diverse customer base worldwide. The brand focuses on providing high-quality, eco-friendly products designed to enhance hair health and beauty. With a growing market demand, the brand owner sought an eCommerce platform that could accommodate their expanding business needs and deliver a seamless shopping experience to their customers."
			/>
			<ProjectGoals
				title="Project Goals"
				description="To achieve our vision of providing a custom eCommerce solution, we set the following project goals:"
				goals={goals}
			/>
			<ServicesYouGet
				sectionTitle="Challenges"
				sectionText="The project team encountered several challenges throughout the development process, including:"
				animation={Animations.caseStudyMaritimeTech}
				animationTwo={Animations.servicesAnimationTwo}
				servicesBoxesContent={servicesBoxesContent}
			/>
			<OurSolutions
				title="Our Solution"
				description="We implemented Shopify, a powerful and versatile eCommerce platform, to meet the requirements of GENI Hair."
				solutions={solutions}
			/>
			<ResultsBlockColored
				title="Results"
				description="This project has delivered substantial value to our client."
				results={results}
			/>
			<TeamDetailBlock
				industryDetails={industryDetails}
				teamDetails={teamDetails}
				expertiseDetails={expertiseDetails}
				techStackText="We used the following technologies to deliver this project."
				techStacks={techStacks}
			/>
			<ClientFeedBack
				clientImage={Images.imgAuthorMiRyde}
				clientName="Justin Gabriel"
				clientDesignation="Brand Marketing Manager"
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Want To Boost Your Sales?"
				description="Contact us today to learn how we can help your business unlock its full potential with eCommerce solutions."
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
