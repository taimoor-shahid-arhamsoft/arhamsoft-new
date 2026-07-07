import { Images } from "@/assets/assets";

const bannerHeading = <h1>A Drag-and-Drop  <br />Website Builder</h1>;
const bannerText = <p>An innovative, no-code platform for building professional, cross-platform websites for individuals and businesses of all sizes.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconControlPandaWWDDefault01,
        iconHover: Images.iconControlPandaWWDHover01,
        title: "Customizable Dashboard",
        list: [
            { text: "Granular control over every aspect of website building" },
            { text: "User-friendly interface for easy navigation and customization" }
        ],
    },
    {
        iconDefault: Images.iconControlPandaWWDDefault02,
        iconHover: Images.iconControlPandaWWDHover02,
        title: "Robust Analytics",
        list: [
            { text: "Future-proof data management system" },
            { text: "Valuable insights into website performance and user behavior" }
        ],
    },
    {
        iconDefault: Images.iconControlPandaWWDDefault03,
        iconHover: Images.iconControlPandaWWDHover03,
        title: "Seamless Experience",
        list: [
            { text: "Intuitive interface for users of all technical levels" },
            { text: "Efficient workflow for creating and managing websites" }
        ],
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconControlPandaSevices01,
        title: "Intuitive Interface",
        description: "Easy element placement and customization. No coding required."
    },
    {
        iconDefault: Images.iconControlPandaSevices02,
        title: "Responsive Design",
        description: "Optimized for all devices and screen sizes. Seamless functionality."
    },
    {
        iconDefault: Images.iconControlPandaSevices03,
        title: "Flexible Customization",
        description: "Professional starting points to fit any brand. Pre-built templates."
    },
    {
        iconDefault: Images.iconControlPandaSevices04,
        title: "Advanced Features",
        description: "Powerful tools for rapid customization & optimization. Premium features."
    },
    {
        iconDefault: Images.iconControlPandaSevices05,
        title: "In-depth Web Analytics",
        description: "Comprehensive data tracking and analysis. Web performance diagnostics."
    },
    {
        iconDefault: Images.iconControlPandaSevices06,
        title: "User-Centric Dashboard",
        description: "Centralized control panel for unified monitoring. Consolidated management."
    },
];
const challengeKeyPoints = [
    { text: "The client demanded a highly customizable platform, requiring intricate development and testing." },
    { text: "Implementing a future-proof data management system with advanced reporting capabilities was a significant undertaking." },
    { text: "Ensuring a smooth and intuitive user experience across various devices and browsers posed technical challenges." },
    { text: "Optimizing the platform for performance and scalability to handle increasing user loads was a critical consideration." },
];
const leftBlockHeading = {
    title: "Efficient",
    subTitle: "Web Development"
};
const leftBlockBullets = [
    {
        title: "Drag-and-Drop Editor:",
        description: "A no-code interface that allows users to easily drag and drop elements onto the page, customize their appearance, and arrange them as desired."
    },
    {
        title: "Cross-Platform Design:",
        description: "A responsive framework that automatically adjusts the layout and content to fit different screen sizes, ensuring optimal viewing experiences on all devices."
    },
    {
        title: "User-Friendly Dashboard:",
        description: "A customizable dashboard for users to monitor website performance, manage accounts, and make necessary adjustments."
    },
    {
        title: "Performance Optimization:",
        description: "Deliver fast-loading, efficient websites that provide a seamless user experience."
    }
];
const rightBlockHeading = {
    title: "Advanced",
    subTitle: "Powerful Features"
};
const rightBlockBullets = [
    {
        title: "Customizable Templates:",
        description: " A wide range of customizable templates to accelerate the website-building process and provide a professional starting point."
    },
    {
        title: "Robust Data Analytics:",
        description: "A powerful data management system that collects and stores website performance data, user analytics, and other relevant metrics."
    },
    {
        title: "Security & Scalability:",
        description: "Ensure the platform is built on a solid foundation of security measures, protecting user data and preventing unauthorized access."
    }
];
const solutionTabContent = [
    {
        tabImage: Images.controlPandaSolTab01,
        heading: "Discovery & Planning",
        keyPoints: [
            { text: "Conducted in-depth discussions with the client to understand their specific needs, preferences, and target audience." },
            { text: "Analyzed industry trends and best practices to identify key features and functionalities." },
            { text: "Created wireframes and mockups to visualize the user interface and user experience." },
            { text: "Developed interactive prototypes to test the usability and functionality of the platform." },
        ],
    },
    {
        tabImage: Images.controlPandaSolTab02,
        heading: "Development & Implementation",
        keyPoints: [
            { text: "Utilized a combination of front-end and back-end technologies to build the core functionalities of the platform." },
            { text: "Implemented a drag-and-drop interface for code-free website creation." },
            { text: "Developed a robust data management system to track website performance and user analytics." },
            { text: "Integrated a seamless reporting system to provide actionable insights." },
        ],
    },
    {
        tabImage: Images.controlPandaSolTab03,
        heading: "Testing & Deployment",
        keyPoints: [
            { text: "Conducted rigorous testing to identify and fix bugs and performance issues." },
            { text: "Performed cross-browser and cross-device compatibility testing to ensure optimal performance." },
            { text: "Deployed the platform to a secure, scalable infrastructure." },
            { text: "Provided comprehensive training and support to the client's team." },
        ],
    }
];
const results = [
    {
        icon: Images.iconControlPandaResult01,
        title: "Intelligent",
        subTitle: "Automation",
        text: "A native drag-and-drop interface and customizable templates have empowered users to create stunning websites without requiring coding expertise.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconControlPandaResult02,
        title: "Optimized",
        subTitle: "Performance",
        text: "The optimized code and responsive design of the platform have led to faster loading times and better search engine rankings.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconControlPandaResult03,
        title: "Enhanced",
        subTitle: "Efficiency",
        text: "The streamlined workflow and automated processes have significantly reduced the time and effort required to build and maintain websites.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconControlPandaResult04,
        title: "Data-Driven",
        subTitle: "Insights",
        text: "The robust data management and reporting system provides valuable insights into website performance, enabling data-driven decision-making.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Technology" },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Frontend Developers" },
    { counter: "3", detail: "Backend Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "Custom Software Development" },
];
const techStacks = [
    { stackName: "PHP", image: Images.iconControlPandaTech01 },
    { stackName: "Laravel", image: Images.iconControlPandaTech02 },
    { stackName: "MySQL", image: Images.iconControlPandaTech03 },
    { stackName: "React", image: Images.iconControlPandaTech04 },
    { stackName: "PayPal", image: Images.iconControlPandaTech05 },
    { stackName: "Stripe", image: Images.iconControlPandaTech06 },
    { stackName: "2CO", image: Images.iconControlPandaTech07 },
    { stackName: "AWS", image: Images.iconControlPandaTech08 },
    { stackName: "RDS", image: Images.iconControlPandaTech09 },
    { stackName: "Cloud Front", image: Images.iconControlPandaTech10 },
    { stackName: "Mailgun", image: Images.iconControlPandaTech11 },
    { stackName: "Twilio", image: Images.iconControlPandaTech12 },
    { stackName: "Google Map API", image: Images.iconControlPandaTech13 },
    { stackName: "Google Analytics", image: Images.iconControlPandaTech14 },
    { stackName: "Data - 8", image: Images.ControlPandaStack15 },
    { stackName: "Name studio", image: Images.ControlPandaStack16 },
];
const feedbackText = [
    { text: "A highly skilled team of IT experts with professionalism and commitment. They delivered quality work as we needed. It was indeed a perfect decision to engage team Data on Matrix for this intricate project." }
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, leftBlockHeading, leftBlockBullets, rightBlockHeading, rightBlockBullets, industryDetails };