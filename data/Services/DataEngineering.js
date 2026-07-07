import { Images } from "@/assets/assets";

const bannerHeading = <h1>Turning Data <span className="d-block">Into Intelligence</span></h1>
const bannerText = <p>Data on Matrix’s expert data engineering services help scale your growth by unlocking the business value concealed in your data assets.</p>
const whatWeDoTitle = <h2><span className="d-block">Our Core Offering</span></h2>
const whatWeDos = [
    {
        iconDefault: Images.iconDEHowDefault01,
        iconHover: Images.iconDEHowHover01,
        title: "Data Architecture Building",
        description: "Flexible, accessible data architecture for streamlined business goals."
    },
    {
        iconDefault: Images.iconDEHowDefault02,
        iconHover: Images.iconDEHowHover02,
        title: "Data Transition To Cloud",
        description: "Efficient, cost-effective cloud data migration for modern businesses."
    },
    {
        iconDefault: Images.iconDEHowDefault03,
        iconHover: Images.iconDEHowHover03,
        title: "Data Lake Implementation",
        description: "Store and manage large datasets for enhanced productivity and growth."
    },
    {
        iconDefault: Images.iconDEHowDefault04,
        iconHover: Images.iconDEHowHover04,
        title: "Data Analytics & Visualization",
        description: "Analyze and present data effectively for informed decision-making."
    },
    {
        iconDefault: Images.iconDEHowDefault05,
        iconHover: Images.iconDEHowHover05,
        title: "Data Integrity & Compliance",
        description: "Ensure data security and adherence to industry standards and regulations."
    },
    {
        iconDefault: Images.iconDEHowDefault06,
        iconHover: Images.iconDEHowHover06,
        title: "Data Engineering Consulting",
        description: "Expert engineers for optimized data management and results-driven decisions."
    },
];
const boxesContent = [
    {
        icon: Images.iconDEWCU01,
        boxColor: "orange",
        title: "Ensure Business Continuity",
        description: "Our well-executed, seamless migrations help minimize downtime to protect your revenue, productivity and reputation.",
    },
    {
        icon: Images.iconDEWCU02,
        boxColor: "blue",
        title: "Accelerate Time-to-Market",
        description: "Stay competitive with modern applications. We optimize your IT infrastructure for peak performance.",
    },
    {
        icon: Images.iconDEWCU03,
        boxColor: "farozi",
        title: "Optimize & Maximize ROI",
        description: "Benefit from our strategic, data-driven approach. Our global expertise delivers cost-efficient migrations.",
    },
];
const howWeDos = [
    {
        icon: Images.iconDEArea01,
        title: "Data Pipelines",
        description: "Build flexible data pipelines tailored to your needs. Integrate diverse data sources into cloud or on-premise platforms using ETL/ELT and batch processing. Ensure efficient, reliable data movement for quick and accurate analytics."
    },
    {
        icon: Images.iconDEArea02,
        title: "DataOps",
        description: "By automating manual processes and involving users early, we deliver high-impact data products faster and with greater reliability. Taking cues from DevOps, we promote close collaboration among data teams using Agile delivery models."
    },
    {
        icon: Images.iconDEArea03,
        title: "Data Security",
        description: "Data analytics and engineering specialists implement end-to-end visibility, control, and security through pipeline checks, encryption, access controls, and role-based access. Strict monitoring ensures protection and audit readiness."
    },
    {
        icon: Images.iconDEArea04,
        title: "Data Analytics",
        description: "Extract valuable insights from your data and make informed decisions. We help organizations overcome the challenges associated with big data and gain a competitive advantage, ensuring the effective and secure management of large-scale datasets."
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

export { bannerHeading, bannerText, workSliderData, whatWeDoTitle, whatWeDos, boxesContent, howWeDos };