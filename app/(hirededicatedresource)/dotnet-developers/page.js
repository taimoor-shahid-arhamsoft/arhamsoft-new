import { Images } from "@/assets/assets";
import PageBannerWithRecaptcha from "@/components/HireDedicatedResource/PageBanner/PageBannerWithRecaptcha";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import FeaturedClients from "@/components/Homepage/HomeBanner/FeaturedClients";
import OurProcess from "@/components/Careers/OurProcess/OurProcess";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import Autonomous from "@/components/QaTesting/Autonomous/Autonomous";
import {
	atonomousTitle,
	atomonousDecription,
	accordionData,
	accordionFaqsData,
	bannerHeading,
	bannerText,
	developmentFlow,
	hireMainText,
	isoImages,
	processSteps,
	slidesImages,
	stats,
	techImages,
	technologyOptions,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/HireDedicatedResource/DotnetDeveloper";
import "@/styles/DotNetDevelopers.css";

export async function generateMetadata() {
	return {
		title: "Hire Skilled .NET Developers – Fast & Reliable - DataonMatrix",
		description: "Get experienced .NET developers from DataonMatrix to build secure, scalable apps tailored for web, cloud, or enterprise needs.",
		keywords: [ "Hire .NET Developers"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/dotnet-developers",
		}
	};
}

export default function Page() {
	return (
		<div className="hdr dot-net-developers developers-page" >
			<PageBannerWithRecaptcha
				subHeading="Dot Net Development"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Build My Custom App"
				buttonTextTwo="Get a Free Quote"
				buttonLink="#contact-us"
				isoImages={isoImages}
				technologyOptions={technologyOptions}
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<OurProcess
				processSteps={processSteps}
				title="Hiring"
				lightTitle="Process"
			/>
			<HireDeveloper
				title=".NET Development"
				titleTwo="Services We Provide"
				content={hireMainText}
				image={Images.DotNetHireBanner}
				accordionData={accordionData}
			/>
			<Autonomous
				title={atonomousTitle}
				description={atomonousDecription}
				buttonText="Schedule a Call"
				buttonLink="#contact-us"
				image={Images.dotnetHireImage}
			/>
			<DevelopmentsSolutions
				title="Why Choose .NET?"
				text=".NET offers a compelling suite of benefits for software development"
				developmentFlow={developmentFlow}
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="Boost your business ROI with secure and high-performing software solutions"
				whatWeDos={whatWeDos}
			/>
			<TechStacks
				title="Tech"
				subTitle="Stacks"
				description="Leveraging advanced .NET tools, our experienced team collaborates efficiently, automates processes and accelerates critical projects to deliver high-quality software solutions at unprecedented speed."
				techImages={techImages}
			/>
			<StatsBlock
				head={true}
				title="READY TO HIRE"
				titleTwo=".NET Experts?"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Let’s Connect"
				buttonLink="#contact-us"
			/>
			<WorkSlider
				title="Case Studies"
				description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
				workSliderData={workSliderData}
			/>
			<HireFaqs
				title="Frequently Asked Questions"
				text="You’ll find the information you need to make informed decisions"
				accordionFaqsData={accordionFaqsData}
			/>
		</div>
	);
}
