"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function CloudJourneyTabs({ tabsData = [] }) {
    return (
        <div className="cloud-journey-tabs">
            <Tabs defaultActiveKey="strategy" justify>
                {tabsData.map((tab, index) => (
                    <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
                        <div className="cloud-tab-content">
                            <div className="section-heading">
                                <h2>
                                    <span className="d-block">{tab.heading.split(" ")[0]}</span>
                                    {tab.heading.split(" ")[1]}
                                </h2>
                                <p>{tab.description}</p>
                            </div>
                            <div className="detail-lists">
                                <div className="listing-area">
                                    <h3>Our Skills</h3>
                                    <ul>
                                        {tab.expertiseList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="listing-area">
                                    <h3>Your Gains</h3>
                                    <ul>
                                        {tab.valueList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
}