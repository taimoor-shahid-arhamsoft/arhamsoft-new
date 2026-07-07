import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Images } from "@/assets/assets";
import Offers from "./Offers";
import "./WhatWeOffer.css";

export default function WhatWeOffer() {
	return (
		<section className="what-we-offer">
			<Container>
				<div className="heading-img-block text-center position-relative">
					<h2>What We</h2>
					<div className="image-holder">
						<Image width="1472" height="482" className="img-fluid" src={Images.imgOffer} alt="Offer image" />
					</div>
				</div>
				<Offers />
			</Container>
		</section>
	);
}