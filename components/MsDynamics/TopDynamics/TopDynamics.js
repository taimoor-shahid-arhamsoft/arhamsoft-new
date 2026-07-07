import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import TopDynamicBlock from "./TopDynamicBlock";
import "@/styles/TopDynamics.css";

export default function TopDynamics() {
	const dynamicServices = [
		{
			icon:Images.iconMSDTopD01,
			title:"B2B Brand",
			keyPoints:[
				{text:"Tracking business accounts & purchase histories"},
				{text:"Offering personalized support"},
				{text:"Maintaining long-term client relationships"},
				{text:"Managing complex customer hierarchies"}
			]
		},
		{
			icon:Images.iconMSDTopD02,
			title:"B2C Customer",
			keyPoints:[
				{text:"Handling high volumes of customer inquiries"},
				{text:"Automating service tasks & return handling"},
				{text:"Providing quick & personalized responses"},
				{text:"Facilitating omnichannel support"}
			]
		},
		{
			icon:Images.iconMSDTopD03,
			title:"E-Commerce Buyer",
			keyPoints:[
				{text:"Providing self-service order tracking systems"},
				{text:"Automating processes & reducing manual tasks"},
				{text:"Integrating with platforms for improved service"},
				{text:"Managing online customer queries"}
			]
		},
		{
			icon:Images.iconMSDTopD04,
			title:"Patient Support",
			keyPoints:[
				{text:"Ensuring compliance with healthcare regulations"},
				{text:"Providing patients with self-service portals"},
				{text:"Managing patient interactions & general inquiries"},
				{text:"Enabling personalized patient care"}
			]
		},
		{
			icon:Images.iconMSDTopD05,
			title:"Government-Citizen Interaction",
			keyPoints:[
				{text:"Facilitating citizen inquiries & service requests"},
				{text:"Ensuring transparency in case resolution"},
				{text:"Streamlining workflows for govt. support teams"},
				{text:"Providing portals for citizens to access services"}
			]
		},
		{
			icon:Images.iconMSDTopD06,
			title:"Customer Support Center",
			keyPoints:[
				{text:"Easing omnichannel customer interactions"},
				{text:"Providing a unified customer history"},
				{text:"Automating call routing to the right agents"},
				{text:"Generating insights to improve CSAT"}
			]
		},
	];
	return (
		<section className="top-dynamics content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2>Leading <span className="d-block">Customer Service Scenarios</span></h2>
						</div>
					</Col>
				</Row>
				<Row>
					{dynamicServices.map((dynamicService,index)=>{
						return(
							<Col xl={4} md={6} key={index}>
								<TopDynamicBlock icon={dynamicService.icon} title={dynamicService.title} keyPoints={dynamicService.keyPoints} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}