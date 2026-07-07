import { Images } from "@/assets/assets";

const bannerHeading = <h1>Empowering People, <br />Fostering Futures</h1>;
const bannerText = <p>Be it coding mastery, niche expertise or management, a fulfilling career awaits you. At Data on Matrix, you'll do more than code – you'll join collaborative teams empowering clients to digitally transform their businesses.</p>;
const whatWeDoTitle = <h2><span className="d-block">Career with Data on Matrix </span>Perks to Reap </h2>;
const whatWeDos = [
    {
        iconDefault: Images.iconCarWWDDefault01,
        iconHover: Images.iconCarWWDHover01,
        title: "Supportive Work Culture",
        description: "We foster a friendly and collaborative work environment with flexible work arrangements and opportunities for growth. We also organize regular team-building activities and social events."
    },
    {
        iconDefault: Images.iconCarWWDDefault02,
        iconHover: Images.iconCarWWDHover02,
        title: "Competitive Compensation",
        description: "We offer competitive salaries and performance-based incentives, health cards, generous leave policies including paid time off, sick leave, provident fund scheme, and savings plan."
    },
    {
        iconDefault: Images.iconCarWWDDefault03,
        iconHover: Images.iconCarWWDHover03,
        title: "Continuous Learning",
        description: "We invest in our employees' growth by providing regular training programs, opportunities to work on the latest technologies and fee reimbursement for relevant certifications (T&C applies)."
    },
    {
        iconDefault: Images.iconCarWWDDefault04,
        iconHover: Images.iconCarWWDHover04,
        title: "Transparency & Integrity",
        description: "We promote a transparent work environment through an open-door policy, regular company updates, and transparent financial practices and performance metrics."
    },
    {
        iconDefault: Images.iconCarWWDDefault05,
        iconHover: Images.iconCarWWDHover05,
        title: "Work-Life Balance",
        description: "We prioritize work-life balance by offering flexible work hours to accommodate personal commitments, wellness programs and employee assistance programs to support mental well-being."
    },
    {
        iconDefault: Images.iconCarWWDDefault06,
        iconHover: Images.iconCarWWDHover06,
        title: "Significant Global Exposure",
        description: "We offer exciting work opportunities to collaborate with global clients and teams, experience diverse cultures and contribute to innovative solutions that have a real-world impact."
    },
];
const processSteps = [
    { icon: Images.iconOurProcess01, stepName: "Submit Resume" },
    { icon: Images.iconOurProcess02, stepName: "Resume Screening" },
    { icon: Images.iconOurProcess03, stepName: "Short Listing" },
    { icon: Images.iconOurProcess04, stepName: "Screening Call" },
    { icon: Images.iconOurProcess05, stepName: "Test Evaluation" },
    { icon: Images.iconOurProcess06, stepName: "Technical Interview-1" },
    { icon: Images.iconOurProcess07, stepName: "Technical Interview-2" },
    { icon: Images.iconOurProcess08, stepName: "Final Job Offer" },
];

export { bannerHeading, bannerText, whatWeDoTitle, whatWeDos, processSteps };