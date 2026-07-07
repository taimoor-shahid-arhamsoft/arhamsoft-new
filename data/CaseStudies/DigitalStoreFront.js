import { Images } from "@/assets/assets";

const bannerHeading = <h1>An Innovative Marketplace<br />For Everyday Services</h1>;
const bannerText = <p>A digital platform connecting you with a curated selection of skilled professionals and service providers.</p>;
const goals = [
    {
        icon: Images.iconCSMarket24Goal01,
        title: "Build A Future-Proof Marketplace",
        text: "Dominate the online service market, build trust, and attract a wide user base."
    },
    {
        icon: Images.iconCSMarket24Goal02,
        title: "Provide Seamless User Experience",
        text: "Create a simplified, user-friendly platform for easy service discovery and booking."
    },
    {
        icon: Images.iconCSMarket24Goal03,
        title: "High-Quality Service Delivery ",
        text: "Ensure top-notch services through transparent ratings and continuous improvement."
    }
];
const servicesBoxesContent = [
    {
        description: "Balancing the need for a robust e-commerce platform with a dynamic content management system to ensure a seamless user experience."
    },
    {
        description: "Designing an intuitive and visually appealing interface that caters to diverse user needs, from simple browsing to complex service requests and payments."
    },
    {
        description: "Implementing a streamlined process for submitting and tracking service requests, ensuring timely response and resolution."
    },
    {
        description: "Integrating a secure payment gateway to facilitate smooth transactions and safeguard sensitive customer data."
    },
];
const solutions = [
    {
        counterIcon: Images.iconCSSol01,
        title: "Dedicated Project",
        subTitle: "Management",
        text: "Assigned a dedicated project coordinator to conduct a thorough analysis of the client's existing system and identify areas for improvement and optimization."
    },
    {
        counterIcon: Images.iconCSSol02,
        title: "Custom Web App",
        subTitle: "Development",
        text: "Developed a tailored web application using the MEAN stack technology and custom JavaScript solutions to meet the client's specific needs."
    },
    {
        counterIcon: Images.iconCSSol03,
        title: "Efficient Service",
        subTitle: "Management System",
        text: "Implemented a centralized dashboard for real-time monitoring and automated workflows to streamline service delivery processes."
    },
    {
        counterIcon: Images.iconCSSol04,
        title: "Personalized Customer",
        subTitle: "Portal",
        text: "Developed a user-friendly customer portal for viewing service history, tracking requests, and providing feedback."
    },
    {
        counterIcon: Images.iconCSSol05,
        title: "Real-Time Mobile",
        subTitle: "Alerts",
        text: "Implemented a system to send timely notifications to customers regarding service updates, reminders, and promotions."
    },
    {
        counterIcon: Images.iconCSSol06,
        title: "Enhanced User",
        subTitle: "Experience",
        text: "Improved overall customer experience through streamlined processes and personalized communication."
    },
];
const results = [
    {
        icon: Images.iconCSMarketResult01,
        title: "Revenue",
        subTitle: "Growth",
        text: "Enhanced product discovery and streamlined checkout fueled sales growth.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconCSMarketResult02,
        title: "Optimized ",
        subTitle: "Operations",
        text: "Improved customer journey through streamlined operations and timely service.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconCSMarketResult03,
        title: "Enhanced",
        subTitle: "Usability",
        text: "Improved efficiency and operational excellence of service delivery processes.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconCSMarketResult04,
        title: "Market",
        subTitle: "Expansion",
        text: "Supported platform growth and expansion plans through a scalable solution.",
        boxColor: "#F5F2F8"
    },

];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Coordinator" }
];
const expertiseDetails = [
    { text: "Web App Development" },
];
const techStacks = [
    { stackName: "Google Analytics", image: Images.iconCSMarketTech01 },
    { stackName: "MongoDB", image: Images.iconCSMarketTech02 },
    { stackName: "AJAX", image: Images.iconCSMarketTech03 },
    { stackName: "jQuery", image: Images.iconCSMarketTech04 },
    { stackName: "HTML5", image: Images.iconCSMarketTech05 },
    { stackName: "CSS3", image: Images.iconCSMarketTech06 },
    { stackName: "Angular", image: Images.iconCSMarketTech07 },
    { stackName: "JavaScript", image: Images.MarketStack08 },
    { stackName: "Bootstrap", image: Images.iconCSMarketTech09 },
    { stackName: "MySQL", image: Images.iconCSMarketTech10 },
    { stackName: "Stripe", image: Images.iconCSMarketTech11 },
    { stackName: "Node.js", image: Images.iconCSMarketTech12 },
    { stackName: "Google Map API", image: Images.iconCSMarketTech13 }
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

export { bannerHeading, bannerText, workSliderData, goals, solutions, servicesBoxesContent, results, teamDetails, expertiseDetails, techStacks };