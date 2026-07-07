import { Images } from "@/assets/assets";

const bannerHeading = <h1>Future-Proof Your<br /> Business</h1>
const bannerText = <p>Grow well in fast-paced enterprise landscape with digital transformation solutions from <span className="text-theme">Data on Matrix</span>.</p>
const whatWeDoTitle = <h2><span className="d-block">What We Offer</span></h2>
const whatWeDos = [
    {
        iconDefault: Images.iconATHCWHDefault01,
        iconHover: Images.iconATHCWHHover01,
        title: "Agile Consulting",
        description: "Guiding and equipping your employees with the knowledge and skills required to build and succeed in an agile environment."
    },
    {
        iconDefault: Images.iconATHCWHDefault02,
        iconHover: Images.iconATHCWHHover02,
        title: "Agile Development",
        description: "Empowering businesses with agile innovation through our modern software delivery teams to improve efficiency and deliver value faster."
    },
    {
        iconDefault: Images.iconATHCWHDefault03,
        iconHover: Images.iconATHCWHHover03,
        title: "Software Modernization",
        description: "Converting legacy applications into more efficient and scalable solutions with enhanced flexibility, performance and feature support."
    },
    {
        iconDefault: Images.iconATHCWHDefault04,
        iconHover: Images.iconATHCWHHover04,
        title: "Project Management",
        description: "Partnering with organizations to select the right agile framework (Scrum, Kanban or hybrid) and implement it effectively for continuous improvement."
    },
    {
        iconDefault: Images.iconATHCWHDefault05,
        iconHover: Images.iconATHCWHHover05,
        title: "Scaled Agile Framework",
        description: "Scaling agile across your organization with SAFe, aligning multiple teams and departments for a more agile and responsive culture."
    },
    {
        iconDefault: Images.iconATHCWHDefault06,
        iconHover: Images.iconATHCWHHover06,
        title: "CI/CD Implementation",
        description: "Assisting you in implementing CI/CD pipelines to optimize and automate enterprise-wide software delivery process and improve quality."
    }
];
const boxesContent = [
    {
        icon: Images.iconATBusiness01,
        boxColor: "orange",
        title: "Digital Acceleration",
        description: "The relentless pursuit of organizational excellence.",
    },
    {
        icon: Images.iconATBusiness02,
        boxColor: "blue",
        title: "Flexible Funding Models",
        description: "Adapting budgets for real-time strategic shifts.",
    },
    {
        icon: Images.iconATBusiness03,
        boxColor: "farozi",
        title: "Customer-Centric Structure",
        description: "Organizing around value streams for faster delivery.",
    },
];
const kubernetes = [
    {
        image: Images.imgATKubernet01,
        title: "Digitize & Digitalize",
        description: "We help businesses deal with current and approaching digital challenges. Our experts will assess your organization's agile maturity & offer a product discovery or software modernization plan and execute it for you.",
    },
    {
        image: Images.imgATKubernet02,
        title: "Advisory & Training",
        description: "As part of our agile transformation services, we provide expert advice and guidance on strategic planning, decision-making, problem-solving and compliance. We empower your leaders and teams with agile trainings for sustainable growth.",
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

export { bannerHeading, bannerText, whatWeDoTitle, boxesContent, kubernetes, workSliderData, whatWeDos };