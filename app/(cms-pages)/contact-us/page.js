import dynamic from "next/dynamic";
const ContactWithReCaptcha = dynamic(() => import("@/components/CmsPage/ContactUs/ContactWithRecaptcha"));

export async function generateMetadata() {
  return {
    title: "Contact Us | DataOnMatrix - Get in Touch for Expert Solutions",
    description:
      "Reach out to Data on Matrix for personalized solutions and expert services. Our team is ready to assist you with your business needs, from consulting to development. Contact us today!",
    alternates: {
      canonical: "https://www.dataonmatrix.com/contact-us",
    },
  };
}

export default function Page() {
  return <ContactWithReCaptcha />;
}