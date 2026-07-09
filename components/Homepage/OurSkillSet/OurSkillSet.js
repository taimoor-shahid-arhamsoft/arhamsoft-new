"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Images } from "@/assets/assets";
import "./OurSkillSet.css";

export default function OurSkillSet() {
	return (
		<section className="our-skillset position-relative">
			<Container>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col xxl={3} lg={4} className="col-xxl-3 col-lg-4">
							<div className="navblock-left-col position-relative">
								<div className="text-block nav-heading-block position-relative z-1">
									<h2 className="text-white">Our <span>Skillset</span></h2>
									<p className="text-white">Expertise that carries through to goals</p>
								</div>
								<Nav variant="pills" className="flex-column position-relative">
									<Nav.Item className="position-relative z-1">
										<Nav.Link eventKey="first" className="transition position-relative">
											<div className="d-flex align-items-center">
												<div className="icon-holder">
													<Image width="102" height="102" className="icon-default" src={Images.iconSSIndustrialBlack} alt='icon' />
													<Image width="102" height="102" className="icon-hover" src={Images.iconSSIndustrialOrange} alt='icon' />
													<span className="hover-circle">&nbsp;</span>
												</div>
												<span>AI Enablement</span>
											</div>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item className="position-relative z-1">
										<Nav.Link eventKey="second" className="transition position-relative">
											<div className="d-flex align-items-center">
												<div className="icon-holder position-relative">
													<Image width="102" height="102" className="icon-default" src={Images.iconSSCustomBlack} alt='icon' />
													<Image width="102" height="102" className="icon-hover" src={Images.iconSSCustomOrange} alt='icon' />
													<span className="hover-circle">&nbsp;</span>
												</div>
												<span>Custom Solution</span>
											</div>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item className="position-relative z-1">
										<Nav.Link eventKey="third" className="transition position-relative">
											<div className="d-flex align-items-center">
												<div className="icon-holder">
													<Image width="102" height="102" className="icon-default" src={Images.iconSSEnterpriseBlack} alt='icon' />
													<Image width="102" height="102" className="icon-hover" src={Images.iconSSEnterpriseOrange} alt='icon' />
													<span className="hover-circle">&nbsp;</span>
												</div>
												<span>Enterprise Solution</span>
											</div>
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</Col>
						<Col xxl={9} lg={8}>
							<Tab.Content className='skillset-tabs-content'>
								<Tab.Pane eventKey="first">
									<div className="d-flex align-items-start flex-wrap">
										<div className="image-holder">
											<div className="image-block d-none d-xxl-block">
												<Image className="img-fluid" src={Images.iconImgSkillIndustrial} width="360" height="509" alt="AI Enablement" />
											</div>
											<div className="d-flex justify-content-center">
												<Link className="btn btn-solid" href="#contact-us">Get In Touch</Link>
											</div>
										</div>
										<div className="content-holder">
											<h2>AI <span>Enablement</span></h2>
											<p>Most companies have plenty of data and at least one AI subscription. Few
												have either doing real work. That's the job we take on. Our engineers train machine
												learning models on your data, build LLM applications with OpenAI and Anthropic APIs,
												and wire automation into the tools your team already uses, with Python, PyTorch,
												LangChain, YOLO and OpenCV underneath. Then we stick around for the
												unglamorous part: monitoring, retraining and scaling, so the thing still works in month
												six.</p>
											<p>Major sectors that we cover include:</p>
											<div className="d-block d-sm-flex align-items-start justify-content-between mb-5 mb-xxl-0">
												<ul className="service-key-points list-unstyled mb-5 mb-sm-0">
													<li className="position-relative">AI Workflow Automation</li>
													<li className="position-relative">Generative AI &amp; LLM Applications</li>
													<li className="position-relative">Custom Machine Learning Models</li>
													<li className="position-relative">Computer Vision &amp; Video Intelligence</li>
													<li className="position-relative">Predictive Analytics &amp; Forecasting</li>
													<li className="position-relative">AI Chatbots &amp; RAG Systems</li>
													<li className="position-relative">MLOps, Monitoring &amp; Scaling</li>
												</ul>
												<div className="image-block d-block d-xxl-none">
													<Image className="img-fluid" src={Images.AiMl} width="360" height="509" alt="AI Enablement" />
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<div className="d-flex align-items-start flex-wrap">
										<div className="image-holder">
											<div className="image-block d-none d-xxl-block">
												<Image width="307" height="509" className='img-fluid' src={Images.iconImgSkillCustom} alt="Skill Custom Icon" />
											</div>
											<div className="d-flex justify-content-center">
												<Link className="btn btn-solid" href="#contact-us">Get In Touch</Link>
											</div>
										</div>
										<div className="content-holder">
											<h2>Custom Solution <span>Integration</span></h2>
											<p>Every organization is unique, for it caters to different audiences. This uniqueness leans on a unique digital presence that outrivals that of the competitors. Making the most out of our expertise in PHP, .Net, WordPress, Magento, JavaScript, AJAX, AngularJS, JQuery, MongoDB, React, and Ruby on Rails to name a few, we develop interactive web applications, MVPs, portals, and mobile solutions.</p>
											<div className="d-block d-sm-flex align-items-start justify-content-between mb-5 mb-xxl-0">
												<ul className="service-key-points list-unstyled mb-5 mb-sm-0">
													<li className="position-relative">Minimum Viable Product</li>
													<li className="position-relative">Progressive Web Apps</li>
													<li className="position-relative">E-commerce Solutions</li>
													<li className="position-relative">On-Demand Apps</li>
													<li className="position-relative">API Development</li>
													<li className="position-relative">UI/UX Designing</li>
													<li className="position-relative">QA Testing</li>
												</ul>
												<div className="image-block d-block d-xxl-none">
													<Image className='img-fluid' src={Images.iconImgSkillCustom} width="360" height="509" alt="Skill Custom Icon" />
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<div className="d-flex align-items-start flex-wrap">
										<div className="image-holder">
											<div className="image-block d-none d-xxl-block">
												<Image className="img-fluid" src={Images.iconImgSkillEnterprise} width="360" height="509" alt="Skill Enterprise Icon" />
											</div>
											<div className="d-flex justify-content-center">
												<Link className="btn btn-solid" href="#contact-us">Get In Touch</Link>
											</div>
										</div>
										<div className="content-holder">
											<h2>Enterprise Solution <span>Integration</span></h2>
											<p>The current market is picky. However, we help businesses who are looking around for a tailored fit that seamlessly delivers responsive support and ensures long-term success. We bridge the gap between tech-based projects and result-oriented, human-led technology to help tech-based businesses thrive.</p>
											<p>To help you nail your projects, our expertise in the following will be a bonus:</p>
											<div className="d-block d-sm-flex align-items-start justify-content-between mb-5 mb-xxl-0">
												<ul className="service-key-points list-unstyled mb-5 mb-sm-0">
													<li className="position-relative">MS Dynamics</li>
													<li className="position-relative">Azure &amp; AWS</li>
													<li className="position-relative">Data Science</li>
													<li className="position-relative">SharePoint</li>
													<li className="position-relative">Salesforce</li>
													<li className="position-relative">AI, ML/DL</li>
													<li className="position-relative">AR/VR</li>
												</ul>
												<div className="image-block d-block d-xxl-none">
													<Image className="img-fluid" src={Images.iconImgSkillEnterprise} width="360" height="509" alt="Skill Enterprise Icon" />
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		</section>
	);
}