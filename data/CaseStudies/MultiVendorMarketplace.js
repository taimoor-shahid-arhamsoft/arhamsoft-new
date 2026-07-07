import { Images } from "@/assets/assets";

const bannerHeading = <h1>A Multi-Vendor <br />Ecommerce Platform</h1>;
const bannerText = <p>A dynamic online marketplace that empowers buyers and sellers to connect, transact, and thrive in the digital age.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconTopsunBazarWWDDefault01,
        iconHover: Images.iconTopsunBazarWWDHover01,
        title: "Website Revamp",
        description: "Modernize the website’s design and functionality for optimized performance and streamlined user interactions."
    },
    {
        iconDefault: Images.iconTopsunBazarWWDDefault02,
        iconHover: Images.iconTopsunBazarWWDHover02,
        title: "Mobile Applications",
        description: "Develop dedicated mobile apps for iOS and Android to enhance customer reach, engagement, and conversion rate. "
    },
    {
        iconDefault: Images.iconTopsunBazarWWDDefault03,
        iconHover: Images.iconTopsunBazarWWDHover03,
        title: "Data Migration",
        description: "Seamless data migration from their legacy system to the new platform, prioritizing data integrity and consistency."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconTopsunBazarSevices01,
        title: "Legacy System Limitations",
        description: "The existing WooCommerce-based system was struggling to handle the company's growth, requiring a more scalable solution."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices02,
        title: "Mobile-First Inefficiency",
        description: "The lack of mobile-friendly services hindered the brand's ability to reach and engage a broader customer base."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices03,
        title: "Manual Process Bottlenecks",
        description: "Time-consuming manual customizations and day-to-day operations reduced efficiency and increased the risk of errors."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices04,
        title: "Smooth System Transition",
        description: "A seamless transition to a new system was crucial to avoid disruptions to ongoing operations."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices05,
        title: "Technical Debt Burden",
        description: "Undocumented code and missing functionalities created significant technical debt, hindering system maintainability and future development."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices06,
        title: "Reliable Delivery Process",
        description: "A robust delivery process was necessary to enable frequent code deployments, updates, and improvements."
    },
    {
        iconDefault: Images.iconTopsunBazarSevices07,
        title: "Limited System Understanding",
        description: "Access to only 40% of the system's information posed challenges in comprehending and modifying the existing codebase."
    },
];
const challengeKeyPoints = [
    { text: "Manual customization and data entry processes were time-consuming and prone to errors." },
    { text: "The underlying old technologies were hampering website speed, custom order processing, and performance optimization." },
    { text: "Unidentified functionalities and undocumented codebases increased development complexity." },
    { text: "Scattered information and inconsistent processes hindered operational efficiency." },
];
const solutionTabContent = [
    {
        tabImage: Images.topsunBazarSolTab01,
        heading: "Discovery & Planning",
        contentTexts: [
            { text: "<p><strong>System Analysis:</strong> Thoroughly analyzed the existing system using reverse engineering techniques to understand its architecture and data flow.</p>" },
            { text: "<p><strong>Expert Insights:</strong> Collaborated with a domain expert to document the system and identify areas for improvement.</p>" },
            { text: "<p><strong>Modular Approach:</strong> Adopted a modular approach to system modernization, allowing for a gradual and smooth transition.</p>" },
            { text: "<p><strong>Phased Approach:</strong> Presented a phased approach to the client for approval, ensuring alignment with their vision.</p>" },
        ],
    },
    {
        tabImage: Images.topsunBazarSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>Mobile-First Design:</strong> Prioritized mobile-first design to cater to the growing mobile user base.</p>" },
            { text: "<p><strong>Gap Analysis & Coding:</strong> Identified and filled gaps through meticulous coding and documentation.</p>" },
            { text: "<p><strong>Modular Approach:</strong> Adopted a modular approach to system modernization, allowing for a gradual and smooth transition.</p>" },
            { text: "<p><strong>Process Optimization:</strong> Implemented automation tools and streamlined processes to enhance efficiency.</p>" },
        ],
    },
    {
        tabImage: Images.topsunBazarSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Rigorous Testing:</strong> Conducted comprehensive testing to ensure the system's functionality, performance, and security.</p>" },
            { text: "<p><strong>Data Migration:</strong> Carefully migrated data from the legacy system to the new platform, ensuring data integrity and consistency.</p>" },
            { text: "<p><strong>Deployment & Launch:</strong> Successfully deployed and launched the modernized system, providing a seamless user experience.</p>" },
        ],
    }
];
const results = [
    {
        icon: Images.iconTopsunBazarResult01,
        title: "Technical",
        subTitle: "Upgradation",
        text: "The modernized web platform and cross-platform mobile app have fueled business growth.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconTopsunBazarResult02,
        title: "Operational",
        subTitle: "Efficiency",
        text: "Automated routine operations and streamlined systems have enhanced customer retention.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconTopsunBazarResult03,
        title: "Strategic",
        subTitle: "Partnership",
        text: "Our cost-effective team augmentation services helped the client achieve faster time-to-market.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconTopsunBazarResult04,
        title: "Digital",
        subTitle: "Transformation",
        text: "Turned a basic ecommerce store into a leading tech-driven online marketplace.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Retail" },
    { text: "eCommerce" },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "3", detail: "Web Developers" },
    { counter: "2", detail: "Mobile Developers" },
    { counter: "2", detail: "QA Engineers" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "Web App Development" },
    { text: "iOS App Development" },
    { text: "Android App Development" },
];
const techStacks = [
    { stackName: "Angular 6", image: Images.iconTopsunBazarTech03 },
    { stackName: "jQuery", image: Images.iconTopsunBazarTech04 },
    { stackName: "HTML5", image: Images.iconTopsunBazarTech05 },
    { stackName: "CSS3", image: Images.iconTopsunBazarTech06 },
    { stackName: "MongoDB", image: Images.iconTopsunBazarTech07 },
    { stackName: "AJAX", image: Images.iconTopsunBazarTech09 },
    { stackName: "Bootstrap", image: Images.iconTopsunBazarTech10 },
    { stackName: "JavaScript", image: Images.TopsunBazarStack01 },
    { stackName: ".NET Core 3.1", image: Images.TopsunBazarStack02 },
    { stackName: "Easypaisa", image: Images.TopsunBazarStack03 },
    { stackName: "JazzCash", image: Images.TopsunBazarStack04 },
];
const feedbackText = [
    { text: "Data on Matrix’s agile and iterative approach to web design and development as it evolved has been greatly appreciated. The new website looks fantastic and reflects the hard work and dedication of the people involved in this project. I would like to hire them in the future for all changes. Highly recommended to all." }
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, industryDetails };