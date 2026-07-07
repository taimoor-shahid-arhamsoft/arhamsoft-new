"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function OurServicesSlider({ ourServices = [] }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <Slider {...settings}>
            {ourServices.map((service, index) => {
                return (
                    <div className="slide-holder" key={index}>
                        <div className="service-block">
                            <h2>{service.title} <span className="text-theme">{service.subTitle}</span></h2>
                            <p>{service.description}</p>
                            <ul className="key-services list-unstyled mb-0">
                                {service.servicesList.map((keyService, index) => {
                                    return (
                                        <li key={index}>
                                            <Link className="d-inline-block align-top" href={keyService.link}>
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-holder">
                                                        <Image width="44" height="44" className="default-image img-fluid" src={keyService.iconDefault} alt="icon" />
                                                        <Image width="44" height="44" className="hover-image immg-fluid" src={keyService.iconHover} alt="icon" />
                                                    </div>
                                                    <span className='tech-name'>{keyService.text}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}
