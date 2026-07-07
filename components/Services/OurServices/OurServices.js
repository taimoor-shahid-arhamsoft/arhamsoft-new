import Container from "react-bootstrap/Container";
import "@/styles/OurServices.css";
import OurServicesSlider from "./OurServicesSlider";

export default function OurServices({ title, preTitle, ourServices }) {
	return (
		<div className="our-services content-section">
			<Container>
				{title && (
					<div className='section-heading text-center'>
						<h2>{preTitle}<span className="d-block">{title}</span></h2>
					</div>
				)}
				<div className="services-slider-holder">
					<OurServicesSlider ourServices={ourServices} />
				</div>
			</Container>
		</div>
	);
}