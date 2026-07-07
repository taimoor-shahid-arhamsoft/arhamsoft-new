"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SliderContent = ({ boxContent = [], slidesToShow }) => {
    const settings = {
        dots: true,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: boxContent.length > slidesToShow,
        autoplaySpeed: 3500,
        speed: 500,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings} className="box-slider">
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
        </Slider>
    );
};

export default SliderContent;