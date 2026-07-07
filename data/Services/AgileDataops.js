import { Images } from "@/assets/assets";

const bannerHeading = <h1>Streamline Workflow <span className="d-block">With Minimal Manual Efforts</span></h1>;
const bannerText = <p>We automate the entire data pipeline to optimize processes. By integrating advanced tools and platforms, we continuously integrate and deliver data processes.</p>;
const whatWeDoTitle = <h2><span className="d-block">Our Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconADOWWODefault01,
        iconHover: Images.iconADOWWOHover01,
        title: "Data Management",
        description: "We centralize, organize, and safeguard data for easy access."
    },
    {
        iconDefault: Images.iconADOWWODefault02,
        iconHover: Images.iconADOWWOHover02,
        title: "Data Governance",
        description: "We ensure data security, compliance, and trustworthiness."
    },
    {
        iconDefault: Images.iconADOWWODefault03,
        iconHover: Images.iconADOWWOHover03,
        title: "Data Integration",
        description: "We combine different data sources to deliver unified insights."
    },
    {
        iconDefault: Images.iconADOWWODefault04,
        iconHover: Images.iconADOWWOHover04,
        title: "Data Quality",
        description: "We enhance accuracy and consistency for reliable decision-making."
    },
    {
        iconDefault: Images.iconADOWWODefault05,
        iconHover: Images.iconADOWWOHover05,
        title: "Prep & Replication",
        description: "We efficiently prepare and duplicate data for faster analytics."
    },
    {
        iconDefault: Images.iconADOWWODefault06,
        iconHover: Images.iconADOWWOHover06,
        title: "Cataloging",
        description: "We organize data assets for easy discovery and management."
    }
];
const benefits = [
    {
        imgSrc: Images.imgADOBenefit01,
        title: "Eliminate",
        subTitle: "Data Silos",
        description: "Break down communication barriers between departments so that everyone can access the data anytime. This helps you make better decisions, which, in turn, lead to unified project outcomes.",
    },
    {
        imgSrc: Images.imgADOBenefit02,
        title: "Agile",
        subTitle: "Iteration Cycles",
        description: "Accelerate development cycles and quickly adapt to changing market conditions and project needs. This rapid iteration facilitates product enhancements and keeps your offerings competitive.",
    },
    {
        imgSrc: Images.imgADOBenefit03,
        title: "Enhance",
        subTitle: "Data Quality",
        description: "Maintain data at its highest quality. Through testing and continuous monitoring throughout the development lifecycle, errors can be detected and addressed early, reducing the risk of producing poor-quality data.",
    },
    {
        imgSrc: Images.imgADOBenefit04,
        title: "Optimize",
        subTitle: "Operations",
        description: "Optimize your operations by automating routine tasks and standardizing processes across development, testing, and deployment. This helps you use resources better and increase productivity.",
    },
];
const fourBoxesContent = [
    {
        iconDefault: Images.iconADOProcess01,
        title: "Pipeline Setup",
        description: "We create scalable data pipelines to automate ETL and ensure flexible, future-proof integration."
    },
    {
        iconDefault: Images.iconADOProcess02,
        title: "Continuous Delivery",
        description: "We integrate diverse data sources & ensure real-time delivery with continuous processing."
    },
    {
        iconDefault: Images.iconADOProcess03,
        title: "Quality and Monitoring",
        description: "We employ automated checks to check quality & monitor for performance and security."
    },
    {
        iconDefault: Images.iconADOProcess04,
        title: "Continuous Improvement",
        description: "We collaborate, consider feedback to improve, and automate testing for continuous updates."
    },
];
const howWeDos = [
    {
        icon: Images.iconADOExcellence01,
        title: "Tailored Support",
        description: "Get customized support according to your unique business needs & integrate it in your workflows."
    },
    {
        icon: Images.iconADOExcellence02,
        title: "Real-Time Monitoring",
        description: "With real-time monitoring, proactively resolve issues and let your data flow without interruption."
    },
    {
        icon: Images.iconADOExcellence03,
        title: "High Scalability",
        description: "We support businesses in scaling and allow them to achieve seamless and easy expansion."
    },
    {
        icon: Images.iconADOExcellence04,
        title: "Cost-Effective",
        description: "Gain access to efficient processes at reasonable rates while delivering high-quality insights."
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

export { bannerHeading, bannerText, whatWeDoTitle, benefits, fourBoxesContent, workSliderData, howWeDos, whatWeDos };