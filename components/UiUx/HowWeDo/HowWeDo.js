import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@/styles/UIUXHowWeDo.css";

export default function HowWeDo({ title, howWeDoText = [], howWeDos = [] }) {
  return (
    <section className="how-we-do content-section">
      <Container>
        <Row>
          <Col>
            <div className="section-heading text-center">
              <h2>
                <span className="d-block">{title}</span>
              </h2>
              {howWeDoText.map((text, index) => (
                <p key={index}>{text.text}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          {howWeDos.map((item, index) => {
            const counter = (index + 1).toString().padStart(2, "0");
            return (
              <Col lg={4} key={index} className="how-we-do-column">
                <div
                  className={`how-we-block position-relative text-white bg-${item.boxColor}`}
                >
                  <span className="counter">{counter}</span>
                  {item.icon && (
                    <div className="icon-holder">
                      <Image
                        width="89"
                        height="90"
                        className="img-fluid"
                        src={item.icon}
                        alt="icon"
                      />
                    </div>
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.keyPoints && (
                    <ul className="key-points list-unstyled mb-0">
                      {item.keyPoints.map((keypoint, index) => (
                        <li className="position-relative" key={index}>
                          {keypoint.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}