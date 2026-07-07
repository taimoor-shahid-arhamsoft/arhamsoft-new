import { Images } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@/styles/ComprehensiveContent.css";

export default function ComprehensiveContent(props) {
	return (
		<section className="comprehes-block content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center position-relative">
							<div className="bg-logo-holder">
								<Image className="img-fluid" width="380" height="373" src={Images.bgCompanyLogo} alt="Company Logo" />
							</div>
							{props.title && <h2>{props.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
				</Row>
				<div className="itms-holder d-flex flex-wrap justify-content-between position-relative">
					{props.comprehensiveItems.map((item, index) => {
						return (
							<div className="comprehens-item" key={index}>
								<span className="arrow-icon text-white">
									<FontAwesomeIcon icon={faArrowRight} />
								</span>
								<div className="image-holder h-100 d-flex justify-content-center algin-items-center">
									<Image width="1639" height="666" className='img-fluid' src={item.image} alt="image" />
								</div>
								<div className="content-holder text-white">
									<h3>{item.title} <span>{item.subTitle}</span></h3>
									<p>{item.description}</p>
									{item.bullets ?
										<ul className="bullet-points d-flex justify-content-center flex-wrap list-unstyled mb-0">
											{item.bullets.map((bullet, index) => {
												return (
													<li key={index} className="position-relative">{bullet.text}</li>
												);
											})}
										</ul>
										:
										""
									}
									{item.buttonText && <div className="link-holder">
										<a href="#contact-us" className="btn btn-solid-white">{item.buttonText}</a>
									</div>
									}
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}