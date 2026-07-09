import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = (
    <h1>
        Find Where Your AI
        <br /> Cracks First
    </h1>
);
const bannerText = (
    <p>
        Your prototype works because you're the only user. Before you scale, we review
        the whole system around your model and tell you what breaks first, so you can
        fix it before your users find it.
    </p>
);
const howWeDos = [
    {
        icon: cloudinaryImages.AiReviewOne,
        boxColor: "orange",
        title: "Retrieval & Data",
        description: "How your system handles messy real-world data, and whether retrieval finds the right document, measured properly.",
    },
    {
        icon: cloudinaryImages.AiReviewTwo,
        boxColor: "blue",
        title: "Evaluation & Guardrails",
        description: "The checks that catch the failing 5% before users do, plus the guardrails and security around them.",
    },
    {
        icon: cloudinaryImages.AiReviewThree,
        boxColor: "farozi",
        title: "Cost & Monitoring",
        description: "Latency and cost as architecture, monitoring after launch, and the escalation path to a human.",
    },
];
const skillTitle = <h2 className="text-white"><span>Unlock The </span> Benefits</h2>;
const tabData = [
    {
        eventKey: "first",
        title: "A Straight Read",
        iconDefault: Images.WhatForIconOne,
        iconHover: Images.WhatForIconHoverOne,
        image: Images.teamAugLargeIn01,
        description: "You get a ranked list of what breaks first and what fixing it takes, written so your team can act on it. No deck padding."
    },
    {
        eventKey: "second",
        title: "Fixed Scope, Fixed Price",
        iconDefault: Images.WhatForIconTwo,
        iconHover: Images.WhatForIconHoverTwo,
        image: Images.teamAugLargeIn02,
        description: "A review with a start, an end and a price. You decide what to fix and who fixes it. No lock-in to us."
    },
    {
        eventKey: "third",
        title: "Cheaper Than An Outage",
        iconDefault: Images.WhatForIconThree,
        iconHover: Images.WhatForIconHoverThree,
        image: Images.teamAugLargeIn03,
        description: "Finding the weak point in a review costs a fraction of finding it in production with users watching."
    },
];
const fourBoxesContent = [
    {
        iconDefault: cloudinaryImages.AiReviewFour,
        title: "Share One Worry",
        description: "Tell us the one thing you're not sure will hold at scale."
    },
    {
        iconDefault: cloudinaryImages.AiReviewFive,
        title: "System Review",
        description: "We go through architecture, retrieval, evaluation, guardrails and monitoring."
    },
    {
        iconDefault: cloudinaryImages.AiReviewSix,
        title: "Straight Read",
        description: "You learn what breaks first and what to fix before it does."
    },
    {
        iconDefault: cloudinaryImages.AiReviewSeven,
        title: "Fix & Harden",
        description: "We help you build the missing pieces before your users find them."
    },
];
const howWeDosIt = [
    {
        icon: cloudinaryImages.AiReviewEight,
        title: "Junk Input",
        description: "Real users paste 4,000 words of garbage and ask three things at once. We test what happens when input is junk."
    },
    {
        icon: cloudinaryImages.AiReviewNine,
        title: "Silent Failures",
        description: "Answers that sound right and aren't. We build evaluation sets that measure quality instead of guessing at it."
    },
    {
        icon: cloudinaryImages.AiReviewTen,
        title: "Runaway Cost",
        description: "Context stuffing and unbounded calls quietly triple your bill. We design cost ceilings into the architecture."
    },
    {
        icon: cloudinaryImages.AiReviewEleven,
        title: "Drift & Scale",
        description: "Quality that slips after launch, load that triples overnight. We set up the monitoring that catches both."
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
    { id: 1, image: Images.techAiOne },
    { id: 2, image: Images.techAiTwo },
    { id: 3, image: Images.techAiThree },
    { id: 4, image: Images.techAiFour },
    { id: 5, image: Images.techAiFive },
    { id: 6, image: Images.techAiSix },
    { id: 7, image: Images.techAiSeven },
];

export { bannerHeading, bannerText, howWeDos, skillTitle, tabData, howWeDosIt, workSliderData, fourBoxesContent, techImages };
