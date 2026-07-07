import { Images } from "@/assets/assets";

const bannerHeading = <h1>Legacy Software <br />Modernization</h1>
const bannerText = <p>Achieve modernization, innovation and automation at scale with Data on Matrix. Our expert team provides full-cycle legacy modernization without disrupting your business operations.</p>
const whatWeDoTitle = <h2><span className="d-block">Our Services</span></h2>
const whatWeDos = [
    {
        iconDefault: Images.AppModerOffer01,
        iconHover: Images.AppModerOfferHover01,
        title: "Modernization Consulting",
        description: "We assess your existing applications, design a new architecture, then migrate, test and provide support for your modernized applications."
    },
    {
        iconDefault: Images.AppModerOffer02,
        iconHover: Images.AppModerOfferHover02,
        title: "Architecture Modernization",
        description: "We streamline your apps through microservices migration, modernize your tech stack, and re-architect for optimal performance and scalability."
    },
    {
        iconDefault: Images.AppModerOffer03,
        iconHover: Images.AppModerOfferHover03,
        title: "Cloud Transformation",
        description: "Transform your infrastructure with our cloud migration, modernization and cost optimization services, ensuring maximum efficiency."
    },
    {
        iconDefault: Images.AppModerOffer04,
        iconHover: Images.AppModerOfferHover04,
        title: "Engineering Modernization",
        description: "We specialize in application re-engineering, ensuring cross-platform portability, code optimization and refactoring and streamlining version roll-ups."
    },
    {
        iconDefault: Images.AppModerOffer05,
        iconHover: Images.AppModerOfferHover05,
        title: "User Experience Upgrade",
        description: "Enhance your user experience with our UI/UX modernization, user flow optimization, and UX/UI refactoring services, attracting a broader audience."
    },
    {
        iconDefault: Images.AppModerOffer06,
        iconHover: Images.AppModerOfferHover06,
        title: "Post-Modernization Support",
        description: "Our post-modernization support ensures continued value through user feedback, solution monitoring, iterative improvements, and on-demand assistance."
    }
];
const howWeDos = [
    {
        icon: Images.AppModerTypes01,
        title: "Legacy Software Assessment",
        keypoints: [
            { title: "Legacy app architecture review" },
            { title: "Code quality check" },
            { title: "Performance metrics" },
            { title: "Cybersecurity assessment" },
            { title: "Total Cost of Ownership calculation" },
            { title: "Risk assessment" },
        ]
    },
    {
        icon: Images.AppModerTypes02,
        title: "Modernization Model Selection",
        keypoints: [
            { title: "Modernization project scoping" },
            { title: "Modernization budgeting" },
            { title: "Modernization Proof of Concept" },
            { title: "Modernization plan development" },
            { title: "Risk assessment and mitigation" },
            { title: "Change management plan" },
        ]
    },
    {
        icon: Images.AppModerTypes03,
        title: "Software Modernization",
        keypoints: [
            { title: "Modernization process management" },
            { title: "Creating comprehensive documentation" },
            { title: "Software modernization implementation" },
            { title: "Introducing disaster recovery processes" },
            { title: "Testing the modernized solution" },
            { title: "Ongoing support and maintenance" },
        ]
    },
];
const modernizeComponentsData = [
    {
        icon: Images.iconModernization1,
        title: "UI/UX Design Modernization"
    },
    {
        icon: Images.iconModernization2,
        title: "Tech Stack Modernization"
    },
    {
        icon: Images.iconModernization3,
        title: "Infrastructure Modernization"
    },
    {
        icon: Images.iconModernization4,
        title: "Security Modernization"
    }
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

export { bannerHeading, bannerText, howWeDos, whatWeDoTitle, whatWeDos, workSliderData, modernizeComponentsData };