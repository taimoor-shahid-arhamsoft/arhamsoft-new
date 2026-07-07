import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServiceCard from "@/components/HireDedicatedResource/CertifiedDevelopers/ServiceCard";
import "./CertifiedDevelopers.css";
import Link from "next/link";

export default function CertifiedDevelopers({ title, content = [], servicesData = [], ButtonFoot, buttonText, buttonLink = "/" }) {
	return (
		<section className="content-section certified-developers">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							{content.map((text, index) => {
								return (
									<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
								);
							})}
						</div>
					</Col>
				</Row>
				<Row>
					<div className='certified-developers-content'>
						{servicesData.map((service, index) => (
							<div className="certified-developers-card" key={index}>
								<ServiceCard
									image={service.image}
									title={service.title}
									description={service.description}
								/>
							</div>
						))}
					</div>
					{ButtonFoot &&
						<div className="button-foot text-center">
							<Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
						</div>
					}
				</Row>
			</Container>
		</section>
	);
}