import dynamic from "next/dynamic";
import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import HiringProcess from "@/components/Shared/HiringProcess/HiringProcess";
import Achievemnets from "@/components/Homepage/Achievements/Achievements";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import {
    accordionFaqsData,
    bannerHeading,
    bannerText,
    gridsContent,
    outcomes,
    processSteps,
    stats,
    servicesBoxesContent,
    whatWeDoTitle,
    whatWeDos,
    workSliderData
} from "@/data/SeperatePages/AiPocMvp";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
    return {
        title: "AI PoC & MVP Development Services | Validate Your AI Idea with DataonMatrix",
        description: "Turn your innovative AI idea into reality with expert PoC & MVP development services. We help you validate concepts and build minimum viable products. We offer MVP development services, PoC development company expertise, and end-to-end PoC development services.",
        keywords: ["AI PoC & MVP"],
        alternates: {
            canonical: "https://www.dataonmatrix.com/ai-poc-mvp",
        }
    };
}

export default function AiPoC() {
    return (
        <div className='services ai-poc-mvp custom-banner case-study-bg-banner'>
            <PageBanner
                subHeading="AI PoC & MVP"
                heading={bannerHeading}
                text={bannerText}
                buttonText="Start Your AI PoC & MVP Journey"
                buttonLink="/contact-us"
                bannerImage={Images.bgBannerAiPoC}
                bannerImgAlt="AI PoC & MVP Services"
            />
            <WhatWeDo
                title={whatWeDoTitle}
                description="We deliver cutting-edge AI Proof of Concept (PoC) & Minimum Viable Product (MVP) development services that enable businesses to validate & implement AI-driven solutions effectively."
                whatWeDos={whatWeDos}
            />
            <ServicesYouGet
                title="Our Approach"
                description="We integrate AI, POC, and MVP development to align with your business objectives and deliver meaningful results."
                animation={Animations.servicesAnimationOne}
                animationTwo={Animations.servicesAnimationTwo}
                servicesBoxesContent={servicesBoxesContent}
                outcomes={outcomes}
                titleTwo="Benefits To Reap"
                outcomesButton='Build Your AI PoC Now'
                outcomesButtonLink="/contact-us"
            />
            <MultiColorGrid
                title="AI PoC & MVP Methodology For Businesses"
                description="An AI PoC and MVP approach delivers business value & supports informed decisions before scaling."
                gridsContent={gridsContent}
            />
            <StatsBlock
                head={true}
                title="READY TO HIRE"
                titleTwo="AI PoC & MVP Developer?"
                desc="We don’t babble, we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
                stats={stats}
                buttonText="Let's Connect"
                buttonLink="/contact-us"
            />
            <HiringProcess
                title="Hiring"
                lightTitle="Process"
                processSteps={processSteps}
            />
            <Achievemnets />
            <WorkSlider
                title="Case Studies"
                description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
                workSliderData={workSliderData}
            />
            <HireFaqs
                title="Frequently Asked Questions"
                text="Find answers to common queries about our service quality."
                accordionFaqsData={accordionFaqsData}
            />
            <ContactWithRecaptcha />
        </div>
    );
}
