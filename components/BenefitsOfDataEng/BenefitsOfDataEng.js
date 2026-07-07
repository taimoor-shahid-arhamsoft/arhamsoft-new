import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Animations } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/BenefitsOfData.css";

export default function BenefitsOfDataEng() {
	const benefits = [
		{ text: "<strong>Enhance Data Quality:</strong> Collecting and validating data from various sources, ensuring reliable information for your analysis." },
		{ text: "<strong>Leverage Big Data:</strong> We expertly manage large datasets, consolidating data from various sources for valuable insights." },
		{ text: "<strong>Increase Productivity:</strong> Our data engineering services streamline your operations, accelerating projects and enabling precise analysis." }
	];
	return (
		<section className="benefits-of-data content-section text-white">
			<Container>
				<Row className='align-items-center'>
					<Col xl={8} lg={7}>
						<div className="text-block">
							<h2><span className="d-block">Maximizing Your Data: </span>Our Engineering Expertise</h2>
							<p>Expand your business without data storage or processing worries. Our data engineering ensures high-quality, secure data storage and rapid analysis.</p>
							<ul className="benefit-points list-unstyled">
								{benefits.map((benefit, index) => {
									return (
										<li className="position-relative" key={index} dangerouslySetInnerHTML={{ __html: benefit.text }} />
									);
								})}
							</ul>
							<Link href="#contact-us" className="btn btn-solid-white">Hire Our Data Engineers</Link>
						</div>
					</Col>
					<Col xl={4} lg={5}>
						<div className="image-holder">
							<LottieAnimation animationData={Animations.benefitsOfDataE} />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}