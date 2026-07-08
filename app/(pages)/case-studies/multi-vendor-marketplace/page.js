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
	servicesBoxesContent,
	solutionTabContent,
	techStacks,
	teamDetails,
	workSliderData,
	whatWeDoTitle,
	whatWeDos
} from "@/data/CaseStudies/MultiVendorMarketplace";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Multi-Vendor Marketplace - DataOnMatrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail topsun-bazar simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Multi-Vendor Marketplace"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Custom Ecommerce Solution "
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerTopsunBazar}
			/>
			<ProjectAbout
				title="Project Overview"
				description="A digital storefront designed to provide a smooth and efficient online shopping experience for both buyers and sellers. The platform offers a diverse selection of products and services from reputable merchants, empowering them to reach a wider audience, acquire new customers, and increase sales. With its user-friendly interface, powerful search functionality, and secure payment systems, this multi-vendor platform is redefining the future of online commerce."
			/>
			<div className="client-request">
				<WhatWeDo
					title={whatWeDoTitle}
					description="The client was looking for immediate, quality solutions to modernize his digital infrastructure. The primary goal was to empower all-scale businesses by streamlining procurement, sales, order management, and marketing processes through the strategic implementation of a robust eCommerce solution. "
					whatWeDos={whatWeDos}
				/>
				<ServicesYouGet
					title="Key Insights Revealed"
					animation={Animations.caseStudyAnimationTopsunBazar}
					animationTwo={Animations.servicesAnimationTwo}
					servicesBoxesContent={servicesBoxesContent}
				/>
			</div>
			<ChallengeBlock
				title="Challenges"
				description="The digital transformation of this ecommerce platform was hindered by several critical challenges:"
				keyPoints={challengeKeyPoints}
			/>
			<OurSolutionsTaber
				title="Our Solution"
				stagePhaseText="Phase"
				description="To address all the challenges effectively, we implemented the following approach:"
				solutionTabContent={solutionTabContent}
			/>
			<ResultsBlockColored
				title="Results"
				description="We helped the client turn his digital storefront into one of the largest technologically advanced online marketplaces."
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
				clientName="Dawood"
				clientDesignation="Product Manager"
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
