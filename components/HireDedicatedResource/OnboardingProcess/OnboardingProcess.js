import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OnboardingProcess.css";

export default function OnboardingProcess({ subHeading, heading, onBoardingData = [], bannerImage, buttonText, buttonLink = "/" }) {
	return (
		<div className="onboarding-process position-relative">
			<Container>
				<Row className="align-items-center">
					<Col lg={7}>
						<div className="banner-content">
							{subHeading && <strong className="d-block">{subHeading}</strong>}
							{heading && heading}
							<ul className="list-unstyled our-skills-partner d-flex flex-wrap">
								{
									onBoardingData.map((why, index) => {
										return (
											<li key={index} className={why.color}>
												<div className="head">
													<Image src={why.image} alt="Onboarding Process" className='img-fluid' width="50" height="60" />
												</div>
												<div className="body">
													<h2>{why.title}</h2>
													<p>{why.desc}</p>
												</div>
											</li>
										);
									})
								}
							</ul>
						</div>
					</Col>
					<Col lg={5}>
						<div className="banner-image">
							{bannerImage &&
								<div className="image-holder">
									<Image className="img-fluid" src={bannerImage} width="766" height="570" alt='Image' />
								</div>
							}
						</div>
						<div className='text-center'>
							<Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}