import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ElevateYourBusiness.css";

export default function ElevateYourBusiness(props) {
    return (
        <section className="elevate-your-business content-section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-heading">
                            <h2>{props.titleOne}<span className="d-block">{props.titleTwo}</span></h2>
                            {props.description && <p>{props.description}</p>}
                            {props.descriptionTwo && <p>{props.descriptionTwo}</p>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='elevate-content'>
                        <div className="section-heading">
                            <h2>{props.BenefitOne}<span className="d-block">{props.BenefitTwo}</span></h2>
                        </div>
                        <ul>
                            <li><span>Innovation:</span> Empower your apps with cutting-edge cloud technology. We&apos;ll help you drive innovation and agility.</li>
                            <li><span>Scalability:</span> Cloud solutions let us effortlessly scale your applications to meet your needs, preventing downtime and avoiding overcapacity.</li>
                            <li><span>Flexibility:</span> Our cloud solutions are designed for seamless updates and effortless integration, ensuring your applications stay agile and connected.</li>
                            <li><span>Security:</span> Data security is our priority. Whether you&apos;re building a new app or upgrading an existing one, we&apos;ll safeguard your information.</li>
                            <li><span>Compliance:</span> Our compliance experts will ensure your application adheres to stringent industry standards, including GDPR, HIPAA, and PCI DSS.</li>
                            <li><span>Cost-Effectiveness:</span> Maximize efficiency and minimize costs with our expert guidance and tailored approach to app development.</li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    );
}