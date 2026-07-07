import { Images } from "@/assets/assets";

const bannerHeading = (
    <h1>
        Revolutionizing the
        <br /> Gig Economy
    </h1>
);
const bannerText = (
    <p>An innovative job posting platform that empowers individuals and businesses, revolutionizing the future of work and driving economic growth.</p>
);
const whatWeDoTitle = (
    <h2>
        <span className="d-block">Client Request</span>
    </h2>
);
const feedbackText = [
    {
        text: "The IT engineer's dedication and technical skills have been invaluable to the project. Their professionalism is commendable.",
    },
];
const whatWeDos = [
    {
        iconDefault: Images.iconCSWWDDefault01,
        iconHover: Images.iconCSWWDHover01,
        title: "Initial Vision: A Niche Job Portal",
        list: [
            {
                text: "Target market: Skilled professionals of the Swiss nursing industry.",
            },
            {
                text: "Core functionality: Job posting and matching for different opportunities.",
            },
        ],
    },
    {
        iconDefault: Images.iconCSWWDDefault02,
        iconHover: Images.iconCSWWDHover02,
        title: "Scope Expansion: A Versatile Platform",
        list: [
            { text: "Broader industry focus: Hotels, event management, and more." },
            {
                text: "Enhanced capabilities: To accommodate diverse job types and industries.",
            },
        ],
    },
    {
        iconDefault: Images.iconCSWWDDefault03,
        iconHover: Images.iconCSWWDHover03,
        title: "Client's Goal: A Scalable Solution",
        list: [
            {
                text: "Key requirement: A reliable platform to handle increasing users and job listings.",
            },
            {
                text: "Future-proofing the platform: Flexibility to adapt to evolving industry needs.",
            },
        ],
    },
];
const challengeKeyPoints = [
    {
        text: "The platform needed to accommodate a growing number of users and job postings.",
    },
    {
        text: "Ensuring a seamless and intuitive user experience for both businesses and job seekers.",
    },
    {
        text: "Implementing robust security measures to safeguard user data and privacy.",
    },
    {
        text: "Understanding the unique needs of different industries, particularly healthcare and hospitality.",
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconCSGigJobClnReq01,
        title: "Intuitive Job Posting",
        description:
            "Businesses can easily create and manage job postings, including specifying job titles, descriptions, requirements, and deadlines.",
    },
    {
        iconDefault: Images.iconCSGigJobClnReq02,
        title: "Advanced Job Search",
        description:
            "Job seekers can search for jobs based on keywords, location, industry, and job type.",
    },
    {
        iconDefault: Images.iconCSGigJobClnReq03,
        title: "Secure User Profiles",
        description:
            "Users can create detailed profiles to showcase their skills and experience.",
    },
    {
        iconDefault: Images.iconCSGigJobClnReq04,
        title: "Messaging System",
        description:
            "Users can communicate directly with each other to discuss job opportunities and application status.",
    },
    {
        iconDefault: Images.iconCSGigJobClnReq05,
        title: "Real-Time Notifications",
        description:
            "Users receive notifications for new job postings, applications, and messages.",
    },
];
const leftBlockHeading = {
    title: "For",
    subTitle: "Businesses",
};
const leftBlockBullets = [
    {
        description: "Efficiently post and manage job ads.",
    },
    {
        description: "Reach a wider pool of qualified candidates.",
    },
    {
        description: "Simplify the online hiring process.",
    },
];
const rightBlockHeading = {
    title: "For",
    subTitle: "Job Seekers",
};
const rightBlockBullets = [
    {
        description: "Discover flexible job opportunities.",
    },
    {
        description: "Connect with reputable businesses.",
    },
    {
        description: "Easily apply to jobs and manage applications.",
    },
];
const solutionTabContent = [
    {
        tabImage: Images.imgCsGigJobsSolution01,
        heading: "Discovery & Planning",
        contentTexts: [
            {
                text: "<p><strong>Market Research & Analysis:</strong> Conducted in-depth market research to identify industry trends, user needs, and competitive landscape.</p>",
            },
            {
                text: "<p><strong>Business Analysis:</strong> Analyzed the client's business objectives, target audience, and key performance indicators (KPIs).</p>",
            },
            {
                text: "<p><strong>Requirement Gathering:</strong> Defined the platform's core functionalities, user roles, and user stories.</p>",
            },
        ],
    },
    {
        tabImage: Images.imgCsGigJobsSolution02,
        heading: "Design & Development",
        contentTexts: [
            {
                text: "<p><strong>UX/UI Design:</strong> Designed the user interface and experience, focusing on usability and accessibility.</p>",
            },
            {
                text: "<p><strong>Technology Selection:</strong> Selected the appropriate technology stack (frontend, backend, database) to meet performance and scalability requirements.</p>",
            },
            {
                text: "<p><strong>Backend Development:</strong> Developed a robust backend infrastructure, including API development, database design, and server configuration.</p>",
            },
            {
                text: "<p><strong>Frontend Development:</strong> Built a responsive and user-friendly frontend, incorporating features like job search, filtering, and application submission.</p>",
            },
            {
                text: "<p><strong>Security Implementation:</strong> Implemented robust security measures to protect user data, including encryption, authentication, and authorization.</p>",
            },
        ],
    },
    {
        tabImage: Images.imgCsGigJobsSolution03,
        heading: "Testing & Deployment",
        contentTexts: [
            {
                text: "<p><strong>Quality Assurance Testing:</strong> Conducted thorough testing to identify and fix bugs, ensuring a high-quality product.</p>",
            },
            {
                text: "<p><strong>User Acceptance Testing (UAT):</strong> Involved the client in testing the platform to validate its functionality and user experience.</p>",
            },
            {
                text: "<p><strong>Deployment and Launch:</strong> Deployed the platform to the production environment, ensuring a smooth and seamless launch.</p>",
            },
            {
                text: "<p><strong>Post-Deployment Support:</strong> Provided ongoing support, maintenance, and updates to the platform.</p>",
            },
        ],
    },
];
const results = [
    {
        icon: Images.iconCSGigJobResult01,
        title: "Successful",
        subTitle: "Launch",
        text: "The platform launched on schedule and has quickly attracted a growing and engaged user base.",
        boxColor: "#F1F5FC",
    },
    {
        icon: Images.iconCSGigJobResult02,
        title: "Positive",
        subTitle: "Experience",
        text: "Users are satisfied with the advanced features, optimal performance, and usability of the platform.",
        boxColor: "#EDEDE7",
    },
    {
        icon: Images.iconCSGigJobResult03,
        title: "Business",
        subTitle: "Impact",
        text: "Businesses are gaining greater visibility and attracting higher-quality job applications through the platform.",
        boxColor: "#F1FCFC",
    },
    {
        icon: Images.iconCSGigJobResult04,
        title: "Strong",
        subTitle: "Engagement",
        text: "The platform boasts high user engagement metrics, including active users and job postings.",
        boxColor: "#F5F2F8",
    },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "3", detail: "Developer" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [{ text: "Custom Web Development" }];
const techStacks = [
    { stackName: "HTML5", image: Images.iconCSGigJobTech01 },
    { stackName: "CSS3", image: Images.iconCSGigJobTech02 },
    { stackName: "Angular 6", image: Images.iconCSGigJobTech03 },
    { stackName: "MySQL", image: Images.iconCSGigJobTech04 },
    { stackName: ".Net MVC 4.6", image: Images.iconCSGigJobTech05 },
];
const workSliderData = [
    {
        image: Images.OurWork01,
        platform: "Web",
        title: "Real Estate",
        description:
            "Ut consectetur, odio vitae condimentum venenatis, risus nunc efficitur justo,id viverra massa lectus vitae est. Ut condimentum ante eu mauris ultricies, quis finibus sem eleifend. Fusce sed erat lobortis, ultricies mi ut, imperdiet elit.",
        techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
    {
        image: Images.OurWork02,
        platform: "Web",
        title: "Printing And Mail",
        description:
            " Nunc tempor, justo et rutrum rhoncus, lacus mauris vehicula arcu, malesuada aliquet felis metus id mauris. Quisque tincidunt, risus sed iaculis tempus, velit leo rutrum sapien, nec porta arcu elit sit amet enim.",
        techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
    {
        image: Images.OurWork03,
        platform: "Web",
        title: "Fintech Financial Services",
        description:
            "Fusce eu ex eu ligula lacinia pharetra ut at eros. Sed vestibulum sem lacus, a euismod sapien volutpat vitae. Sed eget arcu vitae dolor scelerisque venenatis. Proin et nisi sed nunc commodo suscipit id nec elit. Nulla pharetra.",
        techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
];

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, leftBlockHeading, leftBlockBullets, rightBlockHeading, rightBlockBullets };