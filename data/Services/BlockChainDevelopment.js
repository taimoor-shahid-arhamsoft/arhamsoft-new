import { Images } from "@/assets/assets";

const bannerHeading = <h1>Top-Tier <span className="d-block">Blockchain Solutions</span></h1>;
const bannerText = <p>We pave the way for a foolproof future. Experience enhanced security and transparency with our blockchain solutions.</p>;
const content = [
    {
        contentText: [
            { text: "We help businesses leverage decentralized networks and software solutions built on blockchain technology and introduce a whole new level of efficiency, transparency, immutability, and automation into their processes. Our dedicated professionals with deep expertise in this revolutionary technology aim to provide efficient, integrated, and secure solutions for businesses representing different industries. " },
            { text: "<strong>Our wide range of services includes smart contracts, Defi solutions (staking, liquidity, and farming), ICOs, tokens, crypto exchanges, multichain blockchain development, gamification, NFTs, and more.</strong>" },
        ],
        features: [
            {
                icon: Images.iconBCDAYR01,
                title: "Blockchain Consulting",
                description: "Streamline your blockchain journey with our end-to-end consulting services."
            },
            {
                icon: Images.iconBCDAYR02,
                title: "Private Ecosystems",
                description: "We build a secure, private blockchain for your high-volume transactions."
            },
            {
                icon: Images.iconBCDAYR03,
                title: "Decentralized Apps",
                description: "Enterprise-grade custom decentralized app for your critical workflows."
            },
            {
                icon: Images.iconBCDAYR04,
                title: "Digital Wallet Implementation",
                description: "Secure, intuitive multi-signature solutions for swift crypto transactions."
            },
        ]
    },
];
const bulletContent = [
    {
        title: "Enhance Financial Safety",
        description: "Benefit from data integrity and transparent regulation with blockchain's self-executing contracts, which provide immutability for transactions and tokenized assets."
    },
    {
        title: "Remove Operational Bottlenecks",
        description: "By streamlining financial processes and expediting transactions, you can significantly enhance your business performance. This means faster decision-making, improved cash flow, and increased operational efficiency."
    },
    {
        title: "Cut Down Transaction Costs",
        description: "By eliminating intermediaries, direct transactions offer a more efficient and cost-effective way to conduct business. You can save money on fees and potentially reduce processing times, leading to faster and more streamlined transactions."
    },
];
const techImages = [
    { image: Images.iconBCDStack01 },
    { image: Images.iconBCDStack02 },
    { image: Images.iconBCDStack03 },
    { image: Images.iconBCDStack04 },
    { image: Images.iconBCDStack05 },
    { image: Images.iconBCDStack06 },
    { image: Images.iconBCDStack07 },
    { image: Images.iconBCDStack08 },
    { image: Images.iconBCDStack09 },
    { image: Images.iconBCDStack10 },
];
const comprehensiveItems = [
    {
        image: Images.imgBCDComp01,
        title: "Smart Contract",
        subTitle: "Development",
        description: "We develop, deploy and debug smart contracts for businesses, ensuring a highly secured, verified and frictionless exchange of digital assets and information in real-time.",
        buttonText: "Let’s develop your app"
    },
    {
        image: Images.imgBCDComp02,
        title: "Blockchain",
        subTitle: "Marketplaces",
        description: "We create decentralized platforms that empower communities to collaborate seamlessly, facilitating secure, traceable transactions, eliminating the need for intermediaries.",
        buttonText: "Let’s develop your app"
    },
    {
        image: Images.imgBCDComp03,
        title: "Digital Currency",
        subTitle: "Exchanges",
        description: "We build white label cryptocurrency trading platforms with robust features and advanced functionalities to facilitate fast and secure transactions for businesses.",
        buttonText: "Let’s develop your app"
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

export { bannerHeading, bannerText, content, techImages, bulletContent, workSliderData, comprehensiveItems };