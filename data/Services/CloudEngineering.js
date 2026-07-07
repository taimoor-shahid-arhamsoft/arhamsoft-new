import { Images } from "@/assets/assets";

const bannerHeading = <h1>Empower Business With Secured Cloud Engineering Solutions</h1>;
const bannerText = <p>We provide tailored cloud solutions to streamline operations, enhance security, reduce costs, scale efficiently & innovate faster.</p>;
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
const gridsContent = [
    {
        boxColor: "light-grey",
        icon: Images.cloudEngSolutions01,
        title: "Cloud",
        subTitle: "Architecture",
        description: "Gain scalability, reliability, and cost-efficiency with tailored cloud solutions. We design robust infrastructure that aligns with your business goals, ensuring seamless growth."
    },
    {
        boxColor: "light-blue",
        icon: Images.iconCloudSolutions01,
        title: "Cloud",
        subTitle: "Migration",
        description: "Move to the cloud with minimal downtime and secure data integrity. We manage end-to-end migration and system modernization for better efficiency."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconCloudSolutions03,
        title: "Cloud",
        subTitle: "Management",
        description: "Ensure optimal performance with 24/7 monitoring and updates for a smooth-running cloud environment that boosts operational excellence."
    },
    {
        boxColor: "light-purple",
        icon: Images.cloudEngSolutions02,
        title: "DevOps",
        subTitle: "Enablement",
        description: "Speed up deployment and drive innovation with optimized DevOps processes. We integrate CI/CD pipelines and automation to deliver value faster."
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
const boxesContent = [
    {
        icon: Images.cloudEngWhy01,
        boxColor: "orange",
        title: "Cost Efficiency",
        description: "We help you pay only for what you use, reducing infrastructure costs.",
    },
    {
        icon: Images.cloudEngWhy02,
        boxColor: "blue",
        title: "Disaster Recovery",
        description: "We provide automated backups and redundancy to minimize downtime.",
    },
    {
        icon: Images.cloudEngWhy03,
        boxColor: "farozi",
        title: "Global Reach",
        description: "We enable you to serve customers globally with low latency and high performance.",
    }
];
const fourBoxesContent = [
    {
        iconDefault: Images.cloudEngProcess01,
        title: "Strategy Development",
        description: "We analyze your needs, craft tailored cloud strategies, and ensure cost-effective scalability."
    },
    {
        iconDefault: Images.cloudEngProcess02,
        title: "Design & Architecture",
        description: "We design secure, high-performance cloud solutions tailored to meet your unique goals."
    },
    {
        iconDefault: Images.cloudEngProcess03,
        title: "Implementation & Migration",
        description: "We seamlessly migrate apps and data, minimizing downtime for smooth transitions."
    },
    {
        iconDefault: Images.cloudEngProcess04,
        title: "Management & Optimization",
        description: "We monitor, optimize, and scale cloud performance with 24/7 support and insights."
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

export { bannerHeading, bannerText, slidesImages, techImages, boxesContent, workSliderData, gridsContent, fourBoxesContent };