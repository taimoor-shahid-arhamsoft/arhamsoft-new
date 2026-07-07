import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectGoals(props) {
	return (
		<section className="project-goals content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{props.title && <h2>{props?.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{props.goals.map((goal,index)=>{
						return(
							<Col lg={4} md={6} key={index} className="goal-col">
								<div className="goal-block">
									<div className="d-flex align-items-center justify-content-between icon-title-holder">
										<div className="icon-holder">
											<Image src={goal.icon} width="56" height="56" alt="Goal Icon" />
										</div>
										<h3 dangerouslySetInnerHTML={{ __html: goal.title }}></h3>
									</div>
									<p className="position-relative">{goal.text}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}