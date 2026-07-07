import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Animations } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import FourthCounteredBlock from "../FourthCounteredBlock/FourthCounteredBlock";

export default function FourCounteredBoxes({ title, description, fourBoxesContent }) {
	return (
		<section className="what-you-get content-section">
			<div className="lottie-holder">
				<LottieAnimation animationData={Animations.whatYouGetAnimation} />
			</div>
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">{title}</span></h2>
							<p>{description}</p>
						</div>
					</Col>
				</Row>
				<Row>
					{fourBoxesContent.map((boxContent, index) => {
						if (index < 10) {
							index++;
							index = index.toString().padStart(2, 0);
						}
						return (
							<Col xxl={3} md={6} key={index} className="column-bottom-margin">
								<FourthCounteredBlock index={index} iconDefault={boxContent.iconDefault} iconHover={boxContent.iconHover} title={boxContent.title} description={boxContent.description} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}