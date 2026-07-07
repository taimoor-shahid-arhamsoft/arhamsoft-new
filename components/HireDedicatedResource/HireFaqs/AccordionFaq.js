"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AccordionFaq({ accordionFaqsData = [] }) {
    const [activeKey, setActiveKey] = useState(null);
    const toggleIcon = (key) =>
        key === activeKey ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className="accordion-area">
            <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
                {accordionFaqsData.map((item) => (
                    <Accordion.Item
                        className={item.eventKey === activeKey ? "active" : ""}
                        eventKey={item.eventKey}
                        key={item.eventKey}
                    >
                        <Accordion.Header>
                            <div className="hire-head">
                                <div className="hire-title">{item.title}</div>
                            </div>
                            <span className="accordion-icons">{toggleIcon(item.eventKey)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.description && (
                                <div>
                                    {item.description.map((itemIn, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: itemIn }}></p>
                                    ))}
                                </div>
                            )}
                            {item.list && (
                                <ul className="desc-list">
                                    {item.list.map((itemIn, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: itemIn }} />
                                    ))}
                                </ul>
                            )}
                            {item.descriptionTwo && (
                                <div>
                                    {item.descriptionTwo.map((itemIn, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: itemIn }}></p>
                                    ))}
                                </div>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}