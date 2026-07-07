import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import "@/styles/HireDedicatedResource/CertifiedPartner.css";

export default function CertifiedPartner({ title, description, aboutCards = [], statsCards = [] }) {
    return (
        <section className="certified-partner content-section">
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
                    <section className="about-section">
                        <div className="about-cards">
                            {aboutCards.map((card, index) => (
                                <div key={index} className={`about-card ${card.color}`}>
                                    <div className="about-content">
                                        <div className='about-data'>
                                            <h2>{card.title}</h2>
                                            <h3>{card.subtitle}</h3>
                                        </div>
                                        <div className='about-image'>
                                            <Image src={card.image} alt="About Image" className='img-fluid' width={94} height={132} />
                                        </div>
                                    </div>
                                    <p>{card.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="stats-cards">
                            {statsCards.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`stats-card ${stat.color}`}
                                >
                                    <div className="stats-image">
                                        <Image src={stat.icon} alt="Stats Image" className='img-fluid' width={50} height={60} />
                                    </div>
                                    <h3>{stat.text}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                </Row>
            </Container>
        </section>
    );
}