import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/GenerateBusiness.css";

export default function GenerateBusiness({ liteTitle, title, description, benefits }) {
	return (
		<section className="generate-business content-bottom-section">
			<Container>
				<div className="heading-block text-center position-relative">
					<div className="bg-logo-holder">
						<Image width="380" height="373" className="img-fluid" src={Images.bgCompanyLogo} alt="Company Logo" />
					</div>
					<h2><span className="d-block">{liteTitle}</span> {title}</h2>
					<p>{description}</p>
				</div>
				<Row>
					{benefits.map((benefit, index) => {
						return (
							<Col lg={6} key={index}>
								<div className="benefit-block position-relative text-white">
									<div className="image-holder">
										<Image width="798" height="419" className="img-fluid" src={benefit.imgSrc} alt="image" />
									</div>
									<h2>{benefit.title} <span>{benefit.subTitle}</span></h2>
									<p className="mb-0">{benefit.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}