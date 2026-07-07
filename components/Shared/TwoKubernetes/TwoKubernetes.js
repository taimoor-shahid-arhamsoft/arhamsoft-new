import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Animations } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/TwoKubernetes.css";

export default function TwoKubernetes({ title, subTitle, description, kubernetes = [] }) {
	return (
		<section className="two-kubernetes content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{title && <h2>{subTitle}<span className="d-block">{title}</span></h2>}
							{description && <p>{description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					{kubernetes.map((kubernete, index) => {
						return (
							<Col lg={6} key={index}>
								<div className="kubernete-block">
									<div className="d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between">
										<div className="text-holder">
											<h3>{kubernete.title}</h3>
											<p className="mb-0">{kubernete.description}</p>
										</div>
										<div className="image-lottie-block position-relative">
											<div className="lottie-holder">
												<LottieAnimation animationData={Animations.kuberneteAnimation} />
											</div>
											<div className="image-holder">
												<Image width="148" height="149" className="img-fluid" src={kubernete.image} alt="image" />
											</div>
										</div>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}