import { Images } from "@/assets/assets";

const bannerHeading = <h1>A Digital Marketing Agency <span className="d-block">Driving Qualified Leads</span></h1>;
const bannerText = <p>Expand your brand reach and establish a strong online presence that makes a lasting impact.</p>;
const whatWeDoTitle = <h2><span className="d-block">Internet Marketing Services</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.digitalSolutions01,
        iconHover: Images.digitalSolutionsHover01,
        title: "Search Engine Optimization",
        description: "We improve website visibility in search engine results by optimizing keywords, content, and technical aspects, driving organic traffic"
    },
    {
        iconDefault: Images.digitalSolutions02,
        iconHover: Images.digitalSolutionsHover02,
        title: "Content Marketing",
        description: "We create valuable, relevant content tailored to engage target audiences, building brand authority and trust over time"
    },
    {
        iconDefault: Images.digitalSolutions03,
        iconHover: Images.digitalSolutionsHover03,
        title: "Social Media Marketing",
        description: "We engage audiences across social platforms, enhancing brand presence, fostering community, and driving traffic to the site"
    },
    {
        iconDefault: Images.digitalSolutions04,
        iconHover: Images.digitalSolutionsHover04,
        title: "Email Marketing",
        description: "We deliver targeted campaigns directly to subscribers, nurturing leads, promoting offers, and building customer loyalty"
    },
    {
        iconDefault: Images.digitalSolutions05,
        iconHover: Images.digitalSolutionsHover05,
        title: "PPC Marketing",
        description: "We run paid ads on search engines and social platforms to generate quick, measurable traffic, targeting specific audience segments"
    },
    {
        iconDefault: Images.digitalSolutions06,
        iconHover: Images.digitalSolutionsHover06,
        title: "Analytics & Reporting",
        description: "We track and analyze campaign performance metrics, providing actionable insights to optimize future marketing strategies"
    },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What quality control measures do you have in place for digital campaigns?",
        description: [
            "We implement a rigorous review process, including A/B testing and performance monitoring at every stage. Each campaign undergoes multi-level audits to ensure compliance with best practices. Our team uses analytics to adjust and improve continuously.",
        ],
    },
    {
        eventKey: "1",
        title: "How do you maintain a consistent level of quality across all your services?",
        description: [
            "We follow standardized processes across all services, backed by detailed SOPs. Regular training keeps our team aligned with the latest industry standards. Quality checks at each milestone help us maintain top-tier consistency.",
        ],
    },
    {
        eventKey: "2",
        title: "Do you offer local SEO services for region-specific targeting?",
        description: [
            "Yes, we specialize in local SEO to enhance visibility within targeted regions. Our strategies focus on optimizing Google My Business, local listings, and location-based keywords. This helps boost search rankings and attract nearby customers effectively.",
        ],
    },
    {
        eventKey: "3",
        title: "How will you help us identify and reach our target audience?",
        description: [
            "We begin by analyzing your market, customer demographics, and competitors. Audience insights are refined through data-driven segmentation and persona development. Our targeting strategies then focus on reaching those most likely to engage.",
        ],
    },
    {
        eventKey: "4",
        title: "How do you help in retaining customers after conversion?",
        description: [
            "We build tailored retention strategies, including loyalty programs, personalized email follow-ups, and re-engagement campaigns. Data insights help us understand customer preferences to enhance satisfaction. This approach fosters stronger relationships and repeat business.",
        ],
    },
    {
        eventKey: "5",
        title: "How do you ensure higher conversion rates?",
        description: [
            "We focus on optimizing user experience, streamlining conversion paths, and A/B testing key elements. By analyzing behavior and removing conversion barriers, we maximize engagement. Our strategies are designed to turn prospects into loyal customers effectively.",
        ],
    },
];
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "SMM, SEO, PPC, Content Creation" },
    { text: "Data Analytics, Email Marketing, CRO" },
    { text: "CRM, Brand Management, Marketing Strategy" },
    { text: "Lead Generation, Influencer Marketing, Affiliate Marketing" },
];
const steps = [
    { number: "01", text: "Identify Resources", colorClass: "bg-farozi" },
    { number: "02", text: "Review Profile", colorClass: "bg-orange" },
    { number: "03", text: "Select Candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize Team", colorClass: "bg-blue" },
    { number: "05", text: "Start Working", colorClass: "bg-green" }
];
const engagementModels = [
    {
        imgSrc: Images.imgAugModelTeam,
        title: "Team Augmentation",
        description: "Expand your marketing team seamlessly with skilled marketers who drive campaigns to success. We carefully tailor strategies to align with goals. Where beneficial, we proactively share insights to help achieve your marketing objectives.",
        link: "/team-augmentation",
        button: true,
    },
    {
        imgSrc: Images.imgAugModelFixed,
        title: "Fixed Price",
        description: "Put an end to budget overruns and extended project timelines. We understand budget constraints hit the bottom line. That’s why we deliver on our promises. We will thoroughly plan out deliverables & budget, ensuring no ambiguity is left behind.",
        link: "/fixed-price",
        button: true,
    },
];
const developmentServices = [
    {
        title: "Target Audience",
        description: "Use data-driven strategies to reach customers whose interests match your offerings.",
        icon: Images.digitalBenifits01,
        boxColor: "orange-box"
    },
    {
        title: "Save Costs",
        description: "Optimize ROI, eliminate unnecessary expenditures & prioritize high-impact channels.",
        icon: Images.digitalBenifits02,
        boxColor: "blue-box"
    },
    {
        title: "Brand Awareness",
        description: "Build brand visibility across digital platforms with creative campaigns.",
        icon: Images.digitalBenifits03,
        boxColor: "farozi-box"
    },
    {
        title: "Save Time",
        description: "Manage campaigns while freeing your team from marketing complexities.",
        icon: Images.digitalBenifits04,
        boxColor: "grey-box"
    },
    {
        title: "Multiply Conversions",
        description: "Through targeted strategies & ads, turn more visitors into leads and higher sales.",
        icon: Images.digitalBenifits05,
        boxColor: "green-box"
    },
    {
        title: "Continuous Optimization",
        description: "With ongoing monitoring and A/B testing, refine campaigns to improve results.",
        icon: Images.digitalBenifits06,
        boxColor: "light-blue-box"
    }
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "7K+", description: "qualified leads" },
    { value: "10M+", description: "impressions generated" },
    { value: "Up to 10x", description: "return on investment" }
];
const servicesBoxesContent = [
    {
        iconDefault: Images.marketing01,
        title: "Audience Insights",
        description: "We invest in advanced analytics tools & conduct regular surveys to understand the targeted marketing challenges."
    },
    {
        iconDefault: Images.marketing02,
        title: "Proven ROI",
        description: "We set clear KPIs from the start, track performance rigorously, and optimize campaigns continuously to demonstrate value."
    },
    {
        iconDefault: Images.marketing03,
        title: "Cutting-Edge Technology",
        description: "We stay updated with & regularly adopt the latest tech trends, such as AI, automation, and data analytics to improve targeting."
    },
    {
        iconDefault: Images.marketing04,
        title: "Creative Innovation",
        description: "We encourage a creative culture by fostering brainstorming sessions, experimenting with diverse storytelling techniques."
    },
    {
        iconDefault: Images.marketing05,
        title: "Transparent Communication",
        description: "We build trust by setting clear expectations, sharing real-time progress with clients."
    },
    {
        iconDefault: Images.marketing06,
        title: "Omnichannel Expertise",
        description: "We create a cohesive brand experience by aligning messaging and visuals across social media, email, and more."
    },
    {
        iconDefault: Images.marketing07,
        title: "Experienced Team",
        description: "We recruit specialized talent and offer continuous training to bring unique expertise to each project."
    },
    {
        iconDefault: Images.marketing08,
        title: "Customized Solutions",
        description: "We develop tailored strategies to position brand services with client needs."
    },
    {
        iconDefault: Images.marketing09,
        title: "Relationship Building",
        description: "We provide long-term client satisfaction by providing regular check-ins, proactive support, and innovative ideas."
    },
    {
        iconDefault: Images.marketing10,
        title: "Market Adaptability",
        description: "We monitor market trends and provide regular team training to ensure quick adaptation to changes."
    },
];
const textualContentBlockText = [
    { text: "We expand brand presence with strategic, data-driven techniques and expert digital marketing consulting services. By leveraging advanced analytics, precision targeting, and optimized content, our experts ensure that your brand messaging, products, and services are visible to the right audience at the right time." },
    { text: "The campaigns we deliver are crafted to drive engagement, boost awareness, and address customer challenges. From social media to SEO to content marketing, every strategy is strategized to resonate and expand your reach exponentially." },
];
const outcomes = [
    "Personalized Assessment To Boost Online Presence",
    "Expert Consultation To Identify Growth Strategies",
    "Discover Result-Driven Tactics For Success",
    "Learn About The Latest Trends & Tools",
    "Gain Insights To Outpace Competitors",
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

export { bannerHeading, bannerText, expertiseHead, expertise, expertiseHeadTwo, steps, accordionFaqsData, whatWeDoTitle, whatWeDos, engagementModels, stats, developmentServices, servicesBoxesContent, workSliderData, textualContentBlockText, outcomes };