import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/ServicesAndSolutions.css";

export default function ServiceAndSolutions() {
	const services = [
		{
			title:"Team",
			subTitle:"Augmentation",
			text:"Scale your teams without committing to permanent employment. Delegate your projects to team DoM & see how we perfectly nail them in no time.",
			counterColor:"orange"
		},
		{
			title:"Fixed",
			subTitle:"Price",
			text:"No more overrunning budgets. We understand that financial constraints narrow profit margins. That’s why we deliver on our promises.",
			counterColor:"light-black"
		},
		{
			title:"Discovery",
			subTitle:"Workshop",
			text:"Figure out what you can achieve. We can help you strategize and plan your goals, finances & technological projects with prototypes.",
			counterColor:"farozi"
		},
		{
			title:"Product",
			subTitle:"Consultation",
			text:"Reduce manual errors without frequent system overhauls. Our consultants can provide technical insights to optimize processes.",
			counterColor:"grey"
		},
		{
			title:"Support &",
			subTitle:"Maintenance",
			text:"Resolve system glitches anytime to streamline work processes. We can provide maintenance support and monitor apps 24/7.",
			counterColor:"green"
		},
		{
			title:"Disaster",
			subTitle:"Recovery",
			text:"Accomplish your backlogged projects with our experts. After identifying gaps, we present a realistic plan before getting started.",
			counterColor:"blue"
		},
	];
	return (
		<div className="services-solutions content-bottom-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading d-flex justify-content-center text-center">
							<h2>Solutions & Services <span className="d-block">That Accelerate Growth</span></h2>
						</div>
					</Col>
				</Row>
				<div className="services">
					<Row>
						{services.map((service,index)=>{
							return(
								<Col xl={4} md={6} key={index}>
									<div className="service-block position-relative">
										<span className={`service-count bg-${service.counterColor}`}>{index + 1}</span>
										<div className="service-header">
											<h3>{service.title} <span>{service.subTitle}</span></h3>
										</div>
										<p className="description mb-0">{service.text}</p>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			</Container>
		</div>
	);
}