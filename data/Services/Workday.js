import { Images } from "@/assets/assets";

const bannerHeading = <h1>Unify HR & Finances <br />With Workday HRM</h1>;
const bannerText = <p>We provide comprehensive Workday consulting services to help businesses implement, integrate, and scale Human Capital Management platforms tailored to organizational needs.</p>;
const tabHeading = <h2>Workday <span>Solution Inventory</span></h2>;
const tabs = [
    {
        iconDefault: Images.workdayServTabs01,
        iconHover: Images.workdayServTabsHover01,
        title: "Talent Management",
        subTitle: "Human Capital",
        subTitleTwo: "Management",
        image: Images.workdayTabsIn01,
        description: [
            { text: "Optimize workforce operations and make data-driven decisions that drive business success. Our team implements, configures, and maintains the HCM platform to align with your business needs. From talent management to advanced payroll, we fully tailor the system to enhance efficiency." },
            { text: "Improve workforce engagement through our following expertise:" },
        ],
        keypoints: [
            { title: "Performance management" },
            { title: "Compliance solutions" },
            { title: "System optimization" },
            { title: "Analytics integration" },
            { title: "Talent management" },
            { title: "Workforce planning" },
            { title: "Payroll integration" },
        ]
    },
    {
        iconDefault: Images.workdayServTabs02,
        iconHover: Images.workdayServTabsHover02,
        title: "Financial Management",
        subTitle: "Financial Capital",
        subTitleTwo: "Management",
        image: Images.workdayTabsIn02,
        description: [
            { text: "Streamline financial operations & enhance decision-making capabilities. We implement and optimize Workday's Financial Management modules to integrate seamlessly with your existing systems." },
            { text: "Gain seamless financial operations and strategic insights with the following:" },
        ],
        keypoints: [
            { title: "Compliance assurance" },
            { title: "Workflow automation" },
            { title: "Process optimization" },
            { title: "Financial forecasting" },
            { title: "Reporting analytics" },
            { title: "Budget planning" },
            { title: "Data integration" },
        ]
    },
];
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.workdayOfferNew01,
        iconHover: Images.workdayOfferNewHover01,
        title: "Integration",
        description: "We integrate Workday with CRMs, eCommerce platforms, and financial systems using robust APIs to streamline processes."
    },
    {
        iconDefault: Images.workdayOfferNew02,
        iconHover: Images.workdayOfferNewHover02,
        title: "Implementation",
        description: "We configure Workday to manage supply chain, sales, inventory & customer relations, with hands-on training from day one."
    },
    {
        iconDefault: Images.workdayOfferNew03,
        iconHover: Images.workdayOfferNewHover03,
        title: "Customization",
        description: "We develop new modules, adjust existing ones & create custom add-ons to improve operational efficiency & fit business needs."
    },
    {
        iconDefault: Images.workdayOfferNew04,
        iconHover: Images.workdayOfferNewHover04,
        title: "Reporting & Analytics",
        description: "We empower businesses to make informed decisions based on actionable insights derived directly from their data."
    },
    {
        iconDefault: Images.workdayOfferNew05,
        iconHover: Images.workdayOfferNewHover05,
        title: "HCM & Payroll",
        description: "We integrate core HR and payroll systems to streamline processes from recruitment to retirement management."
    },
];
const howWeDos = [
    {
        icon: Images.workdayExpertiseNew01,
        iconHover: Images.workdayExpertiseNewHover01,
        title: "Business Process Analysis",
        keypoints: [
            { title: "Improve Decision-Making" },
            { title: "Streamline Workflows" },
            { title: "Enhance Efficiency" },
            { title: "Refine Processes" },
        ]
    },
    {
        icon: Images.workdayExpertiseNew02,
        iconHover: Images.workdayExpertiseNewHover02,
        title: "Enterprise Resource Planning",
        keypoints: [
            { title: "Streamline Operations" },
            { title: "Customize Solutions" },
            { title: "Integrate Functions" },
            { title: "Centralize Data" },
        ]
    },
    {
        icon: Images.workdayExpertiseNew03,
        iconHover: Images.workdayExpertiseNewHover03,
        title: "Seamless System Integration",
        keypoints: [
            { title: "Enhance Data Sharing" },
            { title: "Optimize Infrastructure" },
            { title: "Ensure Interoperability" },
            { title: "Unify Systems" },
        ]
    },
    {
        icon: Images.workdayExpertiseNew04,
        iconHover: Images.workdayExpertiseNewHover04,
        title: "Performance Optimization",
        keypoints: [
            { title: "Increase Responsiveness" },
            { title: "Enhance Improvements" },
            { title: "Optimize Performance" },
            { title: "Maximize Efficiency" },
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

export { bannerHeading, bannerText, workSliderData, tabHeading, whatWeDos, whatWeDoTitle, howWeDos, tabs };