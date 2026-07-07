import { Images } from "@/assets/assets";

const bannerHeading = <h1>Manage Containerized Applications With Ease</h1>;
const bannerText = <p>Deploy and scale containerized applications with end-to-end services that simplify orchestration and management tasks.</p>;
const whatWeDoTitle = <h2>Unlock <span className="d-block">Our Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconKSKMDefault01,
        iconHover: Images.iconKSKMHover01,
        title: "Development & Migration",
        description: "Create & migrate apps to Kubernetes with scalable & high-performance solutions that minimize downtime and drive innovation."
    },
    {
        iconDefault: Images.iconKSKMDefault02,
        iconHover: Images.iconKSKMHover02,
        title: "Deployment",
        description: "Streamline application deployment for high performance. We automate resource management to ensure reliable systems."
    },
    {
        iconDefault: Images.iconKSKMDefault03,
        iconHover: Images.iconKSKMHover03,
        title: "Security & Compliance",
        description: "Run applications in a compliant environment. We ensure security with threat detection, audits & automated policy enforcement."
    },
    {
        iconDefault: Images.iconKSKMDefault04,
        iconHover: Images.iconKSKMHover04,
        title: "Infrastructure Optimization",
        description: "Maximize performance using optimization techniques. We enhance workloads & ensure scalability with best practices."
    },
    {
        iconDefault: Images.iconKSKMDefault05,
        iconHover: Images.iconKSKMHover05,
        title: "Migration Assessment",
        description: "Scale up and boost efficiency with a smooth migration. Our experts can assess, plan, and help in optimal transition."
    },
    {
        iconDefault: Images.iconKSKMDefault06,
        iconHover: Images.iconKSKMHover06,
        title: "Consulting Services",
        description: "Make informed decisions with guidance from our expert Kubernetes consultants to efficiently achieve your project outcomes."
    }
];
const kubernetes = [
    {
        image: Images.imgKSKubernete01,
        title: "Cloud Controller Manager (CCM)",
        description: "We can integrate Kubernetes clusters with AWS, Google Cloud, or Azure for efficient load balancer, IP, and storage management.",
    },
    {
        image: Images.imgKSKubernete02,
        title: "Container Storage Interface (CSI)",
        description: "We enable containerized apps to seamlessly access and utilize cloud or on-premises block, file & object storage solutions.",
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, kubernetes };