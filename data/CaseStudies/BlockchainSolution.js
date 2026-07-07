import { Images } from "@/assets/assets";

const bannerHeading = <h1>The Future of Data <br />Control & Exchange</h1>;
const bannerText = <p>A blockchain-powered platform, empowers users to control, manage, and monetize their personal data securely and transparently.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconDaytaWWDDefault01,
        iconHover: Images.iconDaytaWWDHover01,
        title: "Data Empowerment",
        description: "Empower users to manage their data and control its usage."
    },
    {
        iconDefault: Images.iconDaytaWWDDefault02,
        iconHover: Images.iconDaytaWWDHover02,
        title: "Data Security",
        description: "Ensure the secure storage and protection of user data."
    },
    {
        iconDefault: Images.iconDaytaWWDDefault03,
        iconHover: Images.iconDaytaWWDHover03,
        title: "Data Monetization",
        description: "Enable users to monetize their data and generate revenue."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconFeatureDayta01,
        title: "Secure Data Vault",
        description: "A secure, encrypted storage solution for personal data. An intuitive dashboard helps manage data and track rewards."
    },
    {
        iconDefault: Images.iconFeatureDayta02,
        title: "Data Marketplace",
        description: "A platform for users to trade their data with businesses and organizations and earn rewards for personal data exchange."
    },
    {
        iconDefault: Images.iconFeatureDayta03,
        title: "Smart Contracts",
        description: "Automated contracts to facilitate data exchange and enforce agreements along with robust security measures to protect user data."
    },
    {
        iconDefault: Images.iconFeatureDayta04,
        title: "Data Monetization",
        description: "Individuals have the opportunity to earn from their data, similar to how companies benefit from user information for marketing and analysis."
    },
    {
        iconDefault: Images.iconFeatureDayta05,
        title: "GDPR Compliance",
        description: "The platform is designed to comply with the General Data Protection Regulation, ensuring users can manage and profit from their data worldwide."
    },
];
const challengeKeyPoints = [
    { strongText: "Technical Complexity:", text: "Integrating blockchain technology with traditional data management systems required careful consideration of scalability, performance, and security." },
    { strongText: "Token Economics:", text: "Design a sustainable token economy to incentivize participation and reward contributions." },
    { strongText: "Market Dynamics:", text: "Foster a thriving data marketplace by understanding market dynamics and value propositions." },
    { strongText: "Security & Compliance:", text: "Navigating a complex regulatory landscape, especially regarding data privacy and security, was essential to ensuring legal and ethical compliance." },
    { strongText: "User Training & Adoption:", text: "Educating users about the benefits of data ownership and the intricacies of blockchain technology was crucial for widespread adoption." },
];
const leftBlockHeading = {
    title: "Technical",
    subTitle: "Infrastructure"
};
const leftBlockBullets = [
    {
        title: "Blockchain Integration:",
        description: "Implement robust blockchain infrastructure for secure, transparent, and immutable data transactions."
    },
    {
        title: "Smart Contract Development:",
        description: "Develop smart contracts to automate processes, enforce agreements, and facilitate secure data exchange."
    }
];
const rightBlockHeading = {
    title: "Data Security",
    subTitle: "& Marketplace"
};
const rightBlockBullets = [
    {
        title: "Data Security and Privacy:",
        description: "Implement stringent security measures to safeguard user data and comply with relevant regulations."
    },
    {
        title: "Tokenization and Marketplace:",
        description: "Develop a tokenization mechanism to represent data ownership and create a marketplace for data exchange."
    }
];
const solutionTabContent = [
    {
        tabImage: Images.daytaSolTab01,
        heading: "Initiation & Planning",
        contentTexts: [
            { text: "<p><strong>Requirements Gathering:</strong> We collaborated closely with the client to gather detailed requirements for the platform's features, functionality, and user experience.</p>" },
            { text: "<p><strong>Project Planning:</strong> We developed a comprehensive project plan, outlining the project timeline, milestones, and resource allocation.</p>" },
            { text: "<p><strong>Risk Assessment:</strong> We identified potential risks and developed mitigation strategies to minimize their impact.</p>" },
        ],
    },
    {
        tabImage: Images.daytaSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>UX/UI Design:</strong> We created an intuitive and user-friendly interface, ensuring easy navigation and data management.</p>" },
            { text: "<p><strong>Blockchain Architecture:</strong> We designed a robust blockchain architecture, considering scalability, security, and performance requirements.</p>" },
            { text: "<p><strong>Smart Contract Development:</strong> We developed smart contracts to automate data exchange processes, enforce agreements, and ensure transparency.</p>" },
            { text: "<p><strong>Data Privacy & Security:</strong> We implemented advanced security measures, including encryption and access controls, to protect user data.</p>" },
            { text: "<p><strong>Tokenization & Marketplace Development:</strong> We developed a tokenization mechanism and created a marketplace for users to exchange their data.</p>" },
        ],
    },
    {
        tabImage: Images.daytaSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Unit Testing:</strong> We conducted unit testing to ensure the correct functioning of individual components.</p>" },
            { text: "<p><strong>Integration Testing:</strong> We integrated the various components and tested their interactions to identify and resolve any issues.</p>" },
            { text: "<p><strong>User Acceptance Testing:</strong> We involved the client and potential users in UAT to gather feedback and ensure the platform met their needs.</p>" },
            { text: "<p><strong>Final Deployment:</strong> We deployed the platform to production servers, ensuring a smooth transition and immediate accessibility for users.</p>" },
            { text: "<p><strong>Monitoring & Maintenance:</strong> We implemented regular monitoring and maintenance to ensure optimal performance and address any issues.</p>" },
        ],
    }
];
const results = [
    {
        icon: Images.iconDaytaResult01,
        title: "Empowering Data",
        subTitle: "Ownership",
        text: "Users can now control their data, enabling them to make informed decisions about how their data is used.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconDaytaResult02,
        title: "Transparent Data",
        subTitle: "Exchange",
        text: "This blockchain-based business model ensures transparency and accountability in data exchange.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconDaytaResult03,
        title: "Data-Powered",
        subTitle: "Transformation",
        text: "The platform has created new revenue streams and fostered innovation by enabling fair data compensation.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconDaytaResult04,
        title: "Secure Data",
        subTitle: "Platform",
        text: "Robust security measures safeguard user data from cyber threats, unauthorized access, and data breaches.",
        boxColor: "#F5F2F8"
    },

];
const feedbackText = [
    { text: "Data on Matrix is doing a great job in the field of blockchain development, delivering high-quality services. A highly professional and efficient team that caters to all the changes and functional enhancements I ask them to do. I look forward to future collaborations." }
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Blockchain Development" },
    { text: "Software Quality Assurance" },
    { text: "Post-Deployment Support" }
];
const techStacks = [
    { stackName: "Laravel", image: Images.daytaTech01 },
    { stackName: "EVM (Ethereum Virtual Machine)", image: Images.daytaTech02 },
    { stackName: "PHP", image: Images.daytaTech03 },
    { stackName: "Solidity", image: Images.daytaTech04 },
    { stackName: "Remix", image: Images.daytaTech05 },
    { stackName: "Hardhat", image: Images.daytaTech06 }
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, leftBlockHeading, leftBlockBullets, rightBlockHeading, rightBlockBullets };