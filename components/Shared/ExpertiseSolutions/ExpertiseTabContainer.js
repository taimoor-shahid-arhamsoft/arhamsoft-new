"use client";
import { useState, useEffect } from "react";
import { TabContent } from "./ExpertiseTab";
import "@/styles/ExpertiseSolutions.css";

export function TabsContainer({ tabsData = [], initialTab }) {
    const [activeTab, setActiveTab] = useState(initialTab || (tabsData[0]?.name || ""));

    useEffect(() => {
        setActiveTab(initialTab || (tabsData[0]?.name || ""));
    }, [initialTab, tabsData]);

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabsData.map((tab) => (
                    <button
                        key={tab.name}
                        className={activeTab === tab.name ? "active-tab" : ""}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="tab-panel">
                {tabsData.map(
                    (tab) =>
                        activeTab === tab.name && (
                            <TabContent
                                key={tab.name}
                                title={tab.name}
                                description={tab.description}
                                imageSrc={tab.imageSrc}
                            />
                        )
                )}
            </div>
        </div>
    );
}