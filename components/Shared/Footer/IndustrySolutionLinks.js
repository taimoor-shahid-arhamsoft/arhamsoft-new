import Link from "next/link";

export default function IndustrySolutionLinks() {
	const links = [
		{ title: "Artificial Intelligence", link: "/ai-and-machine-learning" },
		{ title: "Manual Work Audit", link: "/manual-work-audit" },
		{ title: "AI Product Readiness Review", link: "/ai-product-readiness-review" },
		{ title: "AI Beyond The Demo", link: "/ai-beyond-the-demo" },
		{ title: "AR/VR & Metaverse", link: "/ar-vr-and-metaverse" },
		{ title: "Blockchain", link: "/blockchain-development" },
		{ title: "Cyber Security", link: "/cyber-security" },
		{ title: "Cloud Engineering", link: "/cloud-engineering" },
		{ title: "Data Science", link: "/data-science" },
	];
	return (
		<div className="footer-col">
			<h3 className="text-uppercase">Industry Solutions</h3>
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