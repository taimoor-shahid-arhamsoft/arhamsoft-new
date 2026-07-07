import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/CompanyCoreValues.css";

export default function CompanyCoreValues() {
    const coreValues = [
        {
            title: "Innovation",
            description: "We thoroughly analyze the problem from multiple perspectives to ensure a complete understanding before implementing solutions. We foster open discussions and collaboration to continually enhance our performance.",
            iconDefault: Images.iconCoreValueD01,
            iconHover: Images.iconCoreValueH01,
        },
        {
            title: "Expertise",
            description: "We strive to be the best in our specialized services and always deliver the first-rate experience our clients truly deserve. We deliver unwavering excellence by leveraging the expertise we have gained over the years.",
            iconDefault: Images.iconCoreValueD02,
            iconHover: Images.iconCoreValueH02,
        },
        {
            title: "Integrity",
            description: "We respect confidentiality and communicate the right information to our clients, partners, and people, staying committed to what we promise. Holding ourselves accountable, we own our actions, decisions, and outcomes.",
            iconDefault: Images.iconCoreValueD03,
            iconHover: Images.iconCoreValueH03,
        },
        {
            title: "Empowerment",
            description: "We pitch in as an ally to everyone we work with and for, supporting them in shaping their experiences. By welcoming new ideas, we push everyone to think outside the box. In doing so, we work together and value everyone’s voice.",
            iconDefault: Images.iconCoreValueD04,
            iconHover: Images.iconCoreValueH04,
        },
        {
            title: "Belonging",
            description: "We connect with, contribute to, and honor diverse backgrounds, experiences, and perspectives. Our culture thrives on the strength that comes from embracing differences, and feedback is always appreciated.",
            iconDefault: Images.iconCoreValueD05,
            iconHover: Images.iconCoreValueH05,
        },
        {
            title: "Transparency",
            description: "We’re straightforward and honest with everyone we work with. Throughout our work processes, we keep our communication lines open. Before making any decisions, we seek the input and consent of all involved.",
            iconDefault: Images.iconCoreValueD06,
            iconHover: Images.iconCoreValueH06,
        },
    ];
    return (
        <div className="comapny-core-values content-section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-heading text-center">
                            <h2><span className="d-block">Values That Drive Us</span></h2>
                            <p>Every member of team Data on Matrix holds true to these values:</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {coreValues.map((coreValue, index) => {
                        return (
                            <Col xxl={4} lg={6} key={index}>
                                <div className="core-value-block text-center">
                                    <div className="d-flex justify-content-center">
                                        <div className="icon-holder">
                                            <Image width="100" height="100" className="icon-default img-fluid" src={coreValue.iconDefault} alt='icon' />
                                            <Image width="100" height="100" className="icon-hover img-fluid" src={coreValue.iconHover} alt='icon' />
                                        </div>
                                    </div>
                                    <h3>{coreValue.title}</h3>
                                    <p>{coreValue.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}