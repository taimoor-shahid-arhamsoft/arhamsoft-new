import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "./ServicesYouGet.css";

export default function ServicesYouGet({
    sectionTitle = "",
    sectionText = "",
    title = "",
    description = "",
    image = "",
    animation = null,
    animationTwo = null,
    animationCenterImage = null,
    buttonText = "",
    buttonLink = "",
    outcomes = [],
    titleTwo = "",
    outcomesButtonLink = "/",
    outcomesButton = "Schedule Consultation",
    servicesBoxesContent = [],
}) {
    return (
        <section className="services-you-get content-section">
            <Container>
                <Row>
                    <Col>
                        {sectionTitle && (
                            <div className="section-heading text-center">
                                <h2><span className="d-block">{sectionTitle}</span></h2>
                                {sectionText && <p>{sectionText}</p>}
                            </div>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="stick-content mb-5 mb-lg-0">
                            <div className="section-heading">
                                <h2><span className="d-block">{title}</span></h2>
                                {description && <p>{description}</p>}
                            </div>
                            <div className={`lottie-holder position-relative ${image ? "image-area" : ""}`}>
                                {animation && (
                                    <div className="lottie-holder-one">
                                        <LottieAnimation animationData={animation} />
                                    </div>
                                )}
                                {image && (
                                    <Image
                                        src={image}
                                        alt="Service Illustration"
                                        className="img-fluid"
                                        width={396}
                                        height={399}
                                    />
                                )}
                                {animationTwo && (
                                    <div className="lottie-holder-two">
                                        <LottieAnimation animationData={animationTwo} />
                                    </div>
                                )}
                                {animationCenterImage && (
                                    <div className="animation-center-image cs-miryde-image cs-biiview-image">
                                        <Image
                                            src={animationCenterImage}
                                            alt="Animation Center Illustration"
                                            className="img-fluid"
                                            width={365}
                                            height={350}
                                        />
                                    </div>
                                )}
                            </div>
                            {buttonText && buttonLink && (
                                <div className="btn-holder">
                                    <Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
                                </div>
                            )}
                            {outcomes.length > 0 && (
                                <div className="blue-box">
                                    <h2>{titleTwo}</h2>
                                    <ul>
                                        {outcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                    <Link href={outcomesButtonLink} className="btn orange-btn">{outcomesButton}</Link>
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="services-boxes">
                            {servicesBoxesContent.map((service, index) => (
                                <div
                                    key={index}
                                    className={`services-box ${service.iconDefault ? "" : "no-icon"}`}
                                >
                                    {service.iconDefault && (
                                        <div className="service-image">
                                            <Image
                                                src={service.iconDefault}
                                                alt={service.title || "Service Icon"}
                                                className="img-fluid"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    )}
                                    <div className="service-content">
                                        {service.title && <h3>{service.title}</h3>}
                                        {service.description && <p>{service.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}