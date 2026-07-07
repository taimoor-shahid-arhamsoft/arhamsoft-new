import { Images } from "@/assets/assets";

const bannerHeading = <h1 className="php-heading">Outsource PHP Developers To Meet Project Demands</h1>;
const bannerText = <p>We specialize in outsourcing PHP development services, including custom application development, framework-based solutions, maintenance, and performance optimization, to help businesses achieve their goals efficiently.</p>;
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
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "How do you ensure code quality?",
        description: [
            "Our offshore PHP developers follow rigorous code review processes and utilize automated testing tools. We write clean code with thorough documentation. Through continuous integration, we ensure quality throughout the development cycle.",
        ],
    },
    {
        eventKey: "1",
        title: "Do you follow coding standards and best practices?",
        description: [
            "Yes, we follow widely accepted coding standards for offshore PHP development, ensuring consistency and readability. Our developers adhere to PSR standards and utilize design patterns where applicable. This results in scalable and maintainable code.",
        ],
    },
    {
        eventKey: "2",
        title: "How do you ensure data security and confidentiality?",
        description: [
            "In PHP development outsourcing services, we implement secure coding practices and use encryption for sensitive data. Our developers sign non-disclosure agreements (NDAs) to protect client information. We also perform regular security audits to identify vulnerabilities.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you handle bug fixes and updates?",
        description: [
            "Bugs are tracked through a dedicated issue management system and are prioritized based on severity. We release updates regularly and provide patches for critical bugs as needed. Our team also ensures that any new code is thoroughly tested before deployment.",
        ],
    },
    {
        eventKey: "4",
        title: "How do you manage and mitigate project risks?",
        description: [
            "We conduct risk assessments at the beginning of every project and monitor them throughout development. Mitigation strategies include proactive communication, setting clear expectations, and maintaining a flexible timeline.",
        ],
    },
    {
        eventKey: "5",
        title: "What is your preferred method for project documentation?",
        description: [
            "We maintain comprehensive documentation using tools like Confluence or GitHub Wiki. Our developers document both the architecture and codebase for easy understanding.",
        ],
    },
];
const accordionData = [
    {
        eventKey: "0",
        title: "Web Application Development",
        description: "We create dynamic, scalable web applications tailored to your unique needs, ensuring exceptional performance and user engagement.",
        icon: Images.hirePhp01,
    },
    {
        eventKey: "1",
        title: "Custom Website Development",
        description: "We build bespoke websites that represent your brand and drive success with fully customized features and designs.",
        icon: Images.hirePhp02,
    },
    {
        eventKey: "2",
        title: "API Development & Integration",
        description: "We develop secure, robust APIs to seamlessly connect your systems and enhance interoperability across platforms.",
        icon: Images.hirePhp03,
    },
    {
        eventKey: "3",
        title: "Maintenance & Support",
        description: "We ensure your PHP applications stay updated, secure, and functional with our dedicated maintenance and support services.",
        icon: Images.hirePhp04,
    },
    {
        eventKey: "4",
        title: "Migration & Upgrades",
        description: "We handle seamless migrations and upgrades, modernizing your applications with minimal downtime and maximum efficiency.",
        icon: Images.hirePhp05,
    },
    {
        eventKey: "5",
        title: "Database Management",
        description: "We provide secure, optimized, and scalable database solutions that power your PHP applications effectively.",
        icon: Images.hirePhp06,
    },
];
const hireMainText = [
    { text: "We tailor PHP solutions to fit your business needs, offering custom applications designed specifically for you. With seamless integration and efficient migrations, our top PHP developers help unlock the full potential of PHP frameworks and technologies. By boosting functionality and streamlining operations, we deliver expert solutions that are both innovative and scalable. Trust us to drive growth and achieve measurable results. Connect with us today to elevate your web development projects!" }
];
const developmentFlow = [
    {
        icon: Images.hireExpertise01,
        title: "PHP Frameworks Proficiency",
        description: "We build scalable web apps using Laravel, Symfony, and CodeIgniter for efficiency and maintainability."
    },
    {
        icon: Images.hireExpertise02,
        title: "E-commerce Development",
        description: "Custom eCommerce solutions with secure payments and seamless shopping experiences for businesses."
    },
    {
        icon: Images.hireExpertise03,
        title: "Security Implementation",
        description: "We implement encryption, secure storage, and access control to protect your web applications."
    },
    {
        icon: Images.hireExpertise04,
        title: "Performance Optimization",
        description: "Speed up your web app with optimized server configurations, caching, and database queries."
    },
    {
        icon: Images.hireExpertise06,
        title: "Cross-Platform Development",
        description: "Develop seamless apps across Android, iOS, and desktop with tools like React Native and Flutter."
    },
    {
        icon: Images.hireExpertise05,
        title: "Third-Party Integration",
        description: "Integrate external APIs and services to extend your app functionality and improve user experience."
    },
    {
        icon: Images.hireExpertise07,
        title: "Legacy System Modernization",
        description: "Migrate outdated systems to modern, secure, and scalable solutions with minimal disruption."
    },
    {
        icon: Images.hireExpertise08,
        title: "Continuous Deployment",
        description: "Automate testing and deployment for faster releases, high quality code, and reduced downtime."
    }
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "95%", description: "on-time delivery rate" },
    { value: "Up to 60%", description: "cost savings" }
];
const servicesData = [
    {
        image: Images.phpBenifits01,
        title: "PHP Framework Expertise",
        description: "Leverage specialized knowledge of PHP frameworks like Laravel and Symfony for robust solutions. Our team builds scalable applications quickly, ensuring high-quality, future-proof outcomes."
    },
    {
        image: Images.phpBenifits02,
        title: "Version Upgrades & Compatibility",
        description: "Ensure your PHP apps stay up-to-date for improved performance and security. Our team seamlessly migrates your system to the latest PHP versions with minimal downtime and no disruptions."
    },
    {
        image: Images.phpBenifits03,
        title: "Custom PHP Solutions",
        description: "Receive tailored PHP solutions designed for your unique needs. Our team creates custom CMS, eCommerce platforms, and apps that align with your goals and maximize business growth."
    },
    {
        image: Images.phpBenifits04,
        title: "Optimized Performance",
        description: "Boost the speed and responsiveness of your web applications. Our team optimizes code, queries, and caching techniques to enhance user experience, reduce load times, and improve SEO rankings."
    },
    {
        image: Images.phpBenifits05,
        title: "Faster Prototyping",
        description: "Speed up your prototyping process to test ideas quickly. Our team builds rapid prototypes, providing valuable insights and enabling faster decision-making for product development."
    },
    {
        image: Images.phpBenifits06,
        title: "Enhanced Security",
        description: "Fortify your applications with strong security protocols. Our team implements best practices like encryption and secure logins, protecting your app from threats and ensuring data safety."
    }
];
const certifiedMainText = [
    { text: "Hire a team of certified PHP developers and reap the following benefits:" }
];
const slidesImages = [
    Images.iconHappyClient01,
    Images.iconHappyClient02,
    Images.iconHappyClient03,
    Images.iconHappyClient04,
    Images.iconHappyClient05,
    Images.iconHappyClient06,
    Images.iconHappyClient07,
    Images.iconHappyClient08,
];
const boxesContent = [
    {
        icon: Images.hireAdvantage01,
        boxColor: "orange",
        title: "Laravel Developer",
        description: "Our experts create clean, scalable, and secure web apps tailored to your needs. Leveraging powerful tools & frameworks, we ensure seamless performance, efficient APIs & custom functionalities.",
    },
    {
        icon: Images.hireAdvantage02,
        boxColor: "blue",
        title: "WordPress Developer",
        description: "We craft customized websites, themes, and plugins that make your brand stand out. From simple blogs to fully functional eCommerce platforms, we design sites that align well with your goals.",
    },
    {
        icon: Images.hireAdvantage03,
        boxColor: "farozi",
        title: "Magento Developer",
        description: "We build robust eCommerce solutions that are fast, secure, and scalable with seamless navigation, intuitive interfaces, and cutting-edge functionality.",
    },
    {
        icon: Images.hireAdvantage04,
        boxColor: "green",
        title: "QA Specialist",
        description: "Our QA specialists ensure your apps & websites work flawlessly. They meticulously test for bugs & security vulnerabilities to ensure a smooth and reliable user experience.",
    }
];
const tabHeading = <h2>Implementation <span>Methodology</span></h2>;
const tabs = [
    {
        iconDefault: Images.workdayTabs01,
        iconHover: Images.workdayTabsHover01,
        title: "Quick Implementation",
        subTitle: "Quickstart",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn01,
        description: [
            { text: "Get fast, efficient, and cost-effective solutions. By leveraging pre-built frameworks and tools, we can rapidly deploy your PHP application with minimal customization, ensuring a quick go-to-market strategy. The streamlined process ensures a smooth transition from concept to execution, delivering results within a shorter timeframe while maintaining reliability. With our team, you can focus on growing your business while we manage the development." },
        ],
        features: [
            { id: 1, image: Images.hireTabsIn01, text: "Transparent Pricing" },
            { id: 2, image: Images.hireTabsIn02, text: "End-to-End Support" },
            { id: 3, image: Images.hireTabsIn03, text: "Dedicated Support Team" },
            { id: 4, image: Images.hireTabsIn04, text: "Pre-Configured Best Practices" },
        ],
    },
    {
        iconDefault: Images.workdayTabs02,
        iconHover: Images.workdayTabsHover02,
        title: "Custom Implementation",
        subTitle: "Custom",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn02,
        description: [
            { text: "We collaborate closely with you to understand your specific requirements, creating a product that aligns perfectly with your vision and objectives. This method provides flexibility, scalability, and advanced functionality, ensuring every aspect of your app is exactly built. Our developers deliver a solution that meets your long-term goals. We ensure that the final product is powerful, sustainable, and ready for your business growth." },
        ],
        features: [
            { id: 1, image: Images.hireTabsIn05, text: "Flexibility & Scalability" },
            { id: 2, image: Images.hireTabsIn06, text: "Advanced Data Migration" },
            { id: 3, image: Images.hireTabsIn07, text: "Deep Business Analysis" },
            { id: 4, image: Images.hireTabsIn08, text: "Competitive Edge" },
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
    {
        title: "No Hidden Costs",
    },
    {
        title: "On-Time Delivery",
    },
    {
        title: "Data Confidentiality",
    },
    {
        title: "Dedicated Support Team"
    },
];
const techImages = [
    { image: Images.PhpTech01 },
    { image: Images.PhpTech02 },
    { image: Images.PhpTech03 },
    { image: Images.PhpTech04 },
    { image: Images.PhpTech05 },
    { image: Images.PhpTech06 },
    { image: Images.PhpTech07 },
    { image: Images.PhpTech08 },
    { image: Images.PhpTech09 },
    { image: Images.PhpTech10 },
    { image: Images.PhpTech11 },
    { image: Images.PhpTech12 },
    { image: Images.PhpTech13 },
    { image: Images.PhpTech14 },
    { image: Images.PhpTech15 },
    { image: Images.PhpTech16 },
    { image: Images.PhpTech17 },
    { image: Images.PhpTech18 },
    { image: Images.PhpTech19 },
    { image: Images.PhpTech20 },
    { image: Images.PhpTech21 },
    { image: Images.PhpTech22 },
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

export { bannerHeading, bannerText, accordionData, hireMainText, developmentFlow, accordionFaqsData, stats, servicesData, certifiedMainText, technologyOptions, boxesContent, processSteps, workSliderData, bulletContent, tabs, tabHeading, techImages, slidesImages };