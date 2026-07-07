import React, { useState } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DedicatedTeamsMenu(props) {
    const [menuClass, setMenuClass] = useState(true);
    const pathname = usePathname();
    const toggleMenuClass = props.menuShowClass;
    const toggleClass = () => {
        setMenuClass(false);
    };
    const dedicatedTeams = [
        { title: "AI Experts", link: "/ai-experts" },
        { title: "DevOps Experts", link: "/devops-engineer" },
        { title: "Dot Net Developers", link: "/dotnet-developers" },
        { title: "Dynamics 365 Developers", link: "/ms-dynamic-developers" },
        { title: "Full Stack Developers", link: "/full-stack-developers" },
        { title: "Frontend Developers", link: "/html-developer" },
        { title: "Mobile Developers", link: "/iphone-android-developer" },
        { title: "Odoo Developers", link: "/odoo-developers" },
        { title: "PHP Developers", link: "/php-developers" },
        { title: "Salesforce Developers", link: "/salesforce-developers" },
        { title: "Shopify Developers", link: "/shopify-developers" },
        { title: "UI/UX Designers", link: "/web-graphics-designer" },
        { title: "Zoho Developers", link: "/zoho-developers" },
    ]
    return (
        <div className={`dedicated-teams-menu-outer ${menuClass ? toggleMenuClass : ""}`}>
            <span className="menu-hide-icon" onClick={toggleClass}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
            <div className='dedicated-teams-menu'>
                <ul className="dedicated-list">
                    {dedicatedTeams.map((slink, index) => {
                        return (
                            <li key={index} className="position-relative">
                                <Link href={slink.link} className={pathname === slink.link ? "active" : ""} onClick={props.handleNavClick}>{slink.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}