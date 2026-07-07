import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/EmpowerData.css";

export default function EmpowerData(props) {
	return (
		<section className="empower-data content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2>{props.titleOne}<span className="d-block">{props.titleTwo}</span></h2>
							<p>{props.description}</p>
						</div>
					</Col>
				</Row>
				<Row>
					{props.empowerItems.map((empowerItem, index) => {
						return (
							<Col lg={4} key={index}>
								<div className="empower-block">
									<div className="icon-holder">
										<Image className='img-fluid' width="89" height="90" src={empowerItem.icon} alt="Empower-Icon" />
									</div>
									<h3>{empowerItem.title}</h3>
									<ul className="key-points list-unstyled mb-0">
										{empowerItem.keypoints.map((keypoint, index) => {
											return (
												<li className="position-relative" key={index}>{keypoint.text}</li>
											);
										})}
									</ul>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}