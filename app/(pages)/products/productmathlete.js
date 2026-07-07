import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import { features } from "@/data/Pages/Products/ProductMathlete";

export default function ProductMathlete({ onRequestDemo }) {
	return (
		<section className="product-mathlete content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading">
							<h2>MATHLETE<span className="d-block">Let’s Play Math!</span></h2>
							<p>Mathlete is an online quiz competition platform for students. This innovative platform with an intuitive and mobile-friendly interface is built on the latest technology stack, facilitating students to practice, evaluate and improve their academic skills in different categories. They can also participate in various competitions through creative campaigns organized by Mathlete and win amazing prizes.</p>
							<h3 className="sub-heading">Practice Makes Progress, Mastery Is The Goal</h3>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xl={7} lg={6} className="order-1 order-lg-0">
						<div className="content">
							<p>This highly customizable platform is continuously evolving and the difficulty level keeps on rising with every phase, aiming to prepare the teens for future careers where they need to cope with the ever-evolving ICT (Information and Communication Technologies) and work-life challenges.</p>
						</div>
						<ul className="product-features d-flex flex-wrap list-unstyled mb-0 mb-lg-4">
							{features.map((feature, index) => {
								return (
									<li key={index} className="position-relative">{feature.text}</li>
								);
							})}
						</ul>
						<div className="btns-holder d-flex flex-wrap">
							<span className="btn btn-solid-blue me-2 mb-2" onClick={() => onRequestDemo("Mathlete")}>Request a Demo</span>
							<a href="https://mathlete.pk" target="_blank" className="btn btn-solid-blue me-2 mb-2">Try it Now</a>
						</div>
					</Col>
					<Col xl={5} lg={6} className="order-0 order-lg-1">
						<div className="image-holder mb-3 mb-lg-0 text-center">
							<Image className="img-fluid" width="658" height="373" src={Images.imgProductsMathlete} alt="Mathlete-Image" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}