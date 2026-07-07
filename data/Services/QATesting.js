import { Images } from "@/assets/assets";

const bannerHeading = <h1>Detect And Fix Bugs<br />At The Earliest Possible</h1>;
const bannerText = <p>Automated testing is fast and accurate, but a human eye is needed to look over things. That&apos;s why we use both—automated tests for speed and manual tests to catch what&apos;s missed.</p>;
const whatWeDoTitle = <h2><span className="d-block">Testing We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconQATWWDDefault01,
        iconHover: Images.iconQATWWDHover01,
        title: "Functional Testing",
        description: "Rigorous testing of the entire functional scope against the requirements to ensure your software meets all specified features and functionalities."
    },
    {
        iconDefault: Images.iconQATWWDDefault02,
        iconHover: Images.iconQATWWDHover02,
        title: "Compatibility Testing",
        description: "Evaluate your product's compatibility across diverse range of environments and platforms, ensuring its adaptability to different operational scenarios."
    },
    {
        iconDefault: Images.iconQATWWDDefault03,
        iconHover: Images.iconQATWWDHover03,
        title: "API Testing",
        description: "Check if your APIs are fully functional & secured. We can elevate performance and minimize downtime with rigorous testing."
    },
    {
        iconDefault: Images.iconQATWWDDefault04,
        iconHover: Images.iconQATWWDHover04,
        title: "Web & Mobile QA",
        description: "Fully functionalize your apps across all platforms. We can check for responsiveness & functionality issues on different systems."
    },
    {
        iconDefault: Images.iconQATWWDDefault05,
        iconHover: Images.iconQATWWDHover05,
        title: "Risk Assessment",
        description: "Uncover risks of information loss due to cyberattacks. We can rigorously test to identify and mitigate data breaches."
    },
    {
        iconDefault: Images.iconQATWWDDefault06,
        iconHover: Images.iconQATWWDHover06,
        title: "Performance Testing",
        description: "Maintain speed, responsiveness, and stability of an application under varying workloads. We can work on bottlenecks to improve performance."
    },
    {
        iconDefault: Images.iconQATWWDDefault07,
        iconHover: Images.iconQATWWDHover07,
        title: "Consulting & Analysis",
        description: "To improve the software quality, we can evaluate and enhance testing processes, tools, and methodologies as per your needs."
    },
    {
        iconDefault: Images.iconQATWWDDefault08,
        iconHover: Images.iconQATWWDHover08,
        title: "UI/UX Testing",
        description: "Provide the experiences that users desire. By employing advanced methodologies, we analyze user preferences & provide optimal solutions."
    },
    {
        iconDefault: Images.iconQATWWDDefault09,
        iconHover: Images.iconQATWWDHover09,
        title: "Usability Testing",
        description: "We conduct thorough testing, focusing on ease of use and intuitiveness, to ensure the delivery of exceptional user experiences."
    }
];
const boxesContent = [
    {
        icon: Images.iconQAWhatsIn01,
        boxColor: "orange",
        title: "Better Quality",
        description: "Identify and resolve issues before deployment to ensure high-quality functionality.",
    },
    {
        icon: Images.iconQAWhatsIn02,
        boxColor: "blue",
        title: "Swift Delivery",
        description: "Reduce time-to-market and gain a competitive edge through faster product releases.",
    },
    {
        icon: Images.iconQAWhatsIn03,
        boxColor: "farozi",
        title: "Save Cost",
        description: "Detect and fix critical issues before the app launch to significantly save on maintenance costs.",
    },
    {
        icon: Images.iconQAWhatsIn04,
        boxColor: "green",
        title: "Leverage Expertise",
        description: "Get a team of experienced testers with extensive knowledge of the latest methodologies and best practices.",
    }
];
const howWeDos = [
    {
        icon: Images.iconQATArea01,
        title: "Desktop Testing",
        keypoints: [
            { title: "HP UFT" },
            { title: "Ranorex" },
            { title: "Sikuli Script" },
            { title: "VS Coded UI Test" },
        ]
    },
    {
        icon: Images.iconQATArea02,
        title: "Performance Testing",
        keypoints: [
            { title: "Apache JMeter" },
            { title: "BlazeMeter" },
            { title: "Gatling" },
            { title: "Load Runner" }
        ]
    },
    {
        icon: Images.iconQATArea03,
        title: "Mobile Testing",
        keypoints: [
            { title: "Appium" },
            { title: "Robotium" },
            { title: "Silk Test" },
            { title: "Espresso" },
        ]
    },
    {
        icon: Images.iconQATArea04,
        title: "Web Testing",
        keypoints: [
            { title: "Selenium" },
            { title: "Protractor" },
            { title: "Serenity" },
            { title: "Cypress.io" },
        ]
    }
];
const atonomousTitle = <h2>Streamlined <span>QA &amp; Automated Testing</span></h2>;
const atomonousDecription = [
    { text: "Contemporary testing practices enable organizations to adapt to evolving market dynamics efficiently, address customer requirements, and integrate emerging technologies effectively." },
    { text: "Our team of experts employs advanced tools to simulate user interactions and rigorously validate functionality. This approach facilitates accelerated release cycles, minimizes manual effort, and guarantees superior performance." },
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

export { bannerHeading, bannerText, workSliderData, howWeDos, whatWeDos, whatWeDoTitle, boxesContent, atonomousTitle, atomonousDecription };