import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurExperties from "./OurExperties";
import "./PartnerWithUs.css";

export default function PartnerWithUs() {
	return (
		<section className="partner-with-us position-relative">
			<Container>
				<div className="content-holder">
					<Row className="align-items-center">
						<Col xl={4}>
							<div className="text-block">
								<h2>AI That <span className="d-block">Gets Used</span></h2>
								<p className="mb-0">Most companies have bought AI that changed nothing. We build the kind that does, with:</p>
							</div>
						</Col>
						<Col xl={8}>
							<OurExperties />
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
}