import { Images } from "@/assets/assets";

const bannerHeading = <h1>End-To-End Software <span className="d-block">Development Services</span></h1>;
const bannerText = <p>We integrate advanced technologies to develop, deploy, and deliver tailored apps.</p>;
const whatWeDoTitle = <h2><span className="d-block">Software Development</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.expertiseDevelopment01,
        iconHover: Images.expertiseDevelopmentHover01,
        title: "Custom Software Development",
        description: "Accelerate business growth with tailored software solutions. We leverage agile methodologies & cutting-edge technologies to deliver innovative software per your needs."
    },
    {
        iconDefault: Images.expertiseDevelopment02,
        iconHover: Images.expertiseDevelopmentHover02,
        title: "Web Development",
        description: "Enhance your online presence with stunning, responsive websites. We craft visually appealing and user-friendly websites that drive engagement and conversions."
    },
    {
        iconDefault: Images.expertiseDevelopment04,
        iconHover: Images.expertiseDevelopmentHover04,
        title: "Mobile App Development",
        description: "Reach your target audience on the go with powerful mobile apps. We build high-performance, cross-platform mobile apps that deliver exceptional user experiences."
    },
    {
        iconDefault: Images.expertiseDevelopment03,
        iconHover: Images.expertiseDevelopmentHover03,
        title: "QA & Testing",
        description: "Ensure the quality and reliability of your software products. We conduct rigorous testing to identify and eliminate defects, ensuring a seamless user experience."
    },
    {
        iconDefault: Images.expertiseDevelopment05,
        iconHover: Images.expertiseDevelopmentHover05,
        title: "UI/UX Design",
        description: "Create intuitive and visually appealing user interfaces. We design user-centered experiences that delight your customers and drive business results."
    },
    {
        iconDefault: Images.expertiseDevelopment06,
        iconHover: Images.expertiseDevelopmentHover06,
        title: "DevOps",
        description: "Streamline software delivery process with efficient DevOps practices. We implement automation tools & CI/CD pipelines to accelerate development and deployment."
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
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.expertiseCloud01,
        title: "Azure",
        description: "Scale your business with Microsoft Azure. Whether you're building modern applications, migrating legacy systems, or enhancing your data analytics capabilities, our certified experts ensure seamless integration and optimal utilization of Azure's vast ecosystem, including AI, machine learning, IoT, and DevOps tools."
    },
    {
        boxColor: "light-grey",
        icon: Images.expertiseCloud02,
        title: "Amazon Web Services (AWS)",
        description: "From compute & storage to advanced analytics and machine learning, we help you navigate and harness AWS's extensive portfolio to achieve your strategic goals. Our certified AWS professionals ensure your cloud architecture is optimized for performance, scalability & cost-efficiency."
    },
];
const tabsData = [
    {
        name: "SharePoint",
        description: "Enhance collaboration and document management with SharePoint's secure and efficient platform. We empower your teams with seamless workflows and centralized access to critical business information.",
        imageSrc: Images.expertiseSolutions01,
    },
    {
        name: "Dynamics 365",
        description: "Unify your business operations with Dynamics 365, delivering intelligent insights and automation. We tailor this versatile platform to streamline your processes and drive smarter decisions.",
        imageSrc: Images.expertiseSolutions02,
    },
    {
        name: "Workday",
        description: "Optimize your workforce and financial management with Workday's powerful cloud solutions. We help you achieve operational excellence with tools designed to adapt to your evolving needs.",
        imageSrc: Images.expertiseSolutions03,
    },
    {
        name: "Shopify",
        description: "Boost your online presence and sales with Shopify's robust e-commerce platform. We enable you to create engaging storefronts and simplify management for a seamless customer experience.",
        imageSrc: Images.expertiseSolutions04,
    },
    {
        name: "Salesforce",
        description: "Transform customer relationships with Salesforce for enhanced engagement. We customize Salesforce to align with your business goals, ensuring scalable growth and improved efficiency.",
        imageSrc: Images.expertiseSolutions05,
    },
];
const tabsDataInnovation = [
    {
        name: "Data Science, AI and ML",
        description: "Unlock insights and drive innovation through advanced data processing and machine learning models. We empower businesses by providing data-driven solutions that optimize decision-making and operational efficiency.",
        imageSrc: Images.expertiseInnovation01,
    },
    {
        name: "AR / VR",
        description: "Enhance user experiences with immersive augmented and virtual reality technologies. We create custom AR/VR applications that transform industries like education, healthcare, and retail.",
        imageSrc: Images.expertiseInnovation02,
    },
    {
        name: "Blockchain",
        description: "Ensure transparency and security with decentralized ledger technology. We deliver blockchain solutions that streamline transactions, reduce fraud, and increase trust in digital ecosystems.",
        imageSrc: Images.expertiseInnovation03,
    },
    {
        name: "IoT",
        description: "Enable smarter environments by connecting devices and collecting real-time data. We build IoT systems that enhance automation, improve resource management, and provide actionable insights for businesses.",
        imageSrc: Images.expertiseInnovation04,
    },
];

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, tabsData, tabsDataInnovation, gridsContent, workSliderData };