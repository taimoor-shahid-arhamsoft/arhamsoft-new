import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MultiColorGridClient from "./MultiColorGridClient";
import "@/styles/MultiColorGrid.css";

export default function MultiColorGrid({ subTitle, title, description, gridsContent }) {
	return (
		<section className="multi-color-grid content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2>{subTitle} <span className="d-block">{title}</span></h2>
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					<MultiColorGridClient gridsContent={gridsContent} />
				</Row>
			</Container>
		</section>
	);
}