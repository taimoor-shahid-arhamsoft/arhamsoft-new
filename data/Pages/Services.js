import { Images } from "@/assets/assets";

const bannerHeading = <h1>End-to-End Technological Support & Services</h1>;
const bannerText = <p>Leverage experience and updated technologies to get cutting-edge support, for we have a proven track record of success.</p>;
const ourServices = [
    {
        title: "Software",
        subTitle: "Development",
        description: "For products that captivate users, we integrate all aspects of the software development, including:",
        servicesList: [
            { iconDefault: Images.IconServicesKSDefault01, iconHover: Images.IconServicesKSHover01, text: "Web App Development", link: "/web-development" },
            { iconDefault: Images.IconServicesKSDefault02, iconHover: Images.IconServicesKSHover02, text: "Mobile App Development", link: "/iphoneipad-apps" },
            { iconDefault: Images.IconServicesKSDefault03, iconHover: Images.IconServicesKSHover03, text: "E-commerce Solutions", link: "/ecommerce-solutions" },
            { iconDefault: Images.IconServicesKSDefault04, iconHover: Images.IconServicesKSHover04, text: "QA & Testing", link: "/qa-and-testing" },
            { iconDefault: Images.IconServicesKSDefault05, iconHover: Images.IconServicesKSHover05, text: "UI/UX Design", link: "/design-graphics" },
        ]
    },
    {
        title: "Digital",
        subTitle: "Transformation",
        description: "With flexible operations, save costs and achieve faster time-to-market. In doing so, we can help with:",
        servicesList: [
            { iconDefault: Images.IconServicesKSDefault06, iconHover: Images.IconServicesKSHover06, text: "App Modernization", link: "/application-modernization" },
            { iconDefault: Images.IconServicesKSDefault07, iconHover: Images.IconServicesKSHover07, text: "Data Science", link: "/data-science" },
            { iconDefault: Images.IconServicesKSDefault08, iconHover: Images.IconServicesKSHover08, text: "Blockchain", link: "/blockchain-development" },
            { iconDefault: Images.IconServicesKSDefault09, iconHover: Images.IconServicesKSHover09, text: "DevOps", link: "/devops" },
            { iconDefault: Images.IconServicesKSDefault10, iconHover: Images.IconServicesKSHover10, text: "AR/VR", link: "/ar-vr-and-metaverse" },
        ]
    },
    {
        title: "Artificial",
        subTitle: "Intelligence",
        description: "We can help you maintain your edge with the most sought-after technologies of the decade:",
        servicesList: [
            { iconDefault: Images.IconServicesKSDefault11, iconHover: Images.IconServicesKSHover11, text: "AI Development", link: "/ai-and-machine-learning" },
            { iconDefault: Images.IconServicesKSDefault12, iconHover: Images.IconServicesKSHover12, text: "AI PoC & MVP", link: "/ai-poc-mvp" },
            { iconDefault: Images.IconServicesKSDefault14, iconHover: Images.IconServicesKSHover14, text: "MLOps", link: "/ml-ops" },
        ]
    },
    {
        title: "Enterprise",
        subTitle: "Solutions",
        description: "With evolving market needs, we support enterprises in managing processes:",
        servicesList: [
            { iconDefault: Images.IconServicesKSDefault17, iconHover: Images.IconServicesKSHover17, text: "Azure & AWS", link: "/azure-and-aws" },
            { iconDefault: Images.IconServicesKSDefault16, iconHover: Images.IconServicesKSHover16, text: "MS Dynamics", link: "/ms-dynamics" },
            { iconDefault: Images.IconServicesKSDefault19, iconHover: Images.IconServicesKSHover19, text: "Salesforce", link: "/salesforce" },
            { iconDefault: Images.IconServicesKSDefault18, iconHover: Images.IconServicesKSHover18, text: "SharePoint", link: "/sharepoint" },
            { iconDefault: Images.IconServicesKSWorkdayDefault, iconHover: Images.IconServicesKSWorkdayHover, text: "Workday", link: "/workday" },
        ]
    },
    {
        title: "Data Analytics",
        subTitle: "& BI",
        description: "Cut down on time spent sorting data to unlock key insights about the target audience through:",
        servicesList: [
            { iconDefault: Images.IconServicesKSDefault21, iconHover: Images.IconServicesKSHover21, text: "Data Insights & Actions", link: "/data-insights-actions" },
            { iconDefault: Images.IconServicesKSDefault22, iconHover: Images.IconServicesKSHover22, text: "Data Modernization", link: "/data-modernization" },
            { iconDefault: Images.IconServicesKSDefault24, iconHover: Images.IconServicesKSHover24, text: "Data Engineering", link: "/data-engineering" },
            { iconDefault: Images.IconServicesKSDefault25, iconHover: Images.IconServicesKSHover25, text: "Agile DataOps", link: "/agile-dataops" },
        ]
    },
    {
        title: "Cloud",
        subTitle: "Enablement",
        description: "We deliver a full range of cloud solutions and services to help businesses build agility and innovate faster.",
        servicesList: [
            { iconDefault: Images.IconServicesClouEngineeringDefault, iconHover: Images.IconServicesClouEngineeringHover, text: "Cloud Engineering", link: "/cloud-engineering" },
            { iconDefault: Images.IconServicesCloudManagementDefault, iconHover: Images.IconServicesCloudManagementHover, text: "Cloud Management", link: "/cloud-management" },
            { iconDefault: Images.IconServicesCloudTransformationDefault, iconHover: Images.IconServicesCloudTransformationHover, text: "Cloud Transformation", link: "/cloud-transformation" },
            { iconDefault: Images.IconServicesMultiCloudStrategyDefault, iconHover: Images.IconServicesMultiCloudStrategyHover, text: "Multi-Cloud Strategy", link: "/multi-cloud-strategy" },
        ]
    },
];
const reviewTitle = <h2 className="mb-2 mb-sm-0 text-center text-sm-start"> <span>Client </span>Reviews</h2>;

export { reviewTitle, bannerHeading, bannerText, ourServices };