import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire Zoho <span className="d-block">Developers</span></h1>;
const bannerText = <p>We connect businesses with expert Zoho developers who ensure seamless implementation, customization, and support of Zoho solutions.</p>;
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
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "Zoho APIs, Zoho Scripts, Zoho Reports, Zoho Migrate, etc." },
    { text: "Airbyte, Informatica, Webhooks, MuleSoft, Fivetran, etc." },
    { text: "HTML, CSS, JS, Python, React, MySQL, AWS, Azure, etc." },
];
const steps = [
    { number: "01", text: "Identify Resources", colorClass: "bg-farozi" },
    { number: "02", text: "Send Profiles", colorClass: "bg-orange" },
    { number: "03", text: "Select Candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize Team", colorClass: "bg-blue" },
    { number: "05", text: "Start Working", colorClass: "bg-green" }
];
const accordionData = [
    {
        eventKey: "0",
        title: "App Development",
        description: "We craft tailored Zoho apps that align with business goals. Our expert team ensures every app delivers maximum functionality and an exceptional user experience to drive growth.",
        icon: Images.hireSalesOne,
    },
    {
        eventKey: "1",
        title: "Custom Solutions",
        description: "Our team makes custom solutions that fit unique operational requirements. For this, we personalize modules, automate workflows, and create functionalities that seamlessly support goals.",
        icon: Images.hireSalesTwo,
    },
    {
        eventKey: "2",
        title: "Data Migration",
        description: "We ensure simple, secure transitions to Zoho. Our experts transfer your data smoothly from legacy systems to Zoho, focusing on integrity, accuracy, and minimal downtime.",
        icon: Images.hireSalesThree,
    },
    {
        eventKey: "3",
        title: "System Integration",
        description: "We skilfully connect Zoho with your existing platforms to create a unified digital ecosystem. From CRMs to ERPs, our professionals ensure data flows smoothly to enhance productivity across systems.",
        icon: Images.hireSalesFour,
    },
    {
        eventKey: "4",
        title: "Expert Consulting",
        description: "Our experts provide strategic insights and hands-on guidance. You can also work with our certified consultants to optimize processes, maximize Zoho’s potential, and achieve measurable business outcomes.",
        icon: Images.hireSalesFive,
    },
    {
        eventKey: "5",
        title: "Help & Support",
        description: "From troubleshooting to regular maintenance, our support team ensures your Zoho experience remains efficient and trouble-free.",
        icon: Images.hireSalesSix,
    },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "Are your developers certified?",
        description: ["Yes, our developers are certified, with extensive training and expertise in Zoho platforms. They are well-equipped to handle customizations, integrations, and complex requirements with a high standard of quality and compliance."],
    },
    {
        eventKey: "1",
        title: "Do you offer end-to-end Zoho development, including customization, implementation, and support?",
        description: ["Yes, our team handles everything from initial customization and implementation to ongoing support, ensuring a seamless and tailored experience throughout the development lifecycle."],
    },
    {
        eventKey: "2",
        title: "How do you ensure quality and consistency in development?",
        description: ["We ensure quality coding through best practices, documentation, code reviews, and automated testing. Quality checks at every stage maintain high standards across the development lifecycle."],
    },
    {
        eventKey: "3",
        title: "Can you scale the team if the project scope increases?",
        description: ["Yes, we can scale the team to match an increased project scope. Our flexible resourcing model allows you to quickly onboard developers as needed."],
    },
    {
        eventKey: "4",
        title: "What security measures are in place to protect sensitive data?",
        description: ["We implement strict data encryption, access controls, and regular security audits to protect sensitive data, ensuring compliance with industry standards and regulations."],
    },
    {
        eventKey: "5",
        title: "Do you provide backup services for data and configurations?",
        description: ["Yes, we provide comprehensive backup services to ensure data integrity, secure storage, and quick recovery in case of any disruptions. Storage protocols are implemented to maintain system continuity."],
    },
];
const servicesData = [
    {
        image: Images.zohoCertifiedImage01,
        title: "Streamlined Operations",
        description: "Access tailored apps that meet industry needs, enhance operational efficiency, and align with business goals."
    },
    {
        image: Images.zohoCertifiedImage02,
        title: "Scalability",
        description: "Implement systems that expand with your business & support long-term growth without frequent IT restructuring."
    },
    {
        image: Images.zohoCertifiedImage03,
        title: "Enhanced Collaboration",
        description: "Enhance communication and productivity for distributed teams with collaboration-focused tools."
    },
    {
        image: Images.zohoCertifiedImage04,
        title: "Data-Driven Decisions",
        description: "Leverage real-time data insights to make informed, data-backed decisions that drive success."
    },
    {
        image: Images.zohoCertifiedImage05,
        title: "Cost Saving",
        description: "Minimize maintenance overhead. Our experts handle upgrades and workflow optimizations, reducing upkeep costs."
    },
    {
        image: Images.zohoCertifiedImage06,
        title: "Sustainable Growth",
        description: "By implementing scalable solutions, achieve sustainable growth that balances immediate results with long-term stability."
    }
];
const hireMainText = [
    { text: "By outsourcing to our dedicated Zoho programmer, you can gain access to custom solutions that boost productivity and speed up business growth. With Zoho CRM and integrated applications embedded in your operations, you can streamline workflows and unify customer data. As your business scales up, hire Team DoM. We can implement a full-scale ERP solution as per your evolving business needs." },
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "500+", description: "projects delivered" },
    { value: "Up to 60%", description: "savings on staffing" }
];
const certifiedMainText = [
    { text: "Hire a team of certified Zoho developers and reap the following benefits:" },
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

export { bannerHeading, bannerText, accordionData, servicesData, hireMainText, accordionFaqsData, stats, certifiedMainText, developmentFlow, expertiseHead, expertiseHeadTwo, expertise, workSliderData, steps };