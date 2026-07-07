import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import { benefits } from "@/data/Pages/Products/ProductsAlexaBoard";

export default function ProductsAlexaBoard({ onRequestDemo }) {
	return (
		<section className="products-alex-board text-white">
			<Container>
				<Row>
					<Col xl="8">
						<div className="content-holder">
							<div className="section-heading">
								<h2>HRM<span className="d-block">Alexa Board</span></h2>
								<p>An easy-to-integrate, cutting-edge platform for companies to focus on employee management by streamlining all workforce attributes into one business intelligence solution to meet strategic objectives. Automate and simplify your HR operations with our easy-to-use and scalable HRM software. Seamlessly connect Alexa Board with your favorite apps you use every day.</p>
							</div>
							<ul className="benefits list-unstyled mb-0 d-flex flex-wrap mb-0">
								{benefits.map((benefit,index)=>{
									return(
										<li key={index}>
											<div className="d-flex align-items-center mb-3">
												<div className="icon-holder">
													<Image src={benefit.icon} width="100" height="100" alt="icon" />
												</div>
												<h3>{benefit.title}<span className="d-block">{benefit.subTitle}</span></h3>
											</div>
											<p>{benefit.description}</p>
										</li>
									);
								})}
							</ul>
							<div className="btns-holder d-flex flex-wrap mb-5 mb-lg-0">
								<span className="btn btn-solid-white me-2 mb-2"onClick={()=>onRequestDemo("HRM Alexa Board")}>Request a Demo</span>
								<a href="https://hrm.alexaboard.com/" target="_blank" className="btn btn-solid me-2 mb-2">Try it Now</a>
							</div>
						</div>
					</Col>
					<Col xl={4}>
						<div className="image-holder text-center">
							<Image className="img-fluid" width="518" height="752" src={Images.imgProductsAB} alt='Image' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}