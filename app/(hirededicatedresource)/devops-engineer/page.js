import { Images } from "@/assets/assets";
import FlexibleHiring from "@/components/DevopsEngineer/FlexibleHiring";
import CertifiedDevelopers from "@/components/HireDedicatedResource/CertifiedDevelopers/CertifiedDevelopers";
import HireFaqs from "@/components/HireDedicatedResource/HireFaqs/HireFaqs";
import ExpertQuoteBlockWithRecaptcha from "@/components/HireDedicatedResource/Shared/ExpertQuoteBlock/ExpertQuoteBlockWithRecaptcha";
import StatsBlock from "@/components/Homepage/StatsBlock/StatsBlock";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import TechStacks from "@/components/Shared/TechStacks/TechStacks";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import {
    accordionFaqsData,
    bannerHeading,
    bannerText,
    certifiedMainText,
    expertise,
    expertiseHead,
    expertiseHeadTwo,
    models,
    servicesData,
    stats,
    steps,
    techImages,
    whatWeDoTitle,
    whatWeDos,
    workSliderData
} from "@/data/HireDedicatedResource/DevopsEngineer";
import "@/styles/HireDedicatedResource/DevOpsEngineer.css";

export async function generateMetadata() {
    return {
        title: "Hire DevOps Engineers for Faster, Reliable Deployments - DataonMatrix",
        description: "Hire DevOps engineers to automate CI/CD, reduce downtime, and accelerate delivery with robust infrastructure monitoring and security.",
        keywords: [ "Hire DevOps Engineers"],
        alternates: {
			canonical: "https://www.dataonmatrix.com/devops-engineer",
		}
    };
}

const DevopsEngineer = () => {
    return (
        <div className='hdr devops-engineer custom-ab-banner'>
            <PageBanner
                subHeading="DevOps"
                heading={bannerHeading}
                text={bannerText}
                buttonText="Request DevOps Services"
                buttonLink="/contact-us"
                bannerImage={Images.bgBannerDevOpsEngineer}
                bannerClass="right-side-page-banner"
                bannerImgAlt="Hire DevOps Engineers"
            />
            <WhatWeDo
                title={whatWeDoTitle}
                description="Our top-tier DevOps experts will optimize your infrastructure, automate processes and foster collaboration for swift, more reliable releases."
                whatWeDos={whatWeDos}
            />
            <StatsBlock
                head={true}
                title="READY TO HIRE"
                titleTwo="DevOps Expert?"
                desc="We don’t babble; we deliver. For it, get to know what we have achieved so far for our esteemed client brands and businesses:"
                stats={stats}
                buttonText="Let’s Connect"
                buttonLink="/contact-us"
            />
            <TechStacks
                title="Tech"
                subTitle="Stacks"
                description="Ensure Reliable Releases with Our Advanced DevOps Stack"
                techImages={techImages}
            />
            <FlexibleHiring
                title="Tailored Solutions for Every DevOps Project"
                text="Get started with your best-fitted engagement models to attain DevOps success."
                models={models}
            />
            <CertifiedDevelopers
                title="Why Hire DevOps Team from Data on Matrix?"
                content={certifiedMainText}
                servicesData={servicesData}
            />
            <WorkSlider
                title="Case Studies"
                description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
                workSliderData={workSliderData}
            />
            <HireFaqs
                title="Frequently Asked Questions"
                text="You’ll find the information you need to make informed decisions"
                accordionFaqsData={accordionFaqsData}
            />
            <ExpertQuoteBlockWithRecaptcha
                title={expertiseHead}
                expertise={expertise}
                secondTitle={expertiseHeadTwo}
                steps={steps}
                subHeading="Discuss With Team DoM"
                hireHeading="DevOps Programmer"
            />
        </div>
    );
};

export default DevopsEngineer;