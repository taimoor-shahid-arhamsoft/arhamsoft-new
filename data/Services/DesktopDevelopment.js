import { Images } from "@/assets/assets";

const bannerHeading = <h1>Super-Fast, Responsive <span className="d-block">Desktop Apps</span></h1>
const bannerText = <p>Create a standout online presence with end-to-end desktop application services from Data on Matrix. We stand as a top-tier custom software development company, helping businesses break away from the ordinary.</p>
const content = [
    {
        contentText: [
            { text: "Data on Matrix provides a full spectrum of desktop application services, including development, modernization, migration, testing and more, helping enterprises align their applications with evolving business needs. Revolutionize your industry with our innovative software solutions and expert consulting. We're dedicated to helping you achieve your digital goals." },
            { text: "From standalone apps to point-of-sale systems, our versatile software suite empowers businesses to optimize operations, enhance customer experiences and drive revenue. Tailored to your needs, our applications deliver seamless performance across devices." },
        ],
        features: [
            {
                icon: Images.iconDDAYR01,
                title: "Strategic Planning & Consulting",
                description: "We analyze your needs, target audience and market trends. Then, we choose the best tech and create a detailed development plan."
            },
            {
                icon: Images.iconDDAYR02,
                title: "UI/UX Design & Prototyping",
                description: "Our design process starts with creating wireframes and interactive prototypes and then crafting visually appealing interfaces."
            },
            {
                icon: Images.iconDDAYR03,
                title: "Development & Testing",
                description: "We ensure diligent coding practices, rigorous testing, seamless integration and efficient deployment to deliver scalable desktop apps."
            },
            {
                icon: Images.iconDDAYR04,
                title: "Maintenance & Support",
                description: "Our commitment to excellence includes quick updates, expert technical support and robust security to ensure your app runs smoothly."
            },
        ]
    },
];
const bulletContent = [
    {
        title: "Optimal Tech Stack",
        description: "We carefully select the best technologies for your project, considering your needs and goals."
    },
    {
        title: "Scalable Designs",
        description: "Our desktop applications are built to scale effortlessly with your business."
    },
    {
        title: "Rigorous Security Audits",
        description: "We ensure your data is secure and compliant with standards like GDPR and HIPAA."
    },
    {
        title: "Seamless Integration",
        description: "We simplify your development by integrating with essential external services."
    },
    {
        title: "Efficient Deployment",
        description: "Our streamlined deployment minimizes business disruption."
    },
];
const comprehensiveItems = [
    {
        image: Images.imgDDComp01,
        title: "Enterprise",
        subTitle: "Applications",
        description: "Maximize your digital potential with our fully customized desktop applications. Whether you need enterprise-grade solutions or niche-specific tools, our team of expert developers build software that is both powerful and user-friendly, ensuring your business thrives in the digital space.",
    },
    {
        image: Images.imgDDComp02,
        title: "Point of Sale",
        subTitle: "Systems",
        description: "We build powerful POS systems to help you maximize your ROI by keeping everything from inventory to orders and sales in balance. Our tailored solutions combine advanced features, an intuitive interface, and robust analytics to empower you to make data-driven decisions and achieve your business objectives.",
    },
    {
        image: Images.imgDDComp03,
        title: "Standalone",
        subTitle: "Applications",
        description: "Leverage our strategically built, high-performing, feature-rich standalone applications to create powerful and intuitive user experiences. Our expert developers utilize the power of the client/server architecture to deliver scalable, reliable and secure solutions that empower your business to achieve its goals.",
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