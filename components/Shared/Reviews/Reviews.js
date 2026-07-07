import dynamic from "next/dynamic";
import Container from "react-bootstrap/Container";
import ReviewHeader from "./ReviewHeader";
import "./Reviews.css";

const ReviewsSlider = dynamic(() => import("./ReviewsSlider").then((mod) => mod.default));

export default function Reviews({ title, homeReviews }) {
	const reviews = [
		{
			count: "5.0",
			stars: 5,
			text: "I highly recommend Data on Matrix for Salesforce services and have personally recommended them to others. Their solutions are truly first-class.",
			author: "Emily Perez"
		},
		{
			count: "5.0",
			stars: 5,
			text: "Data on Matrix has consistently provided us with top-tier talent, quickly filling crucial roles. Their commitment to supporting and valuing their dedicated developers aligns perfectly with our own company culture.",
			author: 'Chris Daron'
		},
		{
			count: "5.0",
			stars: 5,
			text: "We have been pleased with our partnership with DoM. We appreciate the ownership that they take when they work on our products. They are very driven to do a good job in custom software development.",
			author: 'Mathew Luke'
		},
		{
			count: "5.0",
			stars: 5,
			text: "Data on Matrix engineers are highly skilled and efficient. Their ability to rapidly identify dependencies and find solutions is remarkable. They've consistently surpassed my expectations.",
			author: 'Julie Parsons'
		},
		{
			count: "5.0",
			stars: 5,
			text: "Data on Matrix's support has kept our AI project on track. They're a capable, self-directed IT partner with excellent expertise and support service in modern technology.",
			author: 'Patrick Jones'
		},
		{
			count: "5.0",
			stars: 5,
			text: "The Data on Matrix team is both highly dedicated and technically strong. Their professionalism and expertise are greatly appreciated.",
			author: 'Casey Thompson'
		},
		{
			count: "5.0",
			stars: 5,
			text: "Thanks to the Data on Matrix team, we have been consistently impressed with both the clarity of their mobile app development process and the high quality of their services.",
			author: 'Justin Stefano'
		},
		{
			count: "5.0",
			stars: 5,
			text: "As a startup dealing with sensitive patient data, security is key. Data on Matrix's cybersecurity expertise enabled us to achieve compliance in just months that could otherwise take a year. Their service has been reliable, timely, and invaluable.",
			author: 'John Elijah'
		},
		{
			count: "5.0",
			stars: 5,
			text: "They prioritize clear communication with clients and are flexible with project changes, delivering world-class blockchain software development. I highly recommend their services.",
			author: 'Daniel Bailey'
		},
	];
	return (
		<div className={`our-reviews ${homeReviews ? "home-page-reviews" : ""}`}>
			<Container>
				<div className="review-header d-flex justify-content-between align-items-center flex-wrap flex-column flex-md-row">
					<ReviewHeader title={title} />
				</div>
				<div className="reviews-slider">
					<ReviewsSlider reviews={reviews} />
				</div>
			</Container>
		</div>
	);
}