import { Images } from "@/assets/assets";

const bannerHeading = <h1>Boost Your Business Protection with Premium Cyber Security Services</h1>;
const bannerText = <p>Our cybersecurity services protect your business from online threats with advanced security protocols and continuous monitoring. We ensure your data, networks, and systems stay secure and compliant.</p>;
const whatWeDoTitle = <h2><span className="d-block">Services We Offer</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.cyberSecurityOffer01,
        iconHover: Images.cyberSecurityOfferHover01,
        title: "Network Security",
        description: "We protect your network from unauthorized access, cyber-attacks, and breaches. Proactive monitoring ensures the security and confidentiality of data transmitted across your network."
    },
    {
        iconDefault: Images.cyberSecurityOffer02,
        iconHover: Images.cyberSecurityOfferHover02,
        title: "Vulnerability Management",
        description: "We continuously identify and fix system weaknesses before they can be exploited. Our solution helps you stay ahead of threats and reduce the risk of security breaches."
    },
    {
        iconDefault: Images.cyberSecurityOffer03,
        iconHover: Images.cyberSecurityOfferHover03,
        title: "Cloud Security",
        description: "We protect your cloud data from cyber threats, ensuring it remains safe and compliant. Our services guard against data loss, unauthorized access, and service disruptions."
    },
    {
        iconDefault: Images.cyberSecurityOffer04,
        iconHover: Images.cyberSecurityOfferHover04,
        title: "Endpoint Security",
        description: "We secure all devices from malware, ransomware, and other threats. Real-time monitoring and automated responses help mitigate risks from compromised endpoints."
    },
    {
        iconDefault: Images.cyberSecurityOffer05,
        iconHover: Images.cyberSecurityOfferHover05,
        title: "Threat Detection",
        description: "We use advanced technologies to detect unusual behavior and threats in real time. Rapid detection and response minimize damage and prevent security breaches."
    },
    {
        iconDefault: Images.cyberSecurityOffer06,
        iconHover: Images.cyberSecurityOfferHover06,
        title: "Data Protection",
        description: "We encrypt and securely store sensitive data, ensuring only authorized access. Our services help you comply with privacy regulations and safeguard critical business information."
    }
];
const servicesBoxesContent = [
    {
        iconDefault: Images.cyberSecurityExcellence01,
        title: "Risk Evaluation",
        description: "We assess vulnerabilities and threats to proactively mitigate risks. Our evaluations help identify gaps before they lead to serious issues."
    },
    {
        iconDefault: Images.cyberSecurityExcellence02,
        title: "Policy Development",
        description: "We create customized cybersecurity policies for data protection and incident management. Our services ensure your organization follows industry best practices."
    },
    {
        iconDefault: Images.cyberSecurityExcellence03,
        title: "Protective Measures",
        description: "We implement advanced security technologies like firewalls and encryption to protect your systems. Our solutions guard against evolving cyber threats."
    },
    {
        iconDefault: Images.cyberSecurityExcellence04,
        title: "Employee Training",
        description: "We provide training to ensure employees recognize risks and follow security protocols. This helps reduce human errors that could lead to breaches."
    },
    {
        iconDefault: Images.cyberSecurityExcellence05,
        title: "Ongoing Surveillance",
        description: "We offer 24/7 monitoring to detect and respond to suspicious activity in real-time. Our service ensures your systems remain secure around the clock."
    },
    {
        iconDefault: Images.cyberSecurityExcellence06,
        title: "Crisis Management",
        description: "We develop incident response plans to handle breaches swiftly and minimize damage. Our plans ensure quick recovery and minimal disruption."
    },
    {
        iconDefault: Images.cyberSecurityExcellence07,
        title: "Regular Updates",
        description: "We manage regular updates and patches to address new vulnerabilities. Our service keeps your systems secure and up to date."
    },
    {
        iconDefault: Images.cyberSecurityExcellence08,
        title: "Regulatory Compliance",
        description: "We ensure your business complies with cybersecurity regulations like GDPR and HIPAA. Our audits help you meet legal requirements and avoid risks."
    },
    {
        iconDefault: Images.cyberSecurityExcellence09,
        title: "Evaluation & Improvement",
        description: "We continuously assess and improve your cybersecurity framework. Our services ensure your defense strategies adapt to emerging threats."
    },
];
const outcomes = [
    "Expert Support",
    "Reduced Breach Risks",
    "Regulatory Compliance",
    "Improved Incident Recovery",
    "Proactive Threat Management",
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconCloudSolutions01,
        title: "Top-tier Systems",
        subTitle: "& Tools",
        description: "We provide access to the latest security tools, constantly updated to address emerging threats. This ensures your business is protected with the best technology available. You get enterprise-level security without the overhead of managing it internally."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconCloudSolutions02,
        title: "Cutting-Edge",
        subTitle: "Services",
        description: "Our services use next-gen techniques like AI-driven threat detection. These solutions are designed to stay ahead of cybercriminals. Your business is always protected by the most innovative technologies."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconCloudSolutions01,
        title: "Advanced Threat",
        subTitle: "Detection",
        description: "We monitor your systems 24/7 for real-time threat detection and rapid response. Potential risks are identified and addressed before they cause damage. This minimizes downtime and reduces security breaches."
    },
    {
        boxColor: "light-green",
        icon: Images.iconCloudSolutions02,
        title: "Protection Against",
        subTitle: "Evolving Threats",
        description: "Cyber threats are constantly evolving, and we stay ahead with updated security measures. Our proactive approach prevents vulnerabilities from impacting your business. Your defenses are always prepared for new types of attacks."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconCloudSolutions03,
        title: "Certified and",
        subTitle: "Skilled Team",
        description: "Our team is made up of certified cybersecurity experts with years of experience. You benefit from industry-leading knowledge and skill. We ensure your business is protected by professionals who understand the latest security challenges."
    },
    {
        boxColor: "light-purple",
        icon: Images.iconCloudSolutions04,
        title: "Compliance and",
        subTitle: "Security Standards",
        description: "We help your business stay compliant with regulations like GDPR and HIPAA. Our solutions ensure security standards are met to avoid penalties. This keeps your data secure and your business in compliance."
    }
];
const stats = [
    { value: "95%", description: "reduction in data breaches" },
    { value: "98%", description: "threat detection accuracy" },
    { value: "10+", description: "years of experience" },
    { value: "10,000+", description: "threats mitigated" }
];
const processSteps = [
    { icon: Images.iconAiHiringProcess01, title: "Requirements", stepName: "Specify the resources you need." },
    { icon: Images.iconAiHiringProcess02, title: "Profiles", stepName: "We will send you relevant profiles." },
    { icon: Images.iconAiHiringProcess03, title: "Selection", stepName: "Select experts for virtual interview." },
    { icon: Images.iconAiHiringProcess04, title: "Flexible Hiring", stepName: "Hire on an hourly, part/full-time basis." },
    { icon: Images.iconAiHiringProcess05, title: "Onboarding", stepName: "Onboard an expert or remote team." },
];
const accordionFaqsData = [
    {
        eventKey: "0",
        title: "How do you assess the cybersecurity risks for my business?",
        description: [
            "We assess your security posture, identify assets, and evaluate controls. We conduct vulnerability scans, penetration tests, and analyze threats and compliance risks. Based on this, we develop a plan to address vulnerabilities and strengthen defenses.",
        ],
    },
    {
        eventKey: "1",
        title: "What happens if there is a data breach or cyberattack?",
        description: [
            "If a data breach or cyberattack occurs, our team quickly contains the threat, isolates compromised systems, and secures vulnerabilities. We investigate the breach, recover data, and restore systems.",
        ],
    },
    {
        eventKey: "2",
        title: "What compliance regulations do your cybersecurity services support?",
        description: [
            "Our cybersecurity services ensure your business meets industry-specific regulations like GDPR, HIPAA, PCI-DSS, SOC 2, and CMMC. We work with you to align your security practices with compliance standards, helping you avoid penalties.",
        ],
    },
    {
        eventKey: "3",
        title: "How do you handle mobile device security?",
        description: [
            "We implement mobile device management (MDM) solutions to secure business devices with encryption, password protection, and remote wipe capabilities. Additionally, we monitor for unauthorized apps and restrict access to company data, reducing the risk of mobile security breaches.",
        ],
    },
    {
        eventKey: "4",
        title: "Can you help me with disaster recovery planning?",
        description: [
            "We help businesses create disaster recovery plans (DRP) to quickly resume operations after a cyberattack or IT disaster, including secure data backups and recovery strategies. Our plans are regularly tested to ensure effectiveness and guide business continuity to maintain essential services during disruptions.",
        ],
    },
    {
        eventKey: "5",
        title: "How do you handle vendor and third-party risks?",
        description: [
            "We assess your vendor's cybersecurity, including data protection and certifications, to meet security requirements. We also enforce access controls, monitor third-party connections, and establish secure data-sharing protocols to prevent breaches.",
        ],
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

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, servicesBoxesContent, outcomes, gridsContent, stats, processSteps, accordionFaqsData, workSliderData };