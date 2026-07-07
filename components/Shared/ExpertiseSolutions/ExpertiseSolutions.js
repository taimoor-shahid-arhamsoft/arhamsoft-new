import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TabsContainer } from "./ExpertiseTabContainer";
import "@/styles/MultiColorGrid.css";
import "@/styles/ExpertiseSolutions.css";

export default function ExpertiseSolutions({ title, description, tabsData, innovation, initialTab }) {
	return (
		<section className={`expertise-solutions content-section ${innovation ? "innovation" : ""}`}>
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<TabsContainer tabsData={tabsData} initialTab={initialTab} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}