import { Images } from "@/assets/assets";

const bannerHeading = <h1>Connecting Drone<br />Experts With Clients</h1>;
const bannerText = <p>A drone services platform connecting skilled professionals with clients seeking aerial services, revolutionizing the drone industry.</p>;
const feedbackText = [
    { text: "I’m incredibly grateful to the Data on Matrix team for their exceptional work on this project. They not only brought my vision to life but also seamlessly adapted to evolving needs and resolved complex challenges throughout the project." }
];
const goals = [
    {
        icon: Images.iconCSBuzzFliGoal01,
        title: "Intuitive User Interface",
        text: "Create a user-friendly platform with a visually appealing and highly interactive interface."
    },
    {
        icon: Images.iconCSBuzzFliGoal02,
        title: "Secure & Efficient System",
        text: "Develop a robust, secure and efficient system for efficient drone service project management."
    },
    {
        icon: Images.iconCSBuzzFliGoal03,
        title: "Seamless User Experience",
        text: "Optimize the platform for seamless cross-device performance and superior user experience."
    }
];
const servicesBoxesContent = [
    {
        description: "Developing a sophisticated algorithm to match clients with the most suitable drone pilots based on their specific needs and location."
    },
    {
        description: "Ensuring the security of sensitive information, such as financial details and project specifics."
    },
    {
        description: "Creating a user-friendly interface that is intuitive for both drone service providers and their clients."
    },
    {
        description: "Designing a scalable platform to accommodate future growth and increased user demand."
    },
];
const solutions = [
    {
        counterIcon: Images.iconCSSol01,
        title: "In-depth",
        subTitle: "Research",
        text: "Conducted thorough research to understand the industry's pain points and client needs."
    },
    {
        counterIcon: Images.iconCSSol02,
        title: "User-Centric",
        subTitle: "Design",
        text: "Designed a user-friendly interface with a focus on intuitive navigation and clear information architecture."
    },
    {
        counterIcon: Images.iconCSSol03,
        title: "Backend",
        subTitle: "Development",
        text: "Developed a scalable and secure backend system to handle large volumes of data and transactions."
    },
    {
        counterIcon: Images.iconCSSol04,
        title: "Rigorous",
        subTitle: "Testing",
        text: "Conducted thorough testing to identify and resolve bugs and performance issues."
    },
    {
        counterIcon: Images.iconCSSol05,
        title: "Final",
        subTitle: "Deployment",
        text: "The successful launch of the platform marked a significant milestone for the project."
    },
    {
        counterIcon: Images.iconCSSol06,
        title: "Support",
        subTitle: "& Maintenance",
        text: "Post deployment support to ensure optimal performance of the platform."
    },
];
const results = [
    {
        icon: Images.iconCSMTechResult01,
        title: "Enhanced ",
        subTitle: "Visibility",
        text: "The platform significantly increased the visibility of drone professionals and their services to a wider audience.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconCSMTechResult02,
        title: "Improved",
        subTitle: "User Experience",
        text: "The user-friendly interface and intuitive design provided a seamless experience for both drone professionals and clients.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconCSMTechResult03,
        title: "Increased",
        subTitle: "Efficiency",
        text: "The platform streamlined the hiring process, reducing time and effort for both parties involved.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconCSMTechResult04,
        title: "Data",
        subTitle: "Driven Insights",
        text: "The platform generated valuable data insights, enabling informed decision-making and continuous improvement.",
        boxColor: "#F5F2F8"
    },

];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developer" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "Website Development" },
    { text: "Software Quality Assurance" },
];
const techStacks = [
    { stackName: "jQuery", image: Images.iconCSBuzzFliTech01 },
    { stackName: "HTML5", image: Images.iconCSBuzzFliTech02 },
    { stackName: "CSS3", image: Images.iconCSBuzzFliTech03 },
    { stackName: "PHP", image: Images.iconCSBuzzFliTech04 },
    { stackName: "JavaScript", image: Images.BuzzFliStack05 },
    { stackName: "Laravel", image: Images.iconCSBuzzFliTech06 },
    { stackName: "MySQL", image: Images.iconCSBuzzFliTech07 }
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

export { bannerHeading, bannerText, workSliderData, goals, solutions, servicesBoxesContent, results, teamDetails, expertiseDetails, techStacks, feedbackText };