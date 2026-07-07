import { Images } from "@/assets/assets";

const bannerHeading = <h1>Get Striking Designs<br /> That Captivate Users</h1>;
const bannerText = <p>Graphics are the first thing people see. We create designs that instantly connect with your audience and build trust.</p>;
const whatWeDoTitle = <h2><span className="d-block">Our Expertise</span></h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconUIUXWWDDefault01,
        iconHover: Images.iconUIUXWWDHover01,
        title: "Journey Mapping",
        description: "We craft detailed user journeys to identify pain points and enhance user satisfaction."
    },
    {
        iconDefault: Images.iconUIUXWWDDefault02,
        iconHover: Images.iconUIUXWWDHover02,
        title: "Prototyping",
        description: "By combining our creative skills with cutting-edge tools, we visualize and test concepts to quickly meet user needs."
    },
    {
        iconDefault: Images.iconUIUXWWDDefault03,
        iconHover: Images.iconUIUXWWDHover03,
        title: "User Experience",
        description: "We follow best user experience practices to create intuitive and engaging interfaces that make interactions enjoyable."
    },
    {
        iconDefault: Images.iconUIUXWWDDefault04,
        iconHover: Images.iconUIUXWWDHover04,
        title: "User Interface",
        description: "To enhance interaction, we design functional interfaces that are intuitive and visually stunning."
    },
    {
        iconDefault: Images.iconUIUXWWDDefault05,
        iconHover: Images.iconUIUXWWDHover05,
        title: "Collaborative Development",
        description: "To integrate design with functionality, our creative team works hand in hand with developers."
    },
    {
        iconDefault: Images.iconUIUXWWDDefault06,
        iconHover: Images.iconUIUXWWDHover06,
        title: "Comprehensive Testing",
        description: "We conduct thorough testing processes to ensure our designs are both accurate and user-centric."
    },
];
const howWeDoText = [
    { text: "To deliver impactful designs that please users and jump up engagement, we adopt a strategic approach." }
]
const howWeDos = [
    {
        icon: Images.iconUIUXHWD01,
        boxColor: "orange",
        title: "User Research",
        description: "We align with the client's strategic objectives. Then, we conduct user research, competitive analysis, and persona creation.",
    },
    {
        icon: Images.iconUIUXHWD02,
        boxColor: "blue",
        title: "Creative Development",
        description: "We create key elements like wireframes, prototypes, and information architecture. This process ensures a user-friendly experience.",
    },
    {
        icon: Images.iconUIUXHWD03,
        boxColor: "farozi",
        title: "Test & Iterate",
        description: "After completion, we ensure quality by conducting usability tests, analyzing feedback, performing A/B tests, and refining through iterative design.",
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

export { bannerHeading, bannerText, workSliderData, whatWeDoTitle, whatWeDos, howWeDoText, howWeDos };