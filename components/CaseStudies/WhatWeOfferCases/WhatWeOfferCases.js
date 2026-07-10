"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select"; // Import React Select
import { cloudinaryImages, Images } from "@/assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@/styles/CaseStudiesWhatWeOffer.css";

export default function WhatWeOfferCases() {
	const [visibleOffers, setVisibleOffers] = useState(6);
	const [selectedIndustry, setSelectedIndustry] = useState(null); // For selected industry filter

	const showMoreOffers = () => {
		setVisibleOffers((prev) => prev + 50);
	};

	const offers = [
		{
			logo: cloudinaryImages.BiViewLogoImage,
			image: Images.imgCaseStudies01,
			heading: "Object Recognition System",
			description: "Learn how Data on Matrix’s dedicated team developed and released an AI-powered video-sharing platform that improves video marketing campaigns for businesses.",
			industry: "Advertising & Marketing",
			caseStudyUrl: "/object-recognition-system"
		},
		{
			logo: Images.mirydeLogo,
			image: Images.mirydeImage,
			heading: "Ride-Sharing App",
			description: "Discover the innovative approach Data on Matrix took to develop a cutting-edge car booking app for a Canadian ride-sharing service provider.",
			industry: "Transportation",
			caseStudyUrl: "/ride-sharing-app"
		},
		{
			logo: Images.pandaLogo,
			image: Images.pandaImage,
			heading: "Custom Web Builder",
			description: "Learn how we built a tool that turns your vision into reality. Explore the story behind our cutting-edge drag-and-drop website builder.",
			industry: "Technology",
			caseStudyUrl: "/custom-web-builder"
		},
		{
			logo: Images.topsunLogo,
			image: Images.topsunImage,
			heading: "Multi-Vendor Marketplace",
			description: "Learn how we transformed a multi-vendor eCommerce platform with enhanced functionality, optimizing the online shopping experience across web & mobile devices.",
			industry: "eCommerce",
			caseStudyUrl: "/multi-vendor-marketplace"
		},
		{
			logo: Images.gigjobsLogo,
			image: Images.gigjobsImage,
			heading: "Job Posting Portal",
			description: "Read how we developed a job posting portal where businesses can advertise their job ads for different services and demonstrated the product's viability.",
			industry: "Recruitment, Advertising",
			caseStudyUrl: "/job-posting-portal"
		},
		{
			logo: Images.maritimeLogo,
			image: Images.maritimeImage,
			heading: "Heavy-Duty Equip",
			description: "Uncover the story behind Data on Matrix's collaboration with a leading US heavy machinery merchandiser to develop a state-of-the-art web platform with high-end CMS.",
			industry: "Merchandizing",
			caseStudyUrl: "/heavy-duty-equip"
		},
		{
			logo: Images.buzzfiLogo,
			image: Images.buzzfiImage,
			heading: "Drone Marketplace",
			description: "Learn how we created a platform that revolutionizes the drone industry, empowering professionals and simplifying client access.",
			industry: "Technology",
			caseStudyUrl: "/drone-marketplace"
		},
		{
			logo: Images.shareadsLogo,
			image: Images.shareadsImage,
			heading: "Referral Marketing Solution",
			description: "Grab the best practices from Data on Matrix team who delivered custom web portal development for publishers, advertisers and affiliate marketers as end users.",
			industry: "Advertising",
			caseStudyUrl: "/referral-marketing-solution"
		},
		{
			logo: Images.geniLogo,
			image: Images.geniImage,
			heading: "Ecommerce Store",
			description: "We created a seamless online shopping experience for a salon-quality hair care brand by building a high-performing Shopify store, boosting customer satisfaction.",
			industry: "eCommerce",
			caseStudyUrl: "/ecommerce-store"
		},
		{
			logo: Images.caseStudyNew03,
			image: Images.caseStudyNew04,
			heading: "Odoo HRM",
			description: "Learn more about our Odoo HR customization and integration services for a rapidly growing manufacturing firm in the UK, driving overall organizational success.",
			industry: "Manufacturing, Retail",
			caseStudyUrl: "/odoo-hrm"
		},
		{
			logo: Images.caseStudyNew05,
			image: Images.caseStudyNew06,
			heading: "Salesforce CRM",
			description: "Learn about the Salesforce CRM implementation that helped a leading retail chain in the UK increase their sales by 25% and shorten their sales cycle by 15%.",
			industry: "Retail",
			caseStudyUrl: "/salesforce-crm"
		},
		{
			logo: Images.caseStudyNew01,
			image: Images.caseStudyNew02,
			heading: "Odoo Integration",
			description: "Discover how we revolutionized customer relationship management by integrating a powerful dialer with Odoo 17 to optimize customer interactions and boost agent efficiency.",
			industry: "Real Estate",
			caseStudyUrl: "/odoo-integration"
		},
		{
			logo: Images.marketLogo,
			image: Images.marketImage,
			heading: "Digital Storefront",
			description: "Dive into the details of our custom eCommerce platform, designed to revolutionize the way people connect with skilled professionals and home service providers.",
			industry: "eCommerce",
			caseStudyUrl: "/digital-storefront"
		},
		{
			logo: Images.reversLogo,
			image: Images.reversImg,
			heading: "Shopify Solution",
			description: "Discover how our custom order and inventory management system, built on Shopify, boosted customer retention by 55% and sales by 35%.",
			industry: "Health & Beauty",
			caseStudyUrl: "/shopify-solution"
		},
		{
			logo: Images.amsLogo,
			image: Images.amsImg,
			heading: "Account Management Solution",
			description: "We developed a robust account management system for a manufacturing company to improve customer relations, track orders, and manage inventory.",
			industry: "Manufacturing",
			caseStudyUrl: "/account-management-solution"
		},
		{
			logo: Images.AnnexLogo,
			image: Images.AnnexImg,
			heading: "DeFi Solution",
			description: "Here’s how we developed a blockchain-based decentralized finance (DeFi) platform that helps users with a suite of financial services and an NFT marketplace.",
			industry: "FinTech",
			caseStudyUrl: "/defi-solution"
		},
		{
			logo: Images.hrmLogo,
			image: Images.hrmImg,
			heading: "HRM Solution",
			description: "Our cutting-edge white-label HR SaaS platform proved its value, empowering our client to secure significant deals with Fortune 500 companies and mid-market enterprises within a year.",
			industry: "HR Tech",
			caseStudyUrl: "/hrm-solution"
		},
		{
			logo: Images.daytaLogo,
			image: Images.daytaImage,
			heading: "Blockchain Solution",
			description: "Discover how our blockchain solution empowers data privacy, secure exchange, and monetization through user-controlled smart contracts, tokenization, and a dedicated marketplace.",
			industry: "FinTech",
			caseStudyUrl: "/blockchain-solution"
		},
		{
			logo: Images.bettsLogo,
			image: Images.bettsImg,
			heading: "RCRTCoin",
			description: "Explore our innovative blockchain platform that leverages smart contracts to manage RCRTCoin tokens. This secure, scalable solution optimizes recruitment processes.",
			industry: "Recruitment",
			caseStudyUrl: "/rcrt-coin"
		},
	];

	// Generate unique industry options for the dropdown
	const industryOptions = [
		...new Set(offers.map((offer) => offer.industry))
	].map((industry) => ({ value: industry, label: industry }));

	// Filter offers based on selected industry
	const filteredOffers = selectedIndustry
		? offers.filter((offer) => offer.industry === selectedIndustry.value)
		: offers;

	return (
		<section className="what-we-offer content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2><span className="d-block">Success Stories from Our Portfolio</span></h2>
							<p>Transformative Projects: A Selection of Our Finest Work</p>
						</div>
					</Col>
				</Row>

				{/* Filter Dropdown */}
				<Row className="mb-4">
					<Col md={12} className="mx-auto">
						<div className='case-stufdy-filter-wrapper'>
							<div className='case-study-filter-info'>
								<Select
									className='case-studies-filter-select w-100'
									options={industryOptions}
									isClearable
									placeholder="Filter by Industry"
									onChange={(selectedOption) => setSelectedIndustry(selectedOption)}
									classNamePrefix='react-select'
								/>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					{filteredOffers.slice(0, visibleOffers).map((offer, index) => (
						<Col key={index} lg={6} className="column-bottom-margin">
							<div className="offer-block position-relative" style={{ background: offer.boxColor }}>
								<Link href={`/case-studies${offer.caseStudyUrl}`} className="icon-arrow">
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
								<div className="d-flex align-items-center justify-content-between">
									<div className="content-holder">
										<div className="logo-holder">
											<Image width="105" height="105" className="img-fluid" src={offer.logo} alt="logo" />
										</div>
										<div className="image-holder d-block d-sm-none mx-auto mb-3">
											<Image width="185" height="185" className="img-fluid" src={offer.image} alt="image" />
										</div>
										<h2 className="heading">{offer.heading}</h2>
										<p className="description">{offer.description}</p>
										<span className="d-block industry-name">Industry - <span>{offer.industry}</span></span>
										<Link href={`/case-studies${offer.caseStudyUrl}`} className="btn btn-solid-blue mt-4">
											View Details
										</Link>
									</div>
									<div className="image-holder d-none d-sm-block">
										<Image width="185" height="185" className="img-fluid" src={offer.image} alt="image" />
									</div>
								</div>
							</div>
						</Col>
					))}
					<Col md={12}>
						{visibleOffers < filteredOffers.length && (
							<div className="text-center mt-5">
								<button onClick={showMoreOffers} className="btn btn-solid-blue"> Show More Success Stories </button>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	);
}
