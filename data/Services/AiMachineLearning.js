import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>AI That Gets Used</h1>;
const bannerText = <p>Most companies have bought AI that changed nothing. We build the kind that changes how the work gets done.</p>;
const howWeDos = [
    {
        icon: Images.AiWhatOne,
        boxColor: "orange",
        title: "Manual Work Audit",
        description: "Send us one workflow your team repeats every week. We map where the time goes and automate what's worth it.",
    },
    {
        icon: Images.AiWhatTwo,
        boxColor: "blue",
        title: "AI Product Readiness Review",
        description: "Before you scale an AI product, we find where it cracks first: retrieval, evaluation, cost, guardrails and monitoring.",
    },
    {
        icon: Images.AiWhatThree,
        boxColor: "farozi",
        title: "Custom AI Systems",
        description: "We build the system around the model: pipelines, evaluation, monitoring. It has to work in month three, not just in the demo.",
    },
];
const howWeDoText = [
    { text: "Two ways to begin. Both start with one workflow, not a roadmap." }
];
const fourBoxesContent = [
    {
        iconDefault: Images.AiProcessOne,
        title: "Map The Workflow",
        description: "We start with the work itself: who touches it and where it stalls."
    },
    {
        iconDefault: Images.AiProcessTwo,
        title: "Prepare The Data",
        description: "We collect and clean the real data your system will face."
    },
    {
        iconDefault: Images.AiProcessThree,
        title: "Build & Evaluate",
        description: "We build the model plus the checks that catch bad answers."
    },
    {
        iconDefault: Images.AiProcessFour,
        title: "Deploy & Monitor",
        description: "We deploy into your systems and watch quality, cost and drift."
    },
];
const howWeDosIt = [
    {
        icon: Images.AiAreaOne,
        title: "Robotic Automation",
        description: "Machines take the repetition, people keep the judgment. We automate the workflows your team repeats and quietly hates."
    },
    {
        icon: Images.AiAreaTwo,
        title: "Deep Learning",
        description: "We build and deploy neural networks for image recognition, speech and data analysis, with the evaluation to trust their output."
    },
    {
        icon: Images.AiAreaThree,
        title: "Computer Vision",
        description: "From video pipelines to object recognition in production. The model is a fifth of the work. We build the rest too."
    },
    {
        icon: Images.AiAreaFour,
        title: "Predictive Analytics",
        description: "Forecasts from your own historical data, tied to decisions your team makes every week."
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
const techImages = [
    { id: 1, image: cloudinaryImages.techAiNewOne },
    { id: 2, image: cloudinaryImages.techAiNewTwo },
    { id: 3, image: cloudinaryImages.techAiNewThree },
    { id: 4, image: cloudinaryImages.techAiNewFour },
    { id: 5, image: cloudinaryImages.techAiNewFive },
    { id: 6, image: cloudinaryImages.techAiNewSix },
    { id: 7, image: cloudinaryImages.techAiNewSeven },
    { id: 8, image: cloudinaryImages.techAiNewEight },
    { id: 9, image: cloudinaryImages.techAiNewNine },
    { id: 10, image: cloudinaryImages.techAiNewTen },
    { id: 11, image: cloudinaryImages.techAiNewEleven },
    { id: 12, image: cloudinaryImages.techAiNewTwelve },
    { id: 13, image: cloudinaryImages.techAiNewThirteen },
    { id: 14, image: cloudinaryImages.techAiNewFourteen },
    { id: 15, image: cloudinaryImages.techAiNewFifteen },
    { id: 16, image: cloudinaryImages.techAiNewSixteen },
    { id: 17, image: cloudinaryImages.techAiNewSeventeen },
];

export { bannerHeading, bannerText, howWeDos, howWeDoText, howWeDosIt, workSliderData, fourBoxesContent, techImages };