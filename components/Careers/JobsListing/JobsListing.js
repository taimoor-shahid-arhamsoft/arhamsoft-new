"use client";
import { useState } from "react";
import { Button, Col, Form, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Images } from "@/assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import JobwithRecaptcha from "@/components/Careers/JobsListing/JobListingWithRecaptcha";

export default function JobListings() {
	const [activeModalId, setActiveModalId] = useState(null);
	const [searchJobTitle, setSearchJobTitle] = useState("");
	const [searchLocation, setSearchLocation] = useState("");
	const jobs = [
		{
			id: 1,
			jobTitle: "PHP Developer",
			city: "New York",
			state: "",
			country: "",
			education: "BSSE/MSSE",
			experience: "2+ Years Experience",
			openPositions: 2,
			jobDescription: "We're looking for skilled PHP developers to build robust web apps using Laravel or Symfony. You'll collaborate, use best practices, and stay updated with PHP, Docker, PHPUnit, and API development. Strong problem-solving skills and a passion for clean code are essential.",
			image: Images.JobsListingPHPIcon,
		},
		{
			id: 2,
			jobTitle: "Senior Frontend Developer",
			city: "New York",
			state: "",
			country: "",
			education: "MSCS",
			experience: "5+ Years Experience",
			openPositions: 1,
			jobDescription: "Highly experienced senior frontend developer required to lead the development of complex user interfaces using modern technologies like React, TypeScript, and state management libraries (e.g., Redux, Zustand) while championing best practices and mentoring junior developers.",
			image: Images.JobsListingFrontendIcon,
		},
		{
			id: 3,
			jobTitle: ".NET Senior Developer",
			city: "New York",
			state: "",
			country: "",
			education: "BS/MS in CS",
			experience: "6+ Years Experience",
			openPositions: 1,
			jobDescription: "We are seeking an experienced professional capable of full-lifecycle development of complex software systems, from initial design and development through architecting technical solutions and implementing best practices.",
			image: Images.JobsListingDotNetIcon,
		},
		{
			id: 4,
			jobTitle: "Android Developer",
			city: "New York",
			state: "",
			country: "",
			education: "BSCS/MSCS",
			experience: "4+ Years Experience",
			openPositions: 3,
			jobDescription: "We're looking for passionate Android developers to build cutting-edge mobile apps. You'll design, develop, test, and deploy high-quality, performant Android applications in a collaborative environment. Strong Kotlin/Java skills and a commitment to staying up-to-date with the latest Android technologies are essential.",
			image: Images.JobsListingAndroidIcon,
		},
	];
	const [jobsToDisplay, setJobsToDisplay] = useState(jobs);
	const handleSearchJobTitleChange = (e) => {
		const value = e.target.value;
		setSearchJobTitle(value);
		if (!value) {
			setJobsToDisplay(jobs);
		} else {
			handleSearch();
		}
	};
	const handleSearchLocationChange = (e) => {
		const value = e.target.value;
		setSearchLocation(value);
		if (!value) {
			setJobsToDisplay(jobs);
		} else {
			handleSearch();
		}
	};
	const handleSearch = (e) => {
		e.preventDefault();
		const filtered = jobs.filter((job) => {
			const jobTitleMatch = job.jobTitle.toLowerCase().includes(searchJobTitle.toLowerCase());
			const locationMatch =
				job.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
				job.state.toLowerCase().includes(searchLocation.toLowerCase()) ||
				job.country.toLowerCase().includes(searchLocation.toLowerCase());
			return jobTitleMatch && locationMatch;
		});
		setJobsToDisplay(filtered);
	};
	return (
		<section className="jobs-listing">
			<Container>
				<div className="careers-jobs-listing-area">
					<Form onSubmit={handleSearch}>
						<Row className="align-items-center">
							<Col lg="9">
								<Row className="align-items-center">
									<Col lg="6" className="mb-lg-0 mb-5">
										<div className="input-wrapper position-relative">
											<Form.Control
												type="search"
												placeholder="Job title or skill"
												value={searchJobTitle}
												onChange={handleSearchJobTitleChange}
											/>
										</div>
									</Col>
									<Col lg="6" className="mb-lg-0 mb-5">
										<div className="input-wrapper position-relative">
											<Form.Control
												type="search"
												placeholder="City, State/province, or Country"
												value={searchLocation}
												onChange={handleSearchLocationChange}
											/>
										</div>
									</Col>
								</Row>
							</Col>
							<Col lg="3">
								<Button type="submit" className="lisitng-btn">Search</Button>
							</Col>
						</Row>
					</Form>
				</div>
				{jobsToDisplay.length > 0 ? (
					jobsToDisplay.map((job) => (
						<div className="jobs-listing-content" key={job.id}>
							<Row className="align-items-center">
								<Col lg="7">
									<div className="jobs-listing-content-info d-flex align-items-center justify-content-between">
										<div className="jobs-listing-logo">
											<Image src={job.image} className="img-fluid" />
										</div>
										<div className="jobs-listing-logo-content">
											<h3>{job.jobTitle}</h3>
											{job.education && <h6>Education: {job.education}</h6>}
											{job.city && (
												<h6>
													Location: {job.city}{job.state ? `, ${job.state}` : ''}{job.country ? `, ${job.country}` : ''}
												</h6>
											)}
											<p className="mb-0">{job.jobDescription}</p>
										</div>
									</div>
								</Col>
								<Col lg="5">
									<div className="jobs-listing-badges-area d-flex align-items-center justify-content-between">
										<p className="mb-0 me-lg-2 me-4">{job.experience}</p>
										<span className="listing-badge d-flex align-items-center justify-content-center me-lg-2 me-4">
											{job.openPositions} Position{job.openPositions > 1 && 's'}
										</span>
										<Button
											className="apply-btn d-flex align-items-center justify-content-center"
											onClick={() => setActiveModalId(job.id)}
										>
											Apply Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
										</Button>
										{activeModalId === job.id && (
											<JobwithRecaptcha setActiveModalId={setActiveModalId} />
										)}
									</div>
								</Col>
							</Row>
						</div>
					))
				) : (
					<div className="not-found-box">
						<div className="image">
							<Image src={Images.notFound} className="img-fluid" alt="Not Found" width="" height="" />
						</div>
						<p className="mb-0">No Jobs Found.</p>
					</div>
				)}
			</Container>
		</section>
	);
};