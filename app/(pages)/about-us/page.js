import CompanyCoreValues from "@/components/AboutUs/CompanyCoreValues/CompanyCoreValues";
import CompanyPageBanner from "@/components/AboutUs/CompanyPageBanner/CompanyPageBanner";
import DiscoverCompany from "@/components/AboutUs/DiscoverCompany/DiscoverCompany";
import Reviews from "@/components/Shared/Reviews/Reviews";
import { reviewTitle } from "@/data/Pages/AboutUs";

export async function generateMetadata() {
	return {
		title: "About Us | Leading IT Solution Provider - Data on Matrix",
		description: "Learn about Data on Matrix, a leading IT solution provider delivering innovative technology solutions and services. Discover our expertise, mission, and commitment to excellence.",
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