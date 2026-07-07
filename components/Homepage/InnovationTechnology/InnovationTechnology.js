import Link from "next/link";
import Container from "react-bootstrap/Container";
import "./InnovationTechnology.css";

export default function InnovationTechnology() {
	return (
		<section className="innov-tech">
			<Container>
				<div className="innov-tech-block position-relative text-white text-center">
					<h2><span className="d-block">Power Up With Experience, Expertise,</span> Innovation &amp; Technology</h2>
					<div className="text-holder">
						<p>Every sector, every project, every challenge. For each, exists a technical expertise.</p>
					</div>
					<div className="d-flex justify-content-center">
						<Link className="btn btn-solid-white" href="#contact-us">Find Yours</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}