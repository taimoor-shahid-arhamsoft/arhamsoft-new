import { Images } from "@/assets/assets";

const bannerHeading = <h1>Odoo 17 Integration <br />With Call Mantra Dialer</h1>;
const bannerText = <p>An innovative solution to enhance CRM by integrating a robust dialer with Odoo 17, streamlining call operations, boosting agent productivity, and deriving valuable insights from call data.</p>;
const whatWeDoTitle = <h2><span className="d-block">Project Goals</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault01,
        iconHover: Images.iconOdooIntegrationWWDHover01,
        title: "Dialer Integration ",
        description: "Integrate a third-party dialer (Call Mantra) into Odoo 17 for direct outbound and inbound call management, enabling efficient data exchange."
    },
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault02,
        iconHover: Images.iconOdooIntegrationWWDHover02,
        title: "Call Management",
        description: "Facilitate making and receiving calls directly from Odoo, with automatic logging of call details (duration, date, and time) to the CRM module."
    },
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault03,
        iconHover: Images.iconOdooIntegrationWWDHover03,
        title: "Instant Synchronization",
        description: "Ensure real-time synchronization of call logs, customer interaction history, and real-time updates between the dialer and Odoo."
    },
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault04,
        iconHover: Images.iconOdooIntegrationWWDHover04,
        title: "Efficient Call Initiation",
        description: "Initiate calls with a single click from customer records in Odoo, leverage the click-to-dial functionality, and receive real-time notifications for incoming calls."
    },
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault05,
        iconHover: Images.iconOdooIntegrationWWDHover05,
        title: "Data Security",
        description: "Protect sensitive customer data through a multi-layered security approach that incorporates encryption, access controls, regular security checks, and incident response plans."
    },
    {
        iconDefault: Images.iconOdooIntegrationWWDDefault06,
        iconHover: Images.iconOdooIntegrationWWDHover06,
        title: "Regulatory Compliance",
        description: "Ensure compliance with all applicable real estate regulations, including data privacy laws, to protect client information and maintain industry standards."
    },
];
const challengeKeyPoints = [
    { strongText: "Complex Integration: ", text: " The integration of two disparate systems required careful planning and technical expertise." },
    { strongText: "Data Synchronization:", text: "Ensuring real-time synchronization of data between the two systems was a significant challenge." },
    { strongText: "Scalability:", text: "The solution needed to be scalable to accommodate future growth and changing business requirements." },
];
const solutionTabContent = [
    {
        tabImage: Images.iconOdooIntegrationSolTab01,
        heading: "Initiation & Planning",
        contentTexts: [
            { text: "<p><strong>Requirement Gathering:</strong></p>" },
            {
                keyPoints: [
                    { text: "Detailed analysis of client's specific needs and pain points related to call management and customer interactions." },
                    { text: "Identification of key features and functionalities required from the integration." },
                ]
            },
            { text: "<p><strong>Technical Assessment:</strong></p>" },
            {
                keyPoints: [
                    { text: "Evaluation of Odoo 17's current setup and customization." },
                    { text: "Assessment of Call Mantra Dialer's API capabilities and compatibility with Odoo." },
                    { text: "Identification of potential integration challenges and risks." },
                ],
            },
            { text: "<p><strong>Project Planning:</strong></p>" },
            {
                keyPoints: [
                    { text: "Creation of a detailed project plan outlining timelines, milestones, and resource allocation." },
                    { text: "Definition of project scope, objectives, and deliverables." },
                ],
            },
        ],
    },
    {
        tabImage: Images.iconOdooIntegrationSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>API Connector Development: </strong></p>" },
            {
                keyPoints: [
                    { text: "Design and development of a custom API connector to facilitate seamless data exchange between Odoo and Call Mantra Dialer." },
                    { text: "Implementation of robust error handling and logging mechanisms." },
                ]
            },
            { text: "<p><strong>Odoo Customization: </strong></p>" },
            {
                keyPoints: [
                    { text: "Customize Odoo to interact with external APIs." },
                    { text: "Add a click-to-dial button to the customer record view." },
                    { text: "Configuration of automatic call logging and synchronization." },
                    { text: "Implementation of real-time call notifications." },
                ],
            },
            { text: "<p><strong>Data Security and Compliance: </strong></p>" },
            {
                keyPoints: [
                    { text: "Implementation of strong security measures to protect sensitive customer data." },
                    { text: "Adherence to data privacy regulations (e.g., GDPR, CCPA)." },
                    { text: "Encryption of data during transmission and storage." },
                    { text: "Regular security audits and vulnerability assessments." },
                ],
            },
        ],
    },
    {
        tabImage: Images.iconOdooIntegrationSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Unit Testing:</strong></p>" },
            {
                keyPoints: [
                    { text: "Thorough testing of the API connector and Odoo customizations to ensure functionality and performance." },
                ]
            },
            { text: "<p><strong>Integration Testing:</strong></p>" },
            {
                keyPoints: [
                    { text: "Testing of the integration between Odoo and Call Mantra Dialer to verify seamless data exchange and feature functionality." },
                ],
            },
            { text: "<p><strong>User Acceptance Testing: </strong></p>" },
            {
                keyPoints: [
                    { text: "Involving end-users in testing the integration to gather feedback and identify any issues." },
                ],
            },
            { text: "<p><strong>Deployment : </strong></p>" },
            {
                keyPoints: [
                    { text: "Deployment of the integrated solution to the client's production environment." },
                    { text: "Configuration of user permissions and access controls." },
                    { text: "Data migration, if required." },
                ],
            },
        ],
    },
    {
        tabImage: Images.iconOdooIntegrationSolTab04,
        heading: "Post-Deployment Support",
        contentTexts: [
            { text: "<p><strong>Training and Support:</strong></p>" },
            {
                keyPoints: [
                    { text: "Providing comprehensive training to end-users on the new features and functionalities." },
                    { text: "Establishing a dedicated support channel for resolving issues and answering queries." },
                ]
            },
            { text: "<p><strong>Monitoring and Maintenance:</strong></p>" },
            {
                keyPoints: [
                    { text: "Continuous monitoring of the integration to identify and address any performance or security issues." },
                    { text: "Regular updates and patches to ensure optimal performance and security." },
                ],
            },
            { text: "<p><strong>Ongoing Support:</strong></p>" },
            {
                keyPoints: [
                    { text: "Providing ongoing support and maintenance services to address any future needs or requirements." },
                ],
            },
        ],
    }
];
const results = [
    {
        icon: Images.iconOdooIntegrationResult01,
        title: "Improved",
        subTitle: "Efficiency",
        text: "Automated call logging and click-to-dial functionality have streamlined call management processes.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconOdooIntegrationResult02,
        title: "Increased ",
        subTitle: "Productivity",
        text: "Real estate agents can now handle more calls and focus on customer interactions.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconOdooIntegrationResult03,
        title: "Reduced Manual",
        subTitle: "Effort",
        text: "Manual tasks associated with call logging and data entry have been minimized.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconOdooIntegrationResult04,
        title: "Data-Driven ",
        subTitle: "Insights",
        text: "Detailed call logs and analytics provide valuable insights for business decision-making.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Real Estate " },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "2", detail: "Developers" },
    { counter: "1", detail: "Functional Consultant" },
    { counter: "1", detail: "QA Engineers" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Odoo Implementation " },
    { text: "Software Quality Assurance " },
    { text: "Post-Deployment Support " },
];
const feedbackText = [
    { text: "The team was incredibly responsive and efficient, delivering the project on time and within budget. We are very satisfied with the quality of work and the level of service provided." }
];
const developmentServices = [
    {
        title: "API-Based Integration",
        icon: Images.odooIntegrationServices01,
        boxColor: "orange-box",
        list: [
            { heading: "Connector Development:", text: "Utilize the third-party dialer's API to develop a custom connector that seamlessly integrates with Odoo, enabling real-time data synchronization." },
            { heading: "Real-time Data Exchange:", text: "The API enabled seamless data exchange, ensuring that call logs, customer interactions, and other relevant information were synchronized in real-time." },
        ]
    },
    {
        title: "Workflow Enhancements",
        icon: Images.odooIntegrationServices02,
        boxColor: "blue-box",
        list: [
            { heading: "Click-to-Dial:", text: "A click-to-dial feature was implemented within the Odoo CRM module, allowing users to initiate calls directly from customer records." },
            { heading: "Automatic Call Logging:", text: "Call details, including duration, date, time, and disposition, were automatically logged and associated with the corresponding customer record." },
            { heading: "Real-time Notifications:", text: "Real-time notifications were configured to alert agents of incoming calls, enabling prompt response and efficient handling." },
        ]
    },
    {
        title: "Data Security & Compliance",
        icon: Images.odooIntegrationServices03,
        boxColor: "farozi-box",
        list: [
            { heading: "Data Handling Protocols:", text: "Robust data handling protocols were implemented to ensure the security and privacy of customer information." },
            { heading: "Regulatory Compliance:", text: "The solution was designed to comply with relevant data protection regulations, such as GDPR." },
        ]
    },
];

export { bannerHeading, bannerText, developmentServices, whatWeDos, whatWeDoTitle, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, feedbackText, industryDetails };