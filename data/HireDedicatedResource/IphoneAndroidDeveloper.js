import { Animations, Images } from "@/assets/assets";

const bannerHeading = <h1>Hire Mobile App <span className="d-block">Developers</span></h1>;
const bannerText = <p>Outsource mobile app development to give your business growth a significant push. Invest in mobile solutions and expand your business with minimal overhead. We&apos;ve got your back. Engage our top talent to create mobile apps with smooth functionality.</p>;
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
const accordionData = [
    {
        eventKey: "0",
        title: "iOS Development",
        description: "Leveraging the power of Swift and Objective-C, our dedicated iOS developers craft exceptional, secure and high-performance applications. By adhering to Apple's strict guidelines and utilizing cutting-edge tools like SwiftUI and Core Data, we deliver feature-rich apps that provide a seamless user experience.",
        icon: Images.iconHireMobileDeveloper01,
    },
    {
        eventKey: "1",
        title: "Android Development",
        description: "Develop high-quality, feature-rich Android applications using Java and Kotlin. Our skilled Android app developers stay up-to-date with the latest Android SDKs and libraries to ensure your app delivers optimal speed, security and usability. We leverage Jetpack components to enhance the maintainability and capabilities of your Android applications.",
        icon: Images.iconHireMobileDeveloper02,
    },
    {
        eventKey: "2",
        title: "Flutter Development",
        description: "Accelerate your development with Flutter and build natively compiled apps for mobile, web and desktop from a single codebase. Our skilled Flutter developers, proficient in Dart, deliver rapid development cycles, visually stunning UIs, and exceptional performance across all platforms.",
        icon: Images.iconHireMobileDeveloper03,
    },
    {
        eventKey: "3",
        title: "Ionic Development",
        description: "Create feature-rich, native-like mobile apps using web technologies like HTML, CSS and JavaScript. Our skilled Ionic developers seamlessly integrate Angular or React to deliver visually stunning apps that perform flawlessly across diverse platforms.",
        icon: Images.iconHireMobileDeveloper04,
    },
    {
        eventKey: "4",
        title: "React Native Development",
        description: "React Native is an industry-leading JavaScript framework used to build truly native apps for iOS and Android. Our skilled React Native app developers use its component-based architecture to deliver seamless, high-performance apps. With React Native, you can rapidly develop and deploy feature-rich apps that look and feel native without compromising on quality or performance.",
        icon: Images.iconHireMobileDeveloper05,
    },
    {
        eventKey: "5",
        title: "Unity Game Development",
        description: "Unleash the power of Unity to build immersive gaming worlds. Our skilled developers specialize in crafting stunning 2D and 3D games tailored to your vision. From concept to launch, we provide end-to-end Unity game development services, including character design, level design, animation, and more.",
        icon: Images.iconHireMobileDeveloper06,
    },
];
const hireMainText = [
    { text: "Design and develop innovative mobile applications for smartphones and tablets to engage users across various platforms. Partner with Data on Matrix, a top-tier offshore mobile app development company, to bring your vision to life. From conception and advisory to deployment, we'll guide you through the entire app development process. Whether you need a simple app or a complex enterprise solution, our dedicated team is committed to delivering top-notch mobile apps that drive business growth." }
];
const boxesContent = [
    {
        icon: Images.iconMobileAdvantage01,
        boxColor: "orange",
        title: "Tailored Solutions",
        description: "Our top-tier experts tackle complex challenges, delivering innovative solutions customized to your unique industry and business needs.",
    },
    {
        icon: Images.iconMobileAdvantage02,
        boxColor: "blue",
        title: "Efficiency Engineered",
        description: "Streamline your projects with our experts, who align every phase with industry best practices and standards, ensuring rapid rollout.",
    },
    {
        icon: Images.iconMobileAdvantage03,
        boxColor: "farozi",
        title: "Rapid Problem-Solving ",
        description: "Benefit from our experts' quick problem-solving skills and industry insights, ensuring swift resolutions to complex issues.",
    },
    {
        icon: Images.iconMobileAdvantage04,
        boxColor: "green",
        title: "Platform Compatibility",
        description: "Our cross-platform development expertise ensures your app reaches a wider audience across multiple devices and operating systems. ",
    }
];
const developmentFlow = [
    {
        icon: Images.iconMobileWorkProcess01,
        title: "App Development Consulting",
        description: "Partner with us to define your product vision and build a scalable and secure mobile solution."
    },
    {
        icon: Images.iconMobileWorkProcess02,
        title: "Product Design",
        description: "Conducting market and brand analysis to identify your competitive advantage and design accordingly."
    },
    {
        icon: Images.iconMobileWorkProcess03,
        title: "Native & Hybrid Development",
        description: "Experience the best of both worlds: high-performance native apps and flexible hybrid apps."
    },
    {
        icon: Images.iconMobileWorkProcess04,
        title: "Enterprise Mobility",
        description: "Streamline operations and boost productivity with our enterprise mobility solutions."
    },
    {
        icon: Images.iconMobileWorkProcess05,
        title: "Application Modernization",
        description: "Transform your legacy app into a future-proof solution with our modernization expertise."
    },
    {
        icon: Images.iconMobileWorkProcess06,
        title: "Mobile DevOps",
        description: "Streamline your development process, boost team efficiency, and deliver high-quality apps faster."
    },
    {
        icon: Images.iconMobileWorkProcess07,
        title: "Testing & QA",
        description: "We perform rigorous functional, performance, security, UX and accessibility testing."
    },
    {
        icon: Images.iconMobileWorkProcess08,
        title: "Support and Maintenance",
        description: "Our full suite of post-deployment support ensures optimal app performance across all platforms."
    }
];
const tabHeading = <h2>Coding <span>Standards</span></h2>;
const tabs = [
    {
        iconDefault: Images.workdayTabs01,
        iconHover: Images.workdayTabsHover01,
        title: "Latest Coding Practices",
        subTitle: "Modern Coding",
        subTitleTwo: "Techniques",
        image: Images.workdayTabsIn01,
        description: [
            { text: "<strong>We stay knowledgeable about the latest technologies and best coding practices to deliver trendsetting mobile apps.</strong>" },
            { text: "We adhere to the latest coding practices and standards to ensure the quality, security and maintainability of your mobile app. Our reliable and performant code can handle increasing user loads and evolving business needs." },
        ],
        features: [
            { id: 1, image: Images.frontTabIn01, text: "Consistent Code Formatting" },
            { id: 2, image: Images.frontTabIn02, text: "Efficient Version Control" },
            { id: 3, image: Images.frontTabIn03, text: "Comprehensive Testing" },
            { id: 4, image: Images.frontTabIn04, text: "Accurate Documentation" },
        ],
    },
    {
        iconDefault: Images.workdayTabs02,
        iconHover: Images.workdayTabsHover02,
        title: "Secure & Reusable Code",
        subTitle: "Highly Encrypted",
        subTitleTwo: "Codes",
        image: Images.workdayTabsIn02,
        description: [
            { text: "<strong>We prioritize security and write clean, well-structured and reusable code to reduce development time and costs.</strong>" },
            { text: "We understand the importance of security and write code that is robust and resistant to vulnerabilities. Our code is modular and reusable, making it easier to maintain, update and adapt to future changes." },
        ],
        features: [
            { id: 1, image: Images.frontTabIn05, text: "Future-Proof Coding" },
            { id: 2, image: Images.frontTabIn06, text: "Secure Coding Practices" },
            { id: 3, image: Images.frontTabIn07, text: "Regular Security Audits" },
            { id: 4, image: Images.frontTabIn08, text: "Robust Data Protection" },
        ],
    },
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.mobileThirdParty01,
        title: "Core",
        subTitle: "Functionalities",
        bullets: [
            { text: "Geolocation Management" },
            { text: "Payment Gateways" },
            { text: "Messaging & Video/Voice Calling" },
        ]
    },
    {
        boxColor: "light-grey",
        icon: Images.mobileThirdParty02,
        title: "Enhanced",
        subTitle: "User Experience",
        bullets: [
            { text: "Multi-Device Synchronization" },
            { text: "Voice Recognition & Recording" },
            { text: "Immersive Experiences" },
        ]
    },
    {
        boxColor: "light-orange",
        icon: Images.mobileThirdParty03,
        title: "Intelligent",
        subTitle: "Features",
        bullets: [
            { text: "Chatbots" },
            { text: "Image Recognition" },
            { text: "QR Code Scanning" },
        ]
    },
    {
        boxColor: "light-green",
        icon: Images.mobileThirdParty04,
        title: "Notifications &",
        subTitle: "Integrations",
        bullets: [
            { text: "Push Notifications" },
            { text: "Wearable & Smart TV Integration" },
            { text: "IoT Device Interaction" },
        ]
    },
    {
        boxColor: "light-navy",
        icon: Images.mobileThirdParty05,
        title: "Data-Driven",
        subTitle: "Insights",
        bullets: [
            { text: "Mobile Business Intelligence" },
            { text: "Data-Driven Monetization" },
            { text: "Targeted Advertising" },
        ]
    },
    {
        boxColor: "light-purple",
        icon: Images.mobileThirdParty06,
        title: "Additional",
        subTitle: "Features",
        bullets: [
            { text: "Gamification" },
            { text: "Scheduling and Booking" },
            { text: "Offline Functionality" },
        ]
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
    { title: "No Hidden Charges" },
    { title: "7-Day Risk-Free Trial" },
    { title: "Flexible Payment Plans" },
    { title: "Custom Plans Per Your Needs" },
];
const stats = [
    { value: "30+", description: "dedicated developers" },
    { value: "100+", description: "projects delivered" },
    { value: "98%", description: "client retention rate" },
    { value: "Up to 60%", description: "savings on staffing" }
];
const certifiedMainText = [
    { text: "Data on Matrix's mobile solutions are proven and perfected with advanced tech." }
];
const servicesData = [
    {
        image: Images.certifiedMobileDevelopers01,
        title: "Blockchain",
        description: "We build and implement blockchain-based mobile solutions to ensure data integrity, traceability and enhanced security for your enterprise."
    },
    {
        image: Images.certifiedMobileDevelopers02,
        title: "Mobile BI",
        description: "We empower you with real-time insights on the go. Our solutions integrate seamlessly with your existing BI system, delivering critical data to your smartphone."
    },
    {
        image: Images.certifiedMobileDevelopers03,
        title: "Artificial Intelligence",
        description: "Our AI-powered solutions automate tasks, deliver accurate insights, anticipate user needs, and enhance user engagement, ultimately driving business growth."
    },
    {
        image: Images.certifiedMobileDevelopers04,
        title: "AR/VR/MR",
        description: "Our AR, VR, and MR tech experts create immersive digital experiences. Our solutions enhance user engagement, streamline training, and revolutionize multiple industries."
    },
    {
        image: Images.certifiedMobileDevelopers05,
        title: "Computer Vision",
        description: "We enhance application security with advanced biometric authentication, including fingerprint, facial, iris, and voice recognition, to protect sensitive user data."
    },
    {
        image: Images.certifiedMobileDevelopers06,
        title: "Internet of Things",
        description: "We build powerful mobile apps that seamlessly integrate with IoT devices, enabling real-time monitoring, control, and data synchronization for a connected future."
    }
];
const techImages = [
    { image: Images.iconMobiletechStack01 },
    { image: Images.iconMobiletechStack02 },
    { image: Images.iconMobiletechStack03 },
    { image: Images.iconMobiletechStack04 },
    { image: Images.iconMobiletechStack05 },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What is a Dedicated Development Team model?",
        description: [
            "A dedicated development team model involves assembling a team of skilled developers who work exclusively on your project. This team becomes an extension of your in-house team, providing dedicated resources and expertise to deliver your app.",
        ],
    },
    {
        eventKey: "1",
        title: "How do you ensure the quality of the dedicated developers you provide?",
        description: [
            "We have a rigorous screening process to select highly skilled developers with proven experience. We assess their technical skills, problem-solving abilities, and communication skills through a combination of technical tests, code reviews, and interviews.",
        ],
    },
    {
        eventKey: "2",
        title: "How can I be sure that my project is secure and confidential?",
        description: [
            "We prioritize data security and confidentiality. We implement strict security measures, including data encryption, secure code practices, and regular security audits. Additionally, we sign Non-Disclosure Agreements (NDAs) to protect your confidential information.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you handle communication and collaboration with the dedicated team?",
        description: [
            "We facilitate seamless communication through various channels like project management tools (e.g., Jira, Trello), video conferencing (e.g., Zoom, Microsoft Teams), and instant messaging (e.g., Slack). We also establish regular communication channels between you and the team to ensure transparency and collaboration."
        ],
    },
    {
        eventKey: "4",
        title: "What is the typical engagement model for dedicated development teams?",
        description: [
            "We offer flexible engagement models to suit your specific needs. These include:",
        ],
        list: [
            "<strong>Fixed-Price Model:</strong> Suitable for projects with well-defined scope and requirements.",
            "<strong>Time & Material Model:</strong>  Ideal for projects with evolving requirements or ongoing maintenance.",
            "<strong>Dedicated Team Model:</strong> Provides a dedicated team for long-term projects or strategic partnerships.",
        ],
    },
    {
        eventKey: "5",
        title: "How can I ensure that my project is on time and within budget?",
        description: [
            "We use agile methodologies to manage projects efficiently and transparently. We provide regular progress reports, track milestones, and maintain open communication to ensure your project stays on track. Additionally, we offer flexible pricing models to accommodate different budgets.",
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
const servicesMobileData = [
    {
        title: "Native App Development",
        animationData: Animations.madServiceIOS,
        image: Images.imgMADService01,
        keyPoints: [
            "Robust Security",
            "Full Device Access",
            "Superior Performance",
            "Enhanced User Experience",
        ],
    },
    {
        title: "Hybrid App Development",
        animationData: Animations.madServiceAndroid,
        image: Images.imgMADService02,
        keyPoints: [
            "Faster Development",
            "Easier Maintenance",
            "Lower Development Cost",
            "Cross-Platform Compatibility",
        ],
    },
];

export { bannerHeading, bannerText, technologyOptions, accordionData, hireMainText, developmentFlow, accordionFaqsData, stats, servicesData, certifiedMainText, slidesImages, boxesContent, processSteps, workSliderData, techImages, bulletContent, tabHeading, tabs, gridsContent, servicesMobileData };