import { Images } from "@/assets/assets";

const bannerHeading = <h1>Shopify-Powered <br />Ecommerce Solution</h1>;
const bannerText = <p>A high-performing Shopify store was developed with the objective of selling salon-quality hair care products, providing a seamless customer experience and enhancing customer satisfaction.</p>;
const feedbackText = [
    { text: "The Shopify store exceeded our expectations. The sleek design, easy-to-use features, and fast performance have been a game-changer for our business. Customers love the product recommendations and loyalty rewards, and our sales have never been better." }
];
const goals = [
    {
        icon: Images.iconGeniHairGoal01,
        title: "Seamless Experience",
        text: "Create a visually appealing and user-friendly website to engage customers and increase sales."
    },
    {
        icon: Images.iconGeniHairGoal02,
        title: "High-End Scalability",
        text: "Build a platform that can handle increasing traffic and transactions as the business grows."
    },
    {
        icon: Images.iconGeniHairGoal03,
        title: "Mobile Optimization",
        text: "Ensure a fully responsive design for flawless browsing and purchasing on mobile devices."
    },
];
const servicesBoxesContent = [
    {
        description: "Accurately translating GENI Hair's brand identity and values into a digital experience."
    },
    {
        description: "Designing a user-friendly interface that caters to diverse user needs and preferences."
    },
    {
        description: "Balancing website performance with complex functionalities and rich media content."
    },
    {
        description: "Implementing techniques to minimize page load times and improve site responsiveness."
    },
];
const solutions = [
    {
        counterIcon: Images.iconCSSol01,
        title: "Requirement",
        subTitle: "Analysis",
        text: "We conducted in-depth sessions with the project stakeholders to understand their business model, target audience, and pain points."
    },
    {
        counterIcon: Images.iconCSSol02,
        title: "Theme",
        subTitle: "Customization",
        text: "We created a bespoke Shopify theme reflecting GENI Hair’s brand identity, featuring a clean, modern design that highlights the products and brand story."
    },
    {
        counterIcon: Images.iconCSSol03,
        title: "Mobile-First",
        subTitle: "Approach",
        text: "Using responsive design principles, we ensured an optimal experience across devices, prioritizing seamless navigation and fast loading times."
    },
    {
        counterIcon: Images.iconCSSol04,
        title: "Payment",
        subTitle: "Gateway",
        text: "Shopify's integrated payment gateway for secure and seamless transactions, supporting multiple payment options."
    },
    {
        counterIcon: Images.iconCSSol05,
        title: "Performance",
        subTitle: "Optimization",
        text: "To enhance website performance, we optimized images for faster load times, leveraged Shopify's CDN for global content delivery, and streamlined code for improved page speed."
    },
    {
        counterIcon: Images.iconCSSol06,
        title: "Testing &",
        subTitle: "Deployment",
        text: "The platform was thoroughly tested and deployed, ensuring seamless functionality across devices, accurate inventory management and secure payment processing."
    },
];
const results = [
    {
        icon: Images.iconGeniHairResult01,
        title: "Increased",
        subTitle: "Sales Conversions",
        text: "Optimized product discovery and streamlined checkout processes led to significant sales growth.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconGeniHairResult02,
        title: "Improved",
        subTitle: "Customer Satisfaction",
        text: "Seamless browsing experience and efficient customer support contributed to higher customer satisfaction.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconGeniHairResult03,
        title: "Enhanced",
        subTitle: "Mobile Engagement",
        text: "Cross-platform compatibility and interactive content fostered increased customer engagement.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconGeniHairResult04,
        title: "Faster",
        subTitle: "Website Speed",
        text: "Accelerated load times resulted in a faster and more enjoyable shopping experience.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Hair Care" },
    { text: "eCommerce" }
];
const teamDetails = [
    { counter: "2", detail: "Shopify Developers" },
    { counter: "1", detail: "UI/UX Designer" },
];
const expertiseDetails = [
    { text: "Shopify Development" },
    { text: "QA & Testing" },
];
const techStacks = [
    { stackName: "HTML5", image: Images.iconGeniHairTech01 },
    { stackName: "CSS3", image: Images.iconGeniHairTech02 },
    { stackName: "JavaScript", image: Images.GeniHairStack03 },
    { stackName: "Shopify Liquid", image: Images.iconGeniHairTech04 },
    { stackName: "Shopify Platform", image: Images.iconGeniHairTech05 },
    { stackName: "Shopify APIs", image: Images.GeniHairStack05 },
    { stackName: "Shopify Cloud", image: Images.GeniHairStack06 },
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

export { bannerHeading, bannerText, workSliderData, goals, solutions, servicesBoxesContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, industryDetails };