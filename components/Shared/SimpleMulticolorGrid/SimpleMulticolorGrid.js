import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/SimpleMulticolorGrid.css";

export default function SimpleMultiColorGrid({ title, description, gridsContentSimple = [] }) {
	return (
		<section className="simple-multi-color-grid content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							<p>{description}</p>
						</div>
					</Col>
				</Row>
				<Row>
					{gridsContentSimple.map((gridContent, index) => {
						return (
							<Col lg={6} key={index}>
								<div className={`feature-block d-flex align-items-cenger justify-content-between position-relative flex-wrap bg-${gridContent.boxColor}`}>
									<div className="text-holder order-1 order-sm-0">
										<h3>{gridContent.title}<span className="d-block">{gridContent.subTitle}</span></h3>
										<p className="mb-0">{gridContent.description}</p>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}