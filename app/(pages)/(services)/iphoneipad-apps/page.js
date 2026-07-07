import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import Services from "@/components/MobileAppDevelopment/Services/Services";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import TwoColumns from "@/components/Shared/TwoColumns/TwoColumns";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import HowItWorks from "@/components/Shared/HowWeDo/HowWeDo";
import {
	bannerHeading,
	bannerText,
	expertise,
	howWeDos,
	servicesMobileData,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/Services/IphoneIpadApps";
import "@/styles/MobileAppDevelopment.css";

export async function generateMetadata() {
	return {
		title: "Mobile App Development Services for All Platforms - DataonMatrix",
		description: "DataonMatrix delivers mobile app development services that build reliable, user-friendly apps for iOS and Android platforms.",
		keywords: ["Mobile app development services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/iphoneipad-apps",
		},
	};
}

export default function IphoneIpadApps() {
	return (
		<div className="services mobile-app-development custom-banner">
			<PageBanner
				subHeading="Mobile App Development"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get a custom app"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerMADevelopment}
				bannerImgAlt="Mobile app development services"
			/>
			<Services
				title="End-to-End Services"
				description="We empower partnered brands and businesses by delivering innovative and user-friendly solutions that drive growth and enhance customer engagement."
				services={servicesMobileData}
			/>
			<TwoColumns
				title="Sectors We Serve"
				description="Every sector looks for a unique and tailored experience. It is this very experience that we consistently deliver on."
				animation={Animations.madServiceExpertise}
				expertise={expertise}
				buttonText="Let’s Connect"
				buttonLink="#contact-us"
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				description="Our diverse expertise enables businesses to achieve success and deliver substantial value."
				whatWeDos={whatWeDos}
			/>
			<HowItWorks
				items={howWeDos}
				title="Work Process"
				description="To deliver the best results, we take the following strategic steps:"
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project "
				description="Book a free consultation today to find out the outcomes we could drive for your business."
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
