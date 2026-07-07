"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/AreYouReadyBlock.css";

export default function AreYouReady(props) {
	const pathname = usePathname();
	return (
		<section className="are-you-ready content-section position-relative">
			<Container>
				<Row>
					<Col xl={3} className="order-1 order-xl-0">
						<div className={`left-box text-center d-flex flex-column justify-content-between bg-${props.boxColor}`}>
							<strong className="box-heading text-uppercase d-block text-white">Are you <span>ready?</span></strong>
							<div className="icon-holder game-controller-lottie">
								<LottieAnimation animationData={props.areYouReadyLottie} />
							</div>
							<a href="#contact-us" className="btn btn-solid-white">Contact With Experts</a>
						</div>
					</Col>
					<Col xl={9} className="order-0 order-xl-1">
						<div className="right-box">
							<h2>{props.title}</h2>
							{props.content.map((content, index) => {
								return (
									<div className="text-block" key={index}>
										{content.contentText.map((contentText, index) => {
											return (
												<div key={index}>
													{contentText.heading && <h3 className="content-heading">{contentText.heading}</h3>}
													<p dangerouslySetInnerHTML={{ __html: contentText.text }}></p>
												</div>
											);
										})}
										<ul className="features d-flex flex-wrap list-unstyled mb-0 pt-5 ptlg-0">
											{content.features.map((feature, index) => {
												return (
													<li className={`${pathname === "/internet-marketing" ? "" : "d-flex"}`} key={index}>
														{pathname === "/internet-marketing" ?
															<div className="d-flex align-items-center mb-3">
																<div className="icon-holder">
																	<Image width="100" height="100" className="img-fluid" src={feature.icon} alt="icon" />
																</div>
																<div>
																	{feature.title && <strong className="d-block">{feature.title}</strong>}
																	{feature.subTitle && <strong className="d-block sub-heading mb-0">{feature.subTitle}</strong>}
																</div>

															</div>
															:
															<div className="icon-holder">
																<Image width="100" height="100" className="img-fluid" src={feature.icon} alt="icon" />
															</div>
														}
														{pathname === "/internet-marketing" ?
															<div>
																{feature.description && <span className="d-block">{feature.description}</span>}
															</div>
															:
															<div className='text-holder'>
																{feature.title && <strong className="d-block">{feature.title}</strong>}
																{feature.description && <span className="d-block">{feature.description}</span>}
															</div>
														}
													</li>
												);
											})}
										</ul>
									</div>
								);
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}