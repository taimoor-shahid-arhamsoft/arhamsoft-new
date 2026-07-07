import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./StatsBlock.css";

export default function StatsBlock({ head, title, titleTwo, buttonText, mainHeading, desc, stats = [] }) {
	return (
		<section className="stats-block">
			<Container>
				<Row className="align-items-center">
					{head &&
						<Col xl={3} className="m-b-20 mb-xl-0">
							<h2>{title} <span> {titleTwo}</span></h2>
							<Link className="btn btn-solid-blue"
								href="#contact-us" // Cordinator(Arslan) asked me add this link same for all pages, if any page have not contact form then 'display: none' this button on that page
							>{buttonText}</Link>
						</Col>
					}
					<Col xl={head ? 9 : 12}>
						<div className="stats-outer position-relative">
							<div className="content-holder position-relative text-white">
								{mainHeading &&
									<div className="heading-block">
										<h3>{mainHeading}</h3>
									</div>
								}
								{desc && <p>{desc}</p>}
								<ul className="list-unstyled d-flex flex-wrap stats-list mb-0">
									{stats.map((stat, index) => (
										<li key={index}>
											<strong className="d-block">{stat.value}</strong>
											<span>{stat.description}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}