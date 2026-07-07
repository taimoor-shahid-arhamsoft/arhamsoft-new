import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/MadServices.css";

export default function Services({ title, description, services = [] }) {
	return (
		<section className="mad-services content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2>
								<span className="d-block">{title}</span>
							</h2>
							<p>{description}</p>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="two-services">
				<Container>
					<Row>
						{services.map((service, index) => (
							<Col lg={6} key={index}>
								<div
									className={`service-col ${index === 0 ? "ios-col" : "android-col"
										} d-flex flex-column flex-sm-row justify-content-lg-between align-items-lg-end`}
								>
									<div className="image-holder order-sm-1">
										<div className={`lottie-block ${index === 0 ? "ios" : "android"}`}>
											<LottieAnimation animationData={service.animationData} />
										</div>
										<div className="image-block">
											<Image
												width="156"
												height="290"
												className="img-fluid"
												src={service.image}
												alt="service image"
											/>
										</div>
									</div>
									<div className="text-holder order-sm-0">
										<h3>
											{service.title.split(" ")[0]}{" "}
											<span className="d-block">{service.title.split(" ")[1]} {service.title.split(" ")[2]}</span>
										</h3>
										<ul className="key-points list-unstyled mb-4">
											{service.keyPoints.map((point, idx) => (
												<li className="position-relative" key={idx}>
													{point}
												</li>
											))}
										</ul>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</section>
	);
}