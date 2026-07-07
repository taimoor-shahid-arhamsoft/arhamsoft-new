import { Images } from "@/assets/assets";

const bannerHeading = <h1>Build Strong Connections <br />With The Audience</h1>;
const bannerText = <p>We understand audience needs with tailored, user-friendly solutions that resonate with customers, fostering trust and loyalty.</p>;
const gridsContent = [
    {
        boxColor: "light-blue",
        icon: Images.HumanWhy01,
        title: "Holistic",
        subTitle: "Service",
        description: "We provide a seamless journey from research to launch, integrating design and development for a unified, high-impact solution."
    },
    {
        boxColor: "light-grey",
        icon: Images.HumanWhy02,
        title: "Fast",
        subTitle: "Turnaround",
        description: "Our efficient workflows ensure rapid delivery of designs, keeping projects on schedule without compromising creativity."
    },
    {
        boxColor: "light-navy",
        icon: Images.HumanWhy03,
        title: "Cost",
        subTitle: "Effectiveness",
        description: "We maximize ROI by aligning human-centered design with measurable goals, offering transparent pricing."
    },
    {
        boxColor: "light-purple",
        icon: Images.HumanWhy04,
        title: "Open",
        subTitle: "Communication",
        description: "We communicate with clients at every step of the process to ensure the design aligns with the client's vision."
    }
];
const howWeDoText = [
    { text: "Crafting designs that resonate with customer needs and elevate experiences." }
];
const howWeDos = [
    {
        icon: Images.HumanOffer01,
        boxColor: "orange",
        title: "Customer Experience",
        description: "Designing intuitive, seamless, and meaningful experiences that address audience pain points.",
    },
    {
        icon: Images.HumanOffer02,
        boxColor: "blue",
        title: "Brand Marketing",
        description: "Crafting visually compelling brand narratives that align with customer emotions, values, and behaviors.",
    },
    {
        icon: Images.HumanOffer03,
        boxColor: "farozi",
        title: "Product Design",
        description: "Creating functional, aesthetically pleasing, and user-friendly products that solve real-world problems.",
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

export { bannerHeading, bannerText, workSliderData, howWeDoText, howWeDos, gridsContent };