import Image from "next/image";
import Container from "react-bootstrap/Container";
import "./FeaturedClients.css";

export default function FeaturedClients({ belowBanner, title, slidesImages }) {
    return (
        <div className={`featured-clients ${belowBanner ? "below-banner" : ""}`}>
            <Container>
                <h2 className="text-uppercase">{title}</h2>
                <div className="slider">
                    <div className="slide-track">
                        {slidesImages.concat(slidesImages).map((logo, index) => (
                            <div className="slide" key={index}>
                                <Image
                                    width="348" height="143"
                                    src={logo}
                                    alt="Client Logo" className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}