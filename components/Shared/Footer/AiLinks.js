import Link from "next/link";

export default function AiLinks() {
	const links = [
		{ title: "Azure and AWS", link: "/azure-and-aws" },
		{ title: "MS Dynamics", link: "/ms-dynamics" },
		{ title: "Salesforce", link: "/salesforce" },
		{ title: "SharePoint", link: "/sharepoint" },
		{ title: "Workday", link: "/workday" },
	];
	const AiLinks = [
		{ title: "Artificial Intelligence", link: "/ai-and-machine-learning" },
		{ title: "AI Enablement", link: "/ai-enablement" },
		{ title: "AI Product Readiness Review", link: "/ai-product-readiness-review" },
		{ title: "AI Beyond The Demo", link: "/ai-beyond-the-demo" },
		{ title: "Manual Work Audit", link: "/manual-work-audit" },
	];
	return (
		<div className="footer-col">
			<h3 className="text-uppercase">Enterprise Solutions</h3>
			<ul className="footer-links list-unstyled">
				{links.map((link, index) => {
					return (
						<li key={index}>
							<Link className="transition" href={link.link}>{link.title}</Link>
						</li>
					);
				})}
			</ul>
			<h3 className="text-uppercase">AI Solutions</h3>
			<ul className="footer-links list-unstyled">
				{AiLinks.map((link, index) => {
					return (
						<li key={index}>
							<a className="transition" href={link.link}>{link.title}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}