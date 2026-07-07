import { Images } from "@/assets/assets";

const bannerHeading = <h1>Eliminate Data Outages with Modernization</h1>
const bannerText = <p>Achieve modernization, innovation and automation at scale with Data on Matrix’s data modernization services.</p>
const tabHeading = <h2>Stages of Data Modernization</h2>
const tabs = [
    {
        iconDefault: Images.iconDMTabDefault01,
        iconHover: Images.iconDMTabHover01,
        title: "Data Assessment",
        subTitle: "Data Assessment",
        image: Images.imgDMTab01,
        keypoints: [
            { title: "Data Backup" },
            { title: "Entity Mapping" },
            { title: "Classify Standardized Data" },
        ]
    },
    {
        iconDefault: Images.iconDMTabDefault02,
        iconHover: Images.iconDMTabHover02,
        title: "Pre Migration",
        subTitle: "Pre Migration",
        image: Images.imgDMTab02,
        keypoints: [
            { title: "Data Cleansing" },
            { title: "Data Profiling" },
        ]
    },
    {
        iconDefault: Images.iconDMTabDefault03,
        iconHover: Images.iconDMTabHover03,
        title: "Data Transformation",
        subTitle: "Data Transformation",
        image: Images.imgDMTab03,
        keypoints: [
            { title: "Data Analysis" },
            { title: "Data Improvement" },
            { title: "Data Integration" },
            { title: "Data Load" },
        ]
    },
    {
        iconDefault: Images.iconDMTabDefault04,
        iconHover: Images.iconDMTabHover04,
        title: "Ongoing Migration",
        subTitle: "Ongoing Migration",
        image: Images.imgDMTab04,
        keypoints: [
            { title: "Managing Resources" },
            { title: "Data Quality Monitoring" },
            { title: "Reporting to Stakeholders" },
        ]
    },
    {
        iconDefault: Images.iconDMTabDefault05,
        iconHover: Images.iconDMTabHover05,
        title: "Post Migration",
        subTitle: "Post Migration",
        image: Images.imgDMTab05,
        keypoints: [
            { title: "Data Reconciliation" },
            { title: "System Auditing" },
            { title: "Invest in Training" },
        ]
    },
];
const boxesContent = [
    {
        icon: Images.iconDMWWD01,
        boxColor: "orange",
        title: "Data Migration",
        description: "We'll help you seamlessly move your data from legacy systems to modern platforms, ensuring minimal disruption and maximum data integrity."
    },
    {
        icon: Images.iconDMWWD02,
        boxColor: "blue",
        title: "Data Warehousing",
        description: "We'll design and implement robust data warehousing and data lake solutions to centralize and organize your data, enabling efficient analytics and reporting."
    },
    {
        icon: Images.iconDMWWD03,
        boxColor: "farozi",
        title: "Data Governance",
        description: "We'll help you establish effective data governance frameworks and implement data quality initiatives to ensure data accuracy, consistency, and compliance."
    },
];
const empowerItems = [
    {
        icon: Images.iconDMEmpower01,
        title: "Data Integration",
        keypoints: [
            { text: "Data Ingestion" },
            { text: "Data Transformation" },
            { text: "Data Quality" },
            { text: "Data Integration Patterns" },
            { text: "Data Management Tools" }
        ]
    },
    {
        icon: Images.iconDMEmpower02,
        title: "Data Re-Architecture",
        keypoints: [
            { text: "Data Modeling" },
            { text: "Data Migration" },
            { text: "Data Optimization" },
            { text: "Technology Adoption" },
            { text: "Performance Evaluation" }
        ]
    },
    {
        icon: Images.iconDMEmpower03,
        title: "Data Management",
        keypoints: [
            { text: "Data Governance" },
            { text: "Data Quality" },
            { text: "Data Security" },
            { text: "Data Privacy" },
            { text: "Data Retention" },
        ]
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

export { bannerHeading, bannerText, workSliderData, tabHeading, tabs, boxesContent, empowerItems };