import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import TwoKubernetes from "@/components/Shared/TwoKubernetes/TwoKubernetes";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
	bannerHeading,
	bannerText,
	kubernetes,
	whatWeDoTitle,
	whatWeDos,
	workSliderData
} from "@/data/Services/KubernetesServices";
import "@/styles/Kubernetes.css";

export async function generateMetadata() {
	return {
		title: "Reliable Kubernetes Services for Modern Deployment - DataonMatrix",
		description: "Get Kubernetes services that streamline delivery and operations—secure clusters, container orchestration, and DevOps-ready workflows.",
		keywords: ["Kubernetes Services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/kubernetes-services",
		}
	};
}

export default function KubernetesServices() {
	return (
		<div className="services kubernetes custom-ab-banner">
			<PageBanner
				subHeading="Kubernetes Services"
				heading={bannerHeading}
				text={bannerText}
				buttonText="Get Custom Kubernetes Services"
				buttonLink="/contact-us"
				bannerImage={Images.bgBannerKubernetes}
				bannerClass="right-side-page-banner"
				bannerImgAlt="Kubernetes Services"
			/>
			<WhatWeDo
				title={whatWeDoTitle}
				whatWeDos={whatWeDos}
			/>
			<TwoKubernetes
				subTitle="Helpful"
				title="Tools"
				kubernetes={kubernetes}
			/>
			<LetsDiscuss
				title="Let’s Discuss Your Project"
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
