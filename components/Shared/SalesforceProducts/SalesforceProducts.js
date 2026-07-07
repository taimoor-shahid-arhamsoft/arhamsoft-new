import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import Link from "next/link";
import TabsComponent from "./TabsComponent";
import "./SalesforceProducts.css";

export default function SalesForceProducts({ image, animationTwo, buttonLink = "/", buttonText, title, description, productTabs }) {
    return (
        <section className="salesforce-products content-section">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="lottie-holder">
                            <Image
                                className="img-fluid"
                                src={image}
                                alt="Products Chart"
                                width={427}
                                height={427}
                            />
                            <div className="lottie-holder-two">
                                <LottieAnimation animationData={animationTwo} />
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='salesforce-products-content'>
                            <div className="section-heading">
                                <h2><span className="d-block">{title}</span></h2>
                                {description && <p>{description}</p>}
                            </div>
                            <div className='salesforce-products-tabs'>
                                <TabsComponent productTabs={productTabs} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}