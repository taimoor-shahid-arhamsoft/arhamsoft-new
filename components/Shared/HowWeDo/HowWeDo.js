import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HowWeDoBlock from "@/components/Shared/HowWeDoBlock/HowWeDoBlock";

export default function HowItWorks({ title, subtitle, description, items = [], columnThree }) {
	return (
		<section className="how-we-do content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{title && <h2>{subtitle}<span className="d-block">{title}</span></h2>}
							{description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
						</div>
					</Col>
				</Row>
				<Row>
					{items.map((item, index) => {
						return (
							<Col xl={columnThree ? "4" : "3"} md={6} key={index} className="column how-we-do-column">
								<HowWeDoBlock icon={item.icon} iconHover={item.iconHover} title={item.title} keyPoints={item.keypoints} description={item.description} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}