import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurTabs from "./OurTabs";

export default function OurSolutionsTaber(props) {
	return (
		<section className="our-solutions-taber content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{props.title && <h2>{props?.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
					<OurTabs
						stagePhaseText={props.stagePhaseText}
						solutionTabContent={props.solutionTabContent} />
				</Row>
			</Container>
		</section>
	);
}