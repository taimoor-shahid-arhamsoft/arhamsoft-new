"use client";
import { useState } from "react";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./HireDeveloper.css";

export default function HireDeveloperAccordian({ accordionData = [] }) {
  const [activeKey, setActiveKey] = useState(null);
  const toggleIcon = (key) =>
    key === activeKey ? (
      <FontAwesomeIcon icon={faMinus} />
    ) : (
      <FontAwesomeIcon icon={faPlus} />
    );
  return (
    <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
      {accordionData.map((item) => (
        <Accordion.Item
          className={item.eventKey === activeKey ? "active" : ""}
          eventKey={item.eventKey}
          key={item.eventKey}
        >
          <Accordion.Header>
            <div className="hire-head">
              <div className="hire-img">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="img-fluid"
                  width={64}
                  height={64}
                />
              </div>
              <div className="hire-title">{item.title}</div>
            </div>
            <span className="accordion-icons">
              {toggleIcon(item.eventKey)}
            </span>
          </Accordion.Header>
          <Accordion.Body>{item.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
