import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SalesforceRoadmap.css";

export default function SalesForceRoadmap(props) {
    return (
        <section className="salesforce-roadmap content-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading">
                            <h2><span className="d-block">{props.title}</span></h2>
                            {props.description && <p>{props.description}</p>}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='salesforce-roadmap-content position-relative'>
                            {
                                props.salesRoadmapData.map((roadmap, index) => {
                                    return (
                                        <div className='salesforce-roadmap-box' key={index}>
                                            <div className='head'>
                                                <span>{roadmap.id}</span>
                                                <h3>{roadmap.title}</h3>
                                            </div>
                                            <div className='detail'>
                                                <p>{roadmap.content}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            <div className='line-one'></div>
                            <div className='line-two'></div>
                            <div className='line-three'></div>
                            <div className='line-four'></div>
                            <div className='line-five'></div>
                            <div className='line-six'></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}