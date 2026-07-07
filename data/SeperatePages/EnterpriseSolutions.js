import { Images } from "@/assets/assets";

const bannerHeading = <h1>Streamline Business With <span className="d-block">Enterprise Managed Services</span></h1>;
const bannerText = <p>We offer tailored enterprise IT solutions to enhance efficiency and innovation. Our expertise in custom software, cloud solutions, and cybersecurity helps businesses scale securely.</p>;
const whatWeDoTitle = <h2><span className="d-block">Expert Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.enterpriseSolutionsOffer01,
        iconHover: Images.enterpriseSolutionsOfferHover01,
        title: "Custom Software Development",
        description: "Accelerate business growth with custom software solutions. We create scalable software that seamlessly integrate with your business processes."
    },
    {
        iconDefault: Images.enterpriseSolutionsOffer02,
        iconHover: Images.enterpriseSolutionsOfferHover02,
        title: "Cloud Solutions",
        description: "Streamline operations by migrating to the cloud. We provide end-to-end cloud strategies, ensuring secure and efficient cloud environments."
    },
    {
        iconDefault: Images.enterpriseSolutionsOffer03,
        iconHover: Images.enterpriseSolutionsOfferHover03,
        title: "Enterprise IT Consulting",
        description: "Optimize your IT infrastructure to drive operational efficiency. We deliver tailored consulting services that align with business goals."
    },
    {
        iconDefault: Images.enterpriseSolutionsOffer04,
        iconHover: Images.enterpriseSolutionsOfferHover04,
        title: "Cybersecurity",
        description: "Safeguard your sensitive data with cutting-edge cybersecurity solutions. We implement robust security measures to protect against cyber threats."
    },
    {
        iconDefault: Images.enterpriseSolutionsOffer05,
        iconHover: Images.enterpriseSolutionsOfferHover05,
        title: "Data Management & Analytics",
        description: "Leverage data to drive business outcomes. We design and deploy advanced data management systems and analytics platforms for real-time insights."
    },
    {
        iconDefault: Images.enterpriseSolutionsOffer06,
        iconHover: Images.enterpriseSolutionsOfferHover06,
        title: "AI & Automation",
        description: "Boost productivity and cut costs with AI and automation. We integrate systems that optimize workflows and enable smart decision-making."
    }
];
const tabsData = [
    {
        name: "Microsoft",
        description: "Unlock business potential with Microsoft’s suite of powerful, scalable solutions. We help integrate and optimize Microsoft tools to streamline operations and drive growth.",
        imageSrc: Images.expertiseTech04,
    },
    {
        name: "Odoo",
        description: "Streamline your business processes with Odoo for better efficiency & growth. We deliver tailored Odoo implementations to optimize workflows, enhance collaboration & drive long-term success.",
        imageSrc: Images.expertiseTech06,
    },
];
const industries = [
    { title: "Fashion", image: Images.enterpriseSolutionsIndustries01 },
    { title: "Manufacturing", image: Images.enterpriseSolutionsIndustries02 },
    { title: "Automotive", image: Images.enterpriseSolutionsIndustries03 },
    { title: "Finance", image: Images.enterpriseSolutionsIndustries04 },
    { title: "Hospitality", image: Images.enterpriseSolutionsIndustries05 },
    { title: "Technology", image: Images.enterpriseSolutionsIndustries06 },
    { title: "Telecommunications", image: Images.enterpriseSolutionsIndustries07 },
    { title: "Healthcare", image: Images.enterpriseSolutionsIndustries08 },
    { title: "Retail", image: Images.enterpriseSolutionsIndustries09 },
    { title: "Utilities", image: Images.enterpriseSolutionsIndustries10 },
    { title: "Entertainment", image: Images.enterpriseSolutionsIndustries11 },
    { title: "Logistics", image: Images.enterpriseSolutionsIndustries12 },
];
const developmentFlow = [
    {
        icon: Images.enterpriseSolutionsEase01,
        title: "Tailored Solutions",
        description: "Custom enterprise solutions for your unique needs."
    },
    {
        icon: Images.enterpriseSolutionsEase02,
        title: "Industry Expertise",
        description: "Industry-specific solutions for sectors around the globe."
    },
    {
        icon: Images.enterpriseSolutionsEase03,
        title: "End-to-End Services",
        description: "Comprehensive support from consulting to implementation."
    },
    {
        icon: Images.enterpriseSolutionsEase04,
        title: "Cutting-Edge Technology",
        description: "Leverage AI, automation, and cloud for growth."
    },
    {
        icon: Images.enterpriseSolutionsEase05,
        title: "Robust Security Framework",
        description: "Top-tier cybersecurity to protect your critical data."
    },
    {
        icon: Images.enterpriseSolutionsEase06,
        title: "Scalable Solutions",
        description: "Solutions that grow and evolve with your business."
    },
    {
        icon: Images.enterpriseSolutionsEase07,
        title: "Proven Track Record",
        description: "Successful enterprise solutions for global clients."
    },
    {
        icon: Images.enterpriseSolutionsEase08,
        title: "Dedicated Support",
        description: "Continuous support and expert strategic guidance."
    }
];
const engagementModels = [
    {
        imgSrc: Images.imgAugModelTeam,
        title: "Team Augmentation",
        description: "Scale up your team size with the one who carries out projects quickly. We will meticulously curate your projects as per your wants & needs. Wherever needed, we will not shy away from sharing our knowledge to better accomplish the goals you wish to achieve.",
        link: "/team-augmentation",
        button: true,
    },
    {
        imgSrc: Images.imgAugModelFixed,
        title: "Fixed Price",
        description: "Bring a close to overrunning budgets & extended timelines with our software development services. We understand budget constraints hit the bottom line. That’s why we deliver on our promises. Ensuring that no ambiguity is left behind, we will thoroughly plan out deliverables & budget.",
        link: "/fixed-price",
        button: true,
    },
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconCloudSolutions01,
        title: "Tailored Solutions",
        description: "Meet business needs with custom solutions. We work closely with clients to design systems perfectly aligned with their goals."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconCloudSolutions02,
        title: "System Integration",
        description: "Ensure seamless integration with existing enterprise systems. Our experts connect business tools to a cohesive environment to streamline workflows."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconCloudSolutions01,
        title: "Data Migration",
        description: "Facilitate smooth data migration with minimal downtime. We ensure that your data transitions securely, maintaining integrity across platforms."
    },
    {
        boxColor: "light-green",
        icon: Images.iconCloudSolutions02,
        title: "API Development",
        description: "Enable efficient system communication with custom APIs. We build and manage robust APIs that empower your systems to interact effortlessly."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconCloudSolutions03,
        title: "User Interface",
        description: "Enhance user experience with intuitive interface design. We prioritize simplicity & functionality, creating designs that users love and understand."
    },
    {
        boxColor: "light-purple",
        icon: Images.iconCloudSolutions04,
        title: "Scalable Architecture",
        description: "Build scalable solutions that grow with your business. We design flexible architectures that can adapt to increasing demands while maintaining performance."
    }
];
const techImages = [
    { image: Images.expertiseTech01 },
    { image: Images.expertiseTech02 },
    { image: Images.expertiseTech04 },
    { image: Images.expertiseTech06 },
];
const dataPreconfig = [
    {
        logo: Images.expertiseAhead01,
        title: "Dynamics 365",
        items: [
            "Dynamics 365 ERP",
            "Dynamics 365 CRM",
            "Dynamics 365 Sales",
            "Dynamics 365 Supply Chain",
            "Dynamics 365 Finance & Operations",
            "Dynamics 365 Human Resources",
        ],
    },
    {
        logo: Images.expertiseTech06,
        title: "Odoo",
        items: [
            "Odoo Productivity",
            "Odoo Marketing",
            "Odoo Websites",
            "Odoo Services",
            "Odoo Finance",
            "Odoo Sales",
        ],
    },
];

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, tabsData, industries, gridsContent, developmentFlow, engagementModels, techImages, dataPreconfig };