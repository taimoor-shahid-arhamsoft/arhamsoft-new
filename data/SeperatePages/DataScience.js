import { Images } from "@/assets/assets";

const bannerHeading = <h1>Unlock Business Growth with Cutting-Edge Data Science Techniques</h1>;
const bannerText = <p>With our data science development services, we can help you identify patterns, forecast trends, optimize processes & enhance customer experiences, all while ensuring data security and scalability.</p>;
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.dataScienceOffer01,
        iconHover: Images.dataScienceOfferHover01,
        title: "Data Engineering",
        description: "Streamline your data infrastructure for faster insights and decision-making. Our team designs and builds scalable, efficient data pipelines tailored to your business needs."
    },
    {
        iconDefault: Images.dataScienceOffer02,
        iconHover: Images.dataScienceOfferHover02,
        title: "Business Intelligence",
        description: "Unlock valuable insights from your data to drive informed decisions. We implement advanced BI tools to transform raw data into actionable dashboards and reports."
    },
    {
        iconDefault: Images.dataScienceOffer03,
        iconHover: Images.dataScienceOfferHover03,
        title: "Machine Learning",
        description: "Enhance your business operations with predictive insights. Our experts develop custom machine learning models that evolve with your data to solve complex challenges."
    },
    {
        iconDefault: Images.dataScienceOffer04,
        iconHover: Images.dataScienceOfferHover04,
        title: "Data Analytics",
        description: "Make data-driven decisions with precise, actionable analytics. We use cutting-edge techniques to analyze your data and provide clear, actionable reports to guide strategy."
    },
    {
        iconDefault: Images.dataScienceOffer05,
        iconHover: Images.dataScienceOfferHover05,
        title: "Data Consulting",
        description: "Optimize your data strategy & infrastructure for maximum efficiency. Our consultants work with you to design & implement data-driven solutions that align with your goals."
    },
    {
        iconDefault: Images.dataScienceOffer06,
        iconHover: Images.dataScienceOfferHover06,
        title: "AI Development",
        description: "Leverage artificial intelligence to automate processes & drive innovation. Our tailored AI solutions enable smarter systems & enhanced performance."
    }
];
const servicesBoxesContent = [
    {
        iconDefault: Images.dataScienceExcellence01,
        title: "Understanding the Problem",
        description: "We thoroughly understand your business challenges, objectives, and data needs to craft a tailored data science solution."
    },
    {
        iconDefault: Images.dataScienceExcellence02,
        title: "Defining Objectives & KPIs",
        description: "We work with you to define measurable goals and key performance indicators that will drive success."
    },
    {
        iconDefault: Images.dataScienceExcellence03,
        title: "Data Collection",
        description: "We gather relevant data from diverse sources, ensuring the completeness and accuracy necessary for effective analysis."
    },
    {
        iconDefault: Images.dataScienceExcellence04,
        title: "Data Integration",
        description: "Our team integrates data from multiple platforms into a cohesive dataset, ensuring consistency and reliability across sources."
    },
    {
        iconDefault: Images.dataScienceExcellence05,
        title: "Data Preprocessing",
        description: "We clean & preprocess your data by handling missing values, duplicates, and inconsistencies, ensuring it’s ready for analysis."
    },
    {
        iconDefault: Images.dataScienceExcellence06,
        title: "Data Transformation",
        description: "We apply necessary transformations to your data, such as normalization and feature engineering, to enhance model performance."
    },
    {
        iconDefault: Images.dataScienceExcellence07,
        title: "Exploratory Data Analysis",
        description: "We perform in-depth exploratory analysis to uncover patterns, trends, and correlations that guide further modeling decisions."
    },
    {
        iconDefault: Images.dataScienceExcellence08,
        title: "Data Visualization",
        description: "We create interactive and visually engaging dashboards that provide clear insights from complex datasets."
    },
    {
        iconDefault: Images.dataScienceExcellence09,
        title: "Model Development",
        description: "We choose the most suitable machine learning models based on your business problem and the nature of your data."
    },
    {
        iconDefault: Images.dataScienceExcellence10,
        title: "Model Training",
        description: "We train the selected models using historical data to enable accurate predictions and insightful analysis."
    },
    {
        iconDefault: Images.dataScienceExcellence11,
        title: "Model Evaluation",
        description: "We rigorously evaluate model performance using validation techniques and performance metrics to ensure its robustness."
    },
    {
        iconDefault: Images.dataScienceExcellence12,
        title: "Hyperparameter Tuning",
        description: "We optimize model performance through fine-tuning hyperparameters, ensuring the best possible accuracy and efficiency."
    },
    {
        iconDefault: Images.dataScienceExcellence13,
        title: "Model Deployment",
        description: "We deploy the trained models into your business environment, ensuring seamless integration and real-time functionality."
    },
    {
        iconDefault: Images.dataScienceExcellence14,
        title: "Monitoring & Maintenance",
        description: "We continuously monitor model performance post-deployment and update it regularly to maintain accuracy and relevancy."
    },
    {
        iconDefault: Images.dataScienceExcellence15,
        title: "Reporting & Insights",
        description: "We deliver comprehensive reports and insights, offering actionable recommendations that empower your decision-making process."
    },
];
const outcomes = [
    "Automate Repetitive Processes",
    "Empowered Decision-Making",
    "Boost Operational Efficiency",
    "Drive Product Innovation",
    "Forecast Future Trends",
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconCloudSolutions01,
        title: "Business Process",
        subTitle: "Automation",
        description: "We automate multi-step business workflows to save time, reduce errors, and ensure consistency across processes. By connecting data throughout, we help you make informed decisions with insights gathered at every stage."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconCloudSolutions02,
        title: "IoT Data",
        subTitle: "Solutions",
        description: "Our IoT Data Solutions integrate sensor data into your pipeline, providing real-time analytics and automated actions. We analyze and visualize the data through custom dashboards, triggering notifications and alerts via SMS, email, or any platform you prefer."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconCloudSolutions01,
        title: "Data Pipeline",
        subTitle: "Building",
        description: "We build seamless data pipelines to aggregate and validate your data from multiple sources, creating a unified, reliable source of truth. Our solutions ensure clean, high-quality data ready for any application or service you need."
    },
    {
        boxColor: "light-green",
        icon: Images.iconCloudSolutions02,
        title: "Machine Learning",
        subTitle: "Modeling",
        description: "We develop custom machine learning models to predict future trends based on historical data, helping you stay ahead. Our solutions are tailored to your industry needs and can be seamlessly integrated into your systems or hosted by us for ongoing optimization."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconCloudSolutions03,
        title: "Computer Vision",
        subTitle: "Solutions",
        description: "We leverage advanced AI tools to enhance content discoverability, automate text extraction, and enable real-time video analysis. We provide accurate object labeling, content moderation, and deploy solutions on-cloud."
    },
    {
        boxColor: "light-purple",
        icon: Images.iconCloudSolutions04,
        title: "Advanced",
        subTitle: "Analytics",
        description: "We empower you with real-time analytics by building seamless data pipelines and integrating them with top visualization tools like Power BI, Tableau, and more. Our team also creates custom dashboards, tailored to your unique needs."
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
const boxesContent = [
    {
        icon: Images.iconDataScienceEngage01,
        boxColor: "orange",
        title: "Dedicated Team",
        description: "Get flexible, long-term support from expert team dedicated to your project, delivering tailored solutions.",
        link: true,
        linkTo: "/contact-us",
        linkText: "Partner With Specialist",
    },
    {
        icon: Images.iconDataScienceEngage02,
        boxColor: "blue",
        title: "Offshore Development Center",
        description: "You can leverage our offshore development center for cost-effective, scalable data science solutions.",
        link: true,
        linkTo: "/contact-us",
        linkText: "Engage Our Expert Team",
    },
    {
        icon: Images.iconDataScienceEngage03,
        boxColor: "farozi",
        title: "Fixed Price Projects",
        description: "Choose tailored fixed-price projects with clear deliverables and timelines for predictable costs.",
        link: true,
        linkTo: "/contact-us",
        linkText: "Get A Fixed Price Estimate",
    }
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What is your approach to understanding the business problem before starting the data analysis?",
        description: [
            "Our approach starts with a deep understanding of your business goals. We conduct detailed discussions with stakeholders to identify key pain points, objectives, and KPIs. This allows us to align our data science strategies with your business outcomes.",
        ],
    },
    {
        eventKey: "1",
        title: "How do you ensure the data quality and reliability for the analysis?",
        description: [
            "We conduct thorough data cleaning, validation, and preprocessing to handle missing values, outliers, and inconsistencies. We use techniques like cross-validation and data auditing to ensure the integrity and reliability of the dataset before analysis.",
        ],
    },
    {
        eventKey: "2",
        title: "Can you handle data from multiple sources?",
        description: [
            "Yes, we have expertise in integrating and processing data from diverse sources, including databases, APIs, CSVs, Excel files, web scraping, and IoT devices. We ensure all data is harmonized for analysis.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you handle sensitive or confidential data?",
        description: [
            "We comply with all data privacy regulations (GDPR, HIPAA, etc.) and implement strict access control mechanisms. Sensitive data is encrypted, and we follow best practices to protect it at every stage of processing.",
        ],
    },
    {
        eventKey: "4",
        title: "What is your experience with big data technologies?",
        description: [
            "We have extensive experience with big data tools like Hadoop, Spark, and distributed computing systems. We use these technologies to process and analyze large volumes of data efficiently.",
        ],
    },
    {
        eventKey: "5",
        title: "How do you determine which machine learning model to use for a specific problem?",
        description: [
            "We assess the problem, data, and desired outcome to choose the best model. We test algorithms (e.g., regression, classification, clustering) and evaluate performance using cross-validation and metrics like accuracy, precision, and recall.",
        ],
    },
];

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, servicesBoxesContent, outcomes, gridsContent, boxesContent, accordionFaqsData, workSliderData };