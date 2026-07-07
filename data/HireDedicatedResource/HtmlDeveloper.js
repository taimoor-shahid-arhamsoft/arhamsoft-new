import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire Front-End <span className="d-block">Developers</span></h1>;
const bannerText = <p>We create immersive digital experiences that engage and inspire. Our frontend developers are skilled in crafting intuitive interfaces that drive user satisfaction.</p>;
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
        title: "What is the difference between a dedicated front-end developer and a freelance front-end developer?",
        description: [
            "A dedicated front-end developer is part of a team exclusively focused on your project. This ensures consistent communication, faster turnaround times, and a higher level of commitment. On the other hand, a freelance developer may be juggling multiple projects at once, resulting in slower response times and less focus on your specific needs.",
        ],
    },
    {
        eventKey: "1",
        title: "How do you ensure that the dedicated developers you provide are a good cultural fit for my team?",
        description: [
            "We carefully screen developers not only for their technical skills but also for their soft skills and cultural fit. We consider factors such as communication style, work ethic, and ability to collaborate effectively with your team. We can also provide cultural training or coaching to help the developer adapt to your team's culture.",
        ],
    },
    {
        eventKey: "2",
        title: "How can I be sure that the dedicated developers are up-to-date with the latest front-end technologies and trends?",
        description: [
            "We encourage our developers to stay up-to-date with the latest trends and technologies by providing opportunities for continuous learning and development. We also have a rigorous onboarding process to ensure that new developers are quickly brought up to speed on our best practices and standards.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you handle knowledge transfer and intellectual property rights?",
        description: [
            "We have a clear process for knowledge transfer to ensure a smooth transition of ownership and understanding of the project. We also have strict policies in place to protect intellectual property rights, including non-disclosure agreements and copyright assignments."
        ],
    },
    {
        eventKey: "4",
        title: "What happens if I need to scale the team up or down during the project?",
        description: [
            "We have a flexible approach to staffing and can easily scale the team up or down as your project needs change. We can also provide additional resources, such as UX designers or QA specialists, as needed.",
        ],
    },
    {
        eventKey: "5",
        title: "What is the cost of hiring a dedicated front-end development team?",
        description: [
            "The cost of hiring a dedicated front-end development team varies depending on the specific skills and experience required, the size of the team, and the duration of the project. We offer transparent pricing models and can provide you with a detailed cost estimate upfront.",
        ],
    },
];
const accordionData = [
    {
        eventKey: "0",
        title: "Core Web Development",
        description: "We build robust and interactive web experiences using the core technologies of the web, including HTML, CSS, and JavaScript. Our experts craft clean, efficient, and well-structured code that is easy to maintain and update. We create responsive designs for seamless experiences across devices.",
        icon: Images.FrontHire05,
    },
    {
        eventKey: "1",
        title: "Single-Page Applications (SPAs)",
        description: "We specialize in building fast, responsive, and engaging SPAs. Our team has extensive experience in using modern JavaScript frameworks like React, Angular, and Vue.js to create seamless user experiences.",
        icon: Images.FrontHire01,
    },
    {
        eventKey: "2",
        title: "Progressive Web Apps (PWAs)",
        description: "Delivering fast, reliable, and engaging web experiences that work offline and load instantly. PWAs offer a seamless user experience across devices, providing a native app-like feel without the need for installation.",
        icon: Images.FrontHire02,
    },
    {
        eventKey: "3",
        title: "Mobile App Front-End",
        description: "We build beautiful, functional, and high-performing mobile apps using React Native, Flutter, Ionic and more. Our experts leverage the latest frameworks and tools to build cross-platform mobile apps with stunning and intuitive interfaces that drive user adoption and retention.",
        icon: Images.FrontHire03,
    },
    {
        eventKey: "4",
        title: "Legacy Modernization",
        description: "Our experts can modernize your legacy codebase, improve performance, enhance user experience and ensure compatibility with modern browsers and devices. We can also migrate your legacy application to a modern technology stack, such as React, Angular or Vue.js, to future-proof your digital assets.",
        icon: Images.FrontHire04,
    },
    {
        eventKey: "5",
        title: "Accessibility Consulting",
        description: "Make your digital products accessible to everyone. We ensure your website or app is accessible to all users, regardless of their abilities. Our experts can conduct accessibility audits, provide recommendations and assist with implementation to meet WCAG standards.",
        icon: Images.hireSalesSix,
    },
];
const hireMainText = [
    { text: "We deliver pixel-perfect, high-performance front-end solutions tailored to your specific needs. We collaborate closely with you to understand your unique goals and translate them into stunning, functional, and engaging digital experiences. Our expert team specializes in:" }
];
const developmentFlow = [
    {
        icon: Images.FrontIndustries01,
        title: "UI/UX Design",
        description: "Transforming your ideas into intuitive and visually appealing user interfaces that delight your users."
    },
    {
        icon: Images.FrontIndustries02,
        title: "PSD to HTML Conversion",
        description: "Seamlessly converting your design mockups into pixel-perfect HTML/CSS code."
    },
    {
        icon: Images.FrontIndustries03,
        title: "Responsive Web Design",
        description: "Ensuring your website performs seamlessly across all devices and screen sizes."
    },
    {
        icon: Images.FrontIndustries04,
        title: "Semantic Coding",
        description: "Creating clean, accessible, and SEO-friendly HTML code that is structured logically and semantically."
    },
    {
        icon: Images.FrontIndustries05,
        title: "CMS Theming",
        description: "Customizing popular CMS platforms like WordPress, Shopify and Magento to match your brand's unique style."
    },
    {
        icon: Images.FrontIndustries06,
        title: "Cross-Browser Compatibility",
        description: "Developing sites that render correctly and perform optimally across different browsers and devices."
    },
    {
        icon: Images.FrontIndustries07,
        title: "Front-End Optimization",
        description: "Improving website performance through techniques like caching, code minification and image optimization."
    },
    {
        icon: Images.FrontIndustries08,
        title: "Support & Maintenance",
        description: "Providing ongoing support & maintenance to keep your website running smoothly and securely."
    }
];
const stats = [
    { value: "30+", description: "frontend developers" },
    { value: "250+", description: "successful projects" },
    { value: "98.5%", description: "client retention rate" },
    { value: "Up to 60%", description: "savings on staffing" }
];
const servicesData = [
    {
        image: Images.FrontBenifits01,
        title: "Component Architecture",
        description: "We break down complex UIs into reusable, self-contained components, enhancing code modularity and maintainability."
    },
    {
        image: Images.FrontBenifits02,
        title: "Atomic Design",
        description: "Our design system follows a structured approach, from atomic elements to complex page layouts, ensuring consistency and efficiency."
    },
    {
        image: Images.FrontBenifits03,
        title: "State Management",
        description: "We employ effective state management solutions like Redux and MobX to manage and update application state, providing a seamless user experience."
    },
    {
        image: Images.FrontBenifits04,
        title: "Server-Side Rendering (SSR)",
        description: "We optimize initial page load times and SEO by rendering web pages on the server, improving performance and discoverability."
    },
    {
        image: Images.FrontBenifits05,
        title: "Micro Frontends",
        description: "We adopt a microservices approach to the front end for large-scale apps, enabling independent development, deployment, and scaling of features."
    },
    {
        image: Images.FrontBenifits06,
        title: "Composable Architecture",
        description: "This modular approach allows for the development of adaptable frontends, enabling easier maintenance and faster updates."
    }
];
const certifiedMainText = [
    { text: "Our proven patterns and practices allow us to deliver high-quality, scalable, and maintainable front-end solutions." }
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
const techImages = [
    { image: Images.fullStackTech04 },
    { image: Images.fullStackTech05 },
    { image: Images.fullStackTech06 },
    { image: Images.fullStackTech07 },
    { image: Images.frontTech01 },
    { image: Images.frontTech02 },
    { image: Images.frontTech03 },
    { image: Images.frontTech04 },
    { image: Images.frontTech05 },
    { image: Images.frontTech06 },
    { image: Images.frontTech07 },
];
const boxesContent = [
    {
        icon: Images.frontAdvantage01,
        boxColor: "orange",
        title: "Speedy Load Times",
        description: "Experience a significant reduction in page load times, leading to improved user engagement & better SEO.",
    },
    {
        icon: Images.frontAdvantage02,
        boxColor: "blue",
        title: "Seamless Experience",
        description: "Enjoy smooth interactions, fluid animations, and responsive designs across all devices.",
    },
    {
        icon: Images.frontAdvantage03,
        boxColor: "farozi",
        title: "Enhanced Performance",
        description: "Fully optimized code, efficient resource loading and minimized latency for optimal performance.",
    },
    {
        icon: Images.frontAdvantage04,
        boxColor: "green",
        title: "Future-Proof Code",
        description: "Receive clean, well-structured, and maintainable code that adapts to evolving web technologies.",
    }
];
const processSteps = [
    { icon: Images.frontProcess01, stepName: "Requirements", text: "Specify the resources you need." },
    { icon: Images.frontProcess02, stepName: "Profiles", text: "We will send you relevant profiles." },
    { icon: Images.frontProcess03, stepName: "Selection", text: "Select experts for virtual interview." },
    { icon: Images.frontProcess04, stepName: "Flexible Hiring", text: "Hire on an hourly, part/full-time basis." },
    { icon: Images.frontProcess05, stepName: "Onboarding", text: "Onboard an expert or remote team." },
];
const bulletContent = [
    { title: "No Hidden Charges", },
    { title: "7-Day Risk-Free Trial", },
    { title: "Flexible Payment Plans", },
    { title: "Custom Plans Per Your Needs" },
];
const tabHeading = <h2>Pixel By Pixel <span>Excellence</span></h2>;
const tabs = [
    {
        iconDefault: Images.frontendWorkdayTabs01,
        iconHover: Images.frontendWorkdayTabsHover01,
        title: "Eye-Catching Visuals",
        subTitle: "Visually Striking ",
        subTitleTwo: "Design Elements",
        image: Images.workdayTabsIn01,
        description: [
            { text: "<strong>Crafting Digital Experiences That Captivate</strong>" },
            { text: "Enhance the visual presence of your brand. We craft visually stunning websites that align with your brand identity and resonate with your audience. Our focus is on creating a seamless digital experience." },
        ],
        features: [
            { id: 1, image: Images.frontendTabIn01, text: "Enhanced Brand Identity" },
            { id: 2, image: Images.frontendTabIn02, text: "Improved User Experience" },
            { id: 3, image: Images.frontendTabIn03, text: "Increased Website Traffic" },
            { id: 4, image: Images.frontendTabIn04, text: "Boosted Conversion Rates" },
        ],
    },
    {
        iconDefault: Images.frontendWorkdayTabs02,
        iconHover: Images.frontendWorkdayTabsHover02,
        title: "Cross-Platform Design",
        subTitle: "Device-Agnostic",
        subTitleTwo: "User Experience",
        image: Images.workdayTabsIn02,
        description: [
            { text: "<strong>Building Responsive Websites That Engage and Convert</strong>" },
            { text: "Our responsive designs ensure your website looks great and functions perfectly on all devices. We prioritize mobile-first design to cater to the growing mobile user base. We prioritize mobile-first designs to cater to the growing mobile user base." },
        ],
        features: [
            { id: 1, image: Images.frontendTabIn05, text: "Higher User Satisfaction" },
            { id: 2, image: Images.frontendTabIn06, text: "Increased Conversion Rates" },
            { id: 3, image: Images.frontendTabIn07, text: "Cost-Effective Maintenance" },
            { id: 4, image: Images.frontendTabIn08, text: "Improved Search Engine Rankings" },
        ],
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

export { bannerHeading, bannerText, technologyOptions, accordionData, hireMainText, developmentFlow, accordionFaqsData, stats, servicesData, certifiedMainText, slidesImages, boxesContent, processSteps, workSliderData, techImages, bulletContent, tabHeading, tabs };