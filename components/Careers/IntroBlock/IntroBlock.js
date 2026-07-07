import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IntroBlock() {
    return (
        <section className="intro-block content-section" id='job-listing'>
            <Container>
                <Row>
                    <Col>
                        <div className="section-heading text-center">
                            <h2><span className="d-block">It’s More Than Just A Job</span></h2>
                            <p>We are playing a vital role in shaping the future of web and mobile application development and graphic designing. Do you want to add your share? Interested in taking your IT knowledge and technical expertise to the next level? Data on Matrix has your back.</p>
                            <p>We believe in cumulative efforts and collective work responsibility in an open, friendly, and fast-paced environment. We cherish cultural diversity backed by personal and professional integrity. Our power lies in work ethics. If you think that you fit these attributes, we will be more than happy to get you on board.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
