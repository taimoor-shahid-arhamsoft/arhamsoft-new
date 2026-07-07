import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/DevelopmentServices.css";

export default function DevelopmentServices({ title, description, count, developmentServices = [] }) {
	return (
		<div className="development-services content-section">
			<div className="development-row">
				<Container>
					<Row>
						<Col>
							<div className="section-heading text-center">
								<h2>{title}</h2>
								<p>{description}</p>
							</div>
						</Col>
					</Row>
					<Row>
						{developmentServices.map((feature, index) => {
							if (index < 10) {
								index++;
								index = index.toString().padStart(2, 0);
							}
							return (
								<Col lg={4} md={6} className="column-margin" key={index}>
									<div className={`feature-block position-relative text-white ${feature.boxColor ? feature.boxColor : ""}`}>
										{count && <span className="feature-count">{index}</span>}
										<div className="icon-holder d-flex justify-content-center align-items-center">
											<Image width="89" height="90" className="img-fluid" src={feature.icon} alt='icon' />
										</div>
										<h3>{feature.title}</h3>
										{feature.description &&
											<p dangerouslySetInnerHTML={{ __html: feature.description }}></p>
										}
										{feature.list && (
											<ul className='feature-block-list text-white mb-0'>
												{feature.list.map((list, index) => {
													return <li key={index}><strong>{list.heading}</strong> {list.text}</li>;
												})}
											</ul>
										)}
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		</div>
	);
}