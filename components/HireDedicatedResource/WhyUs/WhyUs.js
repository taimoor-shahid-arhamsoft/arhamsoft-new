import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "./WhyUs.css";

export default function WhyUs({ buttonLink = "/", buttonText, whyUs = [] }) {
	return (
		<section className="why-us position-relative">
			<Container>
				<div className="content-holder">
					<Row className="align-items-center">
						<Col xl={4}>
							<div className="text-block">
								<h2>Unlock The <span className="d-block">DoM Edge</span></h2>
								<p>Transform your operational efficiency & innovative capabilities with us.</p>
								<Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
							</div>
						</Col>
						<Col xl={8}>
							<ul className="list-unstyled our-skills-partner d-flex flex-wrap">
								{
									whyUs.map((why, index) => {
										return (
											<li key={index}>
												<div className="head">
													<div className="head-img">
														<LottieAnimation animationData={why.animation} />
													</div>
													<div className="head-title">
														<h2>{why.title}</h2>
													</div>
												</div>
												<div className="body">
													<p>{why.desc}</p>
												</div>
											</li>
										);
									})
								}
							</ul>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
}