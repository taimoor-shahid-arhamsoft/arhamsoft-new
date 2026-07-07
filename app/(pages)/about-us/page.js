import CompanyCoreValues from "@/components/AboutUs/CompanyCoreValues/CompanyCoreValues";
import CompanyPageBanner from "@/components/AboutUs/CompanyPageBanner/CompanyPageBanner";
import DiscoverCompany from "@/components/AboutUs/DiscoverCompany/DiscoverCompany";
import Reviews from "@/components/Shared/Reviews/Reviews";
import { reviewTitle } from "@/data/Pages/AboutUs";

export async function generateMetadata() {
	return {
		title: "About Us | DataOnMatrix",
		description: "Discover DataOnMatrix, a trusted AI development company helping businesses innovate with custom software, AI solutions, automation, and scalable technology services.",
		keywords: ["Data on Matrix" , "IT Solution Provider"],
	};
}

export default function AboutUs() {
	return (
		<>
			<CompanyPageBanner />
			<DiscoverCompany />
			<CompanyCoreValues />
			<Reviews
				title={reviewTitle}
			/>
		</>
	);
}