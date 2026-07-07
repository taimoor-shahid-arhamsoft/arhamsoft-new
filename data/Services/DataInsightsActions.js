import { Images } from "@/assets/assets";

const bannerHeading = <h1>Decoding Insights into Strategic Actions</h1>;
const bannerText = <p>Solving your data challenges, we craft scalable analytics operating models that allow value to be delivered at scale.</p>;
const boxesContent = [
    {
        icon: Images.dataInsightsOfferOne,
        boxColor: "orange",
        title: "Data Insight Services",
        description: "Go from information to insights. With the right data, you can accurately predict the outcomes, optimize operations and enhance customer satisfaction.",
    },
    {
        icon: Images.dataInsightsOfferTwo,
        boxColor: "blue",
        title: "Power BI Analytics",
        description: "Discover insights hidden in your data. Microsoft’s Power BI enables creating and sharing interactive data visualization for reporting and compliance.",
    },
    {
        icon: Images.dataInsightsOfferThree,
        boxColor: "farozi",
        title: "Location-Based Analytics",
        description: "Consolidate & streamline multiple information sources. Gain valuable insights into consumer behavior with real-time location data for improved ROI.",
    },
];
const expertise = [
    {
        icon: Images.iconDIWYG01,
        title: "Big Data Analytics",
        description: "Analyze large datasets, accommodate your growing data volumes and processing needs with our industry-leading big data analytics solutions."
    },
    {
        icon: Images.iconDIWYG02,
        title: "Managed Services",
        description: "Providing a complete suite of data analysis and modeling services, ensuring that your data analytics initiatives deliver maximum value."
    },
    {
        icon: Images.iconDIWYG03,
        title: "Custom AI Development",
        description: "Offering custom AI solutions that can integrate seamlessly with your organization's existing infrastructure and workflows."
    },
    {
        icon: Images.iconDIWYG04,
        title: "AI-as-a-Service",
        description: "Delivering AI models in two forms: pre-trained models for immediate use and customizable platforms for training your own unique models for data analysis."
    },
    {
        icon: Images.iconDIWYG05,
        title: "Cloud Data Platforms",
        description: "We build cutting-edge cloud-based data platforms, providing robust and scalable foundation for analytics and enable you to extract valuable insights from your data."
    },
    {
        icon: Images.iconDIWYG06,
        title: "BI & Analytics",
        description: "Employing advanced data visualization techniques, we specialize in delivering use case-specific data analytics solutions that communicate complex insights clearly and effectively."
    }
];
const howWeDos = [
    {
        icon: Images.iconDISIT01,
        title: "Data Ingestion & Preparation",
        description: "Collect, cleanse and transform data from various sources to ensure data quality and consistency."
    },
    {
        icon: Images.iconDISIT02,
        title: "Data Exploration & Analysis",
        description: "Analyze data patterns and trends using statistical methods and machine learning techniques."
    },
    {
        icon: Images.iconDISIT03,
        title: "Data Modeling & Visualization",
        description: "Develop data models and visualizations using tools like Tableau or Power BI to communicate findings effectively."
    },
    {
        icon: Images.iconDISIT04,
        title: "Predictive Analytics & Machine Learning",
        description: "Forecast future trends with data and machine learning, providing actionable insights for decision-making."
    },

];
const whatWeDoTitle = <h2>Advanced Data Analytics<span className="d-block">Fueling Growth</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconDICustDefault01,
        iconHover: Images.iconDICustHover01,
        title: "Sales Information",
        description: "Turn your sales data into actionable insights to improve customer satisfaction."
    },
    {
        iconDefault: Images.iconDICustDefault02,
        iconHover: Images.iconDICustHover02,
        title: "Customer Behavior",
        description: "Leverage customer data to understand preferences, predict behavior & deliver personalized experiences."
    },
    {
        iconDefault: Images.iconDICustDefault03,
        iconHover: Images.iconDICustHover03,
        title: "Supply Chain Trends",
        description: "Optimize your supply chain using data to forecast trends, identify bottlenecks and improve efficiency."
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

export { bannerHeading, bannerText, workSliderData, whatWeDoTitle, whatWeDos, boxesContent, howWeDos, expertise };