import { Images } from "@/assets/assets";
import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import Tabber from "@/components/Shared/Tabber/Tabber";
import { 
	accordionData, 
	accordionFaqsData, 
	bannerHeading, 
	bannerText, 
	bulletContent, 
	boxesContent, 
	certifiedMainText, 
	developmentFlow, 
	hireMainText, 
	processSteps, 
	slidesImages, 
	stats, 
	servicesData, 
	tabHeading, 
	tabs, 
	techImages, 
	technologyOptions, 
	workSliderData 
  } from "@/data/HireDedicatedResource/HtmlDeveloper";  
import "@/styles/FrontendDevelopers.css";
export async function generateMetadata() {
	return {
		title: "Hire Top Front End Developers for Visually Stunning Sites - DataonMatrix",
		description: "Hire dedicated front end developers at DataonMatrix to craft responsive, intuitive UIs using React, Angular, Vue, and more.",
		keywords: ["Hire Front End Developers"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/html-developer",
		}
	};
}

export default function Page() {
	return (
		<div className="hdr front-end-developers developers-page">
			<PageBannerWithRecaptcha
				subHeading="Frontend Development Services"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Hire Frontend Developers"
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
				title="Front-End Development Services"
				titleTwo="We Provide"
				content={hireMainText}
				image={Images.FrontendHireBanner}
				accordionData={accordionData}
				bg="background-grey"
			/>
			<ThreeColoredBoxes
				title="Benefits of Frontend Optimization"
				text="Hire our top-tier front-end engineers for faster, smoother apps with code excellence"
				boxesContent={boxesContent}
				ButtonFoot={true}
				buttonText="Let’s Discuss Your Project"
				buttonLink="#contact-us"
			/>
			<DevelopmentsSolutions
				title="User-Centric Front-End Expertise"
				text="Data on Matrix delivers dynamic front-end solutions for web and mobile apps of all scales."
				developmentFlow={developmentFlow}
				ButtonFoot={true}
				buttonText="Contact with Experts"
				buttonLink="#contact-us"
			/>
			<Tabber
				tabHeading={tabHeading}
				description="Beautiful, functional websites tailored to your brand. We merge aesthetics with performance to create a seamless digital experience."
				tabsContent={tabs}
				developerPages={true}
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
				image={Images.frontProcessMain}
				button={true}
				buttonText="Hire Dedicated Developers"
				buttonLink="#contact-us"
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo="Frontend Expert?"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Let’s Connect"
				buttonLink="#contact-us"
			/>
			<CertifiedDevelopers
				title="Front-End Web Development Practices"
				content={certifiedMainText}
				servicesData={servicesData}
				ButtonFoot={true}
				buttonText="Find Your Next Developer"
				buttonLink="#contact-us"
			/>
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="As a leading frontend development company, we're your trusted partner in crafting digital experiences using the latest tech and tools"
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
