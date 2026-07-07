import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { Images } from "@/assets/assets";

export default function TeamDetailBlock(props) {
	return (
		<section className="team-detail-block content-section">
			<div className="detail-block">
				<Container>
					<Row className="justify-content-sm-center">
						<Col md={4} sm={6} className="d-flex justify-content-center">
							<div className="detail-col">
								<div className="icon-holder d-flex justify-content-center">
									<Image className="img-fluid" width="86" height="100" src={Images.iconIndustry} alt='detail icon' />
								</div>
								<strong className="detail-title d-block">Industry</strong>
								{props.industryDetails &&
									<ul className="list-unstyled mb-0 detail-list">
										{props.industryDetails?.map((industryDetail, index) => {
											return (
												<li key={index}>
													{industryDetail.text}
												</li>
											);
										})}
									</ul>
								}
								{props.industry &&
									<p>{props.industry}</p>
								}
							</div>
						</Col>
						<Col md={4} sm={6} className="d-flex justify-content-center">
							<div className="detail-col">
								<div className="icon-holder d-flex justify-content-center">
									<Image className="img-fluid" width="86" height="100" src={Images.iconDedicatedTeam} alt='detail icon' />
								</div>
								<strong className="detail-title d-block">Dedicated <span>Team</span></strong>
								<ul className="list-unstyled mb-0 detail-list">
									{props.teamDetails?.map((teamDetail, index) => {
										return (
											<li key={index}>
												<strong>{teamDetail.counter}</strong>
												<span>{teamDetail.detail}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</Col>
						<Col md={4} sm={6} className="d-flex justify-content-center">
							<div className="detail-col">
								<div className="icon-holder d-flex justify-content-center">
									<Image className="img-fluid" width="86" height="100" src={Images.iconExpertiseDelivered} alt='detail icon' />
								</div>
								<strong className="detail-title d-block">Expertise <span>Delivered</span></strong>
								<ul className="list-unstyled mb-0 key-points">
									{props.expertiseDetails?.map((expertise, index) => {
										return (
											<li className="position-relative" key={index}>{expertise.text}</li>
										);
									})}
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			{props.techStacks &&
				<div className="stack-block">
					<Container>
						{props.techStacks &&
							<div className="text-block text-center">
								<h2 className="d-flex justify-content-center position-relative"><span className="position-relative z-1 d-inline-block align-top"><strong>Core</strong> Tech</span></h2>
								<p>{props.techStackText}</p>
							</div>
						}
						{props.techStacks &&
							<ul className="list-unstyled tech-icons d-flex justify-content-center flex-wrap">
								{props.techStacks?.map((techStack, index) => {
									return (
										<li key={index}>
											<div className="stack-icon-holder d-flex justify-content-center">
												<Image className="img-fluid" width="75" height="95" src={techStack.image} alt='Stack Image' />
											</div>
											<span className="d-block text-center">{techStack.stackName}</span>
										</li>
									);
								})}
							</ul>
						}
					</Container>
				</div>
			}
		</section>
	);
}