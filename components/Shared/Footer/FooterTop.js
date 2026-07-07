import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductsLinks from "./ProductsLinks";
import ExpertiseLinks from "./ExpertiseLinks";
import AiLinks from "./AiLinks";
import IndustrySolutionLinks from "./IndustrySolutionLinks";

export default function FooterTop() {
	return (
		<div className="footer-top">
			<Container>
				<Row>
					<Col xl={3} sm={6}>
						<ProductsLinks />
					</Col>
					<Col xl={3} sm={6}>
						<ExpertiseLinks />
					</Col>
					<Col xl={3} sm={6}>
						<AiLinks />
					</Col>
					<Col xl={3} sm={6}>
						<IndustrySolutionLinks />
					</Col>
				</Row>
			</Container>
		</div>
	);
}