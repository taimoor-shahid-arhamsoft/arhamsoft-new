import { Container } from "react-bootstrap";
import SliderContent from "./SliderContent";
import Image from "next/image";
import "@/styles/ElevateBusinessSlider.css";

const ElevateBusinessSlider = ({ title, description, boxContent = [] }) => {
    const slidesToShow = 3;
    return (
        <section className="elevate-business content-section">
            <Container>
                <div className="section-heading text-center">
                    <h2>
                        <span className="d-block">{title}</span>
                    </h2>
                    <p>{description}</p>
                </div>
                {boxContent.length > slidesToShow ? (
                    <SliderContent boxContent={boxContent} slidesToShow={slidesToShow} />
                ) : (
                    <div className="static-slider">
                        {boxContent.map((box, index) => (
                            <div className="box-card" key={index}>
                                <div className="icon-wrapper position-relative">
                                    <Image
                                        width="89"
                                        height="90"
                                        src={box.Icon}
                                        alt="icon"
                                        className="default-icon img-fluid"
                                    />
                                    <Image
                                        width="89"
                                        height="90"
                                        src={box.IconHover}
                                        alt="icon"
                                        className="hover-icon img-fluid"
                                    />
                                </div>
                                <h3>{box.title}</h3>
                                <p className="description mb-0">{box.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ElevateBusinessSlider;
