import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import MultiColorGrid from "@/components/Shared/MultiColorGrid/MultiColorGrid";
import { gridsContent } from "@/data/Pages/Products/ProductsSwiftRyde";

export default function ProductsSwiftRyde({ onRequestDemo }) {
	return (
		<section className="products-swft-ryd content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center position-relative">
							<h2><span className="d-block">Swift Ryde</span></h2>
							<p>A fully responsive, imaginative and interactive car booking app for fast, reliable and convenient rides in minutes. This online platform is designed to connect passengers and nearby drivers with their own vehicles, helping riders to get rid of waiting for cabs or local transport and possible delays.</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="image-holder text-center">
							<Image className="img-fluid" width="1636" height="632" src={Images.imgProductsSwftRyd} alt="Image" />
						</div>
					</Col>
				</Row>
				<MultiColorGrid title="Notable Features" subTitle="Ride-Hailing App" gridsContent={gridsContent}/>
				<div className="btns-holder d-flex justify-content-center align-items-center">
				<span className="btn btn-solid-blue me-2 mb-2" onClick={()=>onRequestDemo("Swift Ryde")}>Request a Demo</span>
					<a href="https://swiftryde.com/en/home" target="_blank" className="btn btn-solid-blue mx-1 mb-2">Try it Now</a>
				</div>
			</Container>
		</section>
	);
}