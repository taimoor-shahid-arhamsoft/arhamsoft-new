import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/Autonomous.css";

export default function Autonomous(props) {
	return (
		<section className="atonomous-testing content-section">
			<Container>
				<Row className="align-items-lg-center">
					<Col lg={7}>
						<div className="section-heading text-block text-white">
							{props.title}
							{props.description.map((text, index) => {
								return (
									<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
								);
							})}
							<div className="pt-5">
								<Link href={props.buttonLink} className="btn btn-solid-white">{props.buttonText}</Link>
							</div>
						</div>
					</Col>
					<Col lg={5}>
						<div className="lottie-holder">
							{props.animation && <LottieAnimation animationData={props.animation} />}
							{props.image && <Image width="658" height="438" src={props.image} className="img-fluid" alt="Image" />}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}