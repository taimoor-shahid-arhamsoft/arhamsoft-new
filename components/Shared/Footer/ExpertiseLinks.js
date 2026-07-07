import Link from "next/link";

export default function ExpertiseLinks() {
	const links = [

		{ title: "Custom Software Development", link: "/custom-software-development" },
		{ title: "Web App Development", link: "/web-development" },
		{ title: "Game Development", link: "/game-development" },
		{ title: "Mobile App Development", link: "/iphoneipad-apps" },
		{ title: "Desktop App Development", link: "/desktop-development" },
		{ title: "UI/UX Design", link: "/design-graphics" },
		{ title: "Software Testing & QA", link: "/qa-and-testing" },
	];
	return (
		<div className="footer-col">
			<h3 className="text-uppercase">Expertise</h3>
			<ul className="footer-links list-unstyled">
				{links.map((link, index) => {
					return (
						<li key={index}>
							<Link className="transition" href={link.link}>{link.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}