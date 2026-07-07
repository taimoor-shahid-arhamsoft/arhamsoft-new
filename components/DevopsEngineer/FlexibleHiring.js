import { Col, Container, Row } from "react-bootstrap";
import "@/styles/FlexibleHiring.css";
import Image from "next/image";
import Link from "next/link";

const FlexibleHiring = (props) => {
	return (
		<section className="flexible-hiring">
			<Container>
				<Row className="justify-content-center">
					<div className="section-heading text-center">
						<h2><span className="d-block">{props.title}</span></h2>
						<p>{props.text}</p>
					</div>
					{props.models.map((model, index) => (
						<Col lg={4} md={6} key={index}>
							<div className="content-wrapper text-center">
								<div className="image-wrapper">
									<Image src={model.image} width="89" height="89" alt="icon" className="img-fluid" />
								</div>
								<h3 className="fw-medium">{model.title}</h3>
								<ul className="desc-list">
									{model.description.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
								<div className="btn-holder pt-3">
									<Link href={model.link} className="btn btn-solid-blue">
										Hire Now
									</Link>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default FlexibleHiring;