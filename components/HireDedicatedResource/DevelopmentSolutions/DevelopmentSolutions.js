import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import "./DevelopmentSolutions.css";

export default function DevelopmentsSolutions({ title, text, developmentFlow = [], ButtonFoot, buttonText, buttonLink = "/" }) {
	return (
		<section className="content-section development-solutions">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							<p>{text}</p>
						</div>
					</Col>
				</Row>
				<Row>
					{developmentFlow.map((process, index) => {
						return (
							<Col xl={3} md={6} key={index} className='column-bottom-margin'>
								<div className="process-block position-relative">
									<div className="icon-holder">
										<Image className='img-fluid' width="65" height="65" src={process.icon} alt="icon" />
									</div>
									<h3>{process.title}</h3>
									<p className='mb-0'>{process.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
				{ButtonFoot &&
					<Row>
						<Col>
							<div className="button-foot text-center">
								<Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
							</div>
						</Col>
					</Row>
				}
			</Container>
		</section>
	);
}