import { Images } from "@/assets/assets";

const bannerHeading = <h1>Transforming Business <br />Operations</h1>;
const bannerText = <p>Comprehensive Salesforce CRM implementation for a leading retail chain to enhance collaboration, streamline operations, and increase sales. </p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconSalesForceCRMWWDDefault01,
        iconHover: Images.iconSalesForceCRMWWDHover01,
        title: "An Integrated Platform",
        list: [
            { text: "Consolidate disparate systems into a unified platform." },
            { text: "Improve data accuracy and consistency." }
        ]
    },
    {
        iconDefault: Images.iconSalesForceCRMWWDDefault02,
        iconHover: Images.iconSalesForceCRMWWDHover02,
        title: "Sales Process Optimization",
        list: [
            { text: "Automate sales pipeline, from lead generation to closure." },
            { text: "Improve sales team productivity and efficiency." }
        ]
    },
    {
        iconDefault: Images.iconSalesForceCRMWWDDefault03,
        iconHover: Images.iconSalesForceCRMWWDHover03,
        title: "Enhanced Customer Service",
        list: [
            { text: "Provide efficient and personalized customer support." },
            { text: "Track and resolve customer issues promptly." }
        ]
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconSalesForceCRMSevices01,
        title: "Centralized Data Repository",
        description: "Unified view of customer interactions across sales, marketing, and service teams."
    },
    {
        iconDefault: Images.iconSalesForceCRMSevices02,
        title: "Automation of Workflows",
        description: "Eliminated manual processes with automated lead assignments, case routing, and follow-ups."
    },
    {
        iconDefault: Images.iconSalesForceCRMSevices03,
        title: "Advanced Reporting ",
        description: "Real-time insights into sales pipeline, revenue forecasts, and customer satisfaction."
    },
    {
        iconDefault: Images.iconSalesForceCRMSevices04,
        title: "Personalized Dashboard",
        description: "Custom dashboards for different users across different departments to track KPIs."
    },
    {
        iconDefault: Images.iconSalesForceCRMSevices05,
        title: "Mobile Accessibility",
        description: "Enabled on-the-go access through Salesforce Mobile App, enhancing field sales productivity."
    },
    {
        iconDefault: Images.iconSalesForceCRMSevices06,
        title: "Robust Scalability",
        description: "Scalable architecture designed to accommodate future growth of the business."
    },
];
const challengeKeyPoints = [
    { text: "The client used disparate tools for sales, marketing, and customer service, leading to data silos." },
    { text: "The absence of a centralized database hindered personalized interactions and customer satisfaction." },
    { text: "Manual processes and outdated systems slowed the sales pipeline, leading to missed opportunities." },
    { text: "Decision-making was hampered by the lack of real-time insights into sales and customer data." },
    { text: "Their existing tools could not support the company's growth and expanding operations." },
];
const solutionTabContent = [
    {
        tabImage: Images.iconSalesForceCRMSolTab01,
        heading: "Discovery & Planning",
        keyPoints: [
            { text: "Conducted meetings with stakeholders to gather requirements and pain points." },
            { text: "Mapped existing workflows for sales, marketing, and customer service." },
            { text: "Designed a detailed project plan with milestones, timelines, and deliverables." },
        ],
    },
    {
        tabImage: Images.iconSalesForceCRMSolTab02,
        heading: "Customization & Configuration",
        contentTexts: [
            { text: "<p><strong>Sales Cloud Implementation:</strong></p>" },
            {
                keyPoints: [
                    { text: "Customized lead and opportunity management workflows." },
                    { text: "Integrated a product catalog for streamlined quoting and order processing." },
                ]
            },
            { text: "<p><strong>Service Cloud Integration:</strong></p>" },
            {
                keyPoints: [
                    { text: "Set up centralized case management system to track & resolve customer issues." },
                    { text: "Automated case assignments based on predefined rules and SLAs." },
                ],
            },
            { text: "<p><strong>Marketing Cloud Configuration</strong></p>" },
            {
                keyPoints: [
                    { text: "Personalized email campaigns based on customer segments." },
                    { text: "Configured lead scoring and nurturing workflows for improved conversion rates." },
                ],
            },
        ],
    },
    {
        tabImage: Images.iconSalesForceCRMSolTab03,
        heading: "Data Migration & Integration",
        keyPoints: [
            { text: "Migrated legacy data, including customer records, opportunities, and historical sales, into Salesforce." },
            { text: "<p>Integrated Salesforce with the existing tools, including: <p/> <p><strong>ERP System:</strong> For real-time order and inventory updates.</p> <p> <strong>Email Platforms:</strong> To sync communication and track customer interactions. <p /><p> <strong>Third-party Applications: </strong> Via Salesforce AppExchange and APIs.</p>" },
        ],
    },
    {
        tabImage: Images.iconSalesForceCRMSolTab04,
        heading: "Deployment & Monitoring",
        keyPoints: [
            { text: "Deployed Salesforce CRM across all targeted regions in a phased manner." },
            { text: "Monitored system performance and resolved any post-implementation issues." },
            { text: "Regularly reviewed CRM usage metrics to ensure adoption and effectiveness." },
        ],
    }
];
const results = [
    {
        icon: Images.iconSalesForceCRMResult01,
        title: "Improved Sales",
        subTitle: "Performance",
        resultlist: [
            "Shortened the average sales cycle by 15%.",
            "Increased deal closure rates by 25% in six months.",
        ],
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconSalesForceCRMResult02,
        title: "Enhanced",
        subTitle: "Customer Experience",
        resultlist: [
            "Reduced the average resolution time by 30%.",
            "Boosted customer engagement by 20%.",
        ],
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconSalesForceCRMResult03,
        title: "Improved",
        subTitle: "Operational Efficiency",
        resultlist: [
            "Integrated workflows saved 15+ hours weekly.",
            "Automated reporting reduced errors by 50%.",
        ],
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconSalesForceCRMResult04,
        title: "Data-Driven",
        subTitle: "Decision Making",
        resultlist: [
            "Real-time dashboards provide actionable insights.",
            "Forecast accuracy rate improved by 35%.",
        ],
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Retail " },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "QA Engineers" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Salesforce CRM Implementation " },
    { text: "Software Quality Assurance" },
    { text: "Post-Deployment Support " },
];
const feedbackText = [
    { text: "Data on Matrix's Salesforce implementation significantly improved our operational efficiency and customer relationships. Their team's expertise and flexibility were instrumental in achieving these results. We recommend them as a trusted partner for Salesforce solutions." }
];

export { bannerHeading, bannerText, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, feedbackText, industryDetails };