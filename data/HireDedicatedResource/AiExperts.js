import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire AI <span className="d-xl-block">Developers</span></h1>;
const bannerText = <p>Transform your business with our cutting-edge AI solutions. Hire AI developers from us and drive your business agility with our  ML innovations and custom AI Solutions.</p>;
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "<strong>Platforms:</strong> Whisper, OpenAI, LangChain" },
    { text: "<strong>Models:</strong> OpenAI ChatGPT4.0, T5, Bard" },
    { text: "<strong>Frameworks:</strong> TensorFlow, PyTorch, Transformers" },
    { text: "<strong>Deployments:</strong> Hugging Face, AWS, Google Cloud" },
];
const steps = [
    { number: "01", text: "Identify Resources", colorClass: "bg-farozi" },
    { number: "02", text: "Review Profile", colorClass: "bg-orange" },
    { number: "03", text: "Select Candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize Team", colorClass: "bg-blue" },
    { number: "05", text: "Start Working", colorClass: "bg-green" }
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "Can I get a part-time AI specialist for a month?",
        description: [
            "Certainly, but only if your required AI Specialists are available for monthly contracts. Please fill out our consultation form to discuss your specific needs or contact support.",
        ],
    },
    {
        eventKey: "1",
        title: "What are the ownership rights associated with AI development?",
        description: [
            "You retain full ownership of any sort of work produced by our AI developers.",
        ],
    },
    {
        eventKey: "2",
        title: "Is there a free trial period for AI development services?",
        description: [
            "You can experience a week-long, no-obligation trial with your selected AI developer. However, terms and conditions may apply, depending on the nature of the job. Commit only when you're convinced. Extended paid trials are also available.",
        ],
    },
    {
        eventKey: "3",
        title: "What is your pricing model for AI development projects?",
        description: [
            "Hiring AI experts from Data on Matrix typically involves a flexible pricing model that can be tailored to your specific project needs. Here are some common approaches:",
        ],
        list: [
            "Full time resource hiring ",
            "Part time resource hiring ",
            "Hourly-based resource hiring"
        ],
    },
    {
        eventKey: "4",
        title: "What happens if my AI specialist is unavailable?",
        description: [
            "While this situation is uncommon, we prioritize immediate resource allocation to ensure your project progress remains uninterrupted. Our dedicated team is always ready to assist you.",
        ],
    },
    {
        eventKey: "5",
        title: "How will Data on Matrix ensure a seamless transition from my current vendor?",
        description: [
            "We'll ensure a smooth transition by leveraging Agile methodologies and open communication. Our skilled developers will seamlessly integrate into your project, alleviating developmental and managerial burdens. With advanced project management tools, we're committed to delivering your project on time and to the highest standards.",
        ],
    },
];
const accordionData = [
    {
        eventKey: "0",
        title: "AI Consulting Services",
        description: "Data on Matrix's AI consultants help identify use cases, assess data, and provide strategic advice. We conduct ROI analysis, design architectures, select tech stacks, create project budgets and conceptualize MVPs. Our team develops risk management strategies and provides user training and support.",
        icon: Images.AiExpertsTabIconOne,
    },
    {
        eventKey: "1",
        title: "Custom Development",
        description: "Data on Matrix specializes in delivering custom AI solutions. Our services encompass end-to-end development, from data preparation and preprocessing to model training and deployment. We ensure data security and privacy throughout the process. Post-deployment, we provide ongoing support and maintenance to optimize performance and address evolving needs.",
        icon: Images.AiExpertsTabIconTwo,
    },
    {
        eventKey: "2",
        title: "AI-Backed Applications",
        description: "We build cutting-edge AI-powered web and mobile apps that seamlessly integrate with your systems. By understanding user behavior, we deliver personalized solutions for startups and enterprises alike.",
        icon: Images.AiExpertsTabIconThree,
    },
    {
        eventKey: "3",
        title: "Machine Learning Services",
        description: "Enhance user experiences with personalized machine learning. Our services include deploying ML models, delivering content recommendations and optimizing production processes. By harnessing the power of large datasets, we drive profit and user satisfaction through data-driven decisions.",
        icon: Images.AiExpertsTabIconFour,
    },
    {
        eventKey: "4",
        title: "MLOps Transformation",
        description: "Our MLOps experts streamline the development and deployment of machine learning systems, ensuring seamless performance post-launch. We bridge the gap between data scientists and operations teams, enabling efficient model development, deployment and monitoring.",
        icon: Images.AiExpertsTabIconFive,
    },
    {
        eventKey: "5",
        title: "Maintenance & Support",
        description: "We're committed to the long-term success of your AI/ML initiatives. Our dedicated support team provides ongoing maintenance, security enhancements and troubleshooting to keep your operations running smoothly.",
        icon: Images.hireSalesSix,
    },
];
const hireMainText = [
    { text: "Take your business from average to exceptional standing in the world. This can happen when you streamline, optimize, and automate your operations. To achieve this, you need to implement cutting-edge digital solutions built on the latest AI technologies. That's where our machine learning developers come in, enhancing your organization’s technological capabilities. From chatbots to computer vision, we deliver innovative AI solutions." }
];
const developmentFlow = [
    {
        icon: Images.AiIndustires01,
        title: "Machine Learning",
        description: "Develop predictive models to uncover insights & optimize decision-making."
    },
    {
        icon: Images.AiIndustires02,
        title: "Natural Language Processing",
        description: "Extract meaningful information from text and speech data."
    },
    {
        icon: Images.AiIndustires03,
        title: "Intelligent Automation",
        description: "Integrating AI solutions to intelligently automate your business operations."
    },
    {
        icon: Images.AiIndustires04,
        title: "Computer Vision",
        description: "Analyze and interpret visual content, such as images and videos."
    },
    {
        icon: Images.AiIndustires05,
        title: "AI-Driven Chatbots",
        description: "Build intelligent bots to enhance engagement & provide support."
    },
    {
        icon: Images.AiIndustires06,
        title: "Predictive Analytics",
        description: "Forecast future trends and behaviors using historical data."
    },
    {
        icon: Images.AiIndustires07,
        title: "AI-Driven Personalization",
        description: "Tailor experiences based on user behavior and preferences."
    },
    {
        icon: Images.AiIndustires08,
        title: "Anomaly Detection",
        description: "Identify unusual patterns & potential threats within large datasets."
    }
];
const stats = [
    { value: "20+", description: "dedicated AI experts" },
    { value: "80+", description: "AI projects delivered" },
    { value: "98.5%", description: "client retention rate" },
    { value: "Up to 60%", description: "savings on staffing" }
];
const servicesData = [
    {
        image: Images.aiCertifiedImage01,
        title: "Technical Expertise",
        description: "Our team of skilled AI engineers possesses in-depth knowledge and experience to deliver cutting-edge solutions."
    },
    {
        image: Images.aiCertifiedImage02,
        title: "Full-Scale Support",
        description: "From initial consultation to post-deployment maintenance, we provide comprehensive support throughout the entire AI lifecycle."
    },
    {
        image: Images.aiCertifiedImage03,
        title: "Dynamic Solutions",
        description: "We adapt to the evolving landscape of AI, providing flexible and scalable solutions to meet your unique business needs."
    },
    {
        image: Images.aiCertifiedImage04,
        title: "Safety & Security",
        description: "We prioritize data privacy and cyber security, implementing robust measures to protect sensitive information."
    },
    {
        image: Images.aiCertifiedImage05,
        title: "Innovative Approach",
        description: "Our commitment to innovation drives us to explore cutting-edge AI techniques and technologies to deliver groundbreaking solutions."
    },
    {
        image: Images.aiCertifiedImage06,
        title: "Cost-Effective Solutions",
        description: "By leveraging artificial intelligence and machine learning, we help you optimize operations, reduce costs, and maximize ROI. "
    }
];
const certifiedMainText = [
    { text: "We help businesses revolutionize with AI-powered solutions" }
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
const techImages = [
    { id: 1, image: Images.techAiOne },
    { id: 2, image: Images.techAiTwo },
    { id: 3, image: Images.techAiThree },
    { id: 4, image: Images.techAiFour },
    { id: 5, image: Images.techAiFive },
    { id: 6, image: Images.techAiSix },
    { id: 7, image: Images.techAiSeven },
];

export { bannerHeading, bannerText, expertiseHead, expertise, expertiseHeadTwo, steps, accordionFaqsData, accordionData, hireMainText, developmentFlow, stats, servicesData, certifiedMainText, workSliderData, techImages };