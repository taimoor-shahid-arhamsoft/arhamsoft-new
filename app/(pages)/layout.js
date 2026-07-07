import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "@/styles/Custom.css";

const Header = dynamic(() => import("@/components/Shared/Header/Header"));
const ContactWithRecaptcha = dynamic(
  () => import("@/components/Shared/Contact/ContactWithRecaptcha")
);
const Footer = dynamic(() => import("@/components/Shared/Footer/Footer"));

export const metadata = {
  title:
    "Web and Mobile App Development Company | Expert IT Consulting - Data on Matrix",
  description:
    "Data on Matrix: Leading web and mobile app development company. Delivering emerging technology services and comprehensive software development solutions.",
  keywords: [
    "software development solutions",
    "Web and Mobile App Development Company",
  ],
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="header-holder">
        <Header />
        {children}
        <ContactWithRecaptcha />
      </div>
      <Footer />
    </>
  );
}
