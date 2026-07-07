import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import { features } from "@/data/Pages/Products/ProductsInCarto";

export default function ProductsInCarto({ onRequestDemo }) {
	return (
		<section className="products-incartoo content-section">
			<Container>
				<Row className="align-items-center">
					<Col>
						<div className="section-heading text-center">
							<h2>Digital Marketplace<span className="d-block">Incarto</span></h2>
							<p>A scalable e-commerce marketplace with a mobile-friendly UI designed to connect buyers and sellers irrespective of the business scale. Online vendors can enhance marketing pipelines, reach more customers and improve ROIs with this high-load, mobile-optimized, enterprise-ready software solution.</p>
							<p>Incarto facilitates home-delivered product vendors to improve their online visibility and boost product sales with customized online stores using this progressive web app available on iOS and Android platforms.</p>
						</div>
						<div className="image-holder text-center mb-5">
							<Image className="img-fluid" width="1636" height="632" src={Images.imgProductsInCrto} alt='Image' />
						</div>
					</Col>
				</Row>
				<Row>
					{features.map((feature, index) => {
						return (
							<Col key={index} xxl={4} md={6} className='column-bottom-margin'>
								<div className="feature-block mb-5">
									<div className="d-flex align-items-center mb-3">
										<div className="icon-holder">
											<Image className="img-fluid" width="100" height="100" src={feature.icon} alt="icon" />
										</div>
										<h3>{feature.title}<span className="d-block">{feature.subTitle}</span></h3>
									</div>
									<p>{feature.description}</p>
								</div>
							</Col>
						);
					})}
				</Row>
				<Row>
					<Col>
						<div className="btns-holder d-flex flex-wrap pt-3">
							<span className="btn btn-solid-blue me-2 mb-2" onClick={() => onRequestDemo("Incartoo")}>Request a Demo</span>
							<a href="https://incartoo.com/" target="_blank" className="btn btn-solid-blue me-2 mb-2">Try it Now</a>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}