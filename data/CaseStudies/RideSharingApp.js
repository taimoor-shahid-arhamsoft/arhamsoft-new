import { Images } from "@/assets/assets";

const bannerHeading = <h1>An Innovative <br />Ridesharing Solution</h1>;
const bannerText = <p>With innovative ride-booking services, this mobility app aimed to become a leading player in the transportation industry, enhancing user experience and boosting efficiency.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconMirydeWWDDefault01,
        iconHover: Images.iconMirydeWWDHover01,
        title: "Riders",
        description: "Offering a seamless and convenient booking experience with features like real-time tracking, fare estimates, and multiple payment options."
    },
    {
        iconDefault: Images.iconMirydeWWDDefault02,
        iconHover: Images.iconMirydeWWDHover02,
        title: "Drivers",
        description: "Providing a user-friendly app with tools for efficient trip management, earnings tracking, and route optimization."
    },
    {
        iconDefault: Images.iconMirydeWWDDefault03,
        iconHover: Images.iconMirydeWWDHover03,
        title: "Fleet Managers",
        description: "Empowering fleet managers with advanced analytics and tools to monitor vehicle performance, driver behavior, and overall fleet efficiency."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconMirydeFeature01,
        title: "Real-Time Tracking",
        description: "Implementing accurate GPS tracking to provide real-time updates on vehicle location and estimated arrival time."
    },
    {
        iconDefault: Images.iconMirydeFeature02,
        title: "Fare Optimization",
        description: "Developing a dynamic pricing algorithm to adjust fares based on demand, traffic conditions, and time of day."
    },
    {
        iconDefault: Images.iconMirydeFeature03,
        title: "Payment Integration",
        description: "Integrating with multiple payment gateways to offer flexible payment options for riders."
    },
    {
        iconDefault: Images.iconMirydeFeature04,
        title: "Driver Ratings And Reviews",
        description: "Incorporating a rating system to encourage quality service and accountability among drivers."
    },
    {
        iconDefault: Images.iconMirydeFeature05,
        title: "In-App Communication",
        description: "Enabling direct communication between riders and drivers to facilitate smooth interactions."
    },
    {
        iconDefault: Images.iconMirydeFeature06,
        title: "Safety Features",
        description: "Integrating safety features such as emergency assistance and background checks for drivers."
    },
    {
        iconDefault: Images.iconMirydeFeature07,
        title: "Analytics And Reporting",
        description: "Providing detailed analytics and reporting tools to track key performance metrics and identify areas for improvement."
    },
];
const challengeKeyPoints = [
    { text: "Ensuring a fair and equitable platform for both riders and drivers, addressing concerns such as surge pricing, driver incentives, and rider safety." },
    { text: "Competing with established ride-sharing companies and local taxi services while differentiating this mobility app through unique features and value propositions." },
    { text: "Designing a platform that can handle increasing user demand and maintain optimal performance under heavy load." }
];
const leftBlockHeading = {
    title: "Revolutionize",
    subTitle: "Personal Mobility"
};
const leftBlockBullets = [
    {
        title: "Seamless User Experience:",
        description: "Provide a user-friendly app for both riders and drivers, simplifying the process of booking and providing rides."
    },
    {
        title: "Real-Time Tracking:",
        description: "Utilize advanced GPS technology to enable real-time tracking of vehicle locations and estimated arrival times."
    },
    {
        title: "Multiple Payment Options:",
        description: "Integrate with various payment gateways to offer flexible payment options for riders."
    },
    {
        title: "Safety and Security:",
        description: "Prioritize user safety by implementing robust security measures and background checks for drivers."
    }
];
const rightBlockHeading = {
    title: "Empower",
    subTitle: " Fleet Management"
};
const rightBlockBullets = [
    {
        title: "Fleet Optimization:",
        description: "Provide fleet managers with tools to optimize vehicle utilization, reduce operational costs, and improve efficiency."
    },
    {
        title: "Driver Management:",
        description: "Enable fleet managers to effectively manage driver schedules, performance, and incentives."
    },
    {
        title: "Data-Driven Insights:",
        description: "Utilize analytics and reporting tools to track key performance indicators and make data-driven decisions."
    }
];
const firstSection = {
    heading: "Before:",
    contentTexts: [
        { text: "<p>A basic taxi booking app with limited features and a simple user interface.</p>" },
        { text: "<p>This mobility app primarily focused on individual riders.</p>" },
        { text: "<p>Its operational activities were limited to specific geographic areas.</p>" }
    ],
};
const secondSection = {
    heading: "After:",
    paraBulletsContent: [
        {
            paragraph: "<p>A comprehensive mobility platform offering a wide range of services, including:</p>",
            bullets: [
                { text: "<p><strong class='text-theme'>Real-time tracking:</strong> Users can track their ride in real-time.</p>" },
                { text: "<p><strong class='text-theme'>Multiple payment options:</strong> Users can choose from various payment methods.</p>" },
                { text: "<p><strong class='text-theme'>Driver ratings and reviews:</strong> Users can rate and review drivers.</p>" },
                { text: "<p><strong class='text-theme'>In-app messaging:</strong> Users can communicate with drivers directly.</p>" },
                { text: "<p><strong class='text-theme'>Ride scheduling:</strong> Users can schedule rides in advance.</p>" },
            ]
        },
        {
            paragraph: "<p>Expanded its services to cater to businesses and corporate clients, offering:</p>",
            bullets: [
                { text: "<p><strong class='text-theme'>Fleet management:</strong> Tools for managing and tracking a fleet of vehicles.</p>" },
                { text: "<p><strong class='text-theme'>Corporate accounts:</strong> Customized solutions for corporate clients.</p>" },
                { text: "<p><strong class='text-theme'>Enterprise mobility solutions:</strong> Integrated transportation solutions for large organizations.</p>" },
            ]
        },
        {
            paragraph: "<p>The operations expanded to multiple cities across the country, offering seamless mobility solutions to users looking for reliable, affordable, and convenient transportation options.</p>",
        }
    ]
};
const resultSliderImages = [
    { image: Images.ImgMiRydeResult01 },
    { image: Images.ImgMiRydeResult02 },
    { image: Images.ImgMiRydeResult03 },
    { image: Images.ImgMiRydeResult04 },
    { image: Images.ImgMiRydeResult05 },
];
const feedbackText = [
    { text: "Excellent work as expected. The best thing is post-development support through dedicated software engineers to keep our product in shape." }
];
const teamDetails = [
    { counter: "2", detail: "Mobile Developers" },
    { counter: "2", detail: "PHP Developers" },
    { counter: "1", detail: "Frontend Developers" },
    { counter: "1", detail: "UX/UI Designer" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "Product Design" },
    { text: "Custom Software Development" },
    { text: "Mobile App Development" },
    { text: "Software Testing" },
    { text: "Post-Deployment Support" }
];
const techStacks = [
    { stackName: "Swift", image: Images.MiRydeStack01 },
    { stackName: "Kotlin", image: Images.MiRydeStack02 },
    { stackName: "Laravel", image: Images.MiRydeStack03 },
    { stackName: "MySQL", image: Images.MiRydeStack04 },
    { stackName: "AWS", image: Images.MiRydeStack05 },
    { stackName: "Bambora", image: Images.MiRydeStack06 },
    { stackName: "Google Map API", image: Images.MiRydeStack07 },
    { stackName: "Mapbox", image: Images.MiRydeStack08 },
];
const solutionTabContent = [
    {
        tabImage: Images.imgCSMRSol01,
        heading: "Discovery & Planning",
        contentTexts: [
            { text: "<p><strong>Problem:</strong> Our client wanted a user-friendly and efficient platform. The primary goal was to streamline the process of booking rides and connecting riders with drivers.</p>" },
            { text: "<p><strong>Solution:</strong> We conducted in-depth research to understand the specific needs of riders and drivers. This involved analyzing market trends, user feedback, and competitive landscapes. Based on these insights, we defined the core functionalities of the platform, including:</p>" },
        ],
        keyPoints: [
            { text: "Real-time tracking" },
            { text: "Secure payment options" },
            { text: "Driver ratings and reviews" },
            { text: "In-app messaging" },
            { text: "Emergency assistance" }
        ]
    },
    {
        tabImage: Images.imgCSMRSol02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>Problem:</strong> The challenge was to create a visually appealing and intuitive user interface that would be easy to navigate for both riders and drivers. Additionally, we needed to develop a robust backend system to handle user authentication, payment processing, and real-time tracking.</p>" },
            { text: "<p><strong>Solution:</strong> We designed a user-centered interface with clear navigation and intuitive features. The backend system was built using scalable and reliable technologies to ensure optimal performance. Key features implemented during this stage included:</p>" },
        ],
        keyPoints: [
            { text: "User registration and profile management" },
            { text: "Ride request and acceptance" },
            { text: "Fare calculation and payment processing" },
            { text: "GPS-based navigation and route optimization" },
            { text: "Push notifications for updates and alerts" }
        ]
    },
    {
        tabImage: Images.imgCSMRSol03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Problem:</strong> Ensuring the platform's reliability, security, and performance was crucial before launching it to the public. We needed to identify and address any potential bugs or issues.</p>" },
            { text: "<p><strong>Solution:</strong> We conducted rigorous testing, including unit testing, integration testing, and user acceptance testing. This involved simulating real-world scenarios to identify and fix any problems. Once the platform was thoroughly tested, we deployed it to the market. We continued to monitor the platform's performance and gather user feedback to make necessary adjustments.</p>" },
        ],
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, firstSection, teamDetails, expertiseDetails, techStacks, feedbackText, leftBlockHeading, leftBlockBullets, rightBlockHeading, rightBlockBullets, secondSection, resultSliderImages };