import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import "@/styles/HireDedicatedResource/SpecificIndustries.css";

export default function SpecificIdustries({ title, description, industries = [] }) {
    return (
        <section className="specific-industries content-section">
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
                        {
                            industries.map((industry, index) => {
                                return (
                                    <div key={index} className='stats-boxes'>
                                        <div className="box-image">
                                            <Image className='img-fluid' src={industry.image} alt="Specific Industries" width={68} height={70} />
                                        </div>
                                        <h2>{industry.title}</h2>
                                    </div>
                                );
                            })
                        }
                    </section>
                </Row>
            </Container>
        </section>
    );
}