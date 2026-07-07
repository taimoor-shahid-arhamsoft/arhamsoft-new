"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabsComponent({ productTabs = [] }) {
    return (
        <Tabs defaultActiveKey="app">
            {productTabs.map(tab => (
                <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title}>
                    <div className='product-content'>
                        <h3>{tab.heading}</h3>
                        <p>{tab.description}</p>
                        <ul>
                            {tab.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </Tab>
            ))}
        </Tabs>
    );
}