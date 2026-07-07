import { Images } from "@/assets/assets";

const bannerHeading = <h1>Ecommerce Solution <br />Powered By Shopify</h1>;
const bannerText = <p>A unified, customizable B2C eCommerce solution built on the robust Shopify platform to streamline online sales and improve customer experience. </p>;
const servicesBoxesContent = [
    {
        iconDefault: Images.iconReverseLifeSevices01,
        title: "Customized Theme",
        description: "A human-centered UI/UX with careful attention to reflecting the brand identity."
    },
    {
        iconDefault: Images.iconReverseLifeSevices02,
        title: "Seamless Checkout ",
        description: "A swift, simplified and seamless checkout process to minimize cart abandonment."
    },
    {
        iconDefault: Images.iconReverseLifeSevices03,
        title: "Mobile Accessible",
        description: "E-commerce store optimized for mobile devices to cater to on-the-go shoppers."
    },
    {
        iconDefault: Images.iconReverseLifeSevices04,
        title: "Payment Gateways",
        description: "Integrate trusted payment gateways to ensure secure transactions for customers."
    },
    {
        iconDefault: Images.iconReverseLifeSevices05,
        title: "Advanced Analytics",
        description: "Utilize real-time analytics tools to track customer behavior and preferences."
    },
    {
        iconDefault: Images.iconReverseLifeSevices06,
        title: "Robust Scalability",
        description: "Scalable web architecture designed to accommodate high traffic volume."
    },
];
const challengeKeyPoints = [
    { strongText: "Brand Identity:", text: "Showcasing brand's commitment to health and sustainability through a seamless and personalized shopping experience." },
    { strongText: "Buyer Journey:", text: "Streamlining navigation and checkout by making the website easy to navigate and the purchasing process simple and efficient. " },
    { strongText: "Optimizing Performance:", text: "Ensuring fast loading times to provide a fast and enjoyable shopping experience for users on any device." },
];
const solutionTabContent = [
    {
        tabImage: Images.ReverseLifeSolTab01,
        heading: "Platform Selection & Customization",
        contentTexts: [
            { text: "<p><strong>Shopify Implementation:</strong> Leveraged the power of Shopify to build a robust and scalable e-commerce platform.</p>" },
            { text: "<p><strong>Brand Identity Integration:</strong> Developed a customized Shopify store that aligns with brand’s unique identity.</p>" },
            { text: "<p><strong>Mobile Optimization:</strong> Ensured a seamless shopping experience across all devices by optimizing the store for mobile access.</p>" },
        ],
    },
    {
        tabImage: Images.ReverseLifeSolTab02,
        heading: "Feature Enhancement & Integration",
        contentTexts: [
            { text: "<p><strong>App Integration:</strong> Integrated essential Shopify apps to enhance the store's functionality and user experience.</p>" },
            { text: "<p><strong>Custom App Development:</strong> Built a custom application using Node.js, MongoDB, and React to address specific business requirements.</p>" },
        ],
    },
    {
        tabImage: Images.ReverseLifeSolTab03,
        heading: "Testing, Deployment & Ongoing Support",
        contentTexts: [
            { text: "<p><strong>Rigorous Testing:</strong> Conducted comprehensive testing to identify and resolve issues before launch.</p>" },
            { text: "<p><strong>Final Deployment:</strong> Successfully deployed the e-commerce platform to the live environment.</p>" },
            { text: "<p><strong>Ongoing Maintenance:</strong> Provided ongoing support and maintenance to ensure optimal performance and security.</p>" },
        ],
    },
];
const results = [
    {
        icon: Images.iconReverseLifeResult01,
        title: "Increased",
        subTitle: "Sales",
        text: "Consolidated online presence and optimized checkout process led to a boost in sales.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconReverseLifeResult02,
        title: "Enhanced ",
        subTitle: "Branding",
        text: "Consistent branding across all channels improved brand recognition and customer trust.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconReverseLifeResult03,
        title: "Improved ",
        subTitle: "eShopping",
        text: "A streamlined and user-friendly shopping experience increased customer satisfaction.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconReverseLifeResult04,
        title: "Efficient",
        subTitle: "Operations",
        text: "Automated processes reduced operational costs and increased efficiency.",
        boxColor: "#F5F2F8"
    },
];
const industryDetails = [
    { text: "eCommerce  " },
    { text: "Health & Beauty  " },
];
const teamDetails = [
    { counter: "2", detail: "Shopify Developers" },
    { counter: "1", detail: "UI/UX Designer" },
];
const expertiseDetails = [
    { text: "Shopify Development" },
    { text: "QA & Testing " },
];
const techStacks = [
    { stackName: "MongoDB", image: Images.iconReverseLifeTech01 },
    { stackName: "jQuery", image: Images.iconReverseLifeTech02 },
    { stackName: "HTML5", image: Images.iconReverseLifeTech03 },
    { stackName: "CSS3", image: Images.iconReverseLifeTech04 },
    { stackName: "React", image: Images.iconReverseLifeTech05 },
    { stackName: "Shopify Liquid", image: Images.iconReverseLifeTech06 },
    { stackName: "Shopify", image: Images.iconReverseLifeTech07 },
    { stackName: "Node.js", image: Images.iconReverseLifeTech08 },
    { stackName: "Vanilla JS", image: Images.iconReverseLifeTech09 },
];
const feedbackText = [
    { text: "The transformation of our online store has been a significant success. The team's expertise in Shopify has resulted in a platform that delivers a superior user experience. The optimization for speed and mobile devices has positively impacted our conversion rates. Their commitment to quality and customer satisfaction is commendable." }
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

export { bannerHeading, bannerText, techStacks, workSliderData, servicesBoxesContent, challengeKeyPoints, solutionTabContent, results, teamDetails, expertiseDetails, feedbackText, industryDetails };