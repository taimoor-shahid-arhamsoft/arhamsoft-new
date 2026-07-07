import dynamic from "next/dynamic";
import { Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import ExpertiseSolutions from "@/components/Shared/ExpertiseSolutions/ExpertiseSolutions";
import {
    bannerHeading,
    bannerText,
    gridsContent,
    tabsData,
    tabsDataInnovation,
    whatWeDoTitle,
    whatWeDos,
    workSliderData
} from "@/data/SeperatePages/Expertise";
import "@/styles/Expertise.css";

const ContactWithRecaptcha = dynamic(() => import("@/components/Shared/Contact/ContactWithRecaptcha"));

export async function generateMetadata() {
    return {
        title: "AI, Cloud & Enterprise Software Expertise - DataonMatrix",
        description: "Unlock your business potential with tailored software, AI integration, and scalable cloud solutions by Data on Matrix.",
        keywords: ["Software Development Services"],
        alternates: {
            canonical: "https://www.dataonmatrix.com/expertise",
        }
    };
}

export default function Expertise() {
    return (
        <div className='services expertise simple-custom-banner case-study-bg-banner'>
            <PageBanner
                subHeading="Expertise"
                heading={bannerHeading}
                text={bannerText}
                buttonText="Let's Work On Your Project"
                buttonLink="/contact-us"
                bannerImage={Images.expertiseBanner}
                bannerClass="rounded-image"
                bannerImgAlt="Software Development Services"
            />
            <WhatWeDo
                title={whatWeDoTitle}
                description="Empowering businesses with custom-built software that optimizes workflows, boosts productivity & ensures long-term success"
                whatWeDos={whatWeDos}
            />
            <ExpertiseSolutions
                title="Enterprise Solutions"
                description="We empower organizations to achieve their full potential by delivering comprehensive enterprise solutions."
                tabsData={tabsData}
                initialTab={tabsData[0]?.SharePoint}
            />
            <MultiColorGrid
                title="Supported Cloud Solutions"
                description="We deliver tailored cloud solutions with comprehensive support, helping your business scale quickly and securely."
                gridsContent={gridsContent}
            />
            <LetsDiscuss
                title="Let's Discuss Your Project"
                description="Book a free consultation today to find out the outcomes we could drive for your business."
                buttonText="Schedule Free Consultation"
                buttonLink="/contact-us"
            />
            <ExpertiseSolutions
                title="Innovative Technologies"
                description="We help businesses evolve by deploying cutting-edge technologies that streamline operations, improve efficiency, and drive growth."
                tabsData={tabsDataInnovation}
                innovation={true}
                initialTab={tabsData[0]?.Data}
            />
            <WorkSlider
                title="Case Studies"
                description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
                workSliderData={workSliderData}
            />
            <ContactWithRecaptcha />
        </div>
    );
}
