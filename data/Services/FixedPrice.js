import { Images } from "@/assets/assets";

const bannerHeading = <h1>IT Support With<br />Clear Pricing</h1>;
const bannerText = <p>We understand overrunning expenses hit upon profit margins. That&apos;s why we deliver comprehensive service without hidden fees.</p>;
const fourBoxesContent = [
    {
        iconDefault: Images.yougetone,
        title: "Predictable Costing",
        description: "Get a transparent pricing model. We define the project scope during the initial consultation to prevent unforeseen costs."
    },
    {
        iconDefault: Images.yougettwo,
        title: "Financial Security",
        description: "The fixed price throughout the project protects you from price inflation or unplanned changes that typically drive costs up."
    },
    {
        iconDefault: Images.yougetthree,
        title: "Streamlined Budgeting",
        description: "With no surprise costs, allocate funds to other business areas without reserving extra resources for potential cost overruns."
    },
    {
        iconDefault: Images.yougetfour,
        title: "Quality Assurance",
        description: "Get quality work that meets and exceeds expectations within the agreed budget and timeline."
    },
];
const slidesImages = [
    Images.iconHappyClient01,
    Images.iconHappyClient02,
    Images.iconHappyClient03,
    Images.iconHappyClient04,
    Images.iconHappyClient05,
    Images.iconHappyClient06,
    Images.iconHappyClient07,
    Images.iconHappyClient08,
];
const howWeDos = [
    {
        title: "Discover",
        keypoints: [
            { title: "Thoroughly Discuss" },
            { title: "Set Goals" },
            { title: "Views Prototypes" },
            { title: "Plan Project" },
        ]
    },
    {
        title: "Execute",
        keypoints: [
            { title: "Architecture Designing" },
            { title: "Backend Development" },
            { title: "API Integration" },
            { title: "QA Testing" },
        ]
    },
    {
        title: "Go Live",
        keypoints: [
            { title: "Launch Project" },
            { title: "Implement Feedback" },
            { title: "Continuous Monitoring" },
            { title: "Operational Testing" },
        ]
    },
    {
        title: "Support",
        keypoints: [
            { title: "SLA Support" },
            { title: "Proactive Monitoring" },
            { title: "Feedback Integration" },
            { title: "Continuous Support" },
        ]
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

export { bannerHeading, bannerText, workSliderData, fourBoxesContent, slidesImages, howWeDos };