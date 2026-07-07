import { Images } from "@/assets/assets";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import DevelopmentsSolutions from "@/components/HireDedicatedResource/DevelopmentSolutions/DevelopmentSolutions";
import HireDeveloper from "@/components/HireDedicatedResource/HireDeveloper/HireDeveloper";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import PageBanner from "@/components/HireDedicatedResource/PageBanner/PageBanner";
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
} from "@/data/HireDedicatedResource/WebGraphicDesigner";
import "@/styles/WebGraphicDevelopers.css";

export async function generateMetadata() {
	return {
		title: "Hire Expert Graphic Design Services at DataonMatrix",
		description: "Hire professional graphic design services at DataonMatrix to craft visual identity—logos, branding, and UI that resonate and convert.",
		keywords: ["Graphic Design Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/web-graphics-designer",
		}
	};
}

export default function WebGraphicDesigner() {
	return (
		<div className="hdr web-graphic-designer developers-page">
			<PageBanner
				subHeading="Graphic Design Outsourcing"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Drop Us a Line"
				buttonTextTwo="hire graphic designer"
				buttonLink="#contact-us"
				technologyOptions={technologyOptions}
				lottieBgAnnimation={true}
			/>
			<FeaturedClients
				title='HAPPY CLIENTS'
				slidesImages={slidesImages}
				belowBanner={true}
			/>
			<HireDeveloper
				title="Outsource Creative Design Services"
				titleTwo="Enhance User Experience Through Attractive Designs"
				content={hireMainText}
				image={Images.webFGraphicHireBanner}
				accordionData={accordionData}
				bg="background-grey"
				buttonText="Hire Certified Creative Designers"
				buttonLink="#contact-us"
			/>
			<ThreeColoredBoxes
				title="Transforming Ideas into Stunning Visuals"
				text="Get an end-to-end support for exceptional graphic design that enhances your brand's visual impact."
				boxesContent={boxesContent}
				ButtonFoot={true}
				buttonLink="#contact-us"
				buttonText="Hire Expert Designers"
			/>
			<DevelopmentsSolutions
				title="Creative Expertise"
				text="Expand your brand presence with custom designs that captivate your audience and drive conversions."
				developmentFlow={developmentFlow}
				ButtonFoot={true}
				buttonText="Hire Now"
				buttonLink="#contact-us"
			/>
			<Tabber
				tabHeading={tabHeading}
				description="Ensure exceptional design quality, seamless collaboration, and timely delivery with our proven creative design methodologies:"
				tabsContent={tabs}
				developerPages={true}
			/>
			<OurProcess
				processSteps={processSteps}
				title="Hiring"
				lightTitle="Process"
			/>
			<TextualContentBlock
				subTitle="Outsource Team DoM"
				title="We Guarantee"
				bulletContent={bulletContent}
				image={Images.webGraphicMain}
				button={true}
				buttonText="Outsource To Us"
				buttonLink="#contact-us"
			/>
			<StatsBlock
				head={true}
				title="Hire Graphic Designers"
				titleTwo="to Create Compelling Designs"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Schedule Consultation"
				buttonLink="#contact-us"
			/>
			<CertifiedDevelopers
				title="Unlock The Benefits"
				content={certifiedMainText}
				servicesData={servicesData}
				ButtonFoot={true}
				buttonText="Get In Touch"
				buttonLink="#contact-us"
			/>
			<TechStacks
				title="Creative Tools"
				subTitle="We Use"
				description="We leverage industry-leading tools and software to craft visually stunning and impactful designs. From cutting-edge graphic design software to advanced animation platforms, our creative toolkit empowers us to bring brand ideas to life with precision and flair."
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