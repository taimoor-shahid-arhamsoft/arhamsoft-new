import { Images } from "@/assets/assets";

const bannerHeading = <h1>Streamline Processes For<br /> Quick Product Delivery</h1>;
const bannerText = <p>We automate workflows and integrate security checks throughout the development lifecycle to release high-quality software faster.</p>;
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.DevopsWhy01,
        title: "Rigorous",
        subTitle: "Security",
        description: "Embedding stringent security practices throughout the development lifecycle to ensure robust protection against vulnerabilities."
    },
    {
        boxColor: "light-grey",
        icon: Images.DevopsWhy02,
        title: "Rapid",
        subTitle: "Deployment",
        description: "Automating workflows to streamline processes, enabling faster delivery of high-quality software compared to competitors."
    },
    {
        boxColor: "light-navy",
        icon: Images.DevopsWhy03,
        title: "Greater",
        subTitle: "Efficiency",
        description: "Facilitating seamless cooperation between development, security, and operations teams to reduce silos and enhance productivity."
    },
    {
        boxColor: "light-purple",
        icon: Images.DevopsWhy04,
        title: "Risk",
        subTitle: "Mitigation",
        description: "Detecting and resolving operational issues early to minimize costly fixes, leading to lower expenses and increased reliability."
    }
];
const techImages = [
    { image: Images.DevopsTechs01 },
    { image: Images.DevopsTechs02 },
    { image: Images.DevopsTechs03 },
    { image: Images.DevopsTechs04 },
    { image: Images.DevopsTechs05 },
];
const gridsContentSimple = [
    {
        boxColor: "light-blue",
        title: "Planning",
        subTitle: "& Development",
        description: "Our team employs agile methodologies to ensure flexibility and responsiveness to changing demands, prioritizing the integration of security practices throughout the development lifecycle."
    },
    {
        boxColor: "light-grey",
        title: "Continuous",
        subTitle: "Integration",
        description: "We implement automated testing to streamline code updates and reduce issues. By regularly merging code changes, we enable early detection of bugs, ensuring that security measures are integrated from the start."
    },
    {
        boxColor: "light-orange",
        title: "Deployment",
        subTitle: "& Monitoring",
        description: "We leverage automated pipelines to ensure minimal downtime during deployment. Robust monitoring tools track performance and security metrics. This enables us to resolve post-deployment issues proactively."
    },
    {
        boxColor: "light-green",
        title: "Automation",
        subTitle: "& Collaboration",
        description: "We integrate tools that facilitate communication and collaboration among teams, ensuring security across all functions. This holistic approach enables us to deliver secure and reliable software solutions."
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

export { bannerHeading, bannerText, techImages, gridsContentSimple, gridsContent, workSliderData };