import { Images } from "@/assets/assets";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Offers() {
	const offers = [
		{
			title: "Artificial",
			subTitle: "Intelligence",
			icon: Images.iconOfferArtificial,
			description: "Most AI gets bought and never used. We build the kind that gets used, starting with:",
			offerKeyServices: [
				{ title: "AI Development", link: "/ai-and-machine-learning" },
				{ title: "AI PoC & MVP", link: "/ai-poc-mvp" },
				{ title: "MLOps", link: "/ml-ops" },
			]
		},
		{
			title: "Software",
			subTitle: "Development",
			icon: Images.iconOfferSoftware,
			description: "For an end product that captivates users, we will put together all aspects of the software development lifecycle:",
			offerKeyServices: [
				{ title: "Web App Development", link: "/web-development" },
				{ title: "Mobile App Development", link: "/iphoneipad-apps" },
				{ title: "Ecommerce Solutions", link: "/ecommerce-solutions" },
				{ title: "QA & Testing", link: "/qa-and-testing" },
				{ title: "UI/UX Design", link: "/design-graphics" },
			]
		},
		{
			title: "Digital",
			subTitle: "Transformation",
			icon: Images.iconOfferDigital,
			description: "With flexible operations, save costs and achieve faster time-to-market. In doing so, we help with:",
			offerKeyServices: [
				{ title: "App Modernization", link: "/application-modernization" },
				{ title: "Data Science", link: "/data-science" },
				{ title: "Blockchain", link: "/blockchain-development" },
				{ title: "DevOps", link: "/devops" },
				{ title: "AR/VR", link: "/ar-vr-and-metaverse" },
			]
		},
		{
			title: "Enterprise",
			subTitle: "Solution",
			icon: Images.iconOfferEnterprise,
			description: "With evolving market needs, we support enterprises in adjusting and managing processes with:",
			offerKeyServices: [
				{ title: "Azure & AWS", link: "/azure-and-aws" },
				{ title: "MS Dynamics", link: "/ms-dynamics" },
				{ title: "Salesforce", link: "/salesforce" },
				{ title: "SharePoint", link: "/sharepoint" },
				{ title: "Workday", link: "/workday" },
			]
		},
		{
			title: "Data Analytics",
			subTitle: "& BI",
			icon: Images.iconOfferData,
			description: "Save time organizing data and quickly uncover important insights about your target audience by:",
			offerKeyServices: [
				{ title: "Data Insights & Actions", link: "/data-insights-actions" },
				{ title: "Data Modernization", link: "/data-modernization" },
				{ title: "Data Engineering", link: "/data-engineering" },
				{ title: "Agile DataOps", link: "/agile-dataops" },
			]
		}
	];
	return (
		<div className="offers">
			<Row>
				{offers.map((offer, index) => {
					return (
						<Col xxl={4} lg={6} key={index}>
							<div className="offer-block position-relative">
								<div className="offer-header">
									<h2>{offer.title} <span>{offer.subTitle}</span></h2>
									<div className="icon-holder">
										<Image
											loading="lazy"
											width="57"
											height="57"
											className="img-fluid"
											src={offer.icon}
											alt={`${offer.title} icon`}
										/>
									</div>
								</div>
								<div className="text-holder">
									<p>{offer.description}</p>
								</div>
								<ul className="list-unstyled key-services mb-0">
									{offer.offerKeyServices.map((service, index) => {
										return (
											<li className="position-relative transition" key={index}>
												<Link href={service.link}>{service.title}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</Col>
					);
				})}
				{offers &&
					<Col xxl={4} lg={6}>
						<div className="offer-block browse-block p-lg-0">
							<Link className="h-100 d-flex justify-content-center align-items-center" href="/services">
								Browse More
								<span className="icon-holder d-inline-block align-top">
									<FontAwesomeIcon icon={faArrowRight} />
								</span>
							</Link>
						</div>
					</Col>
				}
			</Row>
		</div>
	);
}