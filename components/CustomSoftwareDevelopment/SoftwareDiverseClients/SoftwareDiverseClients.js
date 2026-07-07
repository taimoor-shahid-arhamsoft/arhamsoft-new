import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/SoftwareDiverseClients.css";

export default function SoftwareDiverseClients() {
	const coreValues = [
		{
			icon: Images.iconDiverClient01,
			title: "Startups",
			description: "Establish a strong presence in the market. By developing scalable and cost-effective software solutions, we enable businesses to adapt to emerging technologies, establishing a strong technological foundation for future growth."
		},
		{
			icon: Images.iconDiverClient02,
			title: "SMBs",
			description: "Address the operational complexities faced by your growing business. We develop customized software solutions that streamline processes, enhance engagement, and seamlessly integrate with your existing systems."
		},
		{
			icon: Images.iconDiverClient03,
			title: "Enterprises",
			description: "Enhance operational agility and foster innovation to maintain global competitiveness. We deliver robust, enterprise-level software that addresses complex workflows, manages data efficiently, and meets security requirements."
		},
	];
	return (
		<section className="software-diverse-clients content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">Supporting Growth at Every Stage</span></h2>
							<p>With a deep understanding of the challenges businesses face at various growth stages, we stand by our clients, providing tailored software solutions that drive their success.</p>
						</div>
					</Col>
				</Row>
				<Row>
					{coreValues.map((coreValue, index) => {
						return (
							<Col lg={4} key={index}>
								<div className="core-value-block">
									<div className="icon-holder">
										<Image width="89" height="90" src={coreValue.icon} alt="Icon" />
									</div>
									<h3>{coreValue.title}</h3>
									<p>{coreValue.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}