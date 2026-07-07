"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ServicesMegaMenu from "./ServicesMegaMenu";
import FullpageLoader from "@/components/Shared/FullPageLoader/FullPageLoader";
import DedicatedTeamsMenu from "./DedicatedTeamsMenu"
import { Button } from "react-bootstrap";

export default function HeaderNav({ setActive }) {
	const [loader, setLoader] = useState(true);
	const navbarRef = useRef(null);
	const toggleButtonRef = useRef(null);
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isShowDedicatedMenu, setShowDedicatedMenu] = useState(false);
	const [subMenuServices, setSubMenuServices] = useState(false);
	const [subMenu, setSubMenu] = useState(false);
	const pathname = usePathname();
	const [expanded, setExpanded] = useState(false);
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	useEffect(() => {
		setLoader(false);
	}, []);
	const handleNavClick = () => {
		setExpanded(false);
		setIsShowMenu(false);
		setShowDedicatedMenu(false);
	};
	const handleMouseEnter = () => {
		if (window.innerWidth > 991) {
			setIsShowMenu(true);
			setActive(true);
		}
	};
	const handleMouseLeave = () => {
		if (window.innerWidth > 991) {
			setIsShowMenu(false);
			setActive(false);
		}
	};
	const handleDedicatedMouseEnter = () => {
		if (window.innerWidth > 991) {
			setActive(true);
			setShowDedicatedMenu(true);
		}
	};
	const handleDedicatedMouseLeave = () => {
		if (window.innerWidth > 991) {
			setActive(false);
			setShowDedicatedMenu(false);
		}
	};
	const handleClickOutside = (event) => {
		if (
			navbarRef.current &&
			!navbarRef.current.contains(event.target) &&
			toggleButtonRef.current &&
			!toggleButtonRef.current.contains(event.target)
		) {
			setExpanded(false);
		}
	};
	const handleServiceClick = () => {
		if (window.innerWidth > 991) {
			setIsShowMenu(false);
		}
		setActive(false);
		setExpanded(false);
	};
	const handleDedicatedClick = () => {
		if (window.innerWidth > 991) {
			setShowDedicatedMenu(false);
		}
		setActive(false);
		setExpanded(false);
	};
	const subMenuOpen = () => {
		if (window.innerWidth < 992) {
			setSubMenu(!subMenu);
		}
	}
	const subMenuServicesOpen = () => {
		if (window.innerWidth < 992) {
			setSubMenuServices(!subMenuServices);
		}
	}
	return (
		loader ?
			<FullpageLoader />
			:
			<Navbar expand="lg" expanded={expanded} className={`${subMenu ? "sub-menu-open" : ""} ${subMenuServices ? "services-sub-menu-open" : ""}`}>
				<NavbarToggle aria-controls="basic-navbar-nav" ref={toggleButtonRef} onClick={() => setExpanded(expanded ? false : true)} />
				<Navbar.Collapse id="basic-navbar-nav" ref={navbarRef}>
					<ul className="ms-auto navbar-nav list-unstlyed mb-0 me-lg-4 align-items-lg-center">
						<li>
							<Link className={`nav-link ${pathname === "/about-us" ? "active" : ""}`} href="/about-us" onClick={handleNavClick}>Company</Link>
						</li>
						<li>
							<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
								<Button onClick={subMenuServicesOpen} className="submenu-button d-flex d-lg-none"><FontAwesomeIcon icon={subMenuServices ? faMinus : faPlus} /></Button>
								<Link className={`nav-link mb-0 ${pathname === "/services" ? "active" : ""} ${subMenuServices ? "active" : ""}`} href="/services" onClick={handleServiceClick} >
									Services
								</Link>
								<ServicesMegaMenu menuShowClass={isShowMenu ? "active" : ""} handleNavClick={handleNavClick} />
							</div>
						</li>
						<li><Link className={`nav-link ${pathname === "/case-studies" ? "active" : ""}`} href="/case-studies" onClick={handleNavClick}>Case Studies</Link></li>
						<li>
							<div onMouseEnter={handleDedicatedMouseEnter} onMouseLeave={handleDedicatedMouseLeave}>
								<Button onClick={subMenuOpen} className="submenu-button d-flex d-lg-none"><FontAwesomeIcon icon={subMenu ? faMinus : faPlus} /></Button>
								<Link className={`nav-link mb-0 ${pathname === "/hire-dedicated-resource" ? "active" : ""} ${subMenu ? "active" : ""}`} href="/hire-dedicated-resource" onClick={handleDedicatedClick}>
									Dedicated Teams
								</Link>
								<DedicatedTeamsMenu menuShowClass={isShowDedicatedMenu ? "active" : ""} handleNavClick={handleNavClick} />
							</div>
						</li>
						<li><Link className={`nav-link mb-0 ${pathname === "/careers" ? "active" : ""}`} href="/careers" onClick={handleNavClick}>Careers</Link></li>
					</ul>

				</Navbar.Collapse>
				<Link href="/contact-us" className="btn btn-get-touch" aria-label="get in touch">
					<span className="d-none d-sm-block">Get in Touch</span>
					<span className="d-block d-sm-none mobile-mail-envelope">
						<FontAwesomeIcon icon={faEnvelope} />
					</span>
				</Link>
			</Navbar>
	);
}
