import { Images } from "@/assets/assets";

const bannerHeading = <h1>Digital Transformation <br />Solution Provider</h1>;
const bannerText = <p>Future-proof your business with our digital technology transformation expertise. Integrate the latest tech solutions to streamline your operations, drive innovation, and enhance customer experiences.</p>;
const howWeDoText = [
    { text: "Scale your business with our customized digital solutions." },
];
const howWeDos = [
    {
        icon: Images.digiTransThree01,
        boxColor: "orange",
        title: "For B2B",
        description: "Elevate your B2B business with digital transformation, focusing on digital selling, user experience and product innovation.",
    },
    {
        icon: Images.digiTransThree02,
        boxColor: "blue",
        title: "For Enterprises",
        description: "Partner with us, a leading digital transformation services company to modernize, automate and scale your enterprise of any size.",
    },
    {
        icon: Images.digiTransThree03,
        boxColor: "farozi",
        title: "For SMEs",
        description: "Leveraging our experience in working with SMEs, we help businesses align their operations and workflows with the latest digital trends.",
    },
];
const howwewedos = [
    {
        icon: Images.iconDT01,
        title: "Cloud Solutions",
        keypoints: [
            { title: "Cloud Migration" },
            { title: "Cloud Optimization" },
            { title: "Cloud Security" },
            { title: "Cloud-Native Development" },
        ]
    },
    {
        icon: Images.iconDT02,
        title: "Data Engineering",
        keypoints: [
            { title: "Data Integration" },
            { title: "Data Warehousing" },
            { title: "Data Analytics" },
            { title: "Data Visualization" }
        ]
    },
    {
        icon: Images.iconDT03,
        title: "AI & Machine Learning",
        keypoints: [
            { title: "Predictive Analytics" },
            { title: "Machine Learning" },
            { title: "Natural Language Processing" },
            { title: "Computer Vision" },
        ]
    },
    {
        icon: Images.iconDT04,
        title: "Cyber Security",
        keypoints: [
            { title: "Threat Detection" },
            { title: "Vulnerability Assessment" },
            { title: "Incident Response" },
            { title: "Security Audits" },
        ]
    }
];
const fourBoxesContent = [
    {
        iconDefault: Images.digiTransProcess01,
        title: "Assess & Plan",
        description: "We analyze your business processes and systems to create a strategic roadmap."
    },
    {
        iconDefault: Images.digiTransProcess02,
        title: "Transform & Optimize",
        description: "Implement key system and process improvements based on the agreed plan."
    },
    {
        iconDefault: Images.digiTransProcess03,
        title: "Scale & Expand",
        description: "Extend the transformation initiative to achieve maximum organizational benefit."
    },
    {
        iconDefault: Images.digiTransProcess04,
        title: "Adapt & Evolve",
        description: "Continuously update and refine your digital tech transformation to stay ahead."
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

export { bannerHeading, bannerText, workSliderData, howwewedos, fourBoxesContent, howWeDoText, howWeDos };