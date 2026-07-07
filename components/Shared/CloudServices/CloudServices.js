import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloudServiesBlock from "../CloudServicesBlock/CloudServicesBlock";

export default function CloudServies(props) {
    return (
        <section className="cloud-services content-section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-heading text-center">
                            <h2><span className="d-block">{props.title}</span></h2>
                            {props.description && <p>{props.description}</p>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    {props.fourBoxesCloud.map((boxContent, index) => {
                        return (
                            <Col lg={3} md={6} key={index} className="column">
                                <CloudServiesBlock title={boxContent.title} animation={boxContent.animation} bgColor={boxContent.bgColor} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}