import { Images } from "@/assets/assets";

const bannerHeading = <h1>Hire DevOps <span className="d-block">Engineers</span></h1>;
const bannerText = <p>While staying at the forefront of digital transformation, we offer cutting-edge DevOps consulting services and solutions to help organizations adapt and scale faster.</p>;
const whatWeDoTitle = <h2><span className="d-block">Hire DevOps Developers For Your Projects</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconHireDevOps1,
        iconHover: Images.iconHireDevOpsHover1,
        title: "DevOps Assessment",
        description: "We assess your infrastructure and software delivery processes to identify bottlenecks. We then provide a practically applicable optimization plan tailored to your workflows, technology stack and team capacity."
    },
    {
        iconDefault: Images.iconHireDevOps2,
        iconHover: Images.iconHireDevOpsHover2,
        title: "DevOps Automation",
        description: "We automate your software development process with cutting-edge tools for code review, deployment, testing, and knowledge management. We also train your teams to excel in this automated environment."
    },
    {
        iconDefault: Images.iconHireDevOps3,
        iconHover: Images.iconHireDevOpsHover3,
        title: "DevOps Management",
        description: "We assist our clients in adopting DevOps practices, ensuring seamless workflow execution, assessing the flexibility of their DevOps ecosystem and evaluating its impact on their business operations."
    },
    {
        iconDefault: Images.iconHireDevOps4,
        iconHover: Images.iconHireDevOpsHover4,
        title: "DevOps Advisory Services",
        description: "Tailor your DevOps journey with Data on Matrix's expert consultation. Our seasoned DevOps consultants will help you streamline your software delivery process and accelerate time-to-market."
    },
    {
        iconDefault: Images.iconHireDevOps5,
        iconHover: Images.iconHireDevOpsHover5,
        title: "Enterprise DevOps Solutions",
        description: "We offer comprehensive DevOps solutions tailored to meet the unique needs of enterprises. Our experts will automate your entire application delivery cycle, ensuring minimal risks and efficient rollbacks."
    },
    {
        iconDefault: Images.iconHireDevOps6,
        iconHover: Images.iconHireDevOpsHover6,
        title: "Cloud Migration",
        description: "Optimize your cloud migration with our DevOps approach, ensuring a smooth and efficient transition. Leverage cloud-native technologies and best practices to reduce costs by up to 50%."
    },
    {
        iconDefault: Images.iconHireDevOps7,
        iconHover: Images.iconHireDevOpsHover7,
        title: "Scalable Containerization",
        description: "Experience the benefits of containerization with our DevOps experts. We'll help you create self-contained environments with optimized configurations, enabling rapid issue resolution and increased agility."
    },
    {
        iconDefault: Images.iconHireDevOps8,
        iconHover: Images.iconHireDevOpsHover8,
        title: "Integration & Deployment",
        description: "We specialize in continuous integration and delivery (CI/CD), ensuring secure development, thorough testing and automated deployment to production environments without interruption."
    },
    {
        iconDefault: Images.iconHireDevOps9,
        iconHover: Images.iconHireDevOpsHover9,
        title: "Maintenance & Support",
        description: "Leverage our 24/7 DevOps support for proactive monitoring, rapid troubleshooting and robust security management. Our team of experts will keep your applications running smoothly and securely. "
    }
];
const stats = [
    { value: "20+", description: "Dedicated DevOps Pros" },
    { value: "90+", description: "Successful Projects" },
    { value: "98.5%", description: "Client Retention Rate" },
    { value: "10+", description: "Years of Proven Expertise" }
];
const techImages = [
    { id: 1, image: Images.techDevopsOne },
    { id: 2, image: Images.techDevopsTwo },
    { id: 3, image: Images.techDevopsThree },
    { id: 4, image: Images.techDevopsFour },
    { id: 5, image: Images.techDevopsFive },
    { id: 6, image: Images.techDevopsSix },
    { id: 7, image: Images.techDevopsSeven },
    { id: 8, image: Images.techDevopsEight },
    { id: 9, image: Images.techDevopsNine },
    { id: 10, image: Images.techDevopsTen },
    { id: 11, image: Images.techDevopsEleven },
];
const certifiedMainText = [
    { text: "Don't let slow deployments hold you back. At Data on Matrix, we make DevOps the key to faster, more reliable software delivery." }
];
const servicesData = [
    {
        image: Images.devOpsCertifiedDevelopers1,
        title: "Certified Experts",
        description: "The dedicated engineers you hire from Data on Matrix possess industry-recognized certifications and a track record of delivering successful projects."
    },
    {
        image: Images.devOpsCertifiedDevelopers2,
        title: "Quality Code",
        description: "Our seasoned experts are trained to adhere to strict quality standards, ensuring that every line of code meets the highest software quality benchmarks."
    },
    {
        image: Images.devOpsCertifiedDevelopers3,
        title: "Secrecy Agreement",
        description: "To safeguard the confidentiality of sensitive information, we enforce non-disclosure agreements (NDAs) with all engineers working on your project."
    },
    {
        image: Images.devOpsCertifiedDevelopers4,
        title: "Reduce Overheads",
        description: "Our flexible hiring models ensure you only pay for the work done, allowing you to scale your team up or down as required, minimizing unnecessary costs."
    },
    {
        image: Images.devOpsCertifiedDevelopers5,
        title: "Proven Expertise",
        description: "Our seasoned engineers bring over a decade of experience to the table, ensuring you get effective software solutions that drive your business forward."
    },
    {
        image: Images.devOpsCertifiedDevelopers6,
        title: "Swift Onboarding",
        description: "Our streamlined hiring process ensures you can quickly select and engage the ideal engineer or team of developers to meet your project's specific needs."
    }
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "What is DevOps, and how can it benefit my business?",
        description: [
            "DevOps bridges the gap between development and operations teams, fostering collaboration throughout the entire software lifecycle. By hiring experienced DevOps engineers from Data on Matrix, you can streamline your development process, improve efficiency and accelerate time-to-market.",
        ],
    },
    {
        eventKey: "1",
        title: "Can your DevOps engineers work on projects specific to my industry?",
        description: [
            "Absolutely! Our DevOps engineers are skilled in working across various industries. Hire DevOps developers from Data on Matrix to get a firsthand experience of our expertise. We invite you to try our free trial before onboarding our dedicated resources.",
        ],
    },
    {
        eventKey: "2",
        title: "What are the different engagement models offered by Data on Matrix for software development projects?",
        description: [
            "At Data on Matrix, we've honed our recruitment models over a decade of software development experience. Whether you're a startup or a global enterprise, we have the flexibility to meet your specific needs. Our engagement models include:",
        ],
        list: [
            "<strong>Project-Based Model:</strong> Ideal for one-time projects with defined scopes and timelines.",
            "<strong>Dedicated Developer Model:</strong> Hire skilled developers on a long-term basis to augment your team.",
            "<strong>Custom Recruitment Model:</strong> Tailor a solution that fits your unique business and project requirements."
        ],
    },
    {
        eventKey: "3",
        title: "How can I hire your DevOps engineers?",
        description: [
            "The process of outsourcing software engineers from Data on Matrix is simple and hassle-free. Our streamlined hiring process makes it easy to engage our expert developers.",
            "Fill out our consultation form to discuss your specific needs. We'll match you with a skilled DevOps team, tailored to your project requirements. Once you select the ideal engagement model, your project will be underway in no time."
        ],
    },
    {
        eventKey: "4",
        title: "What are the advantages of using DevOps?",
        description: [
            "Businesses can reap numerous advantages by opting for DevOps as a Service, including:",
        ],
        list: [
            "Rapid Software Delivery",
            "Reliable Work Environments",
            "Superior Product Quality",
            "Focused Innovation",
            "Agile Business Operations",
            "Seamless Software Delivery",
            "Faster Time to Market",
            "Enhanced Security ",
        ],
    },
    {
        eventKey: "5",
        title: "What skills should I look for in a DevOps engineer?",
        description: [
            "When hiring a DevOps engineer, look for a strong foundation in:",
        ],
        list: [
            "<strong>Core Development Skills:</strong> Proficiency in programming languages like Python, Ruby, or Java.",
            "<strong>Infrastructure as Code (IaC):</strong> Experience with tools like Terraform, Ansible, or Puppet.",
            "<strong>CI/CD Pipelines:</strong> Knowledge of CI/CD tools like Jenkins, GitLab CI/CD, or CircleCI.",
            "<strong>Cloud Platforms:</strong> Familiarity with cloud providers like AWS, Azure, or GCP.",
            "<strong>Containerization:</strong> Understanding of Docker and Kubernetes.",
            "<strong>Scripting:</strong> Proficiency in scripting languages like Bash, Python, or Ruby.",
            "<strong>Security:</strong> Knowledge of security best practices and tools.",
        ],
    },
];
const expertiseHead = <h2>Hands-on <span>Expertise</span></h2>;
const expertiseHeadTwo = <h2>Hiring Process</h2>;
const expertise = [
    { text: "Python, Go, Ruby, Java, MySQL, etc." },
    { text: "Terraform, Ansible, CHEF, Puppet, etc." },
    { text: "Jenkins, GitLab CI/CD, CircleCI, etc." },
    { text: "Docker, Kubernetes, OpenVZ, etc." },
];
const steps = [
    { number: "01", text: "Identify Resources", colorClass: "bg-farozi" },
    { number: "02", text: "Review Profile", colorClass: "bg-orange" },
    { number: "03", text: "Select Candidates", colorClass: "bg-grey" },
    { number: "04", text: "Finalize Team", colorClass: "bg-blue" },
    { number: "05", text: "Start Working", colorClass: "bg-green" }
];
const models = [
    {
        title: "Staff Augmentation",
        description: ["Expand In-House Team", "Flexible Scaling", "Maintain Complete Control"],
        link: "/contact-us",
        image: Images.flexHiringOne,
    },
    {
        title: "Dedicated Dev Team",
        description: ["Need-Based Scaling", "Pay For Delivered Work", "Faster Time-To-Market"],
        link: "/contact-us",
        image: Images.flexHiringTwo,
    },
    {
        title: "Software Outsourcing",
        description: ["Project-Based Model", "Well-Defined Scope", "Fixed Budget & Deliverables"],
        link: "/contact-us",
        image: Images.flexHiringThree,
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

export { bannerHeading, bannerText, expertiseHead, expertise, expertiseHeadTwo, steps, accordionFaqsData, whatWeDoTitle, whatWeDos, models, stats, servicesData, certifiedMainText, workSliderData, techImages };