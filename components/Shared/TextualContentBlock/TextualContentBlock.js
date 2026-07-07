import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/TextualContentBlock.css";

export default function TextualContentBlock({ sectionHeading, sectionDescription, subTitle, title, bulletContent = [], text = [], button, buttonLink = "/", buttonText, image }) {
	return (
		<section className="textual-content content-section">
			<Container>
				{sectionHeading &&
					<div className="section-heading text-center">
						<h2>{sectionHeading}</h2>
						<p className="mb-0">{sectionDescription}</p>
					</div>
				}
				<Row className="align-items-center">
					<Col xl={8} lg={7}>
						<div className="text-holder section-heading">
							<h2><span className="d-block">{subTitle}</span> {title}</h2>
							{bulletContent &&
								<ul className="collab-points list-unstyled mb-0">
									{bulletContent.map((bulletContent, index) => {
										return (
											<li key={index}>
												<strong className="d-block">{bulletContent.title}</strong>
												{bulletContent.description &&
													<p key={index} dangerouslySetInnerHTML={{ __html: bulletContent.description }}></p>
												}
												{bulletContent.descriptionList?.map((description, index) => {
													return (
														<p key={index} dangerouslySetInnerHTML={{ __html: description.text }}></p>
													);
												})}
											</li>
										);
									})}
								</ul>
							}
							{text &&
								<>
									{text.map((text, index) => {
										return (
											<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
										);
									})}
								</>
							}
							{
								button &&
								<div className="btn-holder pt-3">
									<Link href={buttonLink} className="btn btn-solid-blue">
										{buttonText}
									</Link>
								</div>
							}
						</div>
					</Col>
					<Col xl={4} lg={5}>
						<div className="image-holder position-relative text-center">
							<Image className="img-fluid" width="472" height="455" src={image} alt="Image" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}