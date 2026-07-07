import { Images } from "@/assets/assets";

const bannerHeading = <h1>A White-label <br />HRM Solution</h1>;
const bannerText = <p>We developed a scalable white-label HR SaaS platform that empowers businesses to quickly deploy innovative HR solutions, regardless of their industry.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconLynxHRMWWDDefault01,
        iconHover: Images.iconLynxHRMWWDHover01,
        title: "Rapid Development",
        description: "The solution must be developed and deployed rapidly, with a focus on future adaptability."
    },
    {
        iconDefault: Images.iconLynxHRMWWDDefault02,
        iconHover: Images.iconLynxHRMWWDHover02,
        title: "Scalable Performance",
        description: "The system should be highly scalable, capable of handling a large number of users and data."
    },
    {
        iconDefault: Images.iconLynxHRMWWDDefault03,
        iconHover: Images.iconLynxHRMWWDHover03,
        title: "Integration Capabilities",
        description: "The system should seamlessly integrate with existing HR systems and other business tools."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconFeatureLynxHRM01,
        title: "HR & Benefits Administration",
        description: "To streamline HR administration with a single dashboard for onboarding, attendance management, time tracking, appraisals, and more."
    },
    {
        iconDefault: Images.iconFeatureLynxHRM02,
        title: "Resource Management",
        description: "A platform for users to trade their data with businesses and organizations and earn rewards for personal data exchange."
    },
    {
        iconDefault: Images.iconFeatureLynxHRM03,
        title: "Performance Management",
        description: "To evaluate employee performance effectively and identify development opportunities. This module helps simplify the evaluation process, assessing skills and rewarding achievements."
    },
    {
        iconDefault: Images.iconFeatureLynxHRM04,
        title: "Payroll Management",
        description: "To make payroll and time reporting simpler by tracking employee check-ins, check-outs, paid time off, and other relevant data."
    },
    {
        iconDefault: Images.iconFeatureLynxHRM05,
        title: "Appraisals and Reporting",
        description: "To leverage a fully automated, customizable HRMS solution to streamline the performance appraisal cycle and generate insightful reports."
    },
];
const challengeKeyPoints = [
    { strongText: "Complex HR Processes:", text: "Manual processes and outdated systems lead to inefficiencies, errors, and inconsistencies in HR data." },
    { strongText: "Scalability Issues:", text: "As businesses grow, their HR needs evolve. Traditional systems may not be able to scale effectively, leading to bottlenecks and increased costs." },
    { strongText: "Market Dynamics:", text: "Foster a thriving data marketplace by understanding market dynamics and value propositions." },
    { strongText: "High Costs:", text: "Developing and maintaining custom HR software can be expensive, especially for smaller businesses with limited budgets." },
    { strongText: "Lack of Expertise:", text: "Many businesses lack the in-house HR expertise to manage and optimize HR operations effectively." },
    { strongText: "Data Security Concerns:", text: "HR data is sensitive and requires robust security measures to protect it from breaches and unauthorized access." },
];
const solutionTabContent = [
    {
        tabImage: Images.LynxHRMSolTab01,
        heading: "Core HR Functions",
        contentTexts: [
            { text: "<p><strong>Payroll and Benefits Administration:</strong> Processing payroll, managing benefits enrollment, and ensuring compliance with tax and labor laws.</p>" },
            { text: "<p><strong>Employee Records Management:</strong> Maintaining accurate and up-to-date employee records, including personal information, employment history, and performance reviews.</p>" },
            { text: "<p><strong>Time and Attendance:</strong> Tracking employee time and attendance, calculating overtime, and generating accurate time sheets.</p>" },
        ],
    },
    {
        tabImage: Images.LynxHRMSolTab02,
        heading: "Talent Acquisition & Management",
        contentTexts: [
            { text: "<p><strong>Recruitment and Onboarding:</strong> Sourcing, screening, and hiring new talent, as well as onboarding new employees.</p>" },
            { text: "<p><strong>Performance Management:</strong> Setting performance goals, conducting performance reviews, and providing feedback.</p>" },
            { text: "<p><strong>Learning and Development:</strong> Designing and delivering training programs, managing employee development plans, and tracking training progress.</p>" },
        ],
    },
    {
        tabImage: Images.LynxHRMSolTab03,
        heading: "Employee Engagement & Experience",
        contentTexts: [
            { text: "<p><strong>Employee Surveys and Feedback:</strong> Gathering employee feedback to identify areas for improvement.</p>" },
            { text: "<p><strong>Employee Recognition Programs:</strong> Implementing programs to recognize and reward employee contributions.</p>" },
            { text: "<p><strong>Employee Wellness Programs:</strong> Promoting employee health and well-being through wellness initiatives.</p>" },
        ],
    },
    {
        tabImage: Images.LynxHRMSolTab04,
        heading: "HR Analytics & Reporting",
        contentTexts: [
            { text: "<p><strong>Data Analytics:</strong> Using data to identify trends, make informed decisions, and measure the impact of HR initiatives.</p>" },
            { text: "<p><strong>Reporting and Metrics:</strong> Generating reports on key HR metrics, such as turnover rates, time-to-hire, and employee satisfaction.</p>" },
        ],
    }
];
const results = [
    {
        icon: Images.iconLynxHRMResult01,
        title: "Rapid",
        subTitle: "Development",
        text: "The first iteration of this HRM solution was launched in just 6 months, showcasing rapid time-to-market.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconLynxHRMResult02,
        title: "Industry",
        subTitle: "Versatility",
        text: "The platform was designed to cater to a wide range of industries, demonstrating its versatility.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconLynxHRMResult03,
        title: "Enterprise",
        subTitle: "Adoption",
        text: "The platform quickly gained traction among large enterprises, including banks and logistics networks.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconLynxHRMResult04,
        title: "Scalable",
        subTitle: "Operations",
        text: "The client effectively scaled operations to meet rising user demand and evolving business requirements.",
        boxColor: "#F5F2F8"
    },

];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Product Design" },
    { text: "SaaS Development" },
];
const techStacks = [
    { stackName: "HTML5", image: Images.lynxHRMRTech01 },
    { stackName: "CSS3", image: Images.lynxHRMRTech02 },
    { stackName: "Angular 6", image: Images.lynxHRMRTech03 },
    { stackName: "MySQL", image: Images.lynxHRMRTech04 },
    { stackName: ".NET MVC 4.6", image: Images.lynxHRMRTech05 },
];
const feedbackText = [
    { text: "Data on Matrix provided exceptional support, always quick to assist and incredibly patient. Their efficient communication and problem-solving skills were instrumental in the success of our project. I'm impressed by their commitment to quality and customer satisfaction." }
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, techStacks, feedbackText };