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
								<h2>AI That Actually <span className="d-block">Gets Used</span></h2>
								<p className="mb-0">Most companies have already bought AI and watched it change nothing. We build the version that changes how the work happens — automation for operations teams who want their week back, and engineering for AI products that have to survive real users.</p>
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