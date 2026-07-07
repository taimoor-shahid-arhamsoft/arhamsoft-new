import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import {
	accordionData,
	accordionFaqsData,
	bannerHeading,
	bannerText,
	certifiedMainText,
	developmentFlow,
	expertise,
	expertiseHead,
	expertiseHeadTwo,
	hireMainText,
	servicesData,
	stats,
	steps,
	workSliderData
} from "@/data/HireDedicatedResource/SalesforceDeveloper";
import "@/styles/SalesforceDevelopers.css";

export async function generateMetadata() {
	return {
		title: "Hire Salesforce Developers for Custom CRM Solutions - DataonMatrix",
		description: "Hire Salesforce developers to tailor CRM, automate workflows, enhance reporting, and integrate systems with efficiency and security.",
		keywords: ["Hire Salesforce Developers"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/salesforce-developers",
		}
	};
}

export default function SalesforceDevelopers() {
	return (
		<div className="hdr salesforce-developers salesforce-developers-main custom-ab-banner">
			<PageBanner
				subHeading="Salesforce"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Hire Salesforce Expert"
				buttonLink="/contact-us"
				bannerImage={Images.salesForceDeveloperBanner}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Hire Salesforce Developers"
			/>
			<HireDeveloper
				title="Salesforce Consulting Services"
				titleTwo="Solving Complex Business Problems"
				content={hireMainText}
				image={Images.salesForceHireDev}
				accordionData={accordionData}
				bg="background-grey"
			/>
			<DevelopmentsSolutions
				title="Salesforce Application Development"
				text="The versatility of Salesforce lies in its ability to integrate with various third-party applications. We can help you make the most of popular Salesforce integrations for maximized business potential."
				developmentFlow={developmentFlow}
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo="Salesforce Expert?"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Let’s Connect"
				buttonLink="/contact-us"
			/>
			<WorkSlider
				title="Case Studies"
				description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
				workSliderData={workSliderData}
			/>
			<CertifiedDevelopers
				title="Outsource Salesforce Administration to Data on Matrix "
				content={certifiedMainText}
				servicesData={servicesData}
			/>
			<HireFaqs
				title="Frequently Asked Questions"
				text="Find answers to common queries about our service quality."
				accordionFaqsData={accordionFaqsData}
			/>
			<ExpertQuoteBlockWithRecaptcha
				title={expertiseHead}
				expertise={expertise}
				secondTitle={expertiseHeadTwo}
				steps={steps}
				subHeading="Discuss With Team DoM"
				hireHeading="Salesforce Programmer"
			/>
		</div>
	);
}
