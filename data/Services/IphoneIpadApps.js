import { Animations, Images } from "@/assets/assets";

const bannerHeading = <h1>Turn Occasional Users<br />Into Active Users</h1>;
const bannerText = <p>We align your brand objectives to build fast, responsive, and user-friendly apps that keep users coming back and drive rapid growth.</p>;
const howWeDos = [
    {
        icon: Images.iconHowWeDo01,
        title: "Discover",
        keypoints: [
            { title: "User research" },
            { title: "Goal setting" },
            { title: "Prototype review" },
            { title: "Requirement gathering" },
            { title: "Project planning" },
        ]
    },
    {
        icon: Images.iconHowWeDo02,
        title: "Execute",
        keypoints: [
            { title: "Architecture design" },
            { title: "Backend development" },
            { title: "API integration" },
            { title: "Code testing" },
            { title: "Feature implementation" },
        ]
    },
    {
        icon: Images.iconHowWeDo03,
        title: "Prototype",
        keypoints: [
            { title: "Build MVP" },
            { title: "Usability testing" },
            { title: "Feedback incorporation" },
            { title: "Performance validation" },
            { title: "Design refinement" },
        ]
    },
    {
        icon: Images.iconHowWeDo04,
        title: "Support",
        keypoints: [
            { title: "SLA management" },
            { title: "Proactive monitoring" },
            { title: "Bug fixing" },
            { title: "Feedback integration" },
            { title: "Regular updates" },
        ]
    }
];
const whatWeDoTitle = <h2><span className="d-block">Our Expertise</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconMADWWDDefault01,
        iconHover: Images.iconMADWWDHover01,
        title: "Comprehensive Development",
        description: "From concept to deployment, we build feature-rich, scalable applications."
    },
    {
        iconDefault: Images.iconMADWWDDefault02,
        iconHover: Images.iconMADWWDHover02,
        title: "Intuitive UI & UX",
        description: "We design appealing interfaces with seamless navigation that instigate excellent experiences."
    },
    {
        iconDefault: Images.iconMADWWDDefault03,
        iconHover: Images.iconMADWWDHover03,
        title: "Robust Security",
        description: "By implementing industry-leading standards, we safeguard user information."
    },
    {
        iconDefault: Images.iconMADWWDDefault04,
        iconHover: Images.iconMADWWDHover04,
        title: "Scalable Architecture",
        description: "We build scalable apps that adapt to changing features and user activity while performing the best."
    },
    {
        iconDefault: Images.iconMADWWDDefault05,
        iconHover: Images.iconMADWWDHover05,
        title: "Agile Methodology",
        description: "We follow an agile workflow to deliver projects efficiently, incorporating regular feedback."
    },
    {
        iconDefault: Images.iconMADWWDDefault06,
        iconHover: Images.iconMADWWDHover06,
        title: "Disaster Recovery",
        description: "We offer ongoing maintenance and recovery solutions for delayed projects, ensuring continuity and success."
    },
];
const expertise = [
    {
        icon: Images.iconMADExpertise01,
        title: "Ecommerce",
        description: "We design and develop user-friendly, feature-rich apps to elevate shopping experiences that dynamize sluggish sales."
    },
    {
        icon: Images.iconMADExpertise02,
        title: "Media & Communication",
        description: "We create innovative apps that simplify communication, boost connectivity, and deliver best experiences."
    },
    {
        icon: Images.iconMADExpertise03,
        title: "Healthcare",
        description: "We develop patient-friendly and secure applications that simplify healthcare support and enhance service delivery."
    },
    {
        icon: Images.iconMADExpertise04,
        title: "Information Technology",
        description: "We innovate dynamic and scalable applications that enhance communication and drive operational success."
    },
    {
        icon: Images.iconMADExpertise05,
        title: "Transportation",
        description: "From fleet management & ride-sharing to logistics & mapping apps, we aim to enhance efficiency and deliver excellent experiences."
    },
    {
        icon: Images.iconMADExpertise06,
        title: "Sports & Entertainment",
        description: "From sports tracking to interactive gaming & networking features, we design apps to deliver seamless performance that fosters community connections."
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
        title: "iOS App Development",
        animationData: Animations.madServiceIOS,
        image: Images.imgMADService01,
        keyPoints: [
            "iPhone App Development",
            "iPad App Development",
            "Apple Watch App Development",
            "Apple TV App Development",
        ],
    },
    {
        title: "Android App Development",
        animationData: Animations.madServiceAndroid,
        image: Images.imgMADService02,
        keyPoints: [
            "Android Mobile App Development",
            "Android TV App Development",
            "Android Tablet App Development",
            "Android Wear App Development",
        ],
    },
];

export { bannerHeading, bannerText, workSliderData, howWeDos, whatWeDos, whatWeDoTitle, expertise, servicesMobileData };