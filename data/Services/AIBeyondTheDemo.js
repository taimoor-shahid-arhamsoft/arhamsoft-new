import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>We Don't Build AI Demos</h1>;
const bannerText = <p>A demo is built to win the meeting. We build the version that has to work on Tuesday.</p>;
const howWeDos = [
    {
        icon: cloudinaryImages.AiDemoOne,
        boxColor: "orange",
        title: "The Demo Trap",
        description: "The demo impresses everyone, gets a budget, then meets real data and a team with its own way of working.",
    },
    {
        icon: cloudinaryImages.AiDemoTwo,
        boxColor: "blue",
        title: "The Wrong First Question",
        description: "\"Which model should we use?\" gets asked before anyone can describe the workflow in a sentence. Map first.",
    },
    {
        icon: cloudinaryImages.AiDemoThree,
        boxColor: "farozi",
        title: "The Missing Four Fifths",
        description: "The model is a fifth of the work. Pipelines, checks, monitoring and escalation are why it works.",
    },
];
const howWeDoText = [
    { text: "Most AI survives the boardroom and dies on contact with reality." }
];
const fourBoxesContent = [
    {
        iconDefault: cloudinaryImages.AiDemoFour,
        title: "Map The Workflow",
        description: "Who touches it, where it stalls and what better looks like."
    },
    {
        iconDefault: cloudinaryImages.AiDemoFive,
        title: "Build The System",
        description: "The pipeline, checks and fallbacks around the model, not just the model."
    },
    {
        iconDefault: cloudinaryImages.AiDemoSix,
        title: "Keep Judgment Human",
        description: "Machines own the repetition. Decisions stay with your people."
    },
    {
        iconDefault: cloudinaryImages.AiDemoSeven,
        title: "Measure The Change",
        description: "Done means the workflow runs differently, not that the demo impressed."
    },
];
const howWeDosIt = [
    {
        icon: cloudinaryImages.AiDemoEight,
        title: "Faster Tuesdays",
        description: "The report that took an afternoon goes out in minutes. The change shows up in the workweek, not the slide deck."
    },
    {
        icon: cloudinaryImages.AiDemoNine,
        title: "Leads That Get Replies",
        description: "Ten minutes instead of two days. Speed in the workflow becomes speed your customers feel."
    },
    {
        icon: cloudinaryImages.AiDemoTen,
        title: "Answers Without Asking",
        description: "Your team finds the answer without asking three colleagues, because retrieval was built and measured properly."
    },
    {
        icon: cloudinaryImages.AiDemoEleven,
        title: "Tools People Open",
        description: "Systems that fit how your team already works, so they get used instead of shelved."
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

export { bannerHeading, bannerText, howWeDos, howWeDoText, howWeDosIt, workSliderData, fourBoxesContent };
