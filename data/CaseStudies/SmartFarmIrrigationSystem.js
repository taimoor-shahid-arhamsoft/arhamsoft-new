import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>Real-Time Irrigation<br /> Monitoring Platform</h1>;
const bannerText = <p>A real-time monitoring and alerting platform for large farms. It keeps an eye on every irrigation machine, flags trouble the moment it starts, and cuts the water lost to faults nobody caught in time.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconBiiViewWWDDefault01,
        iconHover: Images.iconBiiViewWWDHover01,
        title: "Real-Time",
        description: "Show what every machine is doing the moment it changes — not at the next field check."
    },
    {
        iconDefault: Images.iconBiiViewWWDDefault02,
        iconHover: Images.iconBiiViewWWDHover02,
        title: "Reliable",
        description: "Catch the faults that matter without burying the team in false alarms."
    },
    {
        iconDefault: Images.iconBiiViewWWDDefault03,
        iconHover: Images.iconBiiViewWWDHover03,
        title: "Scalable",
        description: "Keep working across many machines and large farms, and grow as the operation does."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconCSBiiViewSol01,
        title: "Live Machine Monitoring",
        description: "Watches every pivot machine as it runs and turns raw telemetry into signals a person can actually read."
    },
    {
        iconDefault: Images.iconCSBiiViewSol02,
        title: "Unified Farm Dashboard",
        description: "Brings the whole operation into one view, so any field's status is a glance away."
    },
    {
        iconDefault: Images.iconCSBiiViewSol03,
        title: "Early Problem Detection",
        description: "Flags operational issues automatically — before they turn into wasted water or a damaged crop."
    },
    {
        iconDefault: Images.iconCSBiiViewSol04,
        title: "Real-Time Data Sync",
        description: "Keeps telemetry and schedules current, so the dashboard always reflects what's happening right now."
    },
    {
        iconDefault: Images.iconCSBiiViewSol05,
        title: "Oscar Lite Rules Engine",
        description: "Compares what each machine should be doing against what it's actually doing, and catches anomalies on its own."
    },
    {
        iconDefault: Images.iconCSBiiViewSol06,
        title: "Intelligent Alert System",
        description: "Notifies the team the moment something's wrong, ranks alerts by severity, and suggests what to do next."
    },
    {
        iconDefault: Images.iconCSBiiViewSol07,
        title: "Actionable Insights",
        description: "Turns all of it into decisions backed by live data instead of hunches — so the team fixes the right thing first."
    },
    {
        iconDefault: Images.iconCSBiiViewSol03,
        title: "Schedule Compliance",
        description: "Checks actual runs against the planned schedule and surfaces any machine that's drifting from it."
    }
];
const challengeKeyPoints = [
    { text: "Pulling clean, consistent telemetry from machines that reported noisy, uneven data." },
    { text: "Catching real faults — pressure drops, stalls, wrong-direction runs — without flooding the team with false alarms." },
    { text: "Processing data from many machines fast enough to be useful in real time." },
    { text: "Keeping the platform reliable across large farms with patchy field connectivity." },
    { text: "Making the dashboard simple enough for field crews to use without training." },
    { text: "Fitting the system into the tools and schedules the farm already ran on." }
];
const feedbackText = [
    { text: "DataOnMatrix turned irrigation from something we reacted to into something we can stay ahead of. We can see every machine now, and we hear about problems while there's still time to fix them." }
];
const teamDetails = [
    { counter: "2", detail: "Backend Developers" },
    { counter: "1", detail: "Frontend Developer" },
    { counter: "1", detail: "IoT Engineer" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "IoT & Telemetry Integration" },
    { text: "Real-Time Monitoring" },
    { text: "Rules Engine & Alerting" },
];
const techStacks = [
    { stackName: "React", image: Images.BiiviewStack04 },
    { stackName: "HTML5", image: Images.BiiviewStack01 },
    { stackName: "CSS3", image: Images.BiiviewStack02 },
    { stackName: "Node.js", image: Images.BiiviewStack03 },
    { stackName: "Express.js", image: Images.BiiviewStack05 },
    { stackName: "Socket.io", image: Images.BiiviewStack06 },
    { stackName: "MongoDB", image: Images.BiiviewStack07 },
    { stackName: "Redis", image: Images.BiiviewStack08 },
    { stackName: "Python", image: Images.BiiviewStack10 },
    { stackName: "MQTT", image: Images.BiiviewStack11 },
    { stackName: "AWS", image: Images.BiiviewStack12 },
    { stackName: "Docker", image: Images.BiiviewStack13 },
];
const solutionTabContent = [
    {
        tabImage: Images.iconCSBiiViewSolTab01,
        heading: "Discovery & Planning",
        contentTexts: [
            { text: "<p><strong>Problem Identification:</strong> Pinned down the real cost of blind spots between field checks — late faults and wasted water.</p>" },
            { text: "<p><strong>Requirement Gathering:</strong> Mapped what the team needed to see, which faults mattered most, and how alerts should reach them.</p>" },
            { text: "<p><strong>Technology Selection:</strong> Chose a stack built for real-time telemetry, messaging, and reliability at scale.</p>" },
            { text: "<p><strong>Project Planning:</strong> Set timelines, milestones, and a field-by-field rollout plan.</p>" },
        ],
    },
    {
        tabImage: Images.iconCSBiiViewSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>Data Pipeline:</strong> Built ingestion that cleans and normalizes raw machine data into a signal the platform can trust.</p>" },
            { text: "<p><strong>Rules Engine (OscarLite):</strong> Modeled expected machine behavior and made detection tunable per machine and per farm.</p>" },
            { text: "<p><strong>Dashboard & Alerts:</strong> Designed a single interface for live status, performance, and severity-ranked alerts with recommended actions.</p>" },
            { text: "<p><strong>Real-Time Sync:</strong> Wired continuous telemetry and live schedule updates so the view is always current.</p>" },
        ],
    },
    {
        tabImage: Images.iconCSBiiViewSolTab03,
        heading: "Testing, Deployment & Rollout",
        contentTexts: [
            { text: "<p><strong>Field Validation:</strong> Tested detection against real faults to cut false alarms before going live.</p>" },
            { text: "<p><strong>Performance & Load:</strong> Confirmed the platform held up across many machines and high data volume.</p>" },
            { text: "<p><strong>Phased Rollout:</strong> Brought machines online in stages, verifying each before adding the next.</p>" },
            { text: "<p><strong>Handover & Support:</strong> Trained the team and set up ongoing monitoring and tuning.</p>" },
        ],
    }
];
const firstSection = {
    heading: "Value Delivered by DataOnMatrix",
    contentTexts: [
        { text: "<p>One live view of the whole farm, replacing clipboard checks field by field.</p>" },
        { text: "<p>Automatic fault detection — pressure drops, stalls, wrong direction runs, and schedule drift caught without anyone watching.</p>" },
        { text: "<p>Severity-ranked alerts with a recommended next step so the team fixes the right thing first.</p>" },
        { text: "<p>A clean telemetry pipeline that turned noisy machine data into a reliable signal.</p>" },
        { text: "<p>A platform built to scale as the farm adds machines and acreage.</p>" }
    ],
};
const secondSection = {
    heading: "Outcome & ROI",
    contentTexts: [
        { text: "<p><strong class='text-theme'>Reduced water wastage —</strong> up to 25%</p>" },
        { text: "<p><strong class='text-theme'>Better irrigation efficiency —</strong> up to 30%</p>" },
        { text: "<p><strong class='text-theme'>Reduced downtime —</strong> up to 40%</p>" },
        { text: "<p><strong class='text-theme'>Faster issue detection —</strong> up to 80%</p>" },
        { text: "<p>Far less manual monitoring — time goes to fixing issues, not hunting for them.</p>" },
    ],
};
const resultSliderImages = [
    { image: cloudinaryImages.BiViewMobileImage },
    { image: Images.ImgBiiViewResult02 },
    { image: Images.ImgBiiViewResult03 },
    { image: Images.ImgBiiViewResult04 },
    { image: Images.ImgBiiViewResult05 },
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, firstSection, teamDetails, expertiseDetails, techStacks, feedbackText, secondSection, resultSliderImages };
