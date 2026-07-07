import { Images } from "@/assets/assets";

const bannerHeading = <h1>Maximum Uptime, <span>Guaranteed</span></h1>;
const bannerText = <p>Helping organizations thrive through our expert software maintenance and support services. We identify and resolve software issues to minimize downtime.</p>;
const whatWeDoTitle = <h2><span className="d-block">Multi-Tier Software Support</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconWhySupport01,
        iconHover: Images.iconWhySupportHover01,
        title: "Frontline Support",
        description: "Our team provides immediate assistance for user-related problems. They quickly resolve minor issues before they escalate."
    },
    {
        iconDefault: Images.iconWhySupport02,
        iconHover: Images.iconWhySupportHover02,
        title: "Troubleshooting",
        description: "Our support and maintenance team addresses system-level problems, resolves underlying system deficiencies, and implements solutions."
    },
    {
        iconDefault: Images.iconWhySupport03,
        iconHover: Images.iconWhySupportHover03,
        title: "Advanced Support",
        description: "Our expert engineers perform advanced code-level troubleshooting. They identify and resolve root causes of complex and never-seen-before issues."
    }
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
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconSupportNeed01,
        title: "Minimized",
        subTitle: "Downtime",
        description: "Prevent downtime with proactive maintenance and rapid response. Keep your systems running smoothly."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconSupportNeed02,
        title: "Optimized",
        subTitle: "Performance",
        description: "Maintain peak performance with regular system configurations, maintenance, tuning, and optimization."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconSupportNeed03,
        title: "Enhanced",
        subTitle: "Security",
        description: "Protect your enterprise solution with regular security audits, vulnerability assessments, and timely updates."
    },
    {
        boxColor: "light-green",
        icon: Images.iconSupportNeed04,
        title: "Compliance",
        subTitle: "Adherence",
        description: "Maintain compliance with industry regulations & standards through regular updates and adherence to best practices."
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
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What is software support and maintenance?",
        description: [
            "Software support and maintenance involves providing technical assistance and updates to software applications to ensure optimal performance, security, and user experience. It includes activities like troubleshooting, bug fixing, security patching, and performance optimization.",
        ],
    },
    {
        eventKey: "1",
        title: "What services are typically included in software support and maintenance?",
        description: [
            "It typically includes incident management, problem management, change management, configuration management, security patching, and performance optimization. ",
        ],
    },
    {
        eventKey: "2",
        title: "How often should I schedule software maintenance?",
        description: [
            "The frequency of software maintenance depends on various factors, including the complexity of the software, the number of users, and the specific needs of your organization. However, it is generally recommended to schedule regular maintenance checks and updates and get professional services from a software maintenance company. ",
        ],
    },
    {
        eventKey: "3",
        title: "What is the cost of software support and maintenance?",
        description: [
            "The cost can vary depending on factors such as the complexity of the software, the level of support required, and the number of users. It's best to consult with a service provider to get an accurate estimate. Let's discuss your unique needs to determine the best pricing.",
        ],
    },
    {
        eventKey: "4",
        title: "What are the benefits of outsourcing application maintenance support services?",
        description: [
            "Outsourcing can offer several benefits:",
        ],
        list: [
            "Reduced overhead costs and economies of scale.",
            "Access to specialized expertise and skills.",
            "The ability to scale support services as needed.",
            "Allows your organization to focus on core business activities.",
        ],
    },
    {
        eventKey: "5",
        title: "How can I choose the right service provider?",
        description: [
            "When selecting an application maintenance and support services provider, consider the following factors:",
        ],
        list: [
            "<strong>Experience and Expertise:</strong> Choose a provider with a proven track record and expertise in your specific software.",
            "<strong>Service Level Agreements (SLAs):</strong> Ensure that the provider offers SLAs that meet your business needs.",
            "<strong>Response & Resolution Time:</strong> A quick response time and efficient resolution of issues are crucial.",
            "<strong>Security Practices:</strong> The provider should have strong security measures in place to protect your data.",
            "<strong>Cost-Effectiveness:</strong> Evaluate the cost of the services against the benefits they provide.",
        ],
    },
];

export { bannerHeading, bannerText, workSliderData, slidesImages, whatWeDos, whatWeDoTitle, gridsContent, accordionFaqsData };