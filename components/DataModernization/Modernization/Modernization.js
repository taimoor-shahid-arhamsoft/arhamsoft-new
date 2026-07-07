import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/Modernization.css";
import Image from "next/image";

export default function Modernization() {
	const operations = [
		{
			icon:Images.iconDMMODOP01,
			title:"Data Accessibility & Agility",
			description:"Modernizing data breaks down silos, making data more accessible across the organization. Cloud storage and advanced analytics boost decision-making and business agility."
		},
		{
			icon:Images.iconDMMODOP02,
			title:"Scalability & Cost Efficiency",
			description:"Modern data architectures offer flexible scaling, reduced costs, and improved data handling. Eliminate expensive data centers and handle fluctuating loads efficiently."
		},
		{
			icon:Images.iconDMMODOP03,
			title:"Data Security & Compliance",
			description:"Modernized data systems offer enhanced security and compliance. Stronger protocols and data integrity reduce the risk of cyber breaches and compliance violations."
		},
	];
	return (
		<section className="mod-opt content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">Why Data Modernization</span></h2>
							<p>Stay competitive in a data-driven economy by moving legacy systems to new-age platforms.</p>
						</div>
					</Col>
				</Row>
				<Row>
					{operations.map((opertaion,index)=>{
						return(
							<Col lg={4} key={index}>
								<div className="operation-block">
									<div className="icon-holder">
										<Image className='img-fluid' width="89" height="90" src={opertaion.icon} alt="icon" />
									</div>
									<h3>{opertaion.title}</h3>
									<p>{opertaion.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}