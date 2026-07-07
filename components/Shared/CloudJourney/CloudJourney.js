import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloudJourneyTabs from "@/components/Shared/CloudJourney/CloudJourneyTabs";
import "./CloudJourney.css";

export default function CloudJourney({ title, titleTwo, description, tabsData }) {
    return (
        <section className="cloud-journey content-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading">
                            <h2>
                                <span className="d-block">{title}</span>
                                {titleTwo}
                            </h2>
                            {description && <p>{description}</p>}
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col md={12}>
                        <CloudJourneyTabs tabsData={tabsData} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}