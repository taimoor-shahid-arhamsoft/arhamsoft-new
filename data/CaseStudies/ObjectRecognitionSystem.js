import { Images, cloudinaryImages } from "@/assets/assets";

const bannerHeading = <h1>AI-Powered Object<br /> Recognition MVP</h1>;
const bannerText = <p>A fully functional, market-ready MVP designed to automate the process of detecting, recognizing, extracting, and analyzing objects from video content.</p>;
const whatWeDoTitle = <h2><span className="d-block">Client Request</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconBiiViewWWDDefault01,
        iconHover: Images.iconBiiViewWWDHover01,
        title: "Accurate",
        description: "Capable of identifying objects with high precision."
    },
    {
        iconDefault: Images.iconBiiViewWWDDefault02,
        iconHover: Images.iconBiiViewWWDHover02,
        title: "Efficient",
        description: "Able to process large volumes of video data quickly."
    },
    {
        iconDefault: Images.iconBiiViewWWDDefault03,
        iconHover: Images.iconBiiViewWWDHover03,
        title: "Scalable",
        description: "Adaptable to different video formats & object types."
    },
];
const servicesBoxesContent = [
    {
        iconDefault: Images.iconCSBiiViewSol01,
        title: "Automated Object Recognition",
        description: "Accurately identify and categorize objects within video frames, even in complex scenes."
    },
    {
        iconDefault: Images.iconCSBiiViewSol02,
        title: "Streamlined Workflows",
        description: "Reduce manual effort and accelerate the video content analysis and object recognition process."
    },
    {
        iconDefault: Images.iconCSBiiViewSol03,
        title: "Enhanced Data Quality",
        description: "Generate high-quality, labeled datasets for training AI models, besides producing new datasets more efficiently."
    },
    {
        iconDefault: Images.iconCSBiiViewSol04,
        title: "Human-Centered UX",
        description: "A user-friendly interface that allows users to easily upload, analyze, and annotate videos."
    },
    {
        iconDefault: Images.iconCSBiiViewSol05,
        title: "Advanced AI Algorithms",
        description: "Cutting-edge predefined and custom AI and ML models for precise object detection, enabling deeper video analysis."
    },
    {
        iconDefault: Images.iconCSBiiViewSol06,
        title: "Customizable Workflows",
        description: "Flexible workflows to accommodate various video analysis scenarios and meet specific use cases."
    },
    {
        iconDefault: Images.iconCSBiiViewSol07,
        title: "Scalable Infrastructure",
        description: "The solution can handle large volumes of video data and scale as needed without compromising on video processing speed."
    }
];
const challengeKeyPoints = [
    { text: "Developing a robust and accurate AI model capable of recognizing and analyzing a wide range of objects in diverse video content." },
    { text: "Ensuring efficient and timely processing of large video files to provide real-time or near-real-time insights." },
    { text: "Implementing strong security measures to protect sensitive video data and user information." },
    { text: "Designing a fully responsive and scalable architecture to handle increasing workloads and high traffic volumes." },
    { text: "Creating an intuitive and user-friendly interface that allows users to easily interact with the platform and access insights." },
    { text: "Seamlessly integrating the solution with existing video management and analytics systems." }
];
const feedbackText = [
    { text: "Data on Matrix has delivered the MVP for an AI-powered video-sharing platform within a few months, marking the project's success. They knew what they were doing and kept in constant communication with me." }
];
const teamDetails = [
    { counter: "2", detail: "Python Developers" },
    { counter: "1", detail: "AI Developer" },
    { counter: "1", detail: "Fullstack Developer" },
    { counter: "1", detail: "QA Engineer" },
    { counter: "1", detail: "Project Manager" }
];
const expertiseDetails = [
    { text: "AI & Machine Learning" },
    { text: "Computer Vision" },
    { text: "Video Data Processing" },
];
const techStacks = [
    { stackName: "HTML5", image: Images.BiiviewStack01 },
    { stackName: "CSS3", image: Images.BiiviewStack02 },
    { stackName: "Node.js", image: Images.BiiviewStack03 },
    { stackName: "React", image: Images.BiiviewStack04 },
    { stackName: "Express.js", image: Images.BiiviewStack05 },
    { stackName: "Socket.io", image: Images.BiiviewStack06 },
    { stackName: "MongoDB", image: Images.BiiviewStack07 },
    { stackName: "Redis", image: Images.BiiviewStack08 },
    { stackName: "AI/ML", image: Images.BiiviewStack09 },
    { stackName: "Python", image: Images.BiiviewStack10 },
    { stackName: "Pytorch", image: Images.BiiviewStack11 },
    { stackName: "YOLO", image: Images.BiiviewStack12 },
    { stackName: "C++", image: Images.BiiviewStack13 },
];
const solutionTabContent = [
    {
        tabImage: Images.iconCSBiiViewSolTab01,
        heading: "Discovery & Planning",
        contentTexts: [
            { text: "<p><strong>Problem Identification:</strong> Defined the core problem of manual video analysis and the need for an automated solution.</p>" },
            { text: "<p><strong>Requirement Gathering:</strong> Collected detailed requirements for the AI-powered video analysis platform, including desired features, performance benchmarks, and security considerations.</p>" },
            { text: "<p><strong>Technology Selection:</strong> Evaluated and selected appropriate AI and machine learning technologies for object detection, tracking, and classification.</p>" },
            { text: "<p><strong>Project Planning:</strong> Created a detailed project plan outlining timelines, milestones, and resource allocation.</p>" },
        ],
    },
    {
        tabImage: Images.iconCSBiiViewSolTab02,
        heading: "Design & Development",
        contentTexts: [
            { text: "<p><strong>Data Acquisition & Preparation:</strong> Collected and curated a diverse dataset of video content to train and test the AI models.</p>" },
            { text: "<p><strong>Model Development & Training:</strong> Developed and trained state-of-the-art AI models, including object detection, tracking, and classification models.</p>" },
            { text: "<p><strong>User Interaction Design:</strong> Designed an intuitive and user-friendly interface for interacting with the platform.</p>" },
            { text: "<p><strong>Backend Development:</strong> Built a robust backend infrastructure to handle video processing, data storage, and API integration.</p>" },
            { text: "<p><strong>Third-Party Integrations:</strong> Integrated with video platforms and cloud storage solutions for seamless data ingestion and export.</p>" },
        ],
    },
    {
        tabImage: Images.iconCSBiiViewSolTab03,
        heading: "Testing & Deployment",
        contentTexts: [
            { text: "<p><strong>Unit Testing:</strong> Tested individual components of the system to ensure their correct functionality.</p>" },
            { text: "<p><strong>Integration Testing:</strong> Tested the integration of different components to ensure smooth operation.</p>" },
            { text: "<p><strong>User Acceptance Testing:</strong> Conducted user testing to gather feedback and identify areas for improvement.</p>" },
            { text: "<p><strong>Final Deployment:</strong> Deployed the platform to a production environment, ensuring scalability and reliability.</p>" },
            { text: "<p><strong>Post-Deployment Support:</strong> Provided ongoing maintenance, support, and updates to the platform.</p>" },
        ],
    }
];
const firstSection = {
    heading: "Value Delivered by Data on Matrix:",
    contentTexts: [
        { text: "<p>Optimized the development process by creating a detailed implementation roadmap, including cost estimates and resource allocation</p>" },
        { text: "<p>Significantly accelerated the product development lifecycle by utilizing pre-trained models and datasets, ensuring rapid time-to-market.</p>" },
        { text: "<p><strong class='text-theme'>AI-Powered Video Annotation:</strong> Intelligent Video Analysis</p>" },
        { text: "<p><strong class='text-theme'>Comprehensive AI & ML Models:</strong> Self-Generated Training Datasets</p>" },
        { text: "<p><strong class='text-theme'>Automated Object Detection:</strong> Real-Time Classification & Labeling</p>" }
    ],
};
const secondSection = {
    heading: "Outcome and ROI:",
    contentTexts: [
        { text: "<p><strong class='text-theme'>Automated Review at Scale:</strong> Video that used to need frame-by-frame human review is now processed automatically.</p>" },
        { text: "<p><strong class='text-theme'>Production-Grade Pipeline:</strong> Ingestion, processing, backend and infrastructure built to carry real load, not a demo.</p>" },
        { text: "<p><strong class='text-theme'>Output the Team Can Trust:</strong> Testing and validation make the results reliable enough to act on.</p>" },
        { text: "<p><strong class='text-theme'>Human Judgment Where It Belongs:</strong> People review the edge cases; the machine owns the repetition.</p>" },
    ],
};
const resultSliderImages = [
    { image: cloudinaryImages.BiViewMobileImage },
    { image: Images.ImgBiiViewResult02 },
    { image: Images.ImgBiiViewResult03 },
    { image: Images.ImgBiiViewResult04 },
    { image: Images.ImgBiiViewResult05 },
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

export { bannerHeading, bannerText, workSliderData, whatWeDos, whatWeDoTitle, servicesBoxesContent, challengeKeyPoints, solutionTabContent, firstSection, teamDetails, expertiseDetails, techStacks, feedbackText, secondSection, resultSliderImages };