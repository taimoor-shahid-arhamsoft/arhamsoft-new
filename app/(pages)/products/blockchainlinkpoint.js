import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import { bclPoints } from "@/data/Pages/Products/BlockchainLinkPoint";

export default function BlockChainLinkPoint({ onRequestDemo }) {
	return (
		<section className="products-bclp">
			<div className="content-block">
				<Container>
					<Row>
						<Col>
							<div className="section-heading text-center position-relative">
								<h2><span className="d-block">Blockchain LinkPoint</span></h2>
								<p>Blockchain LinkPoint is a next-gen, open source, autonomous platform that allows users to securely and anonymously buy and sell multiple digital currencies without depending on a centralized exchange. This peer-to-peer, decentralized blockchain exchange platform can exploit the potential of the cryptocurrency protocol completely to give users the most secure, reliable and private digital coin exchange.</p>
								<div className="center-image-holder">
									<Image className="img-fluid" src={Images.imgProductsbclp} alt='Image' width="1364" height="634" />
									<div className="btns-holder d-flex justify-content-center align-items-center">
										<span className="btn btn-solid-blue me-2 mb-2" onClick={() => onRequestDemo("Blockchain LinkPoint")}>Request a Demo</span>
										<a href="/contact-us" target="_blank" className="btn btn-solid-blue mx-1 mb-2">Try it Now</a>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="bcl-points-block">
				<Container>
					<Row>
						{bclPoints.map((bclPoint, index) => {
							return (
								<Col key={index} xl={3} md={6}>
									<div className={`bclpoint-block text-white bg-${bclPoint.boxColor}`}>
										<div className="icon-holder">
											<Image src={bclPoint.icon} width="97" height="97" alt="icon" />
										</div>
										<h3>{bclPoint.title}</h3>
										<p>{bclPoint.description}</p>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		</section>
	);
}