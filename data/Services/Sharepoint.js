import { Images } from "@/assets/assets";

const bannerHeading = <h1>Enhance Collaboration<br />Across The Organization</h1>;
const bannerText = <p>We streamline collaboration with tailored SharePoint integration.</p>;
const fourBoxesContent = [
    {
        iconDefault: Images.iconSPWWO01,
        title: "Development",
        description: "We develop custom SharePoint apps and sites to enhance efficiency and improve collaboration."
    },
    {
        iconDefault: Images.iconSPWWO02,
        title: "Migration",
        description: "We help migrate data from older SharePoint versions or other platforms to newer environments."
    },
    {
        iconDefault: Images.iconSPWWO03,
        title: "Integration",
        description: "We integrate SharePoint with CRM, ERP & other tools to ensure seamless data flow and enhanced collaboration."
    },
    {
        iconDefault: Images.iconSPWWO04,
        title: "Support",
        description: "We offer issue resolution and performance optimization for the SharePoint platform."
    },
    {
        iconDefault: Images.iconSPWWO05,
        title: "Customization",
        description: "We customize SharePoint sites by modifying interfaces & configuring site settings to align as per requirements."
    },
    {
        iconDefault: Images.iconSPWWO06,
        title: "Workflow Automation",
        description: "We automate workflows in SharePoint to streamline processes, reduce manual tasks, and boost efficiency."
    },
    {
        iconDefault: Images.iconSPWWO07,
        title: "Expert Consultation",
        description: "We help organizations maximize SharePoint through best practices, user training & strategic planning."
    },
    {
        iconDefault: Images.iconSPWWO08,
        title: "Analytics & Reporting",
        description: "We use SharePoint's powerful data features for efficient reporting, analysis, and decision-making."
    },
];
const boxesContent = [
    {
        icon: Images.iconSPApp01,
        boxColor: "orange",
        title: "Assessment & Planning",
        description: "We assess project needs & develop a plan to ensure successful implementation.",
    },
    {
        icon: Images.iconSPApp02,
        boxColor: "blue",
        title: "Implementation & Customization",
        description: "We develop custom applications, migrate data, integrate systems, and automate workflows.",
    },
    {
        icon: Images.iconSPApp03,
        boxColor: "farozi",
        title: "Training and Support",
        description: "We provide ongoing support to help users maximize SharePoint’s features efficiently.",
    },
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconSPWCU01,
        title: "Dedicated",
        subTitle: "Helpdesk",
        description: "We provide 24/7 SharePoint support to swiftly address issues, ensuring smooth and productive operations."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconSPWCU02,
        title: "Planning",
        subTitle: "& Execution",
        description: "We transform vision into reality, guiding your SharePoint projects from planning through to seamless execution."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconSPWCU03,
        title: "Unified",
        subTitle: "Compatibility",
        description: "We optimize SharePoint for seamless performance across all platforms, elevating accessibility and user experience."
    },
    {
        boxColor: "light-green",
        icon: Images.iconSPWCU04,
        title: "Advanced",
        subTitle: "Security Measures",
        description: "We implement top security protocols in SharePoint to protect your data from cyber threats and ensure compliance."
    },
    {
        boxColor: "light-navy",
        icon: Images.iconSPWCU05,
        title: "Productive",
        subTitle: "Ecosystem",
        description: "We optimize SharePoint environments to boost productivity by streamlining processes and improving access."
    },
    {
        boxColor: "light-purple",
        icon: Images.iconSPWCU06,
        title: "Intranet",
        subTitle: "Access",
        description: "We offer a centralized intranet portal that streamlines communication, collaboration, and information sharing."
    }
];
const bulletContent = [
    {
        title: "SharePoint Capabilities",
        description: "Our SharePoint capabilities extend to custom development, seamless migration, robust security & system integration, enhancing document management and workflow efficiency. We provide continuous assistance with setup, customization & ongoing support, ensuring your team's success in a dynamic environment."
    },
    {
        title: "Continuous Assistance",
        description: "Our SharePoint expertise includes custom development, migration & robust security, tailored to enhance your productivity in a collaborative workspace. We offer continuous expert guidance from setup to ongoing support, ensuring seamless integration & effective use of SharePoint to boost efficiency."
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

export { bannerHeading, bannerText, workSliderData, fourBoxesContent, gridsContent, bulletContent, boxesContent };