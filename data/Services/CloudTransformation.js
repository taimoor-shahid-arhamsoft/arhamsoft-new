import { Images } from "@/assets/assets";

const bannerHeading = <h1>Expert Cloud Transformation Services for Growth</h1>;
const bannerText = <p>Helping Businesses Thrive by Providing an Innovative Cloud Transformation Strategy That Aligns with Your Goals and Maximizes ROI.</p>;
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.cloudTransformOffer01,
        iconHover: Images.cloudTransformOfferHover01,
        title: "Cloud Adoption",
        description: "Drive agility and cost savings by migrating to the cloud. We deliver seamless transitions with tailored, efficient solutions for your business."
    },
    {
        iconDefault: Images.cloudTransformOffer02,
        iconHover: Images.cloudTransformOfferHover02,
        title: "Cloud Consulting",
        description: "Unlock the full potential of cloud technologies with expert advice. In our cloud transformation consulting, we deliver tailored strategies to align cloud solutions with your objectives."
    },
    {
        iconDefault: Images.cloudTransformOffer03,
        iconHover: Images.cloudTransformOfferHover03,
        title: "Infrastructure Design",
        description: "Boost scalability and reliability with cloud infrastructure. We design high-performance, cost-efficient architectures for your workloads."
    },
    {
        iconDefault: Images.cloudTransformOffer04,
        iconHover: Images.cloudTransformOfferHover04,
        title: "Cloud Solution Architecture",
        description: "Optimize efficiency and security with scalable cloud solutions. We provide end-to-end design and integration for seamless operations."
    },
    {
        iconDefault: Images.cloudTransformOffer05,
        iconHover: Images.cloudTransformOfferHover05,
        title: "Cloud DevOps",
        description: "Accelerate deployments and enhance quality with DevOps. We build CI/CD pipelines and automation for agile, resilient cloud environments."
    },
    {
        iconDefault: Images.cloudTransformOffer06,
        iconHover: Images.cloudTransformOfferHover06,
        title: "Integration & Management",
        description: "Simplify operations with continuous cloud performance. We offer proactive monitoring and streamlined integration to maximize efficiency."
    },
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
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.cloudTransformForyou01,
        title: "Integrated",
        subTitle: "Cybersecurity Framework",
        description: "Every cloud transformation project we deliver includes a built-in cybersecurity upgrade, leveraging advanced threat detection, encryption, and compliance with global data protection standards."
    },
    {
        boxColor: "light-grey",
        icon: Images.cloudTransformForyou02,
        title: "Zero-Downtime",
        subTitle: "Implementation",
        description: "Our phased migration techniques ensure zero disruption to your operations, maintaining business continuity during the transformation process."
    },
    {
        boxColor: "light-navy",
        icon: Images.cloudTransformForyou03,
        title: "Self-Optimizing",
        subTitle: "Infrastructure",
        description: "After the migration, our solutions monitor performance and automatically make adjustments to maintain efficiency and reduce costs."
    },
    {
        boxColor: "light-purple",
        icon: Images.cloudTransformForyou04,
        title: "Industry-Specific",
        subTitle: "Customization",
        description: "We go beyond one-size-fits-all approaches by offering cloud transformation solutions specifically optimized for businesses across all verticals"
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

export { bannerHeading, bannerText, slidesImages, techImages, whatWeDos, workSliderData, gridsContent, whatWeDoTitle };