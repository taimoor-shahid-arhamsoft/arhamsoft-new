import { Images } from "@/assets/assets";

const bannerHeading = <h1>Employ Cost-Effective<br /> Skilled Expertise</h1>;
const bannerText = <p>Leverage external expertise to fill skill gaps in your organization. We provide access to top-tier talent at reasonable rates.</p>;
const whatWeDoTitle = <h2><span className="d-block">Achieve More With Us</span></h2>;
const skillTitle = <h2 className="text-white"><span>Unlock The </span> Benefits</h2>;
const whatWeDos = [
    {
        iconDefault: Images.teamAugHelp01,
        iconHover: Images.teamAugHelpHover01,
        title: "Resource Allocation",
        description: "Adjust your team according to project needs. No matter if it's a peak or slower period, we provide the right skills at the right time."
    },
    {
        iconDefault: Images.teamAugHelp02,
        iconHover: Images.teamAugHelpHover02,
        title: "Expert Solution",
        description: "Access a diverse pool of specialized skills. Our experts in various technologies fill skill gaps quickly & efficiently."
    },
    {
        iconDefault: Images.teamAugHelp03,
        iconHover: Images.teamAugHelpHover03,
        title: "Budget Optimization",
        description: "Reduce employment overhead costs. We do not charge for recruitment expenses, workplace infrastructure & payroll taxes etc."
    },
    {
        iconDefault: Images.teamAugHelp04,
        iconHover: Images.teamAugHelpHover04,
        title: "Accelerated Outcomes",
        description: "Get projects done in one go. Our experts chart out and begin working right away to get the products live in the market fast."
    },
    {
        iconDefault: Images.teamAugHelp05,
        iconHover: Images.teamAugHelpHover05,
        title: "Agile Workforce",
        description: "Easily scale up or down your workforce. We can provide a team that can quickly respond to changing project requirements & market needs."
    },
    {
        iconDefault: Images.teamAugHelp06,
        iconHover: Images.teamAugHelpHover06,
        title: "Risk Mitigation",
        description: "Eliminate the risks of permanent hiring by assessing the performance of our augmented team before long-term commitments."
    },
];
const howWeDos = [
    {
        icon: Images.teamAugProcess01,
        boxColor: "orange",
        title: "Need Assessment",
        description: "We collaborate with you to understand the skills set and expertise that you need.",
    },
    {
        icon: Images.teamAugProcess02,
        boxColor: "blue",
        title: "Talent Matching",
        description: "Carefully select qualified professionals from the list that we will provide to you.",
    },
    {
        icon: Images.teamAugProcess03,
        boxColor: "farozi",
        title: "Collaboration",
        description: "Once finalized, our experts will quickly integrate into your team to begin working.",
    },
];
const engagementModels = [
    {
        imgSrc: Images.teamAugAugModal01,
        title: "Collaborate with experts",
        description: "Directly communicate and collaborate with the team.",
        link: "",
    },
    {
        imgSrc: Images.teamAugAugModal02,
        title: "Lead the team",
        description: "Manage the team from anywhere using cloud-based systems.",
        link: "",
    },
];
const tabData = [
    {
        eventKey: "first",
        title: "Workforce Management",
        iconDefault: Images.teamAugSmallIcon01,
        iconHover: Images.teamAugSmallIconHover01,
        image: Images.teamAugLargeIn01,
        description: "Immediately onboard and work with skilled professionals with niche expertise without the need for extensive recruitment."
    },
    {
        eventKey: "second",
        title: "Extended Availability",
        iconDefault: Images.WhatForIconTwo,
        iconHover: Images.WhatForIconHoverTwo,
        image: Images.teamAugLargeIn02,
        description: "Work with experts around the clock across various time zones to ensure maximum operational efficiency & productivity."
    },
    {
        eventKey: "third",
        title: "Reduce Overhead",
        iconDefault: Images.teamAugSmallIcon02,
        iconHover: Images.teamAugSmallIconHover02,
        image: Images.teamAugLargeIn03,
        description: "Cut down on the overhead costs that are associated with in-house staffing needs like office space, equipment & training."
    },
    {
        eventKey: "four",
        title: "Proactive Staffing",
        iconDefault: Images.teamAugSmallIcon03,
        iconHover: Images.teamAugSmallIconHover03,
        image: Images.teamAugLargeIn04,
        description: "Proactively source talent when needed. We keep our staffing strategy always ahead by ten steps to keep it right."
    }
];
const workSliderData = [
    {
        image: Images.OurWork01,
        platform: "Web",
        title: "Real Estate",
        description: "Ut consectetur, odio vitae condimentum venenatis, risus nunc efficitur justo,id viverra massa lectus vitae est. Ut condimentum ante eu mauris ultricies, quis finibus sem eleifend. Fusce sed erat lobortis, ultricies mi ut, imperdiet elit.",
        techStacks: [
            Images.iconTechStack01,
            Images.iconTechStack02,
        ]
    },
    {
        image: Images.OurWork02,
        platform: "Web",
        title: "Printing And Mail",
        description: " Nunc tempor, justo et rutrum rhoncus, lacus mauris vehicula arcu, malesuada aliquet felis metus id mauris. Quisque tincidunt, risus sed iaculis tempus, velit leo rutrum sapien, nec porta arcu elit sit amet enim.",
        techStacks: [
            Images.iconTechStack01,
            Images.iconTechStack02,
        ]
    },
    {
        image: Images.OurWork03,
        platform: "Web",
        title: "Fintech Financial Services",
        description: "Fusce eu ex eu ligula lacinia pharetra ut at eros. Sed vestibulum sem lacus, a euismod sapien volutpat vitae. Sed eget arcu vitae dolor scelerisque venenatis. Proin et nisi sed nunc commodo suscipit id nec elit. Nulla pharetra.",
        techStacks: [
            Images.iconTechStack01,
            Images.iconTechStack02,
        ]
    },
];

export { bannerHeading, bannerText, workSliderData, skillTitle, whatWeDos, whatWeDoTitle, howWeDos, engagementModels, tabData };