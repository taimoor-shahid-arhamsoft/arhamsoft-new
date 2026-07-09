import { Images } from "@/assets/assets";

const reviewTitle = <h2 className="mb-2 mb-sm-0 text-center text-sm-start"> <span>Happy </span>Clients</h2>;
const engagementModels = [
    {
        imgSrc: Images.imgAugModelTeam,
        title: "Team Augmentation",
        description: "Scale up your team size with the one who carries out projects quickly. We will meticulously curate your projects as per your wants & needs. Wherever needed, we will not shy away from sharing our knowledge to better accomplish the goals you wish to achieve.",
        link: "/team-augmentation",
        button: true,
    },
    {
        imgSrc: Images.imgAugModelFixed,
        title: "Fixed Price",
        description: "Bring a close to overrunning budgets & extended timelines with our software development services. We understand budget constraints hit the bottom line. That’s why we deliver on our promises. Ensuring that no ambiguity is left behind, we will thoroughly plan out deliverables & budget.",
        link: "/fixed-price",
        button: true,
    },
    {
        // imgSrc: Images.imgAugModelAI,
        imgSrc: Images.imgAugModelTeam,
        title: "AI Enablement",
        description: "Not a project with an end date. We build AI into your operations and stay for the monitoring, retraining and scaling that keeps it working.",
        link: "/ai-enablement",
        button: true,
    },
    {
        // imgSrc: Images.imgAugModelProduct,
        imgSrc: Images.imgAugModelFixed,
        title: "Product Readiness",
        description: "A fixed-scope review before you scale. We go through your AI product and tell you what breaks first, then you decide what to fix and who fixes it.",
        link: "/ai-product-readiness-review",
        button: true,
    },
];
const stats = [
    { value: "1.5+", description: "decades of growth" },
    { value: "2K+", description: "weekly hours saved" },
    { value: "500+", description: "projects delivered" },
    { value: "2", description: "offices worldwide" }
];

export { reviewTitle, engagementModels, stats };