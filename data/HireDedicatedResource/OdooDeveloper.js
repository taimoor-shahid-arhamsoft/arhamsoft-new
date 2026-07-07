import { Images } from "@/assets/assets";

const bannerHeading = <h1>Outsource Odoo Developers To Scale Solutions</h1>;
const bannerText = <p>As a reseller Odoo partner, we specialize in outsourcing Odoo development that includes consultation, implementation, support, and optimization.</p>;
const technologyOptions = [
    { value: ".NET Developer", label: ".NET Developer" },
    { value: "AI/ML Developer", label: "AI/ML Developer" },
    { value: "Android Developer", label: "Android Developer" },
    { value: "AR/VR Developer", label: "AR/VR Developer" },
    { value: "Blockchain Developer", label: "Blockchain Developer" },
    { value: "Cyber Security", label: "Cyber Security" },
    { value: "Data Science Expert", label: "Data Science Expert" },
    { value: "DevOps Engineer", label: "DevOps Engineer" },
    { value: "Dynamics 365 Developer", label: "Dynamics 365 Developer" },
    { value: "Front End Developer", label: "Front End Developer" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "Game Developer", label: "Game Developer" },
    { value: "iOS Developer", label: "iOS Developer" },
    { value: "JS Developer", label: "JS Developer" },
    { value: "Odoo Developer", label: "Odoo Developer" },
    { value: "PHP Developer", label: "PHP Developer" },
    { value: "Python Developer", label: "Python Developer" },
    { value: "Salesforce Developer", label: "Salesforce Developer" },
    { value: "Shopify Developer", label: "Shopify Developer" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
    { value: "Unity Developer", label: "Unity Developer" },
    { value: "Unreal Engine Developer", label: "Unreal Engine Developer" },
    { value: "Zoho Developer", label: "Zoho Developer" },
    { value: "Other", label: "Other" }
];
const developmentFlow = [
    {
        icon: Images.zohoIndustires01,
        title: "Information Technology",
        description: "Driving global collaboration with scalable solutions."
    },
    {
        icon: Images.zohoIndustires02,
        title: "Healthcare",
        description: "Enhancing patient care and team coordination with secure tools."
    },
    {
        icon: Images.zohoIndustires03,
        title: "Logistics",
        description: "Improving supply chain visibility with real-time data solutions."
    },
    {
        icon: Images.zohoIndustires04,
        title: "Real Estate",
        description: "Automating property management workflows for efficiency."
    },
    {
        icon: Images.zohoIndustires05,
        title: "Manufacturing",
        description: "Optimizing inventory processes with solutions for automation."
    },
    {
        icon: Images.zohoIndustires06,
        title: "Retail & eCommerce",
        description: "Unifying sales channels for seamless customer experiences."
    },
    {
        icon: Images.zohoIndustires07,
        title: "Banking & Finance",
        description: "Supporting risk management and secure data handling."
    },
    {
        icon: Images.zohoIndustires08,
        title: "Education & Learning",
        description: "Streamlining administrative processes & enhancing student engagement."
    }
];
const accordionData = [
    {
        eventKey: "0",
        title: "Swift Implementation",
        description: "We combine deep technical knowledge with an agile approach to ensure that every aspect is configured to meet your specific needs with minimal downtime.",
        icon: Images.odooDevelopersTabIcon01,
    },
    {
        eventKey: "1",
        title: "Setup Customization",
        description: "We configure Odoo exactly as per your business needs. From configuring modules to setting up personalized dashboards, we align it with every work process.",
        icon: Images.hireSalesTwo,
    },
    {
        eventKey: "2",
        title: "Data Migration",
        description: "We meticulously map, cleanse, and transfer data to maintain its integrity and accuracy, minimizing downtime and operational disruption.",
        icon: Images.hireSalesThree,
    },
    {
        eventKey: "3",
        title: "System Integration",
        description: "We create a cohesive digital ecosystem where information flows seamlessly across platforms, reducing redundancy and ensuring real-time data accuracy.",
        icon: Images.hireSalesFour,
    },
    {
        eventKey: "4",
        title: "Expert Consulting",
        description: "Our consultants provide insights into system configurations, performance improvements, and best practices tailored to your industry.",
        icon: Images.odooDevelopersTabIcon05,
    },
    {
        eventKey: "5",
        title: "Help & Support",
        description: "Our responsive team can help you troubleshoot, update, and optimize your setup, ensuring minimal downtime and a smooth user experience.",
        icon: Images.hireSalesSix,
    },
];
const boxesContent = [
    {
        icon: Images.odooDevelopersIcon01,
        boxColor: "orange",
        title: "Odoo Developer",
        description: "With a strong command of Odoo's framework, we deliver high-quality, scalable, and bug-free solutions.",
    },
    {
        icon: Images.odooDevelopersIcon02,
        boxColor: "blue",
        title: "Functional Consultant",
        description: "We analyze complex business problems and seamlessly configure Odoo to streamline operations.",
    },
    {
        icon: Images.odooDevelopersIcon03,
        boxColor: "farozi",
        title: "Integration Expert",
        description: "We facilitate a smooth data flow by integrating payment gateways, CRMs, ERPs & other enterprise systems.",
    },
    {
        icon: Images.odooDevelopersIcon04,
        boxColor: "green",
        title: "Technical Lead",
        description: "We oversee development to ensure projects stay on track and meet the highest quality standards.",
    }
];
const tabHeading = <h2>Implementation <span>Methodology</span></h2>;
const tabs = [
    {
        iconDefault: Images.workdayTabs01,
        iconHover: Images.workdayTabsHover01,
        title: "Quick Implementation",
        subTitle: "Odoo Quickstart",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn01,
        description: [
            { text: "We rapidly deploy Odoo's robust capabilities, tailored to your unique business needs. Our experts ensure a smooth transition by covering essential modules like CRM, Inventory, Accounting, and more, empowering you to manage core operations effortlessly. With a focus on simplicity and speed, we deliver a fully operational Odoo system in weeks, not months, enabling your team to quickly adapt and reap the benefits of this all-in-one ERP solution." },
        ],
        features: [
            { id: 1, image: Images.frontTabIn01, text: "Transparent Pricing" },
            { id: 2, image: Images.frontTabIn02, text: "End-to-End Support" },
            { id: 3, image: Images.frontTabIn03, text: "Dedicated Support Team" },
            { id: 4, image: Images.frontTabIn04, text: "Pre-Configured Best Practices" },
        ],
    },
    {
        iconDefault: Images.workdayTabs02,
        iconHover: Images.workdayTabsHover02,
        title: "Custom Implementation",
        subTitle: "Custom Odoo",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn02,
        description: [
            { text: "We specialize in seamless Odoo implementation services, tailored to align with every business's needs. With a robust understanding of Odoo's extensive suite of applications, we ensure our partnered clients benefit from a fully customized ERP solution that optimizes workflows, boosts productivity, and reduces operational complexities. Our approach is customer-first, emphasizing thorough consultation and meticulous planning at every stage." },
        ],
        features: [
            { id: 1, image: Images.frontTabIn05, text: "Third-Party Integration" },
            { id: 2, image: Images.frontTabIn06, text: "Deep Business Analysis" },
            { id: 3, image: Images.frontTabIn07, text: "Advanced Data Migration" },
            { id: 4, image: Images.frontTabIn08, text: "End-to-End Customization" },
        ],
    },
];
const processSteps = [
    { icon: Images.frontProcess01, stepName: "Requirements", text: "Specify the resources you need." },
    { icon: Images.frontProcess02, stepName: "Profiles", text: "We will send you relevant profiles." },
    { icon: Images.frontProcess03, stepName: "Selection", text: "Select experts for virtual interview." },
    { icon: Images.frontProcess04, stepName: "Flexible Hiring", text: "Hire on an hourly, part/full-time basis." },
    { icon: Images.frontProcess05, stepName: "Onboarding", text: "Onboard an expert or remote team." },
];
const bulletContent = [
    { title: "No Hidden Costs", },
    { title: "On-Time Delivery", },
    { title: "Data Confidentiality", },
    { title: "Dedicated Support Team" },
];
const techImages = [
    { image: Images.iconOdooTech01 },
    { image: Images.iconOdooTech02 },
    { image: Images.iconOdooTech03 },
    { image: Images.iconOdooTech04 },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What is your experience level with Odoo?",
        description: ["Our developers are experienced with Odoo, having implemented CRM, ERP, Inventory, and Sales modules for various industries, customizing solutions to enhance functionality and efficiency."],
    },
    {
        eventKey: "1",
        title: "Do you offer support for custom module development in Odoo?",
        description: ["Yes, our developers specialize in custom module development for Odoo, tailoring solutions to meet specific business needs and enhance system functionality."],
    },
    {
        eventKey: "2",
        title: "What steps do you take to secure data in Odoo?",
        description: ["We enforce rigorous security protocols, like data encryption, access controls, and regular audits, to maintain high data protection standards."],
    },
    {
        eventKey: "3",
        title: "Can you integrate Odoo with other third-party applications?",
        description: ["Absolutely. Our team excels in API integration, enabling Odoo to connect effortlessly with payment gateways, eCommerce platforms, and legacy systems."],
    },
    {
        eventKey: "4",
        title: "How do you handle training and support after deployment?",
        description: ["We provide comprehensive training to end-users & admin staff. Our support team assists with troubleshooting, updates, and additional enhancements as needed."],
    },
    {
        eventKey: "5",
        title: "How do you keep projects timely?",
        description: ["We use agile project management to set clear milestones and maintain regular updates, ensuring timely delivery and flexibility for client feedback."],
    },
];
const servicesData = [
    {
        image: Images.odoCertified01,
        title: "Efficient Customization",
        description: "Our developers have in-depth knowledge of Odoo modules, which enables them to customize solutions that align perfectly with specific needs."
    },
    {
        image: Images.odoCertified02,
        title: "Quick Implementation",
        description: "Our skilled developers know the best practices for efficient Odoo deployment. They ensure the ERP is up and running smoothly without delays."
    },
    {
        image: Images.odoCertified03,
        title: "Enhanced Security",
        description: "Our developers are well-versed in the security protocols. They implement best practices to prevent unauthorized access and security breaches."
    },
    {
        image: Images.odoCertified04,
        title: "Increase ROI",
        description: "We optimize system performance, which can help reduce long-term maintenance costs, especially those associated with poor ERP systems."
    },
    {
        image: Images.odoCertified05,
        title: "Strategic Insights",
        description: "We also provide strategic insights into system usage to optimize workflows. We analyze performance metrics for data-driven decisions. "
    },
    {
        image: Images.odoCertified06,
        title: "Improved Compliance",
        description: "We ensure processes are auditable and compliant with industry-specific mandates, reducing the risk of costly compliance breaches."
    }
];
const hireMainText = [
    { text: "We customize Odoo to business requirements, ensuring seamless integration & efficient migration. Hire the best Odoo programmers from us to unlock Odoo's powerful suite of applications, boosting productivity and streamlining your operations. With our expert support, trust us to implement innovative solutions that drive growth and deliver tangible results. Connect with us today to transform your business processes." }
];
const stats = [
    { value: "95%", description: "on-time delivery rate" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "500+", description: "projects delivered" },
    { value: "Up to 60%", description: "cost savings" }
];
const certifiedMainText = [
    { text: "Hire a team of certified Odoo developers and reap the following benefits:" }
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

export { bannerHeading, bannerText, accordionData, hireMainText, developmentFlow, accordionFaqsData, stats, servicesData, certifiedMainText, technologyOptions, boxesContent, processSteps, workSliderData, bulletContent, tabs, tabHeading, techImages };