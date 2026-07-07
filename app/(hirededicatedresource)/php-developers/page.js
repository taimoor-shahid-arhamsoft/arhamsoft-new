import { Images } from "@/assets/assets";
import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import ThreeColoredBoxes from "@/components/Shared/ThreeColoredBoxes/ThreeColoredBoxes";
import Tabber from "@/components/Shared/Tabber/Tabber";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import TextualContentBlock from "@/components/Shared/TextualContentBlock/TextualContentBlock";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
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
} from "@/data/HireDedicatedResource/PhpDeveloper";
import "@/styles/PhpDevelopers.css";

export async function generateMetadata() {
	return {
		title: "Hire Dedicated PHP Developers for Any Project - DataonMatrix",
		description: "Hire dedicated PHP developers at DataonMatrix to build custom, scalable web apps tailored to your business needs.",
		keywords: ["Hire php developers"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/php-developers",
		}
	};
}

export default function Page() {
	return (
		<div className="hdr php-developers developers-page">
			<PageBannerWithRecaptcha
				subHeading="Hire PHP Experts"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Hire PHP Experts"
				buttonTextTwo="Get Custom PHP Solutions"
				buttonLink="#contact-us"
				technologyOptions={technologyOptions}
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<HireDeveloper
				title="PHP Development Services"
				titleTwo="We Offer"
				content={hireMainText}
				image={Images.PhpHireBanner}
				accordionData={accordionData}
			/>
			<ThreeColoredBoxes
				title="Hire Certified Experts"
				text="Get an end-to-end support for seamless PHP performance."
				boxesContent={boxesContent}
				ButtonFoot={true}
				buttonText="Outsource PHP Development Now"
				buttonLink="#contact-us"
			/>
			<DevelopmentsSolutions
				title="Get Matchless PHP Expertise"
				text="Elevate your digital presence with custom PHP solutions that power seamless functionality & drive measurable results."
				developmentFlow={developmentFlow}
				ButtonFoot={true}
				buttonText="Get Top PHP Talent"
				buttonLink="#contact-us"
			/>
			<Tabber
				tabHeading={tabHeading}
				description="Ensure seamless transitions, optimal performance & rapid deployment with our proven PHP development methodologies."
				tabsContent={tabs}
				developerPages={true}
			/>
			<OurProcess
				processSteps={processSteps}
				title="Hiring"
				lightTitle="Process"
			/>
			<TextualContentBlock
				subTitle="Reap The Benefits Of"
				title="Outsourcing"
				bulletContent={bulletContent}
				image={Images.frontProcessMain}
				button={true}
				buttonText="Outsource PHP Experts"
				buttonLink="#contact-us"
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo="PHP Developers For Success?"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Book A Consultation"
				buttonLink="#contact-us"
			/>
			<CertifiedDevelopers
				title="Unlock The Benefits"
				content={certifiedMainText}
				servicesData={servicesData}
				ButtonFoot={true}
				buttonText="Hire PHP Developers"
				buttonLink="#contact-us"
			/>
			<TechStacks
				title="PHP Tech"
				subTitle="Stacks"
				description="Plugging objectives in with the following technologies to achieve end goals:"
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

