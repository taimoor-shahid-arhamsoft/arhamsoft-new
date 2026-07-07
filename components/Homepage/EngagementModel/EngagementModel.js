import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "./EngagementModel.css";

export default function EngagementModel({ liteTitle, title, description, engagementModels = [] }) {
	return (
		<section className="engagement-model">
			<Container>
				<div className="heading-block text-center position-relative">
					<div className="bg-logo-holder">
						<Image className="img-fluid" src={Images.bgCompanyLogo} width="380" height="373" alt="Company Logo" />
					</div>
					<h2><span className="d-block">{liteTitle}</span> {title}</h2>
					<p>{description}</p>
				</div>
				<Row>
					{engagementModels.map((model, index) => (
						<Col lg={6} key={index}>
							<div className="engagement-block position-relative">
								<div className="image-holder">
									<Image className="img-fluid" width="798" height="538" src={model.imgSrc} alt={model.title} />
								</div>
								<div className="content-holder">
									<h2 className="text-white">{model.title.split(" ")[0]} <span>{model.title.split(" ")[1]} {model.title.split(" ")[2]}</span></h2>
									<p className="text-white">{model.description}</p>
									{model.button && <Link className="btn btn-solid-white d-flex justify-content-center align-items-center" href={model.link}>Explore More</Link>}
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}