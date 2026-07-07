import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire Full Stack <span className="d-block">Developer</span></h1>;
const bannerText = <p>Scale your team on-demand with our cost-effective, full-stack development solutions. Hire dedicated full stack developers and experience seamless business operations with our intuitive, tech-driven applications.</p>;
const whatWeDoTitle = <h2><span className="d-block">Full Stack Development Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.fullStack01,
        iconHover: Images.fullStackHover01,
        title: "Front-End Development",
        list: [
            { text: "Designing and building user interfaces" },
            { text: "Creating interactive web applications" },
            { text: "Implementing responsive design for all devices" },
        ]
    },
    {
        iconDefault: Images.fullStack02,
        iconHover: Images.fullStackHover02,
        title: "Back-End Development",
        list: [
            { text: "Developing server-side logic and APIs" },
            { text: "Managing databases and data storage" },
            { text: "Ensuring application security and performance" },
        ]
    },
    {
        iconDefault: Images.fullStack03,
        iconHover: Images.fullStackHover03,
        title: "Database Engineering",
        list: [
            { text: "Designing and optimizing database structures" },
            { text: "Implementing data security measures" },
            { text: "Managing and maintaining database performance" },
        ]
    },
    {
        iconDefault: Images.fullStack04,
        iconHover: Images.fullStackHover04,
        title: "API Development",
        list: [
            { text: "Building APIs for seamless integration" },
            { text: "Ensuring API security and authentication" },
            { text: "Optimizing API performance" },
        ]
    },
    {
        iconDefault: Images.fullStack05,
        iconHover: Images.fullStackHover05,
        title: "Cloud Enablement",
        list: [
            { text: "Deploying applications to cloud platforms" },
            { text: "Configuring and managing cloud infrastructure" },
            { text: "Ensuring high availability and scalability" },
        ]
    },
    {
        iconDefault: Images.fullStack06,
        iconHover: Images.fullStackHover06,
        title: "Quality Assurance",
        list: [
            { text: "Conducting thorough testing to identify & fix bugs" },
            { text: "Implementing automated testing frameworks" },
            { text: "Ensuring optimal performance & user experience" },
        ]
    },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "How can I hire a dedicated full-stack developer?",
        description: [
            "Simply reach out to us. We offer flexible hiring options, including full-time, part-time, and hourly rates.",
        ],
    },
    {
        eventKey: "1",
        title: "What pricing models do you offer?",
        description: [
            "We provide a variety of pricing models to suit your specific needs:",
        ],
        list: [
            "<strong>Fixed-Cost Pricing:</strong> Ideal for projects with well-defined scopes.",
            "<strong>Time & Material Pricing:</strong> Suitable for flexible projects with evolving requirements.",
            "<strong>Pay-As-You-Go:</strong> Perfect for short-term or on-demand projects.",
            "<strong>Hybrid Model:</strong> A combination of the above for complex projects.",
        ],
    },
    {
        eventKey: "2",
        title: "How can I track the progress of my project?",
        description: [
            "We keep you informed throughout the development process using our robust project management tools and preferred communication channels.",
        ],
    },
    {
        eventKey: "3",
        title: "Can I replace a developer mid-project?",
        description: [
            "While it's possible, please note that this may cause temporary delays. We have contingency plans in place to minimize disruption.",
        ],
    },
    {
        eventKey: "4",
        title: "How can I assess the skills of your developers?",
        description: [
            "You can review our portfolio, conduct Skype interviews, or assign coding tests to evaluate their expertise firsthand.",
        ],
    },
    {
        eventKey: "5",
        title: "Who owns the project's code?",
        description: [
            "You retain full ownership of the project's code and API.",
        ],
    },
    {
        eventKey: "6",
        title: "What additional benefits can I expect when hiring a full-stack development team?",
        description: [
            "In addition to our skilled developers, you'll gain access to a dedicated project manager to streamline the process and reduce your overall workload.",
        ],
    },
];
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "HTML, CSS, JavaScript, React, Angular, etc." },
    { text: "Node.js, Python, Ruby on Rails, Java, PHP, etc." },
    { text: "SQL, MySQL, MongoDB, RESTful APIs, etc." },
    { text: "Docker, Kubernetes, CI/CD Pipelines, etc." },
];
const steps = [
    { number: "01", text: "Identify resources", colorClass: "bg-farozi" },
    { number: "02", text: "Send profiles", colorClass: "bg-orange" },
    { number: "03", text: "Select candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize team", colorClass: "bg-blue" },
    { number: "05", text: "Start working", colorClass: "bg-green" }
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
const techImages = [
    { image: Images.fullStackTech01 },
    { image: Images.fullStackTech02 },
    { image: Images.fullStackTech03 },
    { image: Images.fullStackTech04 },
    { image: Images.fullStackTech05 },
    { image: Images.fullStackTech06 },
    { image: Images.fullStackTech07 },
    { image: Images.fullStackTech08 },
    { image: Images.fullStackTech09 },
    { image: Images.fullStackTech10 },
    { image: Images.fullStackTech11 },
    { image: Images.fullStackTech12 },
    { image: Images.fullStackTech13 },
    { image: Images.fullStackTech14 },
    { image: Images.fullStackTech15 },
    { image: Images.fullStackTech16 },
    { image: Images.fullStackTech17 },
    { image: Images.fullStackTech18 },
    { image: Images.fullStackTech19 },
];
const developmentServices = [
    {
        title: "Bridge Skill Gap",
        description: "If your organization lacks the necessary expertise and doesn't plan to acquire it internally, hiring dedicated developers is crucial.",
        icon: Images.developmentServices01,
        boxColor: "orange-box"
    },
    {
        title: "Sustainable Solution",
        description: "A long-term partnership with a dedicated team provides the flexibility and expertise to adapt to evolving project requirements.",
        icon: Images.fullStackServices02,
        boxColor: "blue-box"
    },
    {
        title: "Scalable Teams",
        description: "Seamlessly adjust your team size. Our flexible hiring model allows you to access top talent without disrupting your existing operations.",
        icon: Images.fullStackServices03,
        boxColor: "farozi-box"
    },
    {
        title: "Full-Cycle Development",
        description: "We bring you top-tier full stack developers for hire. Our experts take charge of the entire software development cycle, saving you time and effort.",
        icon: Images.fullStackServices04,
        boxColor: "grey-box"
    },
    {
        title: "Strategic Delegation",
        description: "You can lead the project or let us handle it. Define objectives, delegate tasks, or let us manage the project. Either way, we'll ensure smooth operations.",
        icon: Images.fullStackServices05,
        boxColor: "green-box"
    },
    {
        title: "Cost Efficiency",
        description: "Hiring a <strong>full stack software developer</strong> in-house can be a complex and costly process. Outsourcing provides a flexible and affordable solution.",
        icon: Images.fullStackServices06,
        boxColor: "light-blue-box"
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

export { bannerHeading, bannerText, expertiseHead, expertiseHeadTwo, expertise, steps, accordionFaqsData, whatWeDoTitle, whatWeDos, reviewTitle, engagementModels, industries, developmentServices, workSliderData, techImages };