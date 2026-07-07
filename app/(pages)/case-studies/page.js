import { Images } from "@/assets/assets";
import WhatWeOfferCases from "@/components/CaseStudies/WhatWeOfferCases/WhatWeOfferCases";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import { bannerHeading, bannerText } from "@/data/CaseStudies/CaseStudies";

export async function generateMetadata() {
	return {
		title: "Discover How We Solve Problems – Case Studies - DataonMatrix",
		description: "Explore case studies from DataonMatrix showcasing real client success with our tailored digital solutions and development expertise.",
		keywords: ["Project Case Studies"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/case-studies",
		}
	};
}

export default function CaseStudies() {
	return (
		<div className="case-studies-page custom-ab-banner">
			<PageBanner
				subHeading="Case Studies"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Build Your Product With Us"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerCaseStudies}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Project Case Studies"
			/>
			<WhatWeOfferCases />
		</div>
	);
}
