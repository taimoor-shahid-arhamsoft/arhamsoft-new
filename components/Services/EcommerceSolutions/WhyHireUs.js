import { Col, Container, Row } from "react-bootstrap";
import "@/styles/WhyHireUs.css";
import Image from "next/image";
import { Images } from "@/assets/assets";
const WhyHireUs = (props) => {
    return (
        <section className="why-hire-us content-section">
            <Container>
                <Row>
                    <Col lg={3} className="order-lg-1 order-2">
                        <div className="left-image-wrapper">
                            <Image width="379" height="693" src={Images.whyHireUs} alt="why hire us image" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={9} className="order-lg-2 order-1">
                        <div className="content-wrapper">
                            <div className="section-heading">
                                <h2>
                                    <span className="d-block">{props.title}</span>
                                </h2>
                                <p className="mw-100" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                            </div>
                            <ul className="skills-list d-flex flex-wrap list-unstyled mb-lg-0">
                                {props.Skills.map((Skills, index) => {
                                    return (
                                        <li className="d-flex align-items-center" key={index}>
                                            <div className="icon-wrapper flex-shrink-0">
                                                <Image width="100" height="100" src={Skills.icon} alt="icon" className="img-fluid" />
                                            </div>
                                            <h4 className="mb-0 flex-grow-1">{Skills.title}</h4>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyHireUs;