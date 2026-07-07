import { Images } from "@/assets/assets";

const bannerHeading = <h1>Salesforce Solutions <br />Tailored For You</h1>;
const bannerText = <p>Delivering value across every business touchpoint. Partner with us to implement and optimize your Salesforce products and achieve sustainable growth.</p>;
const skillTitle = <h2 className="text-white">Salesforce<span> Consulting</span></h2>;
const tabData = [
    {
        eventKey: "first",
        title: "Product Selection",
        iconDefault: Images.salesConOne,
        iconHover: Images.salesConOneHover,
        image: Images.salesConMainOne,
        description: "We'll analyze your needs, recommend the best products and ensure you're not paying for extras. Let us optimize your Salesforce investment."
    },
    {
        eventKey: "second",
        title: "Implementation Consulting",
        iconDefault: Images.salesConTwo,
        iconHover: Images.salesConTwoHover,
        image: Images.salesConMainTwo,
        description: "Our seasoned consultants provide end-to-end support for your Salesforce journey, from strategic planning to post-implementation support. We'll help you achieve maximum ROI and user adoption."
    },
    {
        eventKey: "third",
        title: "Improvement Advisory",
        iconDefault: Images.salesConThree,
        iconHover: Images.salesConThreeHover,
        image: Images.salesConMainThree,
        description: "Our certified consultants pin down opportunities to enhance your existing Salesforce setup. By understanding your evolving business needs and user pain points, we recommend tailored solutions to boost functionality and efficiency."
    },
    {
        eventKey: "four",
        title: "Migration Advisory",
        iconDefault: Images.salesConFour,
        iconHover: Images.salesConFourHover,
        image: Images.salesConMainFour,
        description: "Our team will seamlessly transfer your legacy data to Salesforce, minimizing disruptions and validating data integrity, ensuring a smooth and error-free transition."
    },
    {
        eventKey: "five",
        title: "Salesforce Audit",
        iconDefault: Images.salesConFive,
        iconHover: Images.salesConFiveHover,
        image: Images.salesConMainFive,
        description: "If your Salesforce solution has issues, we'll diagnose and fix them. We'll identify and fix technical, security and configuration problems in your Salesforce environment and provide actionable recommendations for resolution."
    }
];
const salesForceData = [
    {
        title: "Consulting",
        content: "Unlock the full potential of your Salesforce investment through our strategic consulting services.",
        image: Images.salesServiceOne
    },
    {
        title: "Implementation",
        content: "Configuring and customizing Salesforce solutions, ensuring efficiency and eventual success.",
        image: Images.salesServiceTwo
    },
    {
        title: "Integration",
        content: "Connecting Salesforce seamlessly to your existing technology ecosystems and data sources.",
        image: Images.salesServiceThree
    },
    {
        title: "Migration",
        content: "Upgrade and modernize your legacy systems, apps and databases with a smooth migration to Salesforce.",
        image: Images.salesServiceFour
    },
    {
        title: "Support",
        content: "We offer ongoing support and continuous improvement to optimize your solution's performance.",
        image: Images.salesServiceFive
    },
    {
        title: "Managed Services",
        content: "Our Managed Services team takes care of the administration and maintenance of your Salesforce system.",
        image: Images.salesServiceSix
    },
];
const salesRoadmapData = [
    {
        id: "1.",
        title: "Planning",
        content: "We get the ball rolling with meetings to plan your Salesforce project. We determine necessary products, tools, and team members to ensure successful implementation."
    },
    {
        id: "2.",
        title: "Discovery",
        content: "We analyze your business needs to craft tailored Salesforce implementation requirements and project goals. Furthermore, we can develop PoCs and demos to validate proposed solutions."
    },
    {
        id: "3.",
        title: "Design",
        content: "Our developers customize Salesforce to match your unique needs. We configure UX/UI, objects, fields, reports, and business rules and create custom solutions when standard settings fall short."
    },
    {
        id: "4.",
        title: "Integration",
        content: "We seamlessly integrate tailored Salesforce solution with your existing business systems, using pre-built connectors or custom modules, ensuring a unified, efficient workflow."
    },
    {
        id: "5.",
        title: "Validation",
        content: "Once the Salesforce solution is ready, we deploy it to a testing environment for thorough evaluation. User acceptance, load, and staging testing are conducted and any necessary adjustments are made."
    },
    {
        id: "6.",
        title: "Deployment",
        content: "Our deployment process prioritizes minimal downtime. We carefully roll-out Salesforce solution to your selected environment. Our team also migrates your legacy data to Salesforce while minimizing operational interruptions."
    },
    {
        id: "7.",
        title: "Support",
        content: "Our partnership doesn't end after Salesforce implementation. We offer ongoing support, administration, maintenance, and optimization services to ensure your Salesforce solution delivers maximum value."
    },
];
const productTabs = [
    {
        eventKey: "app",
        title: "App Cloud",
        heading: "App Cloud",
        description: "Salesforce App Cloud simplifies app development and deployment. We offer no-code, pro-code, or built-in services to create powerful Lightning apps within the trusted Salesforce ecosystem and integrate them with other third-party solutions without compromising on data quality and access.",
        listItems: [
            "Cross-platform compatibility",
            "Auto updates and easy scalability",
            "Secure and cost-effective"
        ]
    },
    {
        eventKey: "sales",
        title: "Sales Cloud",
        heading: "Sales Cloud",
        description: "Sales Cloud streamlines your sales process, helping you connect with customers at the right time and close more deals. Our expert guidance ensures a smooth implementation, optimizing your sales workflows for growth.",
        listItems: [
            "Accurate sales forecasting",
            "Optimize sales strategies and pipeline",
            "Track only relevant customer and sales metrics"
        ]
    },
    {
        eventKey: "service",
        title: "Service Cloud",
        heading: "Service Cloud",
        description: "Leverage AI and automation to deliver exceptional customer service. Our expertise will help you maximize the potential of Salesforce Service Cloud, providing your team with a unified, AI-powered workspace for managing cases, incidents, and field jobs.",
        listItems: [
            "Streamline agent workflows",
            "Resolve issues faster on the first try",
            "Prevent service outages before they happen"
        ]
    },
    {
        eventKey: "market",
        title: "Marketing Cloud",
        heading: "Marketing Cloud",
        description: "Unify, streamline and automate your marketing channels. Unlock multi-channel B2C marketing excellence for enhanced customer engagement and conversion. Our team assists you in Marketing Cloud configuration and optimization, helping you create personalized and effective marketing experiences.",
        listItems: [
            "Omnichannel marketing with unified customer view",
            "Impact analysis and marketing performance analytics",
            "Expand your data sources for deeper insights",
            "Customized communications with AI",
        ]
    },
    {
        eventKey: "commerce",
        title: "Commerce Cloud",
        heading: "Commerce Cloud",
        description: "Commerce Cloud offers a flexible e-commerce platform that connects to your customer data, allowing for personalized shopping experiences. We'll help you set up Commerce Cloud to match your specific business needs.",
        listItems: [
            "Integrate with any technology",
            "Effective merchandising to drive sales",
            "Improve page speed for conversions"
        ]
    },
    {
        eventKey: "revenue",
        title: "Revenue Cloud",
        heading: "Revenue Cloud",
        description: "Create, approve, and deliver accurate quotes efficiently. Our experts will set up Revenue Cloud to guide your quoting process and create professional, branded quotes for one-time or recurring billing.",
        listItems: [
            "Enhance and streamline sales operations",
            "Accelerate your quote-to-cash process",
            "Create custom experiences for sales reps"
        ]
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

export { bannerHeading, bannerText, workSliderData, skillTitle, tabData, salesForceData, salesRoadmapData, productTabs };