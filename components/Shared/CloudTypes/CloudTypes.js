import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import Image from "next/image";
import "./CloudTypes.css";

export default function CloudTypes(props) {
    return (
        <section className="cloud-types content-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading text-center">
                            <h3><span>{props.title}</span></h3>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="cloud-type-image d-none d-lg-block">
                            <Image width="1347" height="663" className="img-fluid" src={Images.cloudTypes} alt="Cloud Types" />
                        </div>
                        <div className="cloud-type-mobbile-bblock d-block d-lg-none">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <ul className="list-unstyled">
                                    <li>Public Cloud</li>
                                    <li>Private Cloud</li>
                                    <li>Hybrid Cloud</li>
                                    <li>Multi Cloud</li>
                                    <li>Virtual Private Cloud (VPC)</li>
                                    <li>Software As A Service (SaaS)</li>
                                    <li>Platform As A Service (PaaS)</li>
                                    <li>Infrastructure As A Service (IaaS)</li>
                                </ul>
                                <div className="cloud-type-mobile-image">
                                    <Image width="1347" height="663" className="img-fluid" src={Images.imgAZAWSCloudTypes} alt='Azure Cloud Types' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}