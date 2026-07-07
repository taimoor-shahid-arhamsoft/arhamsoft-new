import { Images } from "@/assets/assets";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import Reviews from "@/components/Shared/Reviews/Reviews";
import EnagagementModel from "@/components/Homepage/EngagementModel/EngagementModel";
import FourCounteredBoxes from "@/components/Shared/FourCounteredBoxes/FourCounteredBoxes";
import ShopifyResults from "@/components/HireDedicatedResource/ShopifyResults/ShopifyResults";
import SpecificIdustries from "@/components/HireDedicatedResource/SpecificIndustries/SpecificIndustries";
import CertifiedPartner from "@/components/HireDedicatedResource/CertifiedPartner/CertifiedPartner";
import {
    aboutCards,
    accordionFaqsData,
    bannerHeading,
    bannerText,
    engagementModels,
    expertise,
    expertiseHead,
    expertiseHeadTwo,
    fourBoxesContent,
    industries,
    reviewTitle,
    stats,
    statsCards,
    steps,
    workSliderData,
    whatWeDoTitle,
    whatWeDos
} from "@/data/HireDedicatedResource/ShopifyDeveloper";
import "@/styles/HireDedicatedResource/ShopifyDeveloper.css";

export async function generateMetadata() {
    return {
        title: "Hire Shopify Developers for Custom Store Builds - DataonMatrix",
        description: "Hire Shopify developers to create high-quality stores, optimize speed, and deliver seamless integrations—all with long-term support.",
        keywords: ["Hire Shopify Developers"],
        alternates: {
            canonical: "https://www.dataonmatrix.com/shopify-developers",
        }
    };
}

const ShopifyDeveloper = () => {
    return (
        <div className='hdr shopify-developer custom-banner'>
            <PageBanner
                subHeading="Shopify Development"
                heading={bannerHeading}
                text={bannerText}
                buttonText="Start Your Shopify Journey"
                buttonLink="/contact-us"
                bannerImage={Images.shopifyBanner}
                bannerImgAlt="Hire Shopify Developers"
            />
            <WhatWeDo
                title={whatWeDoTitle}
                description="Unlock your store's potential with custom Shopify development for a seamless buying journey and increased sales."
                whatWeDos={whatWeDos}
            />
            <StatsBlock
                head={true}
                title="READY TO HIRE"
                titleTwo="Shopify Expert?"
                desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
                stats={stats}
                buttonText="Let’s Connect"
                buttonLink="/contact-us"
            />
            <FourCounteredBoxes
                title="Shopify Development Roadmap"
                description="Build and maintain a successful ecommerce store with us."
                fourBoxesContent={fourBoxesContent}
            />
            <ShopifyResults
                title="Grow Your Digital Revenue Stream With Shopify"
                description="Our expert-led approach ensures project success and customer satisfaction."
            />
            <SpecificIdustries
                title="Retail Industries We Excel In"
                description="We specialize in creating sales-ready online stores for businesses that recognize and embrace the potential of Shopify at its core."
                industries={industries}
            />
            <WorkSlider
                title="Case Studies"
                description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
                workSliderData={workSliderData}
            />
            <EnagagementModel
                liteTitle="Suitable"
                title="Engagement Models"
                description="Reduce recruitment costs and save hours by accomplishing time-intensive tasks with people-powered & expertise-led technology."
                engagementModels={engagementModels}
            />
            <CertifiedPartner
                title="Why Data on Matrix To Implement Shopify?"
                description="Our Experts Make Your Shopify Journey Seamless!"
                aboutCards={aboutCards}
                statsCards={statsCards}
            />
            <Reviews
                title={reviewTitle}
            />
            <HireFaqs
                title="Frequently Asked Questions"
                text="Find answers to common queries about our service quality."
                accordionFaqsData={accordionFaqsData}
            />
            <ExpertQuoteBlockWithRecaptcha
                title={expertiseHead}
                expertise={expertise}
                secondTitle={expertiseHeadTwo}
                steps={steps}
                subHeading="Discuss With Team DoM"
                hireHeading="Shopify Developer"
            />
        </div>
    );
};

export default ShopifyDeveloper;
