import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import { features } from "@/data/Pages/Products/ProductAms";

export default function ProductAMS({ onRequestDemo }) {
	return (
		<section className="products-ams content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading">
							<h2>Asset<span className="d-block">Management System</span></h2>
							<p>An all-in-one, agile enterprise resource planning platform to manage and accelerate your business operations – procurement, marketing, sales and administration, to name a few.</p>
							<p>Unlock the potential of intelligent workflows with our automated management system. Designed to streamline operations and elevate customer satisfaction, this solution empowers companies to achieve their goals. Its shared database enables seamless collaboration, delivers measurable results, and comprehensively tracks your financial standing. Key features of this consumer software solution include:</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xl={8} lg={6} className="order-1 order-lg-0">
						<ul className="product-features d-flex flex-wrap list-unstyled mb-0">
							{features.map((feature, index) => {
								return (
									<li key={index}>
										<div className="d-flex align-items-center mb-3 mb-lg-4">
											<div className="icon-holder">
												<Image className="img-fluid" width="100" height="100" src={feature.icon} alt='Icon' />
											</div>
											<h3>{feature.title}<span className="d-block">{feature.subTitle}</span></h3>
										</div>
										<p>{feature.description}</p>
									</li>
								);
							})}
						</ul>
						<div className="btns-holder d-flex flex-wrap">
							<span className="btn btn-solid-blue me-2 mb-2" onClick={() => onRequestDemo("Asset Management System")}>Request a Demo</span>
							<Link target="_blank" href="https://accounts.arhamsoft.net/Account/Login?ReturnUrl=%2f" className="btn btn-solid-blue me-2 mb-2">Try it Now</Link>
						</div>
					</Col>
					<Col xl={4} lg={6} className="order-0 order-lg-1">
						<div className="image-holder mb-3 mb-lg-0 text-center pt-0 pt-lg-5">
							<Image className="img-fluid" width="500" height="425" src={Images.imgProductsAMS} alt="AMS Product Image" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}