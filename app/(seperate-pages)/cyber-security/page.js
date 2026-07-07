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
    gridsContent,
    outcomes,
    processSteps,
    stats,
    servicesBoxesContent,
    whatWeDoTitle,
    whatWeDos,
    workSliderData,
    bannerText
} from "@/data/SeperatePages/CyberSecurity";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
    return {
        title: "Cybersecurity Managed Services You Can Trust - DataonMatrix",
        description: "Stay secure with 24/7 cybersecurity managed services—expert monitoring, rapid response, and compliance-ready protection.",
        keywords: ["Cybersecurity Managed Services"],
        alternates: {
            canonical: "https://www.dataonmatrix.com/cyber-security",
        }
    };
}

export default function CyberSecurity() {
    return (
        <div className='services cyber-security simple-custom-banner case-study-bg-banner'>
            <PageBanner
                subHeading="Cybersecurity Managed Services"
                heading={bannerHeading}
                text={bannerText}
                buttonText="Get Managed Cybersecurity Solutions"
                buttonLink="#contact-us"
                bannerImage={Images.bgBannerCyberSecurity}
                bannerClass="rounded-image"
                bannerImgAlt="Cybersecurity Managed Services"
            />
            <WhatWeDo
                title={whatWeDoTitle}
                description="Our cybersecurity services protect your business from evolving threats, safeguarding your critical data and systems."
                whatWeDos={whatWeDos}
            />
            <ServicesYouGet
                title="Foundations of Cybersecurity Excellence"
                description="Building a robust cybersecurity framework begins with foundational principles and best practices to safeguard critical assets, which our team follows, such as:"
                animation={Animations.cyberSecurityAnimation}
                animationTwo={Animations.servicesAnimationTwo}
                servicesBoxesContent={servicesBoxesContent}
                outcomes={outcomes}
                titleTwo="Outsourcing Benefits To Reap"
                outcomesButton="Book A Consultation"
                outcomesButtonLink="/contact-us"
            />
            <MultiColorGrid
                title="Comprehensive & Scalable Cybersecurity Solutions"
                description="Our cybersecurity services are designed to protect your business from evolving threats while easily scaling with your needs."
                gridsContent={gridsContent}
            />
            <StatsBlock
                head={true}
                title="READY TO HIRE"
                titleTwo="Cyber Security Experts?"
                desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
                stats={stats}
                buttonText="Book A Call"
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
