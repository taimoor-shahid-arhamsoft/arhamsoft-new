import { Images } from "@/assets/assets";

const bannerHeading = <h1>Blockchain-Empowered <br />DeFi Solution</h1>;
const bannerText = <p>A decentralized finance (DeFi) platform that offers a suite of financial services, including lending, borrowing, decentralized trading, and an NFT marketplace.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconAnnexFinanceWWDDefault01,
        iconHover: Images.iconAnnexFinanceWWDHover01,
        title: "Primary Objectives",
        description: "Build a decentralized platform that seamlessly integrates traditional finance and blockchain technology. The platform should prioritize user experience and security through human-centered interface and robust security measures."
    },
    {
        iconDefault: Images.iconAnnexFinanceWWDDefault02,
        iconHover: Images.iconAnnexFinanceWWDHover02,
        title: "System Requirements",
        description: "The project requires integrating BSC for efficient transactions, developing sophisticated smart contracts to automate lending and borrowing, and building a decentralized auction platform to attract capital and foster a vibrant trading ecosystem. "
    },
    {
        iconDefault: Images.iconAnnexFinanceWWDDefault03,
        iconHover: Images.iconAnnexFinanceWWDHover03,
        title: "Strategic Goals",
        description: "To provide global accessibility to borderless financial services, attract a diverse user base from around the world through competitive offerings, and ensure long-term sustainability of the proposed business model through tokenomics and community engagement."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconAnnexFinanceSevices01,
        title: "Money Markets",
        description: "Users can supply assets to earn interest or use them as collateral to borrow other assets. "
    },
    {
        iconDefault: Images.iconAnnexFinanceSevices02,
        title: "Decentralized Exchange",
        description: "Facilitates token swaps and liquidity provision, allowing users to create liquidity pools with high annual percentage yields (APYs)."
    },
    {
        iconDefault: Images.iconAnnexFinanceSevices03,
        title: "Auction ILO Launchpad",
        description: "A platform for launching new project tokens through decentralized auctions, aiming to attract new capital and trade to the exchange."
    },
    {
        iconDefault: Images.iconAnnexFinanceSevices04,
        title: "NFT Marketplace",
        description: "Enable users to discover, collect, and trade NFTs using the ANN token, fostering a dynamic NFT market within the developed ecosystem."
    },
    {
        iconDefault: Images.iconAnnexFinanceSevices05,
        title: "Token Framework",
        description: "The platform's native token, ANN, is used for governance and can be earned through participation in various platform activities."
    },
];
const challengeKeyPoints = [
    { strongText: "Stringent Specifications:", text: "The project's dynamic nature and high standards made it difficult to keep up with changing requirements and maintain a high level of quality." },
    { strongText: "Developing a Robust DEX:", text: "Building a decentralized exchange with strong security, scalability, and user experience was a complex and challenging task." },
    { strongText: "Scaling the Platform:", text: "Expanding the platform to accommodate additional features like NFTs and IDOs while maintaining performance and security was a significant technical undertaking." },
    { strongText: "Tight Timeframes:", text: "Meeting aggressive deadlines puts pressure on the development team, potentially impacting the quality of the final product." },
];
const leftBlockHeading = {
    title: "Core Development",
    subTitle: "Undertakings"
};
const leftBlockBullets = [
    {
        title: "Frontend Development:",
        description: "Designing and developing a user-friendly web interface for seamless interaction with the DeFi platform."
    },
    {
        title: "Backend Development:",
        description: "Building a robust backend infrastructure to support the platform's operations, including data storage, API integrations, and security measures."
    },
    {
        title: "Smart Contract Development:",
        description: "Constructing secure and efficient smart contracts for lending, borrowing, and decentralized trading protocols."
    },
];
const rightBlockHeading = {
    title: "Technical Implementation",
    subTitle: " & Deployment"
};
const rightBlockBullets = [
    {
        title: "BSC Integration:",
        description: "Leveraging BSC's high throughput and low fees for efficient and cost-effective transactions."
    },
    {
        title: "Rigorous Testing:",
        description: "Implementing comprehensive testing procedures to ensure reliability, cross-platform compatibility, and optimal performance."
    },
    {
        title: "Robust Security: ",
        description: "Conducting vulnerability assessments, penetration testing, and security code reviews to safeguard the platform and user funds."
    }
];
const solutionTabContent = [
    {
        tabImage: Images.iconAnnexFinanceSolTab01,
        heading: "Initiation & Planning",
        contentTexts: [
            { text: "<p><strong>Requirement Gathering:</strong> Detailed understanding of business objectives, target audience, and specific functional requirements.</p>" },
            { text: "<p><strong>Technical Architecture Design:</strong> Designing a robust and scalable architecture, including the choice of technologies, database systems, and security protocols.</p>" },
            { text: "<p><strong>Project Planning:</strong> Developing a comprehensive project plan outlining timelines, milestones, and resource allocation.</p>" },
            { text: "<p><strong>Product Prototyping:</strong> Creating interactive prototypes to visualize the user interface and user experience.</p>" },
        ],
    },
    {
        tabImage: Images.iconAnnexFinanceSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>Frontend Development:</strong> Creating a user-friendly and intuitive interface for seamless user interaction.</p>" },
            { text: "<p><strong>Backend Development:</strong> Building a robust backend infrastructure to handle data processing, API integrations, and security measures. </p>" },
            { text: "<p><strong>Smart Contract Development:</strong> Developing secure and efficient smart contracts for core DeFi functionalities like lending, borrowing, and decentralized trading.</p>" },
            { text: "<p><strong>Blockchain Integration:</strong> Integrating the platform with the Binance Smart Chain (BSC) to leverage its high throughput and low transaction fees.</p>" },
        ],
    },
    {
        tabImage: Images.iconAnnexFinanceSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Unit Testing:</strong> Testing individual components of the system to ensure they function as expected.</p>" },
            { text: "<p><strong>Integration Testing:</strong> Testing the interaction between different components to identify and resolve integration issues.</p>" },
            { text: "<p><strong>Security Testing:</strong> Conducting thorough security audits to identify and mitigate vulnerabilities.</p>" },
            { text: "<p><strong>Final Deployment:</strong> Seamlessly deploying the platform to the production environment, ensuring a smooth transition and minimal downtime.</p>" },
        ],
    },
    {
        tabImage: Images.iconAnnexFinanceSolTab04,
        heading: "Post-Deployment Support",
        contentTexts: [
            { text: "<p><strong>Performance Monitoring:</strong> Continuously monitoring the platform's performance metrics to identify potential bottlenecks and optimize performance.</p>" },
            { text: "<p><strong>Issue Resolution:</strong> Promptly addressing and resolving any issues or bugs reported by users or identified through monitoring. </p>" },
            { text: "<p><strong>Regular Updates:</strong> Implementing regular updates and enhancements to improve the platform's features, security, and user experience.</p>" },
            { text: "<p><strong>Technical Support:</strong> Providing timely and effective technical support to users through various channels, such as email, chat, or ticketing systems.</p>" },
        ],
    }
];
const results = [
    {
        icon: Images.iconAnnexFinanceResult01,
        title: "Rapid",
        subTitle: "Adoption",
        text: "The simplified and user-friendly interface of the platform attracted a wide user base.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconAnnexFinanceResult02,
        title: "Platform",
        subTitle: "Growth",
        text: "The platform experienced significant growth in transaction volume and user engagement.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconAnnexFinanceResult03,
        title: "Community",
        subTitle: "Building",
        text: "A vibrant community of DeFi users and blockchain developers emerged.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconAnnexFinanceResult04,
        title: "Financial",
        subTitle: "Success",
        text: "The platform successfully raised funds through token sales and community support.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "FinTech " },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "3", detail: "Developers" },
    { counter: "1", detail: "QA Engineers" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Blockchain Development" },
    { text: "Software Quality Assurance" },
    { text: "Post-Deployment Support " },
    { text: "Ongoing Maintenance" },
];
const techStacks = [
    { stackName: "EVM (Ethereum Virtual Machine)", image: Images.iconAnnexFinanceTech01 },
    { stackName: "PHP", image: Images.iconAnnexFinanceTech02 },
    { stackName: "Solidity", image: Images.iconAnnexFinanceTech03 },
    { stackName: "Remix", image: Images.iconAnnexFinanceTech04 },
    { stackName: "Hardhat", image: Images.iconAnnexFinanceTech05 },
    { stackName: "Node.js", image: Images.iconAnnexFinanceTech06 }
];
const feedbackText = [
    { text: "Data on Matrix has established itself as a reliable partner through multiple successful system releases. The highly skilled development team demonstrated exceptional technical expertise and a deep understanding of the blockchain and NFT landscape. Their commitment to excellence is evident in every aspect of their work." }
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