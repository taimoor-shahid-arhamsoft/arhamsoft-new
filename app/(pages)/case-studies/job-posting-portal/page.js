import { Animations, Images } from "@/assets/assets";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ChallengeBlock from "@/components/CaseStudies/ChallengeBlock/ChallengeBlock";
import ProjectScopeBlock from "@/components/CaseStudies/ProjectScopeBlock/ProjectScopeBlock";
import OurSolutionsTaber from "@/components/CaseStudies/OurSolutionTaber/OurSolutionsTaber";
import ProjectAbout from "@/components/CaseStudies/ProjectAbout/ProjectAbout";
import ServicesYouGet from "@/components/Shared/ServicesYouGet/ServicesYouGet";
import WhatWeDo from "@/components/Shared/WhatWeDo/WhatWeDo";
import ResultsBlockColored from "@/components/CaseStudies/ResultsBlockColored/ResultsBlockColored";
import TeamDetailBlock from "@/components/CaseStudies/TeamDetailBlock/TeamDetailBlock";
import ClientFeedBack from "@/components/CaseStudies/ClientFeedback/ClientFeedback";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import {
  bannerHeading,
  bannerText,
  challengeKeyPoints,
  expertiseDetails,
  feedbackText,
  leftBlockBullets,
  leftBlockHeading,
  results,
  rightBlockBullets,
  rightBlockHeading,
  servicesBoxesContent,
  solutionTabContent,
  techStacks,
  teamDetails,
  workSliderData,
  whatWeDoTitle,
  whatWeDos
} from "@/data/CaseStudies/JobPostingPortal";
import "@/styles/CaseStudies/CaseStudiesDetail.css";

export async function generateMetadata() {
  return {
    title: "Job Posting Portal - DataOnMatrix",
  };
}
export default function Page() {
  return (
    <div className="case-study-detail gig-jobs simple-custom-banner case-study-bg-banner">
      <PageBanner
        subHeading="Job Posting Portal"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Get A Custom Software Solution"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerGigJobs}
      />
      <ProjectAbout
        title="Problem Statement"
        description="The traditional job market often restricts individuals to rigid 9-to-5 roles, limiting flexibility and hindering economic growth. Businesses, on the other hand, face challenges in finding skilled, cost-effective, and flexible talent for specific projects or tasks."
      />
      <div className="client-request">
        <WhatWeDo
          title={whatWeDoTitle}
          description="The client approached us with the vision of creating a high-performing solution for both businesses and job seekers."
          whatWeDos={whatWeDos}
        />
        <ServicesYouGet
          title="Features To Be Delivered"
          animationTwo={Animations.servicesAnimationTwo}
          servicesBoxesContent={servicesBoxesContent}
          animationCenterImage={Images.imgCSGigJobLogo}
        />
      </div>
      <ChallengeBlock
        title="Challenges"
        description="The primary challenges we faced were:"
        keyPoints={challengeKeyPoints}
      />
      <ProjectScopeBlock
        title="Value Proposition"
        description="A comprehensive platform empowering businesses to find the right talent and individuals to discover flexible work that fits their lifestyle."
        leftBlockHeading={leftBlockHeading}
        leftBlockBullets={leftBlockBullets}
        rightBlockHeading={rightBlockHeading}
        rightBlockBullets={rightBlockBullets}
      />
      <OurSolutionsTaber
        title="Our Solution"
        description="We implemented a comprehensive solution to meet all of the client's specific requirements."
        stagePhaseText="Phase"
        solutionTabContent={solutionTabContent}
      />
      <ResultsBlockColored
        title="Results"
        description="The successful implementation of the platform has helped bridge the gap between talent and opportunity."
        results={results}
      />
      <TeamDetailBlock
        industry="Recruitment, Advertising"
        teamDetails={teamDetails}
        expertiseDetails={expertiseDetails}
        techStackText="We used the following technology stack to deliver this project."
        techStacks={techStacks}
      />
      <ClientFeedBack
        clientImage={Images.imgAuthorMiRyde}
        clientName="Jacob Shaun"
        clientDesignation="Project Owner"
        feedbackText={feedbackText}
      />
      <LetsDiscuss
        title="Let's Discuss Your Project"
        description="Our expert team collaborates with you to develop, optimize and deploy solutions that scale with your business."
        buttonText="Schedule Consultation"
        buttonLink="/contact-us"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
    </div>
  );
}
