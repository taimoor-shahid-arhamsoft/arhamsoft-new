import { Images } from "@/assets/assets";

const bannerHeading = <h1>An Affiliate Marketing <br />Platform</h1>;
const bannerText = <p>A cutting-edge referral marketing platform that connects advertisers with a vast network of publishers, driving substantial growth and revenue for both.</p>;
const feedbackText = [
    { text: "A great experience where dedicated resources who stay ready to come up with all the possible solutions to fulfill your project requirements." }
];
const goals = [
    {
        icon: Images.iconShareAdsGoal01,
        title: "Intuitive Interface",
        text: "Develop a user-friendly platform that requires minimal technical knowledge."
    },
    {
        icon: Images.iconShareAdsGoal02,
        title: "Strategic Advertising",
        text: "Implement tools to streamline and accelerate the ads publishing workflow."
    },
    {
        icon: Images.iconShareAdsGoal03,
        title: "Scalable Infrastructure",
        text: "Develop a scalable infrastructure to support increasing user loads and data volumes."
    },
];
const servicesBoxesContent = [
    {
        description: "Accurately tracking conversions and attributing sales to specific publishers can be challenging."
    },
    {
        description: "Traditional affiliate marketing often struggles to reach a wider audience and drive meaningful engagement."
    },
    {
        description: "Many individuals lack the technical skills required to set up and manage affiliate marketing campaigns."
    },
];
const solutions = [
    {
        counterIcon: Images.iconCSSol01,
        title: "User-Centric",
        subTitle: "Interface",
        text: "An intuitive interface was designed to simplify the process of creating and managing campaigns."
    },
    {
        counterIcon: Images.iconCSSol02,
        title: "Optimized",
        subTitle: "Processes",
        text: "Streamlined workflows for efficient advertisement management and performance optimization."
    },
    {
        counterIcon: Images.iconCSSol03,
        title: "Robust",
        subTitle: "Data Analytics",
        text: "Advanced analytics tools were integrated to provide valuable insights into ad performance."
    },
    {
        counterIcon: Images.iconCSSol04,
        title: "Secure",
        subTitle: "Payment Mode",
        text: "A secure payment gateway was implemented to ensure safe and reliable financial transactions."
    },
    {
        counterIcon: Images.iconCSSol05,
        title: "Rewarding",
        subTitle: "Engagement",
        text: "Publishers can create and monetize content by leveraging a range of incentives and rewards. "
    },
    {
        counterIcon: Images.iconCSSol06,
        title: "Real-time",
        subTitle: "Tracking",
        text: "Real-time performance tracking for timely optimizations of published ads and maximize ROI."
    },
];
const results = [
    {
        icon: Images.iconShareAdsResult01,
        title: "Increased",
        subTitle: "Revenue",
        text: "By simplifying the affiliate marketing process and expanding reach, this platform helps advertisers generate significant revenue.",
        boxColor: "#F1F5FC"
    },
    {
        icon: Images.iconShareAdsResult02,
        title: "Improved",
        subTitle: "Branding",
        text: "The platform's powerful social sharing capabilities amplify brand visibility and drive traffic to advertiser websites.",
        boxColor: "#EDEDE7"
    },
    {
        icon: Images.iconShareAdsResult03,
        title: "Enhanced",
        subTitle: "Usability",
        text: "The user-friendly interface and streamlined processes enhance the overall experience for both advertisers and publishers.",
        boxColor: "#F1FCFC"
    },
    {
        icon: Images.iconShareAdsResult04,
        title: "Affordable",
        subTitle: "Marketing",
        text: "This system simplified the affiliate marketing process, making it easy for everyone to connect, collaborate and earn.",
        boxColor: "#F5F2F8"
    },

];
const industryDetails = [
    { text: "Advertising" },
];
const teamDetails = [
    { counter: "1", detail: "Designer" },
    { counter: "3", detail: "Developers" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" },
];
const expertiseDetails = [
    { text: "Web App Development" },
    { text: "Software Testing" },
];
const techStacks = [
    { stackName: "AWS", image: Images.iconShareAdsTech01 },
    { stackName: "jQuery", image: Images.iconShareAdsTech02 },
    { stackName: "HTML5", image: Images.iconShareAdsTech03 },
    { stackName: "CSS3", image: Images.iconShareAdsTech04 },
    { stackName: "CodeIgniter", image: Images.ShareAdsStack05 },
    { stackName: "JavaScript", image: Images.ShareAdsStack06 },
    { stackName: "Bootstrap", image: Images.iconShareAdsTech07 },
    { stackName: "MySQL", image: Images.iconShareAdsTech08 },
    { stackName: "Stripe", image: Images.iconShareAdsTech09 },
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

export { bannerHeading, bannerText, workSliderData, servicesBoxesContent, results, teamDetails, expertiseDetails, techStacks, feedbackText, industryDetails, goals, solutions };