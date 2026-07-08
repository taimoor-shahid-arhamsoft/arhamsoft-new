import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import "@/styles/Custom.css";

export const metadata = {
	title: "Web and Mobile App Development Company",
	description: "Expert IT Consulting - DataOnMatrix",
};

export default function RootLayout({ children }) {
	return (
		<div className='seperate-pages'>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
