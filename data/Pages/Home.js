import { cloudinaryImages } from "@/assets/assets";

const reviewTitle = <h2 className="mb-2 mb-sm-0 text-center text-sm-start"> <span>Happy </span>Clients</h2>;
const engagementModels = [
    {
        imgSrc: cloudinaryImages.AiEnablementHome,
        title: "AI Enablement",
        description: "Not a project with an end date. We build AI into your operations and stay for the monitoring, retraining and scaling that keeps it working.",
        link: "/ai-enablement",
        button: true,
    },
    {
        imgSrc: cloudinaryImages.ProductReadinessReviewHome,
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