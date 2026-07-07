import { Images } from "@/assets/assets";

const bannerHeading = <h1>Cloud Management Services for Scalability & Growth</h1>;
const bannerText = <p>Our cloud service management solutions are designed to optimize performance, ensure scalability, and drive sustainable growth for your business.</p>;
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
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.cloudManageOffer01,
        iconHover: Images.cloudManageOfferHover01,
        title: "Infrastructure-as-a-Service (IaaS)",
        description: "Scale your infrastructure without upfront costs. We handle provisioning, management, and optimization to ensure seamless performance."
    },
    {
        iconDefault: Images.cloudManageOffer02,
        iconHover: Images.cloudManageOfferHover02,
        title: "Platform-as-a-Service (PaaS)",
        description: "Accelerate development with a managed platform. We provide end-to-end management to ensure security, performance, and scalability."
    },
    {
        iconDefault: Images.cloudManageOffer03,
        iconHover: Images.cloudManageOfferHover03,
        title: "Software-as-a-Service (SaaS)",
        description: "Access cloud-based software instantly with no installation needed. We ensure continuous updates and security for smooth, uninterrupted use."
    },
    {
        iconDefault: Images.cloudManageOffer04,
        iconHover: Images.cloudManageOfferHover04,
        title: "Public Cloud",
        description: "Enjoy scalable cloud resources that grow with your business. We can optimize your public cloud for performance and security."
    },
    {
        iconDefault: Images.cloudManageOffer05,
        iconHover: Images.cloudManageOfferHover05,
        title: "Private & Hybrid Cloud Infrastructure",
        description: "Get secure, scalable cloud environments. We design and manage your private and hybrid cloud infrastructure for performance and compliance."
    },
    {
        iconDefault: Images.cloudManageOffer06,
        iconHover: Images.cloudManageOfferHover06,
        title: "Security & Networks",
        description: "Protect your cloud with remote security management. We provide proactive monitoring and encryption for robust, secure operations."
    }
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
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.cloudManageProcess01,
        title: "Cost",
        subTitle: "Efficiency",
        description: "Maximize your budget by scaling cloud resources to actual needs, avoiding unnecessary expenses and ensuring cost-effective cloud usage."
    },
    {
        boxColor: "light-grey",
        icon: Images.cloudManageProcess02,
        title: "Simplified",
        subTitle: "Operations",
        description: "Streamline cloud management with automation, reducing manual workloads and allowing your IT team to focus on core tasks."
    },
    {
        boxColor: "light-navy",
        icon: Images.cloudManageProcess03,
        title: "Improved",
        subTitle: "Performance",
        description: "Enhance cloud performance with continuous monitoring and optimization, ensuring fast, reliable services for your users."
    },
    {
        boxColor: "light-purple",
        icon: Images.cloudManageProcess04,
        title: "Disaster",
        subTitle: "Recovery",
        description: "Ensure your data is always backed up and easily recoverable, minimizing downtime and protecting your business from unexpected events."
    }
];
const boxesContent = [
    {
        icon: Images.cloudManageHow01,
        boxColor: "orange",
        title: "Deep Technical Knowledge",
        description: "We specialize in cloud platforms, optimizing performance and resolving system issues.",
    },
    {
        icon: Images.cloudManageHow02,
        boxColor: "blue",
        title: "Proven Expertise",
        description: "We manage secure cloud migrations, ensuring smooth transitions & minimal disruption.",
    },
    {
        icon: Images.cloudManageHow03,
        boxColor: "farozi",
        title: "Compliance Management",
        description: "We ensure cloud infrastructure meets industry regulations, securing data & privacy.",
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

export { bannerHeading, bannerText, slidesImages, techImages, boxesContent, workSliderData, gridsContent, whatWeDos, whatWeDoTitle };