import { Container } from "react-bootstrap";
import { Images } from "@/assets/assets";
import Image from "next/image";
import "./CuttingEdge.css";

export default function CuttingEdge() {

    const slides = [
        Images.iconTech01,
        Images.iconTech02,
        Images.iconTech03,
        Images.iconTech04,
        Images.iconTech05,
        Images.iconTech07,
        Images.iconTech08,
        Images.iconTech09,
        Images.iconTech10,
        Images.iconTech11,
    ];

    return (
        <section className="cutting-edge">
            <Container fluid className="px-0">
                <div>
                    <div className="heading-block text-center position-relative pt-0 text-white px-5 px-md-0">
                        <h3>Cutting-Edge <span className="d-inline-block">Technologies</span></h3>
                        <p>Plugging objectives in with the following technologies to achieve end goals:</p>
                    </div>
                    <div className="slider">
                        <div className="slide-track">
                            {slides.concat(slides).map((logo, index) => (
                                <div className="slide" key={index}>
                                    <Image width="144" height="50"
                                        src={logo}
                                        alt="Client Logo" className="img-fluid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container >
        </section >
    );
}