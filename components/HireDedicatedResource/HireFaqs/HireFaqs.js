import dynamic from "next/dynamic";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HireFaqs.css";

const AccordionFaq = dynamic(() => import("./AccordionFaq").then((mod) => mod.default));

export default function HireFaqs({ title, text, accordionFaqsData }) {
	return (
		<section className="content-section hire-faqs">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							<h2>
								<span className="d-block">{title}</span>
							</h2>
							<p>{text}</p>
						</div>
					</Col>
				</Row>
				<Row>
					<div className="hire-faqs-content">
						<AccordionFaq accordionFaqsData={accordionFaqsData} />
					</div>
				</Row>
			</Container>
		</section>
	);
}