import { Animations, Images } from "@/assets/assets";

const bannerHeading = <h1>Your Cloud Journey, <br />Redefined</h1>
const bannerText = <p>Take the cost and complexity out of developing and managing your cloud infrastructure. Accelerate your path to value with Data on Matrix’s full spectrum of cloud adoption services.</p>
const fourBoxesContent = [
    {
        iconDefault: Images.AzureHowOne,
        title: "Cloud Application Development",
        description: "From mobile backends to complex AI systems, we specialize in developing robust, high-performing cloud applications across different platforms such as AWS and Azure."
    },
    {
        iconDefault: Images.AzureHowTwo,
        title: "Cloud Security & Optimization",
        description: "Secure your cloud infrastructure while maximizing performance and minimizing costs. We will identify inefficiencies, optimize performance, and enhance security, ensuring 99.9% uptime."
    },
    {
        iconDefault: Images.AzureHowThree,
        title: "Cloud Adoption & Migration",
        description: "Our expert cloud consultants evaluate your tech infrastructure to recommend the best cloud migration strategy, modernizing applications and integrating them with enterprise software to minimize risks."
    },
    {
        iconDefault: Images.AzureHowFour,
        title: "Cloud Infrastructure Management",
        description: "We configure and optimize your cloud infrastructure, implementing DevOps, DevSecOps, and Infrastructure as Code practices for optimal resource usage and high software performance without downtime."
    },
];
const fourBoxesCloud = [
    {
        animation: Animations.cloudOne,
        bgColor: "orange",
        title: "Machine Learning",
    },
    {
        animation: Animations.cloudTwo,
        bgColor: "blue",
        title: "Blockchain",
    },
    {
        animation: Animations.cloudThree,
        bgColor: "light-blue",
        title: "Internet of Things",
    },
    {
        animation: Animations.cloudFour,
        bgColor: "green",
        title: "Business Intelligence",
    }
];
const servicesBoxesContent = [
    {
        iconDefault: Images.sevicesIconOne,
        title: "Cloud Strategy Design",
        description: "Tailored strategies to align your business objectives with cloud adoption."
    },
    {
        iconDefault: Images.sevicesIconTwo,
        title: "Cloud Migration",
        description: "Smooth transitions to the cloud, ensuring minimal downtime and disruption."
    },
    {
        iconDefault: Images.sevicesIconThree,
        title: "Infrastructure Management",
        description: "Expertly designed, built and maintained cloud infrastructures (public, hybrid, etc.)"
    },
    {
        iconDefault: Images.sevicesIconFour,
        title: "Cloud Optimization",
        description: "Maximizing performance and cost-efficiency through assessments and optimizations."
    },
    {
        iconDefault: Images.sevicesIconFive,
        title: "Cloud-Native App Development",
        description: "Accelerating time-to-market with innovative cloud applications that match your requirements. "
    },
    {
        iconDefault: Images.sevicesIconSix,
        title: "Cloud DevOps",
        description: "Fostering collaboration and agility through DevOps practices within your cloud infrastructure."
    },
    {
        iconDefault: Images.sevicesIconSeven,
        title: "Cloud Cost Optimization",
        description: "Identify cost-saving opportunities and implement FinOps to optimize your cloud expenses."
    },
    {
        iconDefault: Images.sevicesIconEight,
        title: "AI & Analytics Integration",
        description: "Gaining valuable insights by integrating analytics, AI and ML to make informed decisions and drive innovation."
    },
    {
        iconDefault: Images.sevicesIconNine,
        title: "Cloud Security",
        description: "Protecting your cloud environment by implementing encryption and continuous monitoring."
    },
    {
        iconDefault: Images.sevicesIconTen,
        title: "Disaster Recovery",
        description: "Ensuring business continuity with comprehensive backup and disaster recovery plans."
    },
];
const tabsData = [
    {
        eventKey: "strategy",
        title: "Cloud Strategy",
        heading: "Cloud Strategy",
        description: "Comprehensive cloud strategy and implementation to drive business transformation and efficiency.",
        expertiseList: [
            "Migration Readiness Analysis",
            "Product/Business Discovery Process",
            "Pilot Platform & Seamless Migration",
            "Well-Architected Framework Workshops",
            "Cloud Governance Implementation",
            "Cloud-Native Services Deployment"
        ],
        valueList: [
            "Expert Cloud Consulting",
            "Cost-Effective Solutions",
            "Risk & Challenge Identification",
            "Support For Key Stakeholders",
            "Cloud Strategy Aligned With Your Business Goals",
            "Roadmap For Seamless Cloud Adoption",
            "Maximizing Your Cloud Investment"
        ]
    },
    {
        eventKey: "adoption",
        title: "Cloud Adoption",
        heading: "Cloud Adoption",
        description: "Drive cloud adoption to increase business agility and efficiency.",
        expertiseList: [
            "Datacenter Extension to the Cloud",
            "Multi-Cloud Support (VMware, Anthos)",
            "Comprehensive Cloud Migration: Rehost, Refactor, Rearchitect, Rebuild, Replace",
            "Pilot-Scale Migration",
            "Enterprise-Level Migration at Scale"
        ],
        valueList: [
            "Enhanced Customer Satisfaction",
            "Lower Operational Costs",
            "Advanced Security Measures",
            "Faster Innovation and Modernized Products",
            "Improved System Uptime and Reliability",
            "Increased Agility for Business and IT"
        ]
    },
    {
        eventKey: "operations",
        title: "Cloud Operations",
        heading: "Cloud Operations",
        description: "Optimize and manage cloud infrastructure for peak performance.",
        expertiseList: [
            "Cloud-Enabled Disaster Recovery",
            "Infrastructure Automation Solutions",
            "CI/CD Process Optimization",
            "Expert DevOps Team",
            "Comprehensive Support at All Levels",
            "Post-Migration Assistance",
            "Cost-Efficient Cloud Optimization"
        ],
        valueList: [
            "Reduced Time to Market with Faster Release Cycles",
            "Accelerated Automation processes",
            "Strengthened Security Protocols",
            "Significant IT Cost Reductions",
            "Enhanced RPO, RTO, and Disaster Recovery",
            "Flexible, On-Demand Scalability with Global Access"
        ]
    },
    {
        eventKey: "quality",
        title: "Cloud Quality",
        heading: "Cloud Quality",
        description: "Ensure top-tier performance and service quality in your cloud environment.",
        expertiseList: [
            "Cloud Security Advisory Services",
            "Penetration Testing and Vulnerability Assessment",
            "Availability Assurance",
            "Performance and Scalability Optimization",
            "Compliance and Regulatory Testing",
            "Chaos Engineering for Resilience"
        ],
        valueList: [
            "Higher Customer Satisfaction",
            "Improved System Availability, Performance and Security",
            "Compliance with Industry Standards",
            "Enhanced Fault Tolerance and Disaster Recovery",
            "Streamlined Testing Process with Cost Savings",
            "Enhanced Collaboration Across Teams"
        ]
    },
    {
        eventKey: "accelerators",
        title: "Cloud Accelerators",
        heading: "Cloud Accelerators",
        description: "Leverage cloud accelerators to fast-track innovation and business growth.",
        expertiseList: [
            "MLOps for Streamlined Machine Learning Workflows",
            "DataOps for Efficient Data Management",
            "GitOps for Automated Deployments",
            "CI/CD Program Development/Implementation",
            "CI/CD Automation Enhancements",
            "Advanced Machine Learning Solutions",
            "Comprehensive Data Science Support"
        ],
        valueList: [
            "Robust Cloud Infrastructure",
            "Seamless Cloud Integration",
            "Enhanced Application Performance",
            "Quick and Seamless Cloud Migrations",
            "High-Performance Workload Handling",
        ]
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

export { bannerHeading, bannerText, fourBoxesContent, fourBoxesCloud, tabsData, workSliderData, servicesBoxesContent };