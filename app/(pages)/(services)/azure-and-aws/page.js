import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import CloudServies from "@/components/Shared/CloudServices/CloudServices";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import ElevateYourBusiness from "@/components/Shared/ElevateYourBusiness/ElevateYourBusiness";
import CloudTypes from "@/components/Shared/CloudTypes/CloudTypes";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import CloudJourney from "@/components/Shared/CloudJourney/CloudJourney";
import {
	bannerHeading,
	bannerText,
	fourBoxesCloud,
	fourBoxesContent,
	servicesBoxesContent,
	tabsData,
	workSliderData
} from "@/data/Services/AzureAWS";
import "@/styles/Azure.css";

export async function generateMetadata() {
	return {
		title: "Get Azure and AWS Services for Multi-Cloud Strategy - DataonMatrix",
		description: "Use Azure and AWS services in tandem to maximize availability, agility, and regulatory alignment across your business infrastructure.",
		keywords: ["Azure and AWS Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/azure-and-aws",
		}
	};
}

export default function AzureAws() {
	return (
		<div className="services azure-aws custom-banner">
			<PageBanner
				subHeading="Cloud. Limitless Innovation"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Discuss My Cloud Strategy"
				buttonLink="/contact-us"
				bannerImage={Images.AzureBG}
				bgBannerBeforeAfter={Animations.bgBannerBeforeAfter}
				lottieBannerOne={true}
				lottieBannerTwo={true}
				bannerImgAlt="Azure and AWS Services"
			/>
			<FourCounteredBoxes
				title="Our Services"
				description="Enablement, Innovation, Support"
				fourBoxesContent={fourBoxesContent}
			/>
			<ServicesYouGet
				title="Solutions For You"
				description="Empowering Your Business Through Cloud Innovation"
				animation={Animations.servicesAnimation}
				animationTwo={Animations.servicesAnimationTwo}
				buttonText="Develop Cloud Applications"
				buttonLink="/contact-us"
				servicesBoxesContent={servicesBoxesContent}
			/>
			<CloudJourney
				title="Enhance Your Cloud Experience"
				titleTwo="With Data on Matrix"
				description="With our extensive experience and expertise, we've helped countless organizations unlock the full potential of cloud computing, helping them achieve quick results and sustainable benefits from cloud-based solutions."
				tabsData={tabsData}
			/>
			<CloudTypes
				title="Expertise Across All Cloud Types & Service Models"
			/>
			<CloudServies
				title="Azure & AWS for Intelligent Solutions"
				fourBoxesCloud={fourBoxesCloud}
			/>
			<ElevateYourBusiness
				titleOne="Unlock Innovation & Scalability"
				titleTwo="with Azure & AWS"
				description="Leverage the power of Azure and AWS to revolutionize your organization. These leading cloud platforms offer comprehensive solutions for data storage, computing and application development. As a leading cloud partner, we'll guide you towards maximizing the potential of cutting-edge cloud technologies."
				descriptionTwo="Accelerate your time-to-market, scale with ease and optimize costs with our tailored cloud application development services, whether you need to build a new solution or modernize an existing one."
				BenefitOne="Get Maximum Value"
				BenefitTwo="From Your Cloud Applications"
			/>
			<LetsDiscuss
				title="Find the Right Solution"
				description="Considering cloud adoption for increased stability and security of your products? Let our experts guide you."
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
