import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OurSolutions({ title, description, solutions = [] }) {
	return (
		<section className="our-solutions content-bottom-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{title && <h2><span className="d-block">{title}</span></h2>}
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					{solutions.map((solution, index) => {
						return (
							<Col lg={4} md={6} key={index} className="solution-col">
								<div className="solution-block position-relative">
									<div className="count-icon-holder">
										<Image className="img-fluid" width="76" height="69" src={solution.counterIcon} alt='count icon' />
									</div>
									<h3>{solution.title} <span className="text-theme d-block">{solution.subTitle}</span></h3>
									<p className='mb-0'>{solution.text}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}