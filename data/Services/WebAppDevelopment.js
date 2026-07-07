import { Images } from "@/assets/assets";

const bannerHeading = <h1>Reach and Connect <br /> With Your Audience Globally</h1>;
const bannerText = <p>We develop customer-centric websites and applications that turn visitors into loyal customers and boost sales.</p>;
const howWeDos = [
    {
        icon: Images.iconHowWeDo01,
        title: "Discover",
        keypoints: [
            { title: "Thorough discussion" },
            { title: "Goal setting" },
            { title: "Prototyping" },
            { title: "Project planning" },
        ]
    },
    {
        icon: Images.iconHowWeDo02,
        title: "Execute",
        keypoints: [
            { title: "Architecture designing" },
            { title: "Backend development" },
            { title: "API integration" },
            { title: "Frontend development" },
        ]
    },
    {
        icon: Images.iconHowWeDo03,
        title: "Test",
        keypoints: [
            { title: "Go live" },
            { title: "Project launch" },
            { title: "Implement user feedback" },
            { title: "Operational testing" },
        ]
    },
    {
        icon: Images.iconHowWeDo04,
        title: "Support",
        keypoints: [
            { title: "SLA support" },
            { title: "Proactive monitoring" },
            { title: "Feedback integration" },
            { title: "Bug fixing" },
        ]
    }
];
const whatWeDoTitle = <h2><span className="d-block">Our Expertise</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconWhatWeDoDefault01,
        iconHover: Images.iconWhatWeDoHover01,
        title: "Full Stack Development",
        description: "Reduce development costs by eliminating the need for separate front-end & back-end teams with our full-cycle app developers."
    },
    {
        iconDefault: Images.iconWhatWeDoDefault02,
        iconHover: Images.iconWhatWeDoHover02,
        title: "Backend Coding",
        description: "Get a scalable backend to handle multiplying traffic. Our developers build systems that manage traffic without major system overhauls."
    },
    {
        iconDefault: Images.iconWhatWeDoDefault03,
        iconHover: Images.iconWhatWeDoHover03,
        title: "Frontend Coding",
        description: "Provide consistent user experiences on every platform. We craft intuitive & responsive interfaces that push up engagement."
    },
    {
        iconDefault: Images.iconWhatWeDoDefault04,
        iconHover: Images.iconWhatWeDoHover04,
        title: "QA Testing",
        description: "Provide rewarding user experiences by eliminating bugs from web apps. We thoroughly test to identify and fix glitches before users encounter them."
    },
    {
        iconDefault: Images.iconWhatWeDoDefault05,
        iconHover: Images.iconWhatWeDoHover05,
        title: "App Maintenance",
        description: "Within minimal downtime, get seamless apps. We provide optimized updates with rigorous testing to prevent performance lags."
    },
    {
        iconDefault: Images.iconWhatWeDoDefault06,
        iconHover: Images.iconWhatWeDoHover06,
        title: "Disaster Recovery",
        description: "Quickly regain control over delayed projects. Our experts undo previous damages and optimize projects to meet goals."
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, howWeDos };