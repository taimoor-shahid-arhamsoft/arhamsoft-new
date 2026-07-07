import { Images } from "@/assets/assets";

const bannerHeading = <h1>MLOps Services &  <span className="d-block">Solutions</span></h1>;
const bannerText = <p>We help businesses capitalize on MLOps to drive innovation and growth. We identify strategic ML applications, develop and deploy scalable ML models and empower organizations to make data-driven decisions.</p>;
const whatWeDoTitle = <h2><span className="d-block">MLOps Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.mlopsOffer01,
        iconHover: Images.mlopsOfferHover01,
        title: "MLOps Consulting",
        description: "We provide MLOps consulting services to automate ML lifecycle, from model training to deployment, and integrate robust machine learning capabilities into enterprise solutions."
    },
    {
        iconDefault: Images.mlopsOffer02,
        iconHover: Images.mlopsOfferHover02,
        title: "Orchestrated Experiments",
        description: "We offer orchestrated experiment services that automate the design, execution, and analysis of multiple machine learning experiments to expedite model development and optimization."
    },
    {
        iconDefault: Images.mlopsOffer03,
        iconHover: Images.mlopsOfferHover03,
        title: "Integrated DataOps & MLOps",
        description: "We streamline the entire data and machine learning pipeline by integrating DataOps and MLOps practices. This fosters collaboration, accelerates time to market, and improves model performance."
    },
    {
        iconDefault: Images.mlopsOffer04,
        iconHover: Images.mlopsOfferHover04,
        title: "Model Training",
        description: "We excel at training machine learning models by feeding them large datasets to learn patterns and make accurate predictions. We iteratively fine-tune the model's parameters to optimize performance."
    },
    {
        iconDefault: Images.mlopsOffer05,
        iconHover: Images.mlopsOfferHover05,
        title: "Model Governance",
        description: "We prioritize ethics and compliance in our MLOps development services and deployment processes. To ensure this, we have established a strong model governance framework for our machine learning solutions."
    },
    {
        iconDefault: Images.mlopsOffer06,
        iconHover: Images.mlopsOfferHover06,
        title: "Performance Monitoring",
        description: "We keep a close eye on our models' performance to ensure they stay accurate and reliable. By monitoring key metrics and identifying issues early, we can maintain the effectiveness of our ML systems."
    }
];
const developmentFlow = [
    {
        icon: Images.mlopsEase01,
        title: "Retail",
        description: "MLOps empowers retailers to make data-driven decisions from demand forecasting to personalized marketing, supply chain optimization, and store security."
    },
    {
        icon: Images.mlopsEase02,
        title: "Ecommerce",
        description: "Machine learning powers personalized recommendations, search, and chatbots, enhancing the shopping journey and safeguarding businesses and consumers."
    },
    {
        icon: Images.mlopsEase03,
        title: "Healthcare",
        description: "MLOps streamlines the development and deployment of AI-powered healthcare solutions, covering a wide range of applications from patient diagnosis to administrative tasks."
    },
    {
        icon: Images.mlopsEase04,
        title: "Education",
        description: "MLOps empowers personalized learning through tailored content recommendations and adaptive training activities, making education more accessible and efficient."
    },
    {
        icon: Images.mlopsEase05,
        title: "Marketing",
        description: "MLOps accelerates marketing innovation, enabling personalized campaigns, automated tasks, and enhanced customer interactions."
    },
    {
        icon: Images.mlopsEase06,
        title: "Real Estate",
        description: "MLOps enables rapid delivery of AI solutions for personalized recommendations, automated valuations, and efficient property management."
    },
    {
        icon: Images.mlopsEase07,
        title: "Logistics",
        description: "MLOps empowers logistics and supply chain operations by enabling real-time optimization, demand forecasting, and optimizing goods delivery routes."
    },
    {
        icon: Images.mlopsEase08,
        title: "Manufacturing",
        description: "MLOps helps manufacturers optimize operations and improve efficiency. It enables predictive maintenance, optimized operations, improved efficiency, and reduced costs."
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
        title: "Business Analysis",
        description: "We analyze business needs, user expectations, and technical environment to identify suitable ML use cases. We then define the scope, functional, and non-functional requirements for the ML solution."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconCloudSolutions02,
        title: "Data Exploration",
        description: "We analyze customer-owned and public data, clean it, and prepare it for ML model development and pipeline creation. We also assist with data imputation or dimension reduction to ensure data quality."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconCloudSolutions01,
        title: "Model Design",
        description: "We design ML solutions, define implementation strategies, select AI techniques and algorithms, and propose tech stacks. We also scope and plan PoCs, outlining timelines and budgets."
    },
    {
        boxColor: "light-green",
        icon: Images.iconCloudSolutions02,
        title: "Model Training",
        description: "We preprocess and annotate data, train models using various techniques, and build an ensemble of models to achieve optimal performance. We prioritize security and compliance in our MLOps services."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconCloudSolutions03,
        title: "Model Deployment",
        description: "We deploy resilient, scalable and secure ML solutions to production environments. We integrate the solution into your business software and conduct rigorous testing to guarantee adherence to quality standards."
    },
    {
        boxColor: "light-purple",
        icon: Images.iconCloudSolutions04,
        title: "Model Maintenance",
        description: "We continuously monitor and improve model performance, retraining it with new data as required. We also provide user training and support, and create tutorials and optimization strategies on request."
    }
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "Is there any difference between ML and MLOps?",
        description: [
            "Yes, both are different. Machine Learning (ML) is a subset of AI that focuses on creating algorithms to learn from data and make predictions. MLOps (Machine Learning Operations), on the other hand, is a set of practices that ensure the smooth deployment and maintenance of ML models in production, bridging the gap between data scientists and operations teams.",
        ],
        list: [
            "<strong>ML</strong> is about creating intelligent models.",
            "<strong>MLOps</strong> is about deploying and managing those models in production.",
        ],
        descriptionTwo: [
            "In essence, MLOps ensures that ML models transition smoothly from development to production and continue to perform effectively over time."
        ],
    },
    {
        eventKey: "1",
        title: "How can MLOps accelerate my business growth?",
        description: [
            "In today's data-driven world, machine learning is the key to unlocking valuable insights. Its ability to analyze data and make accurate predictions makes it a powerful tool for any industry.",
            "We provide industry-specific MLOps development services through expert engineers. Our MLOps services can streamline your ML workflows, improve model performance, and drive innovation in your business. ",
        ],
    },
    {
        eventKey: "2",
        title: "Does your MLOps team have certified experts?",
        description: [
            "Yes, our MLOps team is composed of highly skilled and certified professionals who are experts in their field.",
        ],
    },
    {
        eventKey: "3",
        title: "What is the typical timeline for developing a custom MLOps solution?",
        description: [
            "The time needed to develop an MLOps solution varies significantly based on specific project requirements. Factors such as the complexity of the model, the extent of testing, the number of team members, and the desired level of automation can all influence the development timeline.",
            "To get a precise estimate for your particular project, consulting with our MLOps experts is the best approach. They will assess your unique needs and provide a tailored timeline. Contact us today for a free consultation.",
        ],
    },
    {
        eventKey: "4",
        title: "How do you start with an MLOps project?",
        description: [
            "Each machine learning project involves a thorough examination of the company's business requirements and the identification of the most suitable technological solution. We also build a PoC (Proof of Concept) to demonstrate the feasibility of the proposed solution if required.",
        ],
    },
    {
        eventKey: "5",
        title: "Do I need to pay for ML model training infrastructure?",
        description: [
            "We've got the training covered on our side. We handle the training phase of the ML models on our own infrastructure. You'll only require infrastructure to deploy the solution once development is complete.",
        ],
    },
];
const stats = [
    { value: "20+", description: "dedicated MLOps engineers" },
    { value: "98.5%", description: "client retention rate" },
    { value: "80+", description: "successful projects" },
    { value: "Up to 60%", description: "savings on staffing" }
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

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, developmentFlow, engagementModels, gridsContent, workSliderData, accordionFaqsData, stats };