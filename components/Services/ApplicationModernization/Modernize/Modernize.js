import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "@/styles/ModernizeComponents.css";

const ModernizeComponents = ({ modernizeComponentsData = [] }) => {
    return (
        <section className='modernize-components content-section'>
            <Container>
                <div className="section-heading text-center">
                    <h2 className='text-white'><span>Our Modernization</span> Focus</h2>
                </div>
                <Row>
                    {modernizeComponentsData.map((data, index) => {
                        return (
                            <Col lg={3} sm={6} key={index}>
                                <div className='card-warpper text-center'>
                                    <div className='icon-wrapper'>
                                        <Image src={data.icon} width="132" height="132" className='img-fluid h-100' alt='icon' />
                                    </div>
                                    <h3 className='mb-0'>{data.title}</h3>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default ModernizeComponents;