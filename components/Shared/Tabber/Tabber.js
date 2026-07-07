"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "@/styles/Tabber.css";

export default function Tabber(props) {
	const pathname = usePathname();
	const firstTab = props.tabsContent[0];
	const defaultActiveKey = firstTab.title.replace(/\s+/g, "-").toLowerCase();
	return (
		<section className={`tabbed-content ${props.developerPages ? "developers" : ""}`}>
			<Container>
				<Tab.Container className='container' id="left-tabs-example" defaultActiveKey={defaultActiveKey}>
					<div className="row d-flex flex-wrap mx-0">
						<div className="nav-holder text-white position-relative">
							<Nav variant="pills" className="flex-column position-relative">
								<div className="header">
									{props.tabHeading}
									{props.description && <p>{props.description}</p>}
								</div>
								{props.tabsContent.map((tabContent, index) => {
									const eventKey = tabContent.title.replace(/\s+/g, "-").toLowerCase();
									return (
										<Nav.Item key={index}>
											<Nav.Link eventKey={eventKey} className="transition position-relative">
												<div className="d-flex align-items-center">
													<div className="icon-holder position-relative">
														<Image width="102" height="102" className="icon-default" src={tabContent.iconDefault} alt='icon' />
														<Image width="102" height="102" className="icon-hover" src={tabContent.iconHover} alt='icon' />
														<span className="hover-circle">&nbsp;</span>
													</div>
													<span>{tabContent.title}</span>
												</div>
											</Nav.Link>
										</Nav.Item>
									);
								})}
							</Nav>
						</div>
						<div className="tab-content-holder">
							<Tab.Content>
								{props.tabsContent?.map((tabContent, index) => {
									const eventKey = tabContent.title.replace(/\s+/g, "-").toLowerCase();
									return (
										<Tab.Pane eventKey={eventKey} key={index}>
											<div className='tab-wrapper'>
												{props.developerPages ?
													<div className="developers-section">
														{tabContent.features.map((feature) => (
															<div
																key={feature.id}
																className="box"
															>
																<span className="image">
																	<Image className="img-fluid" alt="Images" src={feature.image} width="40" height="40" />
																</span>
																<span className="text">{feature.text}</span>
															</div>
														))}
													</div>
													:
													<div className='image-wrapper'>
														<div className="image-holder">
															<Image className="img-fluid" src={tabContent.image} width="1176" height="700" alt="TabContent Image" />
														</div>
														{pathname === "/workday" && (
															<Link href="#contact-us" className="btn btn-solid">Get in Touch</Link>
														)}
													</div>
												}
												<div className='tab-data-content'>
													<strong className="tab-content-heading d-block">{tabContent.subTitle}<span className="d-block"> {tabContent.subTitleTwo ? tabContent.subTitleTwo : ""}</span></strong>
													<div className={`${props.developerPages ? "d-block" : "d-flex"} justify-content-between align-items-center flex-wrap`}>
														<div className="text-holder">
															{tabContent.description &&
																<>
																	{tabContent.description?.map((text, index) => {
																		return (
																			<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
																		);
																	})
																	}
																</>
															}
															{tabContent.keypoints &&
																<ul className="key-points mb-0 data-assessment-list">
																	{tabContent.keypoints?.map((keypoint, index) => {
																		return (
																			<li key={index} className="position-relative">{keypoint.title}</li>
																		);
																	})}
																</ul>
															}
														</div>
														{pathname !== "/workday" && (
															<Link href="#contact-us" className="btn btn-solid">Get in Touch</Link>
														)}
													</div>
												</div>
											</div>
										</Tab.Pane>
									);
								})}
							</Tab.Content>
						</div>
					</div>
				</Tab.Container>
			</Container>
		</section>
	);
}