import { Images } from "@/assets/assets";

const bannerHeading = <h1>Outsource Graphic <span className="d-block">Design Services</span></h1>;
const bannerText = <p>By outsourcing design services, you can get standout designs that empower your brand presence.</p>;
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
const slidesImages = [
    Images.iconHappyClient01,
    Images.iconHappyClient02,
    Images.iconHappyClient03,
    Images.iconHappyClient04,
    Images.iconHappyClient05,
    Images.iconHappyClient06,
    Images.iconHappyClient07,
    Images.iconHappyClient08,
];
const boxesContent = [
    {
        icon: Images.webGraphicsAdvantage01,
        boxColor: "orange",
        title: "UX/UI Designer",
        description: "Our certified UX/UI designers ensure seamless and intuitive user experiences across all platforms. They specialize in creating visually stunning, user-friendly interfaces."
    },
    {
        icon: Images.webGraphicsAdvantage02,
        boxColor: "blue",
        title: "Graphic Designer",
        description: "With expert certifications in graphic design, our team crafts captivating visual concepts and designs. From print to digital, they bring ideas to life with creativity and precision."
    },
    {
        icon: Images.webGraphicsAdvantage03,
        boxColor: "farozi",
        title: "Motion Designer",
        description: "Certified in motion design, our experts create engaging animations and dynamic visuals. They add life to your brand with captivating video content and interactive media."
    },
    {
        icon: Images.webGraphicsAdvantage04,
        boxColor: "green",
        title: "Brand Designer",
        description: "Our certified brand designers specialize in developing unique brand identities. They ensure consistency across all touchpoints, giving your business a memorable and professional presence."
    },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "How do you ensure the quality of your design work aligns with our brand vision and standards?",
        description: [
            "We conduct in-depth research to understand your brand values and target audience. Throughout the process, we use your brand guidelines as a reference and incorporate your feedback.",
        ],
    },
    {
        eventKey: "1",
        title: "How do you handle project timelines and milestones?",
        description: [
            "We develop a detailed project timeline with clear milestones and deliverables. Regular updates ensure transparency, and any delays are communicated promptly with a solution plan.",
        ],
    },
    {
        eventKey: "2",
        title: "How do you manage feedback and revisions during the design process?",
        description: [
            "We gather feedback systematically using collaborative tools and prioritize changes based on your inputs. Revision rounds are included in the process to refine designs to your satisfaction.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you balance creativity with functionality in your designs?",
        description: [
            "We prioritize user-centric design principles while integrating innovative and creative elements. Every design is tested to ensure it meets practical usability requirements without compromising aesthetics."
        ],
    },
    {
        eventKey: "4",
        title: "What sets your design services apart from other providers in terms of quality?",
        description: [
            "Our approach combines a deep understanding of your needs with meticulous attention to detail. We offer tailored solutions backed by industry expertise and a commitment to excellence.",
        ],
    },
    {
        eventKey: "5",
        title: "Do you provide prototypes or mockups before finalizing designs?",
        description: [
            "Yes, we provide detailed prototypes or mockups to help you visualize the final product. This allows us to refine designs based on your feedback before finalizing.",
        ],
    },
];
const accordionData = [
    {
        eventKey: "0",
        title: "Brand Identity",
        description: "Stand out and leave a lasting impression on the audience. We create compelling logos, brand guidelines, and marketing collateral to give your business a unique and memorable identity.",
        icon: Images.webGraphicsHire01,
    },
    {
        eventKey: "1",
        title: "Web & App Design",
        description: "Our experts design visually appealing and user-friendly websites and apps that enhance your online presence. We prioritize responsive layouts and seamless navigation for an exceptional user experience.",
        icon: Images.webGraphicsHire02,
    },
    {
        eventKey: "2",
        title: "Social Media Graphics",
        description: "Boost your online engagement with custom-designed social media posts, banners, and ads. Our designs align with your brand, making every post visually striking and share-worthy.",
        icon: Images.webGraphicsHire03,
    },
    {
        eventKey: "3",
        title: "Motion Graphics",
        description: "We craft dynamic animations, explainer videos, and logo reveals that bring your ideas to life. Add a touch of motion to captivate your audience and elevate your storytelling.",
        icon: Images.webGraphicsHire04,
    },
    {
        eventKey: "4",
        title: "Photo Editing and Retouching",
        description: "Transform ordinary photos into extraordinary visuals with our professional editing services. From color corrections to advanced retouching, we make every image perfect.",
        icon: Images.webGraphicsHire05,
    },
    {
        eventKey: "5",
        title: "UI/UX Design",
        description: "We design intuitive interfaces and seamless user experiences that prioritize functionality and aesthetic appeal. Our goal is to create designs that users love interacting with.",
        icon: Images.webGraphicsHire06,
    },
];
const tabHeading = <h2>Implementation <span>Methodology</span></h2>;
const tabs = [
    {
        iconDefault: Images.workdayTabs01,
        iconHover: Images.workdayTabsHover01,
        title: "Quick Implementation",
        subTitle: "Quickstart",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn01,
        description: [
            { text: "We kick off your design project quickly, using predefined templates and streamlined processes to ensure fast delivery without sacrificing quality. Our approach allows us to produce high-impact designs in record time, perfect for clients who need results quickly." },
            { text: "With this method, we prioritize efficiency while maintaining excellent design standards, ensuring your brand makes an immediate impact with minimal wait." },
        ],
        features: [
            { id: 1, image: Images.webGRaphicsTabIn01, text: "Faster Turnaround" },
            { id: 2, image: Images.webGRaphicsTabIn02, text: "Cost-Effective" },
            { id: 3, image: Images.webGRaphicsTabIn03, text: "Efficiency" },
            { id: 4, image: Images.webGRaphicsTabIn04, text: "Simplicity" },
        ],
    },
    {
        iconDefault: Images.webGraphicstabbericon02,
        iconHover: Images.webGraphicstabbericonHover02,
        title: "Custom Implementation",
        subTitle: "Custom",
        subTitleTwo: "Implementation",
        image: Images.workdayTabsIn02,
        description: [
            { text: "We take a personalized approach, diving deep into understanding your brand’s identity, objectives, and target audience. By tailoring every aspect of the design process, we create unique and bespoke designs that perfectly align with your vision." },
            { text: "Each phase is crafted to meet your specific needs, ensuring that the final result reflects your brand’s essence, without compromising on creativity or quality." },
        ],
        features: [
            { id: 1, image: Images.webGRaphicsTabIn05, text: "Creative Innovation" },
            { id: 2, image: Images.webGRaphicsTabIn06, text: "Quick Delivery" },
            { id: 3, image: Images.webGRaphicsTabIn07, text: "Complete Flexibility" },
            { id: 4, image: Images.webGRaphicsTabIn08, text: "Consistent Quality" },
        ],
    },
];
const processSteps = [
    { icon: Images.frontProcess01, stepName: "Requirements", text: "Specify the resources you need." },
    { icon: Images.frontProcess02, stepName: "Profiles", text: "We will send you relevant profiles." },
    { icon: Images.frontProcess03, stepName: "Selection", text: "Select experts for virtual interview." },
    { icon: Images.frontProcess04, stepName: "Flexible Hiring", text: "Hire on an hourly, part/full-time basis." },
    { icon: Images.frontProcess05, stepName: "Onboarding", text: "Onboard an expert or remote team." },
];
const bulletContent = [
    { title: "No Hidden Costs", },
    { title: "On-Time Delivery", },
    { title: "Data Confidentiality", },
    { title: "Dedicated Support Team" },
];
const hireMainText = [
    { text: "By blending creativity with strategic initiatives, we craft visually compelling designs that resonate with target audiences, drive engagement, and foster loyalty. From intuitive websites and dynamic social media visuals to user-centric apps and branding, we deliver solutions that amplify brand identity and maximize impact. Our expertise ensures client brands not only stand out but also build meaningful, lasting connections in a competitive market." }
];
const developmentFlow = [
    {
        icon: Images.webGraphicsIndutries01,
        title: "Marketing Assets",
        description: "We craft visually compelling social media posts, email campaigns, and digital banners to elevate your brand's presence and drive engagement."
    },
    {
        icon: Images.webGraphicsIndutries02,
        title: "Illustration Graphics",
        description: "Our custom illustrations transform complex ideas into creative visuals, tailored to align with your brand identity and messaging."
    },
    {
        icon: Images.webGraphicsIndutries03,
        title: "Motion Graphics",
        description: "Dynamic animations and explainer videos that captivate your audience, simplifying concepts with engaging motion storytelling."
    },
    {
        icon: Images.webGraphicsIndutries04,
        title: "Packaging Design",
        description: "Innovative and functional packaging designs that not only protect but also showcase your products with maximum shelf appeal."
    },
    {
        icon: Images.webGraphicsIndutries05,
        title: "3D Design",
        description: "Realistic 3D models, product renders, and architectural visualizations that bring your ideas to life with stunning detail."
    },
    {
        icon: Images.webGraphicsIndutries06,
        title: "Responsive Design",
        description: "Seamless, user-friendly designs optimized for all devices, ensuring your website or application adapts beautifully to any screen size."
    },
    {
        icon: Images.webGraphicsIndutries07,
        title: "Video Editing",
        description: "Polished video editing with professional-grade effects and transitions to deliver captivating and impactful visual stories."
    },
    {
        icon: Images.webGraphicsIndutries08,
        title: "Website Design",
        description: "Modern, visually striking website designs focused on usability, performance, and converting visitors into loyal customers."
    }
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "500+", description: "projects delivered" },
    { value: "Up to 60%", description: "cost savings" }
];
const servicesData = [
    {
        image: Images.webGraphicsBenifits01,
        title: "Expert Access",
        description: "Gain access to a team of highly skilled professionals. We bring specialized knowledge in branding, UX/UI, and digital design, ensuring top-quality results every time."
    },
    {
        image: Images.webGraphicsBenifits02,
        title: "Cost Savings",
        description: "Avoid the costs of hiring, training, and maintaining an in-house team. You only pay for the services you need, making it a cost-effective solution without compromising quality."
    },
    {
        image: Images.webGraphicsBenifits03,
        title: "Scalable Solutions",
        description: "Scale resources up or down as required. Whether you need extra support for a launch or a smaller team for a routine update, we provide the flexibility to adjust accordingly."
    },
    {
        image: Images.webGraphicsBenifits04,
        title: "Quick Delivery",
        description: "We streamline our design process to ensure faster turnarounds without sacrificing quality. Our dedicated team works efficiently, allowing you to meet tight deadlines."
    },
    {
        image: Images.webGraphicsBenifits05,
        title: "Creative Collaboration",
        description: "Partnering with us means you get a fresh, outside perspective that enhances your project. Our collaborative approach ensures that your vision is brought to life with innovative ideas."
    },
    {
        image: Images.webGraphicsBenifits06,
        title: "Time Efficiency",
        description: "Focus on your core business activities. We handle the design work quickly and effectively, saving you valuable time and helping you stay focused on your goals."
    }
];
const certifiedMainText = [
    { text: "Hire a team of certified designers and reap the following benefits:" }
];
const techImages = [
    { image: Images.graphicTech01 },
    { image: Images.graphicTech02 },
    { image: Images.graphicTech03 },
    { image: Images.graphicTech04 },
    { image: Images.graphicTech05 },
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

export { bannerHeading, bannerText, technologyOptions, boxesContent, accordionData, accordionFaqsData, stats, tabHeading, tabs, processSteps, bulletContent, hireMainText, workSliderData, developmentFlow, servicesData, certifiedMainText, techImages, slidesImages };