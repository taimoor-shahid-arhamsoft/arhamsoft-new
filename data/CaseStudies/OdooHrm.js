import { Images } from "@/assets/assets";

const bannerHeading = <h1>An Innovative HRMS <br />Powered By Odoo</h1>;
const bannerText = <p>DigiAnt is a robust HR management system built on the Odoo platform. It seamlessly integrates with Odoo&apos;s accounting module for comprehensive financial and HR management.</p>;
const whatWeDoTitle = <h2><span className="d-block">Our Solution</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconOdooHRMWWDDefault01,
        iconHover: Images.iconOdooHRMWWDHover01,
        title: "Core HR Features",
        description: "Employee management, recruitment, payroll processing, leave management, attendance tracking, and performance management."
    },
    {
        iconDefault: Images.iconOdooHRMWWDDefault02,
        iconHover: Images.iconOdooHRMWWDHover02,
        title: "Advanced HR Features",
        description: "Organizational chart management, expense management, custom workflows, timesheet tracking, and document management.",
    },
    {
        iconDefault: Images.iconOdooHRMWWDDefault03,
        iconHover: Images.iconOdooHRMWWDHover03,
        title: "Seamless Integration ",
        description: "Integration with other Odoo modules such as accounting, sales, and project management, providing a holistic view of business operations."
    },
];
const challengeKeyPoints = [
    { strongText: "Manual HR Processes: ", text: " Time-consuming and error-prone manual tasks in recruitment, onboarding, payroll, and leave management. " },
    { strongText: "Lack of Visibility:", text: "Limited visibility into employee performance, attendance, and training." },
    { strongText: "Compliance Risks:", text: "Difficulty in adhering to complex labor laws and regulations." },
    { strongText: "Inefficient Communication:", text: "Ineffective communication between HR, finance, and operations teams, leading to delays and misunderstandings." },
];
const bulletContent = [
    {
        title: "Organizational Chart Validation",
        descriptionList: [
            { text: "<span>Enhanced Validation Rules:</span> We implemented robust validation rules to ensure the accuracy and consistency of the organizational chart.</p>" },
            { text: "<span>Real-time Updates:</span> The system automatically updates the organizational chart whenever changes are made to employee roles or reporting structures.</p>" }
        ]
    },
    {
        title: "Partial Salary Declarations",
        descriptionList: [
            { text: "<span>Flexible Salary Structures:</span> We enabled the system to handle partial salary declarations, allowing for various payment scenarios, such as performance-based bonuses or deductions.</p>" },
            { text: "<span>Transparent Reporting:</span> Detailed reports on salary components and deductions provide transparency and accountability.</p>" }
        ]
    },
    {
        title: "Automated Recruitment Workflows",
        descriptionList: [
            { text: "<span>Streamlined Recruitment Process:</span> We automated various stages of the recruitment process, including job posting, candidate screening, and interview scheduling.</p>" },
            { text: "<span>Automated Notifications:</span>  The system sends automated notifications to candidates, interviewers, and hiring managers, reducing manual intervention.</p>" }
        ]
    },
    {
        title: "Advanced Career Development",
        descriptionList: [
            { text: "<span>Personalized Development Plans: </span> We implemented a feature to create personalized development plans for each employee, aligning with their career goals.</p>" },
            { text: "<span>Training Course Management:</span> The system tracks employee participation in training courses, certifications, and professional development activities.</p>" }
        ]
    },
];
const solutionTabContent = [
    {
        tabImage: Images.iconOdooHRMSolTab01,
        heading: "Initiation & Planning",
        contentTexts: [
            { text: "<p><strong>Needs Assessment:</strong> Conduct a thorough analysis of the client's HR processes, pain points, and requirements to identify specific needs and customization requirements.</p>" },
            { text: "<p><strong>Project Scoping:</strong> Define the project scope, including the modules to be implemented, customization requirements, and integration needs.</p>" },
            { text: "<p><strong>Project Planning:</strong> Develop a detailed project plan outlining timelines, milestones, resource allocation, and risk management strategies.</p>" },
        ],
    },
    {
        tabImage: Images.iconOdooHRMSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>System Configuration:</strong> Customize Odoo HR to match the client's specific needs, including workflows, reports, dashboards, and security settings.</p>" },
            { text: "<p><strong>Data Migration:</strong> Plan and execute the migration of existing employee data into the Odoo HR system, ensuring data accuracy and integrity.</p>" },
            { text: "<p><strong>Workflow Design:</strong> Design and configure workflows to automate HR processes, such as recruitment, onboarding, leave management, and performance reviews.</p>" },
        ],
    },
    {
        tabImage: Images.iconOdooHRMSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>System Testing:</strong> Conduct rigorous system testing to identify and resolve any issues or bugs.</p>" },
            { text: "<p><strong>User Acceptance Testing: </strong> Involve key users in UAT to ensure the system meets their needs and expectations.</p>" },
            { text: "<p><strong>Data Migration Testing:</strong> Test the data migration process to verify data accuracy and completeness.</p>" },
            { text: "<p><strong>Final Deployment: </strong> Deploy the Odoo HR system to the client's production environment.</p>" },
        ],
    },
    {
        tabImage: Images.iconOdooHRMSolTab04,
        heading: "Post-Deployment Support",
        contentTexts: [
            { text: "<p><strong>User Training:</strong> Provide comprehensive training to HR staff on system usage, best practices, and troubleshooting techniques.</p>" },
            { text: "<p><strong>Go-Live Support:</strong> Provide on-site or remote support during the initial go-live phase to address any issues or queries.</p>" },
            { text: "<p><strong>Ongoing Support:</strong> Offer ongoing support, including maintenance, updates, and troubleshooting, to ensure the system's smooth operation.</p>" },
        ],
    }
];
const results = [
    {
        icon: Images.iconOdooHRMResult01,
        title: "Increased ",
        subTitle: "Efficiency",
        text: "Automated processes have significantly reduced manual effort and improved efficiency.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconOdooHRMResult02,
        title: "Enhanced  ",
        subTitle: "Visibility",
        text: "Real-time insights into employee data and performance for data-driven decisions.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconOdooHRMResult03,
        title: "Employee ",
        subTitle: "Satisfaction",
        text: "Improved employee satisfaction through streamlined processes and timely information.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconOdooHRMResult04,
        title: "Cost  ",
        subTitle: "Optimization",
        text: "Reduced administrative costs and improved resource utilization to drive overall organizational success.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Manufacturing, Retail " },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "QA Engineers" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Odoo Implementation " },
    { text: "Software Quality Assurance " },
    { text: "Post-Deployment Support " },
];
const feedbackText = [
    { text: "Data on Matrix demonstrated exceptional expertise in Odoo, tailoring solutions to our specific needs. The team demonstrated exceptional flexibility and technical skills in understanding our operations and implementing an efficient Odoo HR solution. We recommend them as a reliable software solution provider. " }
];

export { bannerHeading, bannerText, bulletContent, whatWeDos, whatWeDoTitle, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, feedbackText, industryDetails };