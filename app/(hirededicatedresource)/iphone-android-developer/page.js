import { Images } from "@/assets/assets";
import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import Tabber from "@/components/Shared/Tabber/Tabber";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import Services from "@/components/MobileAppDevelopment/Services/Services";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import {
	accordionData,
	accordionFaqsData,
	bannerHeading,
	bannerText,
	bulletContent,
	boxesContent,
	certifiedMainText,
	developmentFlow,
	gridsContent,
	hireMainText,
	processSteps,
	servicesData,
	servicesMobileData,
	slidesImages,
	stats,
	tabHeading,
	tabs,
	techImages,
	technologyOptions,
	workSliderData
} from "@/data/HireDedicatedResource/IphoneAndroidDeveloper";
import "@/styles/MobileDevelopers.css";

export async function generateMetadata() {
	return {
		title: "Hire iOS & Android Developers for Any App Idea - DataonMatrix",
		description: "Hire expert mobile developers at DataonMatrix for custom iOS and Android apps that deliver performance and user engagement.",
		keywords: ["Hire Mobile App Developers"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/iphone-android-developer",
		}
	};
}

export default function Page() {
	return (
		<div className="services mobile-developers developers-page">
			<PageBannerWithRecaptcha
				subHeading="Mobile Solutions"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Hire Mobile Developers"
				buttonTextTwo="Get a Free Quote"
				buttonLink="#contact-us"
				technologyOptions={technologyOptions}
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<HireDeveloper
				title="Hire Dedicated Mobile App Developers"
				titleTwo="For Market-Leading Solutions"
				content={hireMainText}
				image={Images.hirededicatedMobileDeveloper}
				accordionData={accordionData}
				bg="background-grey"
			/>
			<ThreeColoredBoxes
				title="Why Build Your App With Us"
				text="Enjoy exceptional mobile experiences through technical brilliance and creative flair."
				boxesContent={boxesContent}
				ButtonFoot={true}
				buttonText="Engage Our Expert Team"
				buttonLink="#contact-us"
			/>
			<DevelopmentsSolutions
				title="Holistic Mobile App Development Services"
				text="Whether you’re a unicorn startup or an enterprise client, our wide range of app development services has got you covered."
				developmentFlow={developmentFlow}
				ButtonFoot={true}
				buttonText="Let’s Discuss Your Project"
				buttonLink="#contact-us"
			/>
			<Tabber
				tabHeading={tabHeading}
				description="Our team of expert mobile developers writes code that functions flawlessly and consistently over time."
				tabsContent={tabs}
				developerPages={true}
			/>
			<Services
				title="Mobile Solutions Mastery"
				description="We craft enriching mobile experiences to serve millions of users worldwide."
				services={servicesMobileData}
			/>
			<MultiColorGrid
				subTitle="Delivering Essential"
				title="Mobile Features"
				gridsContent={gridsContent}
			/>
			<OurProcess
				processSteps={processSteps}
				title="Hiring"
				lightTitle="Process"
			/>
			<TextualContentBlock
				subTitle="Tailored to Your Needs"
				title="Transparent Pricing"
				bulletContent={bulletContent}
				image={Images.mobilePricing}
				button={true}
				buttonText="Hire Dedicated Developers"
				buttonLink="#contact-us"
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo="Mobile Expert?"
				desc="We don't babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands:"
				stats={stats}
				buttonText="Let’s Connect"
				buttonLink="#contact-us"
			/>
			<CertifiedDevelopers
				title="Tech Innovation"
				content={certifiedMainText}
				servicesData={servicesData}
			/>
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="Our mobile app developers are skilled in a wide range of technologies, from cross-platform frameworks to native languages, to deliver resilient and scalable mobile app solutions."
				techImages={techImages}
			/>
			<WorkSlider
				title="Case Studies"
				description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
				workSliderData={workSliderData}
			/>
			<HireFaqs
				title="Frequently Asked Questions"
				text="Find answers to common queries about our service quality."
				accordionFaqsData={accordionFaqsData}
			/>
		</div>
	);
}
