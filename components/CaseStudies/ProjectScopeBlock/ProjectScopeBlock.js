import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectScopeBlock(props) {
	return (
		<section className="project-scope-block content-bottom-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{props.title && <h2>{props?.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={6} className="prjscp-col-outer">
						<div className="prjscp-col">
							<h2>{props.leftBlockHeading.title}<span>{props.leftBlockHeading.subTitle}</span></h2>
							<ul className="list-unstyled key-points">
								{props.leftBlockBullets.map((bullet, index) => {
									return (
										<li key={index}><strong>{bullet.title}</strong> {bullet.description}</li>
									);
								})}
							</ul>
						</div>
					</Col>
					<Col lg={6} className="prjscp-col-outer">
						<div className="prjscp-col">
							<h2>{props.rightBlockHeading.title}<span>{props.rightBlockHeading.subTitle}</span></h2>
							<ul className="list-unstyled key-points">
								{props.rightBlockBullets.map((bullet, index) => {
									return (
										<li key={index}><strong>{bullet.title}</strong> {bullet.description}</li>
									);
								})}
							</ul>
						</div>
					</Col>
				</Row>
				{props.bottomDescription &&
					<Row>
						<Col className="footer-text text-center">
							<p>{props.bottomDescription}</p>
						</Col>
					</Row>
				}
			</Container>
		</section>
	);
}