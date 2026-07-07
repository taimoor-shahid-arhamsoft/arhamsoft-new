import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/HireDedicatedResource/IntroductionBlock.css";

export default function IntroductionBlock(props) {
	return (
		<section className="introduction-block content-section">
			<Container>
				<Row>
					<Col>
						<div className="text-block text-center">
							{props.title && <h2><span className="d-block">{props.title}</span>{props.subTitle}</h2>}
							{props.content.map((text, index) => {
								return (
									<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
								);
							})}
							{props.introBullets &&
								<ul className="intro-bullets list-unstyled d-flex justify-content-center flex-wrap">
									{props.introBullets.map((bullet, index) => {
										return (
											<li key={index} className="position-relative">{bullet.bulletText}</li>
										);
									})}
								</ul>
							}
						</div>
						<ul className="stack-images list-unstyled mb-0 d-flex flex-wrap justify-content-center">
							{props.stackImages.map((stackImage, index) => {
								return (
									<li key={index} className="d-flex flex-column align-items-center">
										<div className="image-holder">
											<Image className="img-fluid" width="100" height="100" src={stackImage.image} alt="Image" />
										</div>
										<strong className="stack-name">{stackImage.title}</strong>
									</li>
								);
							})}
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
}