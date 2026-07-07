import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire Shopify <span className="d-block">Developers</span></h1>;
const bannerText = <p>Scale your business with high-performing eCommerce platforms. Being a Shopify development company, we drive eCommerce transformation in the retail industry with custom tools and resources.</p>;
const whatWeDoTitle = <h2><span className="d-block">Shopify Development Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.InnoShopifyOne,
        iconHover: Images.InnoShopifyOneHover,
        title: "Shopify Store Setup",
        description: "From setting up your domain name and hosting to integrating your social media accounts, our Shopify experts handle every aspect of your store's setup."
    },
    {
        iconDefault: Images.InnoShopifyTwo,
        iconHover: Images.InnoShopifyTwoHover,
        title: "Custom Store Design",
        description: "Elevate your store's appearance and functionality with our expertise in Shopify features and design trends, driving conversions."
    },
    {
        iconDefault: Images.InnoShopifyThree,
        iconHover: Images.InnoShopifyThreeHover,
        title: "Shopify Theme Development",
        description: "Build a mobile-ready Shopify theme tailored to your brand and business goals. We specialize in optimizing your online store to increase sales and drive growth."
    },
    {
        iconDefault: Images.shopifyServices04,
        iconHover: Images.shopifyServicesHover04,
        title: "Custom App Development",
        description: "Our Shopify website and mobile app development services can help you expand your business online, from brick-and-mortar to feature-rich digital stores."
    },
    {
        iconDefault: Images.shopifyServices05,
        iconHover: Images.shopifyServicesHover05,
        title: "Shopify Store Migration",
        description: "From data to design, we offer end-to-end migration services to seamlessly transfer your eCommerce store to Shopify, enhancing the user experience."
    },
    {
        iconDefault: Images.shopifyServices06,
        iconHover: Images.shopifyServicesHover06,
        title: "Support & Maintenance",
        description: "Hire dedicated Shopify developer to not only build but also maintain your store long-term, minimizing downtime and maximizing performance."
    },
];
const stats = [
    { value: "30+", description: "Certified Shopify Developers" },
    { value: "1K+", description: "Weekly Hours Served" },
    { value: "98.2%", description: "Client Retention Rate" },
    { value: "08+", description: "Years of Proven Expertise" }
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What can your Shopify experts build for my business?",
        description: [
            "Our Shopify developers develop custom Shopify templates and themes and can convert PSD designs into Shopify-compatible templates. They are pro at building custom Shopify apps to tailor your store to your exact needs. They can also make theme changes and tweaks to existing themes and integrate third-party services to enhance your store's functionality.",
        ],
    },
    {
        eventKey: "1",
        title: "What's the ballpark figure for time and cost to build my product?",
        description: [
            "At Data on Matrix, we prioritize client’s time and budget. We tailor timelines and costs to suit your specific project, considering its size, complexity and requirements. We collaborate with our clients to develop a comprehensive product roadmap that aligns with their business objectives and delivers on time. To obtain a detailed cost estimate for your Shopify project, please contact our team.",
        ],
    },
    {
        eventKey: "2",
        title: "Who will be the primary point of contact for communication and updates regarding my Shopify project?",
        description: [
            "When you hire Shopify expert from Data on Matrix, you will be in direct communication with him and the project manager via Skype, Slack or JIRA. Direct access to your dedicated developer ensures you're always in the loop, which guarantees a smooth and transparent project journey.",
        ],
    },
    {
        eventKey: "3",
        title: "What's the tech behind Data on Matrix’s work?",
        description: [
            "We prioritize your needs. Our team's deep technical expertise spans multiple code stacks and frameworks. We're committed to selecting the best tools for each project, ensuring optimal results that meet your specific requirements."
        ],
    },
    {
        eventKey: "4",
        title: "Can you migrate my existing eCommerce store to Shopify?",
        description: [
            "Definitely. We offer professional migration services to help you move your store from your existing platform to Shopify. Our services include transferring products, customers, orders, and more. Our expert team can ensure a smooth and efficient transition.",
        ],
    },
    {
        eventKey: "5",
        title: "What ongoing maintenance and optimization services do you provide once my Shopify store is live?",
        description: [
            "As a leading Shopify development agency, we pledge to ensure your satisfaction by providing post-deployment support and maintenance to ensure a smooth user experience. Our expert team delivers exceptional Shopify theme and web development services with glitch-free user experiences. With our 24/7 availability, you can rest assured that your website is always in capable hands. ",
        ],
    },
];
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "HTML, CSS, JavaScript, React, Shopify Liquid" },
    { text: "Shopify API, Shopify CLI, Node.js, PHP, Python" },
    { text: "MongoDB, MySQL, PostgreSQL, Shopify Cloud" },
];
const steps = [
    { number: "01", text: "Identify Resources", colorClass: "bg-farozi" },
    { number: "02", text: "Review Profile", colorClass: "bg-orange" },
    { number: "03", text: "Select Candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize Team", colorClass: "bg-blue" },
    { number: "05", text: "Start Working", colorClass: "bg-green" }
];
const reviewTitle = <h2 className="mb-2 mb-sm-0 text-center text-sm-start"><span>Happy</span> Clients</h2>;
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
const fourBoxesContent = [
    {
        iconDefault: Images.shopifyDevelopment01,
        title: "Planning & Design",
        description: "Define project goals, features, and brand vision to choose a suitable theme. Design prototypes to visually map out the store's layout."
    },
    {
        iconDefault: Images.shopifyDevelopment02,
        title: "Setup & Configuration",
        description: "Create a Shopify account, configure basic settings, customize its theme, set up shipping, taxes, and payments, then add products."
    },
    {
        iconDefault: Images.shopifyDevelopment03,
        title: "Custom Development",
        description: "Build unique features, extend functionality with third-party apps, optimize for speed and SEO & ensure quality through rigorous testing."
    },
    {
        iconDefault: Images.shopifyDevelopment04,
        title: "Launch & Maintenance",
        description: "Launch your store, track its performance and keep it updated with the latest features. We provide prompt support to address any issues."
    },
];
const industries = [
    { title: "Fashion & Apparel", image: Images.SpecificIndusOne },
    { title: "Electronics & Gadgets", image: Images.SpecificIndusTwo },
    { title: "Food & Beverage", image: Images.SpecificIndusThree },
    { title: "Health & Wellness", image: Images.SpecificIndusFour },
    { title: "Beauty & Cosmetics", image: Images.SpecificIndusFive },
    { title: "Art & Collectibles", image: Images.SpecificIndusSix },
    { title: "Home Goods & Decor", image: Images.SpecificIndusSeven },
    { title: "Books & Media", image: Images.SpecificIndusEight },
    { title: "Sports & Outdoors", image: Images.SpecificIndusNine },
    { title: "Jewelry & Accessories", image: Images.SpecificIndusTen },
    { title: "Handmade Crafts", image: Images.SpecificIndusEleven },
    { title: "Dropshipping", image: Images.SpecificIndustweleve },
];
const aboutCards = [
    {
        title: "All-In-One",
        subtitle: "Solution",
        description: "Leverage our deep understanding of B2B and B2C eCommerce to unlock Shopify's full potential, from seamless wholesale selling to streamlined order management, for increased revenue.",
        color: "blue",
        image: Images.shopifyPartnerNew01,
    },
    {
        title: "Scalable",
        subtitle: "Customization",
        description: "Create unique shopping experiences with our advanced Shopify solutions, empowering you to personalize product offerings, pricing strategies, and purchasing processes for customers.",
        color: "green",
        image: Images.shopifyPartnerNew02,
    },
];
const statsCards = [
    { icon: Images.shopifyPartner01, text: "Cost Efficient", color: "orange" },
    { icon: Images.shopifyPartner02, text: "Minimal Timelines", color: "dark-blue" },
    { icon: Images.shopifyPartner03, text: "Quality Standards", color: "teal" },
    { icon: Images.shopifyPartner04, text: "Lifetime Support", color: "purple" },
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

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, reviewTitle, accordionFaqsData, stats, engagementModels, fourBoxesContent, expertiseHead, expertiseHeadTwo, expertise, workSliderData, steps, industries, aboutCards, statsCards };