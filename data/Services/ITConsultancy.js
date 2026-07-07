import { Images } from "@/assets/assets";

const bannerHeading = <h1>IT Consulting<br /> Services</h1>;
const bannerText = <p>Get strategic guidance for top-notch IT solutions and services. As your advisor, we help you make the decisions that are right for your business growth, now and for the future.</p>;
const whatWeDoTitle = <h2><span className="d-block">IT Consultancy: Our Services Scope</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.itConsultDefault01,
        iconHover: Images.itConsultHover01,
        title: "Product Engineering",
        description: "We build software products for businesses. Our services include consulting, prototyping, design, development and release management."
    },
    {
        iconDefault: Images.itConsultDefault02,
        iconHover: Images.itConsultHover02,
        title: "Web App Services",
        description: "We provide end-to-end app solutions, from custom development to maintenance, helping businesses modernize, innovate and stay ahead."
    },
    {
        iconDefault: Images.itConsultDefault03,
        iconHover: Images.itConsultHover03,
        title: "System Integration",
        description: "We help organizations build seamless software ecosystems by delivering comprehensive roadmaps and integrating their enterprise solutions."
    },
    {
        iconDefault: Images.itConsultDefault04,
        iconHover: Images.itConsultHover04,
        title: "Mobile Enablement",
        description: "We help companies adopt mobile technologies. We consult on everything from strategy to implementation of mobile solutions for businesses."
    },
    {
        iconDefault: Images.itConsultDefault05,
        iconHover: Images.itConsultHover05,
        title: "Cloud Enablement",
        description: "We implement cloud-native solutions that optimize software delivery and foster collaboration between development and operations teams."
    },
    {
        iconDefault: Images.itConsultDefault06,
        iconHover: Images.itConsultHover06,
        title: "Application Modernization",
        description: "We modernize legacy software, providing audits, improvement plans and upgrades tailored to your new business needs."
    },
];
const howWeDos = [
    {
        icon: Images.itConsultIcon01,
        boxColor: "orange",
        title: "Strategy Consulting",
        description: "We recommend software implementation strategies for businesses, balancing cost and efficiency.",
    },
    {
        icon: Images.itConsultIcon02,
        boxColor: "blue",
        title: "Technology Consulting",
        description: "Our tech consultants help enterprises choose the right technology stack.",
    },
    {
        icon: Images.itConsultIcon03,
        boxColor: "farozi",
        title: "Business Consulting",
        description: "We advise on software selection, implementation and customization for businesses.",
    },
];
const kubernetes = [
    {
        image: Images.itConcultancyTools02,
        title: "ITSM Consulting",
        description: "We help you streamline your IT service delivery, ensuring fast, efficient and cost-effective support for your team and customers.",
    },
    {
        image: Images.itConcultancyTools01,
        title: "Software QA Consulting",
        description: "We help you establish an agile QA process to proactively identify and resolve issues early, ensuring bug-free software production.",
    },
];
const benefits = [
    {
        imgSrc: Images.imgADOBenefit01,
        title: "Cybersecurity",
        subTitle: "Consulting",
        description: "Identify and address your organization's unique cybersecurity vulnerabilities. Our experts will develop a comprehensive strategy to protect your sensitive data and systems.",
    },
    {
        imgSrc: Images.imgADOBenefit02,
        title: "Managed",
        subTitle: "Security Services",
        description: "Proactively defend your business with our tailored managed security services. We'll continuously monitor your IT environment, detect threats and respond swiftly to minimize risks and downtime.",
    },
];
const bulletContent = [
    {
        title: "Proven Expertise, Real-World Solutions",
        description: "As one of the top-tier IT consulting firms with 20+ years of experience, we deliver innovative software solutions. Our portfolio highlights successful projects and satisfied customers."
    },
    {
        title: "Team of Experts, Tailored to Your Needs",
        description: "Our team comprises a diverse group of highly skilled professionals, including technology consultants, software engineers, solution architects, business analysts, and project managers, tailored to meet your project requirements."
    },
    {
        title: "Industry Insights, Strategic Solutions",
        description: "We follow the latest industry trends and technologies to provide innovative and effective solutions. Our experts translate business needs into technical specifications, ensuring tailored solutions."
    },
    {
        title: "Security and Quality, Built-In",
        description: "We prioritize security and quality. By adhering to international standards, we ensure that your data and applications remain protected and compliant."
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
        description: "Nunc tempor, justo et rutrum rhoncus, lacus mauris vehicula arcu, malesuada aliquet felis metus id mauris. Quisque tincidunt, risus sed iaculis tempus, velit leo rutrum sapien, nec porta arcu elit sit amet enim.",
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

export { bannerHeading, bannerText, workSliderData, howWeDos, whatWeDos, whatWeDoTitle, kubernetes, benefits, bulletContent };