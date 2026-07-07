import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@/styles/HiringProcess.css";

export default function HiringProcess({ title, lightTitle, description, processSteps = [] }) {
    return (
        <section className="hiring-process">
            <Container>
                <div className="section-heading text-center">
                    <h2><span>{title}</span> {lightTitle ? lightTitle : ""}</h2>
                    {description && <p>{description}</p>}
                </div>
                <Row>
                    <Col>
                        <div className="table-responsive">
                            <ul className="list-unstyled mb-0 d-flex justify-content-between">
                                {processSteps.map((step, index) => {
                                    return (
                                        <li key={index} className="d-flex flex-column align-items-center text-center">
                                            <div className="icon-holder position-relative">
                                                <Image width="146" height="146" className="img-fluid" src={step.icon} alt="icon" />
                                            </div>
                                            {
                                                step.title &&
                                                <h4 className="title">{step.title}</h4>
                                            }
                                            <span className="step-name">{step.stepName}</span>
                                            {step.text && <p>{step.text}</p>}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}