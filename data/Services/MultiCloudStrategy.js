import { Images } from "@/assets/assets";

const bannerHeading = <h1>Simplify Cloud Management With Multi-Cloud Managed Services</h1>;
const bannerText = <p>We help your business scale and secure cloud operations with our expert multi-cloud services, ensuring seamless integration, enhanced performance, and long-term growth.</p>;
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.multiCloudOffer01,
        iconHover: Images.multiCloudOfferHover01,
        title: "Cloud Governance",
        description: "We ensure seamless management of your multi-cloud environment. Our solutions enable policy enforcement, compliance, and consistent oversight."
    },
    {
        iconDefault: Images.multiCloudOffer02,
        iconHover: Images.multiCloudOfferHover02,
        title: "Cost Optimization",
        description: "Optimize your cloud spend without compromising performance. Gain insights to reduce waste and maximize ROI across multi-cloud platforms."
    },
    {
        iconDefault: Images.multiCloudOffer03,
        iconHover: Images.multiCloudOfferHover03,
        title: "Security & Compliance",
        description: "Protect sensitive data with robust, multi-layered security. Our solutions ensure adherence to regulatory standards across cloud providers."
    },
    {
        iconDefault: Images.multiCloudOffer04,
        iconHover: Images.multiCloudOfferHover04,
        title: "Performance Monitoring",
        description: "Track and improve cloud performance with real-time analytics. We help maintain efficiency and resolve issues proactively for your multi-cloud setup."
    },
    {
        iconDefault: Images.multiCloudOffer05,
        iconHover: Images.multiCloudOfferHover05,
        title: "Disaster Recovery",
        description: "Ensure business continuity with fast, reliable recovery solutions. Minimize downtime and data loss through resilient disaster recovery plans."
    },
    {
        iconDefault: Images.multiCloudOffer06,
        iconHover: Images.multiCloudOfferHover06,
        title: "Cloud Architecture Design",
        description: "Craft scalable, efficient multi-cloud management solutions per your business needs. We design multi-cloud frameworks for optimal performance & agility."
    }
];
const slidesImages = [
    Images.iconHappyClient01,
    Images.iconHappyClient02,
    Images.iconHappyClient03,
    Images.iconHappyClient04,
    Images.iconHappyClient05,
    Images.iconHappyClient06,
    Images.iconHappyClient07,
    Images.iconHappyClient08,
];
const techImages = [
    { image: Images.iconCloudService1 },
    { image: Images.iconCloudService2 },
    { image: Images.iconCloudService3 },
    { image: Images.iconCloudService4 },
    { image: Images.iconCloudService5 },
    { image: Images.iconCloudService6 },
    { image: Images.iconCloudService7 },
    { image: Images.iconCloudService8 },
];
const boxesContent = [
    {
        icon: Images.multiCloudProcess01,
        boxColor: "orange",
        title: "Streamline Access",
        description: "Consolidate and transfer datasets securely from your premises to the cloud using VPN, SD-WAN, or dedicated private lines.",
    },
    {
        icon: Images.iconCloudProcess02,
        boxColor: "blue",
        title: "Optimize Storage",
        description: "Tailor cloud storage solutions to reduce costs and enhance performance using advanced control systems and scalable options.",
    },
    {
        icon: Images.iconCloudProcess03,
        boxColor: "farozi",
        title: "Enable Connectivity",
        description: "Achieve low-latency, high-throughput data access across multi-cloud environments with cutting-edge interconnection technology.",
    },
    {
        icon: Images.iconCloudProcess04,
        boxColor: "green",
        title: "Unlock Potential",
        description: "Access and utilize data simultaneously across multiple hyperscale cloud providers to drive business growth and innovation.",
    }
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

export { bannerHeading, bannerText, workSliderData, slidesImages, whatWeDos, whatWeDoTitle, techImages, boxesContent };