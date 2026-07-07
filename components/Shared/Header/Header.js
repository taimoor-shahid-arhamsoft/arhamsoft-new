"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import "./Header.css";

export default function Header() {
	const pathname = usePathname();
	const [active, setActive] = useState(false);
	return (
		<header id="header" className={pathname == "/" ? "home-header" : ""}>
			<div className={`header-menu-overlay-new ${active ? "active" : ""}`}></div>
			<Container>
				<Row className="align-items-center">
					<Col lg={3} md={4}>
						<HeaderLogo />
					</Col>
					<Col lg={9} md={8}>
						<HeaderNav setActive={setActive} />
					</Col>
				</Row>
			</Container>
		</header>
	);
}