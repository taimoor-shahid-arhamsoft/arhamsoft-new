import { useState } from "react";
import { Images } from "@/assets/assets";
import { usePathname } from "next/navigation";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ServicesMegaMenu(props) {
	const [menuClass, setMenuClass] = useState(true);
	const pathname = usePathname();
	const toggleMenuClass = props.menuShowClass;
	const toggleClass = () => {
		setMenuClass(false);
	};
	const solutionLinks = [
		{ title: "Azure and AWS", link: "/azure-and-aws" },
		{ title: "MS Dynamics", link: "/ms-dynamics" },
		{ title: "Salesforce", link: "/salesforce" },
		{ title: "SharePoint", link: "/sharepoint" },
		{ title: "Workday", link: "/workday" },
	];
	const expertiseLinks = [
		{ title: "Custom Software Development", link: "/custom-software-development" },
		{ title: "Web App Development", link: "/web-development" },
		{ title: "QA & Testing", link: "/qa-and-testing" },
		{ title: "Mobile App Development", link: "/iphoneipad-apps" },
		{ title: "UI/UX", link: "/design-graphics" },
	];
	const productsLinks = [
		{ title: "Team Augmentation", link: "/team-augmentation" },
		{ title: "Fixed Price Projects", link: "/fixed-price" },
		{ title: "Support & Maintenance", link: "/support-and-maintenance" },
	];
	const digitalLinks = [
		{ title: "Agile Transformation", link: "/agile-transformation" },
		{ title: "Application Modernization", link: "/application-modernization" },
		{ title: "Accelerated DevSecOps", link: "/accelerated-devSecOps" },
		{ title: "Human-Centered Design", link: "/human-centered-design" },
		{ title: "Kubernetes Services", link: "/kubernetes-services" },
		{ title: "Digital Enhancement", link: "/digital-transformation" },
	];
	const dataLinks = [
		{ title: "Data Modernization", link: "/data-modernization" },
		{ title: "Data Engineering", link: "/data-engineering" },
		{ title: "Data Insights & Actions", link: "/data-insights-actions" },
		{ title: "Agile DataOps", link: "/agile-dataops" },
	];
	const aiAutomationLinks = [
		{ title: "AI & Machine Learning", link: "/ai-and-machine-learning" },
		{ title: "AI Product Readiness Review", link: "/ai-product-readiness-review" },
		{ title: "AI Beyond the Demo", link: "/ai-beyond-the-demo" },
		{ title: "Manual Work Audit", link: "/manual-work-audit" },
	];
	return (
		<div className={`services-mega-menu-outer ${menuClass ? toggleMenuClass : ""}`}>
			<span className="menu-hide-icon" onClick={toggleClass}>
				<FontAwesomeIcon icon={faTimes} />
			</span>
			<div className="services-mega-menu">
				<div className="d-flex flex-column flex-lg-row">
					<div className="left-col position-relative">
						<strong className="col-heading text-white d-block">Solutions</strong>
						<ul className="links-list list-unstyled">
							{solutionLinks.map((slink, index) => {
								return (
									<li key={index} className="position-relative">
										<Link href={slink.link} className={pathname === slink.link ? "active" : ""} onClick={props.handleNavClick}>{slink.title}</Link>
									</li>
								);
							})}
						</ul>
						<Link href="/contact-us" onClick={props.handleNavClick} className="btn btn-solid-white lets-work d-flex justify-content-center align-items-center">Let&apos;s Work Together</Link>
					</div>
					<div className="right-col">
						<div className="three-cols d-flex flex-column flex-md-row mb-4">
							<div className="links-col mb-3 mb-md-0">
								<div className="mb-3 mb-md-5">
									<strong className="col-heading d-block">Expertise</strong>
									<ul className="links-list list-unstyled mb-0">
										{expertiseLinks.map((expertlink, index) => {
											return (
												<li key={index} className="position-relative">
													<Link href={expertlink.link} className={pathname === expertlink.link ? "active" : ""} onClick={props.handleNavClick}>{expertlink.title}</Link>
												</li>
											);
										})}
									</ul>
								</div>
								<strong className="col-heading d-block">IT Outsourcing</strong>
								<ul className="links-list list-unstyled mb-0">
									{productsLinks.map((productlink, index) => {
										return (
											<li key={index} className="position-relative">
												<Link href={productlink.link} className={pathname === productlink.link ? "active" : ""} onClick={props.handleNavClick}>{productlink.title}</Link>
											</li>
										);
									})}
								</ul>
							</div>
							<div className="links-col mb-3 mb-md-0">
								<strong className="col-heading d-block">Data &amp; Intelligence</strong>
								<ul className="links-list list-unstyled data-links-spacing">
									{dataLinks.map((datalink, index) => {
										return (
											<li key={index} className="position-relative">
												<Link href={datalink.link} className={pathname === datalink.link ? "active" : ""} onClick={props.handleNavClick}>{datalink.title}</Link>
											</li>
										);
									})}
								</ul>
								<div className="">
									<strong className="col-heading d-block">AI &amp; Automation</strong>
									<ul className="links-list list-unstyled mb-0">
										{aiAutomationLinks.map((ailink, index) => {
											return (
												<li key={index} className="position-relative">
													<Link href={ailink.link} className={pathname === ailink.link ? "active" : ""} onClick={props.handleNavClick}>{ailink.title}</Link>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
							<div className="links-col mb-3 mb-md-0">
								<strong className="col-heading d-block">Digital Transformation</strong>
								<ul className="links-list list-unstyled mb-0">
									{digitalLinks.map((digitallink, index) => {
										return (
											<li key={index} className="position-relative">
												<Link href={digitallink.link} className={pathname === digitallink.link ? "active" : ""} onClick={props.handleNavClick}>{digitallink.title}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<ul className="three-menu-services list-unstyled d-flex flex-column flex-md-row mb-0">
							<li className="d-flex align-items-center justify-content-between">
								<div className="icon-holder">
									<Image className="img-fluid" src={Images.iconMenuServices} width="56" height="56" alt="icon" />
								</div>
								<div className="text-holder d-flex flex-column">
									<strong>Services</strong>
									<Link href="/services" onClick={props.handleNavClick}>Browse All</Link>
								</div>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<div className="icon-holder">
									<Image className="img-fluid" src={Images.iconMenuEnerprise} width="56" height="56" alt="icon" />
								</div>
								<div className="text-holder d-flex flex-column">
									<strong>Expertise</strong>
									<Link href="/expertise" onClick={props.handleNavClick}>Browse All</Link>
								</div>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<div className="icon-holder">
									<Image className="img-fluid" src={Images.iconMenuEnerprise2} width="56" height="56" alt="icon" />
								</div>
								<div className="text-holder d-flex flex-column">
									<strong>Enterprise Solutions</strong>
									<Link href="/enterprise-solutions" onClick={props.handleNavClick}>Browse All</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}