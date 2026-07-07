import { Images } from "@/assets/assets";
import { Container } from "react-bootstrap";
import SliderComponent from "@/components/Shared/WorkSlider/SliderComponent";
import "@/styles/WorkSlider.css";

const WorkSlider = ({ title, description }) => {
    const workSliderData = [
        {
            image: Images.WorkSlider01,
            platform: "Advertising & Marketing",
            title: "Object Recognition System",
            url: "/case-studies/object-recognition-system",
            description: "Learn how Data on Matrix’s dedicated team developed and released an AI-powered video-sharing platform that improves video marketing campaigns for businesses.",
            techStacks: [
                Images.BiiviewStack01,
                Images.BiiviewStack02,
                Images.BiiviewStack03,
                Images.BiiviewStack04,
                Images.BiiviewStack05,
                Images.BiiviewStack06,
                Images.BiiviewStack07,
            ]
        },
        {
            image: Images.WorkSlider02,
            platform: "Transportation",
            title: "Ride-Sharing App",
            url: "/case-studies/ride-sharing-app",
            description: "Discover the innovative approach Data on Matrix took to develop a cutting-edge car booking app for a Canadian ride-sharing service provider.",
            techStacks: [
                Images.MiRydeStack01,
                Images.MiRydeStack02,
                Images.MiRydeStack03,
                Images.MiRydeStack04,
                Images.MiRydeStack05,
                Images.MiRydeStack06,
                Images.MiRydeStack07,
            ]
        },
        {
            image: Images.WorkSlider03,
            platform: "Technology",
            title: "Custom Web Builder",
            url: "/case-studies/custom-web-builder",
            description: "Learn how we built a tool that turns your vision into reality. Explore the story behind our cutting-edge drag-and-drop website builder.",
            techStacks: [
                Images.iconControlPandaTech01,
                Images.iconControlPandaTech02,
                Images.iconControlPandaTech03,
                Images.iconControlPandaTech04,
                Images.iconControlPandaTech05,
                Images.iconControlPandaTech06,
                Images.iconControlPandaTech07,
            ]
        },
        {
            image: Images.WorkSlider04,
            platform: "eCommerce",
            title: "Multi-Vendor Marketplace",
            url: "/case-studies/multi-vendor-marketplace",
            description: "Learn how we transformed a multi-vendor eCommerce platform with enhanced functionality, optimizing the online shopping experience across web & mobile devices.",
            techStacks: [
                Images.iconTopsunBazarTech03,
                Images.iconTopsunBazarTech04,
                Images.iconTopsunBazarTech05,
                Images.iconTopsunBazarTech06,
                Images.iconTopsunBazarTech07,
                Images.TopsunBazarStack01,
                Images.iconTopsunBazarTech09,
            ]
        },
        {
            image: Images.WorkSlider05,
            platform: "Recruitment, Advertising",
            title: "Job Posting Portal",
            url: "/case-studies/job-posting-portal",
            description: "Read how we developed a job posting portal where businesses can advertise their job ads for different services and demonstrated the product's viability.",
            techStacks: [
                Images.iconCSGigJobTech01,
                Images.iconCSGigJobTech02,
                Images.iconCSGigJobTech03,
                Images.iconCSGigJobTech04,
                Images.iconCSGigJobTech05,
            ]
        },
        {
            image: Images.WorkSlider06,
            platform: "Merchandizing",
            title: "Heavy-Duty Equip",
            url: "/case-studies/heavy-duty-equip",
            description: "Uncover the story behind Data on Matrix's collaboration with a leading US heavy machinery merchandiser to develop a state-of-the-art web platform with high-end CMS.",
            techStacks: [
                Images.iconCSMTechTech01,
                Images.iconCSMTechTech02,
                Images.iconCSMTechTech03,
                Images.iconCSMTechTech04,
                Images.iconCSMTechTech05,
                Images.iconCSMTechTech06,
                Images.MaritimeTechnologyStack07,
            ]
        },
        {
            image: Images.WorkSlider07,
            platform: "Technology",
            title: "Drone Marketplace",
            url: "/case-studies/drone-marketplace",
            description: "Learn how we created a platform that revolutionizes the drone industry, empowering professionals and simplifying client access.",
            techStacks: [
                Images.iconCSBuzzFliTech01,
                Images.iconCSBuzzFliTech02,
                Images.iconCSBuzzFliTech03,
                Images.iconCSBuzzFliTech04,
                Images.BuzzFliStack05,
                Images.iconCSBuzzFliTech06,
                Images.iconCSBuzzFliTech07
            ]
        },
        {
            image: Images.WorkSlider08,
            platform: "Advertising",
            title: "Referral Marketing Solution",
            url: "/case-studies/referral-marketing-solution",
            description: "Grab the best practices from Data on Matrix team who delivered custom web portal development for publishers, advertisers and affiliate marketers as end users.",
            techStacks: [
                Images.iconShareAdsTech01,
                Images.iconShareAdsTech02,
                Images.iconShareAdsTech03,
                Images.iconShareAdsTech04,
                Images.ShareAdsStack05,
                Images.ShareAdsStack06,
                Images.iconShareAdsTech07,
            ]
        },
        {
            image: Images.WorkSlider09,
            platform: "eCommerce",
            title: "Ecommerce Store",
            url: "/case-studies/ecommerce-store",
            description: "We created a seamless online shopping experience for a salon-quality hair care brand by building a high-performing Shopify store, boosting customer satisfaction.",
            techStacks: [
                Images.iconGeniHairTech01,
                Images.iconGeniHairTech02,
                Images.GeniHairStack03,
                Images.iconGeniHairTech04,
                Images.iconGeniHairTech05,
                Images.GeniHairStack05,
                Images.GeniHairStack06,
            ]
        },
        {
            image: Images.WorkSlider10,
            platform: "Manufacturing, Retail",
            title: "Odoo HRM",
            url: "/case-studies/odoo-hrm",
            description: "Learn more about our Odoo HR customization and integration services for a rapidly growing manufacturing firm in the UK, driving overall organizational success.",
        },
        {
            image: Images.WorkSlider11,
            platform: "Retail",
            title: "Salesforce CRM",
            url: "/case-studies/salesforce-crm",
            description: "Learn about the Salesforce CRM implementation that helped a leading retail chain in the UK increase their sales by 25% and shorten their sales cycle by 15%.",
        },
        {
            image: Images.WorkSlider12,
            platform: "Real Estate",
            title: "Odoo Integration",
            url: "/case-studies/odoo-integration",
            description: "Discover how we revolutionized customer relationship management by integrating a powerful dialer with Odoo 17 to optimize customer interactions and boost agent efficiency.",
        },
        {
            image: Images.WorkSlider13,
            platform: "eCommerce",
            title: "Digital Storefront",
            url: "/case-studies/digital-storefront",
            description: "Dive into the details of our custom eCommerce platform, designed to revolutionize the way people connect with skilled professionals and home service providers.",
            techStacks: [
                Images.iconCSMarketTech01,
                Images.iconCSMarketTech02,
                Images.iconCSMarketTech03,
                Images.iconCSMarketTech04,
                Images.iconCSMarketTech05,
                Images.iconCSMarketTech06,
                Images.iconCSMarketTech07,
            ]
        },
        {
            image: Images.WorkSlider14,
            platform: "Health & Beauty",
            title: "Shopify Solution",
            url: "/case-studies/shopify-solution",
            description: "Discover how our custom order and inventory management system, built on Shopify, boosted customer retention by 55% and sales by 35%.",
            techStacks: [
                Images.iconReverseLifeTech01,
                Images.iconReverseLifeTech02,
                Images.iconReverseLifeTech03,
                Images.iconReverseLifeTech04,
                Images.iconReverseLifeTech05,
                Images.iconReverseLifeTech06,
                Images.iconReverseLifeTech07,
            ]
        },
        {
            image: Images.WorkSlider15,
            platform: "Manufacturing",
            title: "Account Management Solution",
            url: "/case-studies/account-management-solution",
            description: "We developed a robust account management system for a manufacturing company to improve customer relations, track orders, and manage inventory.",
            techStacks: [
                Images.iconAMSTech01,
                Images.iconAMSTech02,
                Images.iconAMSTech03,
                Images.iconAMSTech04,
                Images.iconAMSTech05,
                Images.iconAMSTech06,
            ]
        },
        {
            image: Images.WorkSlider16,
            platform: "FinTech",
            title: "DeFi Solution",
            url: "/case-studies/defi-solution",
            description: "Here’s how we developed a blockchain-based decentralized finance (DeFi) platform that helps users with a suite of financial services and an NFT marketplace.",
            techStacks: [
                Images.iconAnnexFinanceTech01,
                Images.iconAnnexFinanceTech02,
                Images.iconAnnexFinanceTech03,
                Images.iconAnnexFinanceTech04,
                Images.iconAnnexFinanceTech05,
                Images.iconAnnexFinanceTech06,
            ]
        },
        {
            image: Images.WorkSlider17,
            platform: "HR Tech",
            title: "HRM Solution",
            url: "/case-studies/hrm-solution",
            description: "Our cutting-edge white-label HR SaaS platform proved its value, empowering our client to secure significant deals with Fortune 500 companies and mid-market enterprises within a year.",
            techStacks: [
                Images.lynxHRMRTech01,
                Images.lynxHRMRTech02,
                Images.lynxHRMRTech03,
                Images.lynxHRMRTech04,
                Images.lynxHRMRTech05,
            ]
        },
        {
            image: Images.WorkSlider18,
            platform: "FinTech",
            title: "Blockchain Solution",
            url: "/case-studies/blockchain-solution",
            description: "Discover how our blockchain solution empowers data privacy, secure exchange, and monetization through user-controlled smart contracts, tokenization, and a dedicated marketplace.",
            techStacks: [
                Images.daytaTech01,
                Images.daytaTech02,
                Images.daytaTech03,
                Images.daytaTech04,
                Images.daytaTech05,
                Images.daytaTech06,
            ]
        },
        {
            image: Images.WorkSlider19,
            platform: "Recruitment",
            title: "RCRTCoin",
            url: "/case-studies/rcrt-coin",
            description: "Explore our innovative blockchain platform that leverages smart contracts to manage RCRTCoin tokens. This secure, scalable solution optimizes recruitment processes.",
            techStacks: [
                Images.iconAnnexFinanceTech01,
                Images.iconAnnexFinanceTech02,
                Images.iconAnnexFinanceTech03,
                Images.iconAnnexFinanceTech04,
                Images.iconAnnexFinanceTech05,
                Images.iconAnnexFinanceTech06,
            ]
        },
    ];
    return (
        <section className='work-slider-sec'>
            {title &&
                <Container>
                    <div className="section-heading text-center">
                        <h2><span className="d-block">{title}</span></h2>
                        <p>{description}</p>
                    </div>
                </Container>
            }
            <div className='slider-container'>
                <SliderComponent workSliderData={workSliderData} />
            </div>
        </section>
    );
};

export default WorkSlider;
