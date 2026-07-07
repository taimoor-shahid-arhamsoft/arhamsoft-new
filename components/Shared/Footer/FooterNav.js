"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterNav() {
	const pathname = usePathname();

	const links = [
		{ title: "Company", link: "/about-us" },
		{ title: "Services", link: "/services" },
		{ title: "Case Studies", link: "/case-studies" },
		{ title: "Blogs", link: "https://blog.dataonmatrix.com/" },
		{ title: "Careers", link: "/careers" },
		{ title: "Contact Us", link: "/contact-us" },
		{ title: "Privacy Policy", link: "/privacy-policy" },
		{ title: "Terms and Conditions", link: "/terms-and-conditions" },
	];

	return (
		<nav aria-label="Footer navigation">
			<ul className="list-unstyled footer-nav mb-0 d-flex flex-wrap justify-content-center justify-content-xl-start">
				{links.map((link) => {
					const isActive = pathname === link.link;
					return (
						<li
							className={`position-relative ${isActive ? "active" : ""}`}
							key={link.link}
						>
							<Link href={link.link}>
								{link.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}