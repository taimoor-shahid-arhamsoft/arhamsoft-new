import dynamic from "next/dynamic";
import PartnerWithUs from "@/components/Homepage/PartnerWithUs/PartnerWithUs";
import WhatWeOffer from "@/components/Homepage/WhatWeOffer/WhatWeOffer";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import InnovationTechnology from "@/components/Homepage/InnovationTechnology/InnovationTechnology";
import CuttingEdge from "@/components/Shared/CuttingEdge/CuttingEdge";
import Achievemnets from "@/components/Homepage/Achievements/Achievements";
import Reviews from "@/components/Shared/Reviews/Reviews";
import {
	engagementModels,
	reviewTitle,
	stats
} from "@/data/Pages/Home";

export async function generateMetadata() {
	return {
		title: "AI & Software That Gets Used - DataonMatrix",
		description: "DataonMatrix builds AI automation and software that changes how work gets done: workflow automation for operations teams and AI products built for real users.",
		keywords: ["software development, Web and Mobile App Development Company, ai development services in usa, ai automation services"],
		alternates: {
			canonical: "https://www.dataonmatrix.com/",
		},
	};
}

const OurSkillSet = dynamic(() => import("@/components/Homepage/OurSkillSet/OurSkillSet").then((mod) => mod.default));
const HomeBanner = dynamic(() => import("@/components/Homepage/HomeBanner/HomeBanner").then((mod) => mod.default));

export default function Home() {
	return (
		<>
			<HomeBanner />
			<div className="partner-offer content-bottom-section">
				<PartnerWithUs />
				<WhatWeOffer />
			</div>
			<OurSkillSet />
			<EnagagementModel
				liteTitle="Suitable"
				title="Engagement Models"
				description="Reduce recruitment costs and save hours by accomplishing time-intensive tasks with people-powered & expertise-led technology."
				engagementModels={engagementModels}
			/>
			<StatsBlock
				head={true}
				title="Backing Up For"
				titleTwo="& Leading Towards Success"
				desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
				stats={stats}
				buttonText="Partner Up"
				buttonLink="#contact-us"
			/>
			<CuttingEdge />
			<Achievemnets />
			<div className="invo-review position-relative">
				<InnovationTechnology />
				<Reviews
					title={reviewTitle}
					homeReviews={true}
				/>
			</div>
		</>
	);
}