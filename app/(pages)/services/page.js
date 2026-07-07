import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import OurServices from "@/components/Services/OurServices/OurServices";
import ServiceAndSolutions from "@/components/Services/ServicesAndSolutions/ServicesAndSolutions";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import Reviews from "@/components/Shared/Reviews/Reviews";
import { 
  bannerHeading, 
  bannerText, 
  ourServices, 
  reviewTitle 
} from "@/data/Pages/Services";

export async function generateMetadata() {
  return {
    title: "Custom Software & IT Services Tailored for You - DataonMatrix",
    description: "DataonMatrix delivers tailored IT solutions & software services to drive digital growth, innovation, and operational success.",
    keywords: ["IT Solutions Provider, Custom Software Development Services"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/services",
		},
  };
}

export default function Services() {
  return (
    <div className="services services-main custom-banner">
      <PageBanner
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get In Touch"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerServices}
      />
      <OurServices ourServices={ourServices} preTitle='Check out' title='Our Services' />
      <ServiceAndSolutions />
      <LetsDiscuss
        title="Let’s Discuss Your Project"
        description="Book a free consultation today to find out the outcomes we could drive for your business."
        buttonText="Schedule Consultation"
        buttonLink="/contact-us"
      />
      <Reviews
        title={reviewTitle}
      />
    </div>
  );
}
