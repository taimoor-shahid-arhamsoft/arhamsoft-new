import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OurProcess({ title, lightTitle, description, processSteps = [] }) {
	return (
		<section className="our-process content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span>{title}</span> {lightTitle ? lightTitle : ""}</h2>
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="table-responsive">
							<ul className="list-unstyled mb-0 d-flex justify-content-between">
								{processSteps.map((step, index) => {
									return (
										<li key={index} className="process-content d-flex flex-column align-items-center text-center">
											<div className="icon-holder position-relative">
												<Image className="img-fluid" width="146" height="146" src={step.icon} alt="icon" />
											</div>
											<span className="step-name ">{step.stepName}</span>
											{step.text && <p>{step.text}</p>}
										</li>
									);
								})}
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}