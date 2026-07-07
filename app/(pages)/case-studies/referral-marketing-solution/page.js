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
	solutions,
	servicesBoxesContent,
	teamDetails,
	techStacks,
	workSliderData
} from "@/data/CaseStudies/ReferralMarketingSolution";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
	return {
		title: "Referral Marketing Solution - Data on Matrix",
	};
}

export default function Page() {
	return (
		<div className="case-study-detail share-ads simple-custom-banner case-study-bg-banner">
			<PageBanner
				subHeading="Referral Marketing Solution"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Bring Us Your Challenge"
				buttonLink="/contact-us"
				bannerImage={Images.BgBannerShareAds}
			/>
			<ProjectAbout
				title="Project Overview"
				description="Developing an affiliate marketing platform that empowers advertisers to reach a wider audience. This platform was conceived to revolutionize the advertising industry by simplifying the process for both advertisers and publishers. Through the strategic use of the latest technology and a user-centric approach, we seek to establish a more efficient and profitable ecosystem for all stakeholders."
			/>
			<ProjectGoals
				title="Project Goals"
				goals={goals}
			/>
			<ServicesYouGet
				sectionTitle="Challenges"
				sectionText="We faced the following challenges while developing this platform: "
				animation={Animations.caseStudyMaritimeTech}
				animationTwo={Animations.servicesAnimationTwo}
				servicesBoxesContent={servicesBoxesContent}
			/>
			<OurSolutions
				title="Our Solution"
				description="We employed a comprehensive approach to deliver the project within the specified timeline."
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
				clientName="Alex John"
				clientDesignation="Marketing Manager "
				feedbackText={feedbackText}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
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
