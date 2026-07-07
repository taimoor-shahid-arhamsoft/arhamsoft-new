import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import "./HireDeveloper.css";
import HireDeveloperAccordian from "./HireDeveloperAccordian";

export default function HireDeveloper({ title, titleTwo, content = [], bg, image, buttonText, buttonLink, accordionData }) {
  return (
    <section className="content-section hire-developer zoho-developer">
      <Container>
        <Row>
          <Col>
            <div className="section-heading text-center">
              <h2>
                <span className="d-block">{title}</span>
                {titleTwo}
              </h2>
              {content.map((text, index) => {
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: text.text }}
                  ></p>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <div className="hire-developer-content d-flex justify-content-between">
            <div className={`image-area ${bg ? bg : ""}`}>
              <div className="img-wrapper">
                <Image
                  src={image}
                  alt="Developer Image"
                  width={477}
                  height={575}
                  className="img-fluid"
                />
              </div>
              {buttonText && (
                <div className="image-button-button text-center">
                  <Link href={buttonLink} className="btn btn-solid-blue">
                    {buttonText}
                  </Link>
                </div>
              )}
            </div>
            <div className="accordion-area dynamic zoho">
              <HireDeveloperAccordian
                accordionData={accordionData}
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
