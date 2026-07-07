import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import "@/styles/ExpertisePreconfig.css";

export default function ExpertisePreconfig({ title, description, dataPreconfig = [] }) {
	return (
		<section className="expertise-preconfig content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					<div className="preconfig-sections">
						{dataPreconfig.map((section, index) => (
							<div key={index} className="inner-section">
								<div className="header">
									<div className="head-img">
										<Image width="357" height="111"
											src={section.logo}
											alt={`${section.title} Logo`}
											className=""
										/>
									</div>
								</div>
								<ul className="footer">
									{section.items.map((item, idx) => (
										<li key={idx} className="">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Row>
			</Container>
		</section>
	);
}
