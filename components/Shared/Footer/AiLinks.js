import Link from "next/link";

export default function AiLinks() {
	const links = [
		{ title: "Azure and AWS", link: "/azure-and-aws" },
		{ title: "MS Dynamics", link: "/ms-dynamics" },
		{ title: "Salesforce", link: "/salesforce" },
		{ title: "SharePoint", link: "/sharepoint" },
		{ title: "Workday", link: "/workday" },
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
		</div>
	);
}