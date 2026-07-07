import { Images } from "@/assets/assets";

const bannerHeading = <h1>Zero-Disruption DevOps<br /> Engineering</h1>;
const bannerText = <p>Streamlined Development. Emphasized Collaboration. Improved Throughput</p>;
const howWeDoText = [
    { text: "DevOps Excellence: Streamlining Your Software Delivery Pipeline" }
];
const howWeDos = [
    {
        icon: Images.devOpsOne,
        boxColor: "orange",
        title: "DevOps Transformation",
        description: "Data on Matrix is your partner for DevOps transformation. We offer comprehensive services from DevOps assessment, automation and management, ensuring your complete control over every line of code and delivery pipelines.",
    },
    {
        icon: Images.devOpsTwo,
        boxColor: "blue",
        title: "Infrastructure-As-Code",
        description: "As a top-tier DevOps-as-a-Service provider, we bridge the gap between infrastructure management and code delivery. Our solutions automate manual configuration and provisioning, creating uniform software environments.",
    },
    {
        icon: Images.devOpsThree,
        boxColor: "farozi",
        title: "Cloud as a DevOps Enabler",
        description: "Experience the power of cloud-based DevOps automation solutions with Data on Matrix. Our expertise in automating public, private, and hybrid cloud environments ensures a seamless and efficient end-to-end process.",
    },
];
const techImages = [
    { id: 1, image: Images.techDevopsOne },
    { id: 2, image: Images.techDevopsTwo },
    { id: 3, image: Images.techDevopsThree },
    { id: 4, image: Images.techDevopsFour },
    { id: 5, image: Images.techDevopsFive },
    { id: 6, image: Images.techDevopsSix },
    { id: 7, image: Images.techDevopsSeven },
    { id: 8, image: Images.techDevopsEight },
    { id: 9, image: Images.techDevopsNine },
    { id: 10, image: Images.techDevopsTen },
    { id: 11, image: Images.techDevopsEleven },
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

export { bannerHeading, bannerText, workSliderData, howWeDoText, howWeDos, techImages };