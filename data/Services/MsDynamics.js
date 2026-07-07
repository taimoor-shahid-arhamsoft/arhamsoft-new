import { Images } from "@/assets/assets";

const bannerHeading = <h1>Resolve Complex<br />Issues Shortly</h1>;
const bannerText = <p>Streamline operations and elevate CX with our premium and cost-effective services.</p>;
const whatWeDoTitle = <h2><span className="d-block">Achieve More With Us</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconMSDHCWHDefault01,
        iconHover: Images.iconMSDHCWHHover01,
        title: "Customization",
        description: "We specialize in developing custom modules and user interfaces, ensuring seamless alignment of systems with workflows."
    },
    {
        iconDefault: Images.iconMSDHCWHDefault02,
        iconHover: Images.iconMSDHCWHHover02,
        title: "Integration",
        description: "We seamlessly connect MS Dynamics with any system such as CRM, ERP, e-commerce platforms, or third-party tools."
    },
    {
        iconDefault: Images.iconMSDHCWHDefault03,
        iconHover: Images.iconMSDHCWHHover03,
        title: "Implementation",
        description: "From system setup to user training, we manage every aspect to ensure a seamless & hassle-free adoption of Microsoft Dynamics."
    },
    {
        iconDefault: Images.iconMSDHCWHDefault04,
        iconHover: Images.iconMSDHCWHHover04,
        title: "Migration",
        description: "We manage the entire migration process to ensure that data moves safely from legacy systems with minimum downtime."
    },
    {
        iconDefault: Images.iconMSDHCWHDefault05,
        iconHover: Images.iconMSDHCWHHover05,
        title: "Upgradation",
        description: "We handle system upgrades & ensure compatibility with the current setup to run your business at peak performance."
    },
    {
        iconDefault: Images.iconMSDHCWHDefault06,
        iconHover: Images.iconMSDHCWHHover06,
        title: "Quality Assurance",
        description: "From functional testing to comprehensive user acceptance testing, we rigorously assess the system before it goes live."
    }
];
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.iconMSDKeyF01,
        title: "Help",
        subTitle: "Desk",
        description: "We track, prioritize, and resolve customer issues efficiently, ensuring timely follow-ups and seamless resolutions."
    },
    {
        boxColor: "light-grey",
        icon: Images.iconMSDKeyF02,
        title: "Data",
        subTitle: "Insights",
        description: "We analyze customer data to uncover insights, predict trends & personalize service based on preferences."
    },
    {
        boxColor: "light-orange",
        icon: Images.iconMSDKeyF03,
        title: "Customer",
        subTitle: "Contact Management",
        description: "We manage and unify customer interactions across channels, ensuring consistent, seamless support and quick resolutions."
    },
    {
        boxColor: "light-green",
        icon: Images.iconMSDKeyF04,
        title: "Service",
        subTitle: "Productivity",
        description: "We help boost agent efficiency with automated workflows, AI solutions, and real-time tracking for faster results."
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

export { bannerHeading, bannerText, workSliderData, gridsContent, whatWeDos, whatWeDoTitle };