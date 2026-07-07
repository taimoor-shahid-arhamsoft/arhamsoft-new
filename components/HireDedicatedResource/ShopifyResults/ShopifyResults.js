import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets/assets";
import "@/styles/HireDedicatedResource/ShopifyResults.css";

export default function ShopifyResults({ title, description }) {
    return (
        <section className="shopify-results content-section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-heading text-center">
                            <h2><span className="d-block">{title}</span></h2>
                            <p>{description}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <section className="stats-section">
                        <div className="stat-card">
                            <Image
                                src={Images.ShopifySuccessOne}
                                alt="Projects Delivered"
                                width={300}
                                height={200}
                                className="stat-image"
                            />
                            <div className="stat-info blue">
                                <h2>1000+</h2>
                                <p>Online Stores Delivered</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <Image
                                src={Images.ShopifySuccessTwo}
                                alt="Happy Clients"
                                width={300}
                                height={200}
                                className="stat-image"
                            />
                            <div className="stat-info purple">
                                <h2>100+</h2>
                                <p>Enterprise Clients</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <Image
                                src={Images.ShopifySuccessThree}
                                alt="Discuss Your Project"
                                width={300}
                                height={200}
                                className="stat-image"
                            />
                            <div className="stat-info green">
                                <p>Estimate Your Project Cost</p>
                                <Link href="/contact-us" className="btn btn-solid-blue">Talk to Consultant</Link>
                            </div>
                        </div>
                    </section>
                </Row>
            </Container>
        </section>
    );
}