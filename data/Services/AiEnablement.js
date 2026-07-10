import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>Put AI Inside<br /> Your Daily Operations</h1>;
const bannerText = <p>Not a pilot and not a proof of concept. We build AI into the workflows your team already runs, connect it to the systems you already use, and stay for the monitoring and retraining that keeps it working.</p>;
const skillTitle = <h2 className="text-white"><span>Unlock The </span> Benefits</h2>;
const howWeDos = [
    {
        icon: cloudinaryImages.AiBoxes01,
        boxColor: "orange",
        title: "Workflow Automation",
        description: "The reports, follow-ups and checks your team repeats every week, handed to machines while the judgment stays with people.",
    },
    {
        icon: cloudinaryImages.AiBoxes02,
        boxColor: "blue",
        title: "Generative AI & LLM Apps",
        description: "Chatbots, RAG systems and LLM applications built on OpenAI and Anthropic APIs, grounded in your business data.",
    },
    {
        icon: cloudinaryImages.AiBoxes03,
        boxColor: "farozi",
        title: "Production ML Systems",
        description: "Custom models with the pipelines, evaluation and monitoring that keep them accurate after launch.",
    },
];
const tabData = [
    {
        eventKey: "first",
        title: "Hours Back Every Week",
        iconDefault: Images.WhatForIconOne,
        iconHover: Images.WhatForIconHoverOne,
        image: cloudinaryImages.AiBenifits01,
        description: "The Friday report, the invoice checks, the support answers on a loop. Once automated, that time goes back to work only people can do. For most teams the first workflow pays for the build."
    },
    {
        eventKey: "second",
        title: "Systems That Keep Working",
        iconDefault: Images.WhatForIconTwo,
        iconHover: Images.WhatForIconHoverTwo,
        image: cloudinaryImages.AiBenifits02,
        description: "Most AI stalls after the demo. Ours ships with monitoring, retraining and cost ceilings, so quality holds in month six, not just week one."
    },
    {
        eventKey: "third",
        title: "Judgment Stays Human",
        iconDefault: Images.WhatForIconThree,
        iconHover: Images.WhatForIconHoverThree,
        image: cloudinaryImages.AiBenifits03,
        description: "We automate the copy-paste, not the decisions. Approvals, edge cases and anything that needs a person stay with your people, by design."
    },
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
];

export { bannerHeading, bannerText, skillTitle, howWeDos, tabData, workSliderData, techImages };
