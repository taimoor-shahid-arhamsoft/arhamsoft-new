"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "@/components/Homepage/OurSkillSet/OurSkillSet.css";

export default function WhatInForYou({ title, description, tabData = [], buttonLink }) {
    return (
        <section className="our-skillset position-relative">
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="whats-in-for-content d-flex px-0">
                        <Nav variant="pills" className="flex-column position-relative navblock-left-col">
                            <div className="text-block title">
                                {title}
                            </div>
                            {description &&
                                <div className="text-block">
                                    {description}
                                </div>
                            }
                            {tabData.map((tab, index) => (
                                <Nav.Item key={index}>
                                    <Nav.Link eventKey={tab.eventKey} className="transition position-relative">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-holder position-relative">
                                                <Image width="102" height="102" className="icon-default" src={tab.iconDefault} alt={`${tab.title} icon`} />
                                                <Image width="102" height="102" className="icon-hover" src={tab.iconHover} alt={`${tab.title} icon hover`} />
                                                <span className="hover-circle">&nbsp;</span>
                                            </div>
                                            <span>{tab.title}</span>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                        <Tab.Content>
                            {tabData.map((tab, index) => (
                                <Tab.Pane eventKey={tab.eventKey} key={index}>
                                    <div className="tab-data">
                                        <div className="tab-image">
                                            <Image className="img-fluid" src={tab.image} alt={`${tab.title} image`} width="1166" height="469" />
                                        </div>
                                        <div className="tab-data-content d-flex align-items-end justify-content-between">
                                            <div className="head">
                                                <h3>{tab.title}</h3>
                                                <p>{tab.description}</p>
                                            </div>
                                            {buttonLink && <Link className="btn btn-get-touch" href="#contact-us">Get In Touch</Link>}
                                        </div>
                                    </div>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </Container>
        </section>
    );
}