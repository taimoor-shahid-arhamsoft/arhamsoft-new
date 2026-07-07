import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import "./SalesforceService.css";

export default function SalesForceService(props) {
    return (
        <section className="salesforce-services content-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="section-heading text-center">
                            <h2><span className="d-block">{props.title}</span></h2>
                            {props.description && <p>{props.description}</p>}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='salesforce-services-boxes'>
                            {
                                props.salesForceData.map((service, index) => {
                                    return (
                                        <div className='salesforce-services-box' key={index}>
                                            <div className='head'>
                                                <div className='head-img'>
                                                    <Image className="img-fluid" src={service.image} alt="Service Image" width={60} height={50} />
                                                </div>
                                                <h3>{service.title}</h3>
                                            </div>
                                            <div className='detail'>
                                                <p>{service.content}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}