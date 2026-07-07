import { Images } from "@/assets/assets";

const bannerHeading = <h1>Empower Your Business <br />with .NET Solutions</h1>;
const bannerText = <p>A comprehensive account management system development: enhancing business efficiency, customer retention, revenue growth, and data-driven decision-making. </p>;
const whatWeDoTitle = <h2><span className="d-block">Project Goals</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconAMSWWDDefault01,
        iconHover: Images.iconAMSWWDHover01,
        title: "Central Data Hub",
        description: "A unified repository for all customer data, ensuring consistency and accuracy."
    },
    {
        iconDefault: Images.iconAMSWWDDefault02,
        iconHover: Images.iconAMSWWDHover02,
        title: "Automated Workflows",
        description: "Implement automation workflows to streamline tasks like invoicing and reporting. "
    },
    {
        iconDefault: Images.iconAMSWWDDefault03,
        iconHover: Images.iconAMSWWDHover03,
        title: "Real-Time Insights",
        description: "To provide real-time analytics to monitor key metrics and gain actionable insights."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconAMSSevices01,
        title: "Inventory Management",
        description: "Implement a centralized system to manage non-capital assets, streamline procurement processes, and optimize inventory levels. "
    },
    {
        iconDefault: Images.iconAMSSevices02,
        title: "Product Management",
        description: "Maintain real-time inventory management and track product lifecycle stages. Analyze product variants, availability, sales, and profitability."
    },
    {
        iconDefault: Images.iconAMSSevices03,
        title: "Department Management",
        description: "Streamline departmental management with centralized user assignment and oversight, improving organizational efficiency."
    },
    {
        iconDefault: Images.iconAMSSevices04,
        title: "Customer Management",
        description: "Utilize a robust data management system to collect, store, and analyze customer data, enabling data-driven decision-making."
    },
    {
        iconDefault: Images.iconAMSSevices05,
        title: "Sales Management",
        description: "Streamline the sales process, increase sales efficiency, and improve customer satisfaction by automating order entry and invoicing."
    },
    {
        iconDefault: Images.iconAMSSevices06,
        title: "General Reports",
        description: "Gain deep insights into your business with detailed reports on sales, purchases, inventory, manufacturing, and product stock."
    },
    {
        iconDefault: Images.iconAMSSevices07,
        title: "Account Reports ",
        description: "This module offers a comprehensive suite of financial reports to provide deep insights into your business's financial health."
    },
];
const challengeKeyPoints = [
    { text: "Integrating data from multiple sources, such as ERP systems, CRM systems, and other legacy systems." },
    { text: "Ensuring the security and privacy of sensitive customer data." },
    { text: "Designing a system that can handle a growing number of customers and transactions." },
    { text: "Optimizing the system for fast response times and efficient data processing." },
];
const solutionTabContent = [
    {
        tabImage: Images.iconAMSSolTab01,
        heading: "Discovery, Planning & Design",
        contentTexts: [
            { text: "<p><strong>Requirement Gathering:</strong> Collected and documented detailed requirements from the client.</p>" },
            { text: "<p><strong>Solution Architecture Design:</strong> Designed the overall system architecture, including the technology stack and system components.</p>" },
            { text: "<p><strong>Project Planning:</strong> Developed a detailed project plan, including timelines, resource allocation, and risk management strategies.</p>" },
        ],
    },
    {
        tabImage: Images.iconAMSSolTab02,
        heading: "App Development & Integration",
        contentTexts: [
            { text: "<p><strong>Frontend Development:</strong> Designed and developed a user-friendly and intuitive frontend interface.</p>" },
            { text: "<p><strong>Backend Development:</strong> Implemented the core business logic and data access layer using .NET Core and Entity Framework Core. </p>" },
            { text: "<p><strong>Database Integration:</strong> Established a seamless connection between the application and the MySQL database to store and retrieve customer data.</p>" },
        ],
    },
    {
        tabImage: Images.iconAMSSolTab03,
        heading: "Quality Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Quality Assurance Testing:</strong> Conducted thorough testing to identify and fix bugs and ensure optimal performance.</p>" },
            { text: "<p><strong>Final Deployment:</strong> Deployed the application to the production environment.</p>" },
            { text: "<p><strong>Post-Deployment Support:</strong> Provided ongoing maintenance and support to ensure the application's reliability and security.</p>" },
        ],
    },
];
const results = [
    {
        icon: Images.iconAMSResult01,
        title: "Enhanced",
        subTitle: "Efficiency",
        text: "Automated workflows have reduced manual effort and accelerated processes.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconAMSResult02,
        title: "Increased ",
        subTitle: "Usability",
        text: "Expedited service delivery and rapid response times have boosted customer satisfaction.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconAMSResult03,
        title: "Actionable ",
        subTitle: "Analytics",
        text: "Real-time analytics have empowered the stakeholders to make informed strategic decisions.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconAMSResult04,
        title: "Reduced ",
        subTitle: "Operational Cost",
        text: "Automation and streamlined processes led to a reduction in operational costs.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Manufacturing  " },
];
const teamDetails = [
    { counter: "1", detail: "UX/UI Designer" },
    { counter: "2", detail: "Frontend Developers" },
    { counter: "2", detail: "Backend Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Custom Software Development " },
    { text: "Software Quality Assurance" },
    { text: "Post-Deployment Support  " },
];
const techStacks = [
    { stackName: ".NET MVC 4.6 ", image: Images.iconAMSTech01 },
    { stackName: "Azure", image: Images.iconAMSTech02 },
    { stackName: "HTML5", image: Images.iconAMSTech03 },
    { stackName: "CSS3", image: Images.iconAMSTech04 },
    { stackName: "Angular", image: Images.iconAMSTech05 },
    { stackName: "MySql", image: Images.iconAMSTech06 }
];
const feedbackText = [
    { text: "Our business was struggling to keep up with the increasing complexity of managing our diverse customer base. We engaged Data on Matrix's dedicated team, who successfully delivered a comprehensive AMS that has significantly improved our operational efficiency." }
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, industryDetails, teamDetails, expertiseDetails, techStacks, feedbackText };