import Link from "next/link";

export default function ProductsLinks() {
	const modelLinks = [
		{ title: "Team Augmentation", link: "/team-augmentation" },
		{ title: "Fixed Price", link: "/fixed-price" },
	];
	const prodLinks = [
		{ title: "Digital Marketing", link: "/digital-marketing" },
		{ title: "SEO", link: "/internet-marketing" },
	];
	return (
		<div className="footer-col">
			<h3 className="text-uppercase">Our Models</h3>
			<ul className="footer-links list-unstyled">
				{modelLinks.map((link, index) => {
					return (
						<li key={index}>
							<a className="transition" href={link.link}>{link.title}</a>
						</li>
					);
				})}
			</ul>
			<h3 className="text-uppercase">Marketing Solutions</h3>
			<ul className="footer-links list-unstyled">
				{prodLinks.map((link, index) => {
					return (
						<li key={index}>
							<a className="transition" href={link.link}>{link.title}</a>
						</li>
					);
				})}
			</ul>
			<h3 className="text-uppercase"><Link className="text-theme product-link-animation" href="/products">Products</Link></h3>
		</div>
	);
}