import { Images } from "@/assets/assets";

const bannerHeading = <h1>Let&apos;s Go Digital<br /> Outshine The Rest</h1>;
const bannerText = <p>Take your marketing game to the whole new level. Build lasting value with our strategic approach to generating consistent demand and conversions. </p>;
const content = [
    {
        contentText: [
            { text: "<strong>We are digital results hunters.</strong> Partner with us to unlock the power of social media and digital marketing. We provide personalized solutions, backed by data and insights, to help you achieve your goals. Our strategic approach delivers results, drives engagement and builds your brand." },
            {
                heading: "Content Optimization",
                text: "Our comprehensive SEO audit reveals your website's potential for growth. We identify strategic keywords that align with your business goals, optimize your content to improve relevance and readability and refine your meta tags to enhance click-through rates. By combining these elements, we create a powerful SEO strategy that drives organic traffic and improves your online visibility."
            },
        ],
        features: [
            {
                icon: Images.iconSEOAYR01,
                title: "Advisory",
                subTitle: "SEO Services",
                description: "Get expert SEO advice on demand. Our team, with years of experience, provides strategic insights and offers personalized advice and solutions to your SEO challenges."
            },
            {
                icon: Images.iconSEOAYR02,
                title: "Technical",
                subTitle: "SEO Services",
                description: "Enhance your website's user experience and SEO performance with our technical SEO services, including in-depth audits of page speed and schema implementation."
            }
        ]
    },
];
const bulletContent = [
    {
        title: "Strategize Plan",
        description: "Every service we provide undergoes rigorous planning, ensuring it is strategically designed to meet your goals and deliver the best possible outcomes."
    },
    {
        title: "Quick Execution",
        description: "Experience rapid turnaround times with our dedicated team, working collaboratively to minimize delays and maximize efficiency. We're dedicated to helping you achieve digital marketing excellence and long-term success."
    },
    {
        title: "Optimize for Growth",
        description: "We specialize in data-driven SEO optimization, using advanced testing and analysis combined with our in-depth industry knowledge to deliver measurable results and help you stay ahead of the competition."
    },
    {
        title: "Performance Reports",
        description: "Our customized performance reports are easy to understand and use, providing actionable insights, empowering you to make data-driven decisions and achieve your business objectives. We also offer ongoing support to help you get the most out of our marketing solutions."
    },
];
const comprehensiveItems = [
    {
        image: Images.imgSEOComp01,
        title: "Onsite",
        subTitle: "Optimization",
        description: "We are committed to supporting the online growth of your business. Our team will implement advanced SEO strategies to enhance your online presence while minimizing costs. We will address website issues affecting its performance in search results.",
    },
    {
        image: Images.imgSEOComp02,
        title: "Offsite",
        subTitle: "Optimization",
        description: "No matter how challenging your targets are, our team has the expertise to make it happen. We'll optimize your off-site strategy to attract more visitors and boost your bottom line. With our expert off-site SEO services, we'll help you reach new heights.",
    },
    {
        image: Images.imgSEOComp03,
        title: "PPC",
        subTitle: "Advertising",
        description: "Maximize your ROI with our targeted Google Ads campaigns. We develop and execute a methodical approach to profitable PPC advertising. We leverage data-driven strategies and expert management to generate more leads and conversions.",
    },
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

export { bannerHeading, bannerText, workSliderData, content, bulletContent, comprehensiveItems };