import { Animations, Images } from "@/assets/assets";

const bannerHeading = (
    <h1>
        To Onboard <span>Developers</span>
    </h1>
);
const reviewTitle = (
    <h2 className="mb-2 mb-sm-0 text-center text-sm-start">
        <span>Client </span> Reviews
    </h2>
);
const bestMatchHeading = (
    <h3>
        <span className="d-block">Choose </span>The Expertise You Need
    </h3>
);
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
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.hdrResource01,
        title: "Team",
        subTitle: "Augmentation",
        description: "Scale up your team size with Team DoM. We will meticulously curate your projects as per your wants & needs.",
        buttonLink: '/team-augmentation',
        buttonText: 'Outsource Now'
    },
    {
        boxColor: "light-grey",
        icon: Images.hdrResource02,
        title: "Fixed",
        subTitle: "Price",
        description: "Bring a close to overrunning budgets. We thoroughly plan out deliverables & budgets to prevent financial constraints.",
        buttonLink: "/fixed-price",
        buttonText: "Outsource Now"
    },
];
const whyUs = [
    {
        title: "Access Top 5% Talent",
        desc: "Work with the top 5% cream talent of the world. Stay competitive with our skilled experts.",
        animation: Animations.whyUsOne,
    },
    {
        title: "Up to 60% Cost Savings",
        desc: "Cut hiring and operational costs by up to 60% without compromising service quality.",
        animation: Animations.whyUsTwo,
    },
    {
        title: "Get a One-Week Free Trial",
        desc: "Evaluate service quality with a one-week free trial. See how our team can drive your success.",
        animation: Animations.whyUsThree,
    },
];
const onBoardingData = [
    {
        title: "Consultation Meeting",
        desc: "Meet us virtually to discuss project requirements, timelines, and the skill sets needed. Share your objectives, expectations & any challenges.",
        color: "blue",
        image: Images.onBoardingMeetingOne,
    },
    {
        title: "Talent Matching",
        desc: "Approve the profiles of the proposed talent. You can also review demo projects to assess the compatibility of the talent with your project needs.",
        color: "orange",
        image: Images.onBoardingMeetingTwo,
    },
    {
        title: "Smooth Onboarding",
        desc: "Onboard the talent to your team. Share your project with our expert, set deadlines & establish communication protocols.",
        color: "green",
        image: Images.onBoardingMeetingThree,
    },
];
const bestMap = [
    {
        id: 1,
        buttonLink: "/full-stack-developers",
        image: Images.bestMatchLangOne,
        title: "Full Stack Developers",
        description: "We handle front-end & back-end phases of development and are skilled in HTML, CSS, JavaScript, Python, Ruby, or Node.js for back-end programming.",
    },
    {
        id: 2,
        buttonLink: "/dotnet-developers",
        image: Images.bestMatchLangTwo,
        title: ".Net Developers",
        description: "We are proficient in C#, .NET Core, ASP.NET MVC, and Entity Framework, and create applications primarily for Windows platforms.",
    },
    {
        id: 3,
        buttonLink: "/php-developers",
        image: Images.bestMatchLangThree,
        title: "PHP Developers",
        description: "We use PHP for server-side scripting. We also work with databases i.e. MySQL & tools like Laravel & Zend Framework to create dynamic websites & apps.",
    },
    {
        id: 4,
        buttonLink: "/iphone-android-developer",
        image: Images.bestMatchLangFour,
        title: "Mobile Developers",
        description: "We create iOS and Android applications by utilizing programming languages. We also design user interfaces, integrate APIs & ensure optimal application performance.",
    },
    {
        id: 5,
        buttonLink: "/devops-engineer",
        image: Images.bestMatchLangFive,
        title: "DevOps Engineers",
        description: "We automate, deploy code, and manage systems. Using Docker, Jenkins, and Kubernetes, we implement continuous integration & continuous deployment pipelines.",
    },
    {
        id: 6,
        buttonLink: "/web-graphics-designer",
        image: Images.bestMatchLangSix,
        title: "UI/UX Designers",
        description: "We employ tools & methodologies like wireframing, prototyping and user testing to create aesthetic and functionally effective designs.",
    },
    {
        id: 7,
        buttonLink: "/ai-experts",
        image: Images.bestMatchLangSeven,
        title: "AI/ML Developers",
        description: "We utilize machine learning models to make data-driven decisions. We use machine learning frameworks like TensorFlow or PyTorch and programming language i.e. Python to improve accuracy.",
    },
    {
        id: 8,
        buttonLink: "/html-developer",
        image: Images.bestMatchLangEight,
        title: "Frontend Developers",
        description: "We develop the visual elements of websites by transforming design concepts into functional & visually appealing interfaces using HTML, CSS, and JavaScript.",
    },
    {
        id: 9,
        buttonLink: "/shopify-developers",
        image: Images.hdrShopify,
        title: "Shopify Developer",
        description: "We leverage Shopify's APIs and development tools to build and customize online stores. We also use Theme Kit/CLI for efficient workflows.",
    },
    {
        id: 10,
        buttonLink: "/zoho-developers",
        image: Images.hdrZoho,
        title: "Zoho Developers",
        description: "We build custom apps and solutions using Zoho's low-code platform, empowering businesses with scalable applications tailored to their workflows and business logic.",
    },
    {
        id: 11,
        buttonLink: "/odoo-developers",
        image: Images.hdrOdoo,
        title: "Odoo Developers",
        description: "We deliver tailored Odoo solutions, addressing critical business needs. Our team has extensive ERP experience across diverse scales and industries.",
    },
    {
        id: 12,
        buttonLink: "/salesforce-developers",
        image: Images.hdrSalesforce,
        title: "Salesforce Developers",
        description: "We implement and optimize Salesforce, driving digital transformation with tailored CRM solutions and industry-specific ecosystems.",
    },
    {
        id: 13,
        buttonLink: "/ms-dynamic-developers",
        image: Images.hdrMsDynamics,
        title: "Dynamics 365 Developers",
        description: "We deliver Dynamics 365 solutions leveraging Copilot, Microsoft's AI assistant, empowering organizations with advanced operational and analytical capabilities.",
    },
];
const whatWeDoTitle = <h2><span className="d-block">Services We Outsource</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.hdrResourceServices01,
        iconHover: Images.hdrResourceServicesHover01,
        title: "Software Development",
        description: "Reduce development timelines & gain access to cutting-edge technologies without an in-house team. We deliver scalable, high-quality code that satisfies your users."
    },
    {
        iconDefault: Images.hdrResourceServices02,
        iconHover: Images.hdrResourceServicesHover02,
        title: "Cloud Computing",
        description: "Save costs and enhance scalability with expert cloud management services. We streamline cloud adoption, ensuring minimal disruption & maximum ROI for digital transformation."
    },
    {
        iconDefault: Images.hdrResourceServices03,
        iconHover: Images.hdrResourceServicesHover03,
        title: "Cybersecurity",
        description: "Safeguard your data and reputation with proactive protection against ever-evolving threats. Our expertise ensures compliance and enhances your trustworthiness in the market."
    },
    {
        iconDefault: Images.hdrResourceServices04,
        iconHover: Images.hdrResourceServicesHover04,
        title: "Data Science & AI",
        description: "Unlock hidden insights to optimize processes. We deliver actionable intelligence and AI-powered automation to keep you ahead of the competition."
    },
    {
        iconDefault: Images.hdrResourceServices05,
        iconHover: Images.hdrResourceServicesHover05,
        title: "Technical Support",
        description: "Reduce downtime and maintain customer satisfaction. We provide fast, efficient resolutions, allowing you to focus on your core business."
    },
    {
        iconDefault: Images.hdrResourceServices06,
        iconHover: Images.hdrResourceServicesHover06,
        title: "Digital Marketing",
        description: "Expand your reach and drive higher ROI. We craft data-driven campaigns tailored to your audience that maximizes engagement and conversions."
    },
];
const tabHeading = <h2>Benefits To Reap<span></span></h2>;
const tabs = [
    {
        iconDefault: Images.iconHDRtabDefault01,
        iconHover: Images.iconHDRtabHover01,
        title: "Fast Hiring",
        subTitle: "Fast Hiring",
        image: Images.HDRtab01,
        description: [
            { text: "Access a broad talent pool that keeps projects moving. We streamline recruitment to ensure fast and efficient onboarding of qualified professionals." },
        ],
    },
    {
        iconDefault: Images.iconHDRtabDefault02,
        iconHover: Images.iconHDRtabHover02,
        title: "Quality Assurance",
        subTitle: "Quality Assurance",
        image: Images.HDRtab02,
        description: [
            { text: "Let skilled experts deliver high-quality results. We maintain strict vetting processes to provide top-tier professionals for every project." },
        ],
    },
    {
        iconDefault: Images.hdrResourceTabIcon01,
        iconHover: Images.hdrResourceTabIconHover01,
        title: "Global Reach",
        subTitle: "Global Reach",
        image: Images.hdrResourceTabImage01,
        description: [
            { text: "Expand your reach to the best talent worldwide. We tap into our global network to connect you with the most suitable professionals for your needs." },
        ],
    },
    {
        iconDefault: Images.hdrResourceTabIcon02,
        iconHover: Images.hdrResourceTabIconHover02,
        title: "Strategic Growth",
        subTitle: "Strategic Growth",
        image: Images.hdrResourceTabImage02,
        description: [
            { text: "Drive business growth and innovation with scalability and flexibility. We provide agile talent that strategically supports market changes and business needs." },
        ],
    },
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "500+", description: "projects delivered" },
    { value: "Up to 60%", description: "savings on staffing" },
];

export { reviewTitle, stats, technologyOptions, bannerHeading, bestMatchHeading, gridsContent, whyUs, whatWeDoTitle, bestMap, whatWeDos, tabs, tabHeading, onBoardingData };