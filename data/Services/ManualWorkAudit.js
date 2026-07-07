import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>Send Us One Workflow</h1>;
const bannerText = <p>We find where your team's time goes and what's worth automating first.</p>;
const howWeDos = [
    {
        icon: cloudinaryImages.AiAuditOne,
        boxColor: "orange",
        title: "The Weekly Report",
        description: "The numbers someone rebuilds by hand every Monday, outdated before anyone reads them.",
    },
    {
        icon: cloudinaryImages.AiAuditTwo,
        boxColor: "blue",
        title: "The Cold Leads",
        description: "Follow-ups that happen \"when there's time,\" which is how leads go cold.",
    },
    {
        icon: cloudinaryImages.AiAuditThree,
        boxColor: "farozi",
        title: "The Manual Checks",
        description: "Invoices, orders and records checked line by line, week after week.",
    },
];
const howWeDoText = [
    { text: "The manual work quietly costing your team hours every week." }
];
const fourBoxesContent = [
    {
        iconDefault: cloudinaryImages.AiAuditFour,
        title: "Send One Workflow",
        description: "One or two sentences describing a task your team repeats. That's the ask."
    },
    {
        iconDefault: cloudinaryImages.AiAuditFive,
        title: "Map The Time",
        description: "We time it, trace it and find where the work stalls."
    },
    {
        iconDefault: cloudinaryImages.AiAuditSix,
        title: "Get A Straight Read",
        description: "What's worth automating, what isn't and what should stay human."
    },
    {
        iconDefault: cloudinaryImages.AiAuditSeven,
        title: "Automate What's Worth It",
        description: "We build the first version and keep judgment with your people."
    },
];
const howWeDosIt = [
    {
        icon: cloudinaryImages.AiAuditEight,
        title: "Repetition Cost",
        description: "Five minutes, eight times a day, three people. Small tasks carry big numbers. We calculate what repetition really costs."
    },
    {
        icon: cloudinaryImages.AiAuditNine,
        title: "Invisible Work",
        description: "No budget has a line called \"manual invoice matching.\" We make hidden work visible enough to get fixed."
    },
    {
        icon: cloudinaryImages.AiAuditTen,
        title: "Judgment Steps",
        description: "The parts that need a human stay human. We separate the copy-paste a machine should own from real decisions."
    },
    {
        icon: cloudinaryImages.AiAuditEleven,
        title: "Quick Wins",
        description: "The first automation should pay for itself fast. We find the workflow where the time comes back soonest."
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

export { bannerHeading, bannerText, howWeDos, howWeDoText, howWeDosIt, workSliderData, fourBoxesContent, techImages };
