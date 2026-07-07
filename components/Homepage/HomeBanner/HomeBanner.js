'use client';
import { useRef, useState } from "react";
import dynamic from 'next/dynamic';
import { Images, Videos } from "@/assets/assets";
import Container from 'react-bootstrap/Container';
import "./HomeBanner.css";

const FeaturedClients = dynamic(() => import('./FeaturedClients'), { ssr: false });
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function HomeBanner() {
    const mainSliderRef = useRef(null);
    const subHeadingSliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const mainSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        afterChange: (current) => setCurrentSlide(current),
    };
    const subHeadingSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        fade: true,
        afterChange: (current) => setCurrentSlide(current),
    };
    const subHeadings = [
        "Innovative, Scalable Solutions",
        "Optimize Operations, Automate Processes",
        "Intelligent Business Solutions",
        "Future-Proof Your Operations",
        "Greater Agility & Efficiency",
        "Elevate Performance & Scalability",
        "Powerful Data-Centric Solutions",
    ];
    const mainHeadings = [
        { title: "Custom", highlight: "Development" },
        { title: "Enterprise", highlight: "Solutions" },
        { title: "AI", highlight: "Development" },
        { title: "Cloud", highlight: "Enablement" },
        { title: "Dev", highlight: "Ops" },
        { title: "Agile", highlight: "Transformation" },
        { title: "Data", highlight: "Science" },
    ];
    const slidesImages = [
        Images.mathleteClientsLogo,
        Images.controlPandaClientsLogo,
        Images.elooClientsLogo,
        Images.marketClientsLogo,
        Images.petbudsClientsLogo,
        Images.maritimeClientsLogo,
        Images.biiviewClientsLogo,
        Images.MetroClientsLogo,
    ];
    return (
        <section id="banner" className="position-relative">
            <div className="banner-content text-white text-center">
                <Container>
                    <Slider
                        {...subHeadingSliderSettings}
                        asNavFor={mainSliderRef.current}
                        ref={subHeadingSliderRef}
                        className="home-sub-heading-slider"
                        aria-label="Subheading slider with text animations"
                    >
                        {subHeadings.map((text, index) => (
                            <div key={index} className={`slick-slide ${currentSlide === index ? 'active' : ''}`}>
                                <strong
                                    className="sub-heading custom-slide-animation"
                                    aria-live={currentSlide === index ? "polite" : "off"}
                                >
                                    {text}
                                </strong>
                            </div>
                        ))}
                    </Slider>
                    <Slider
                        {...mainSliderSettings}
                        asNavFor={subHeadingSliderRef.current}
                        ref={mainSliderRef}
                        className="home-h1-slider"
                        aria-label="Main heading slider with title animations"
                    >
                        {mainHeadings.map((item, index) => (
                            <div key={index} className={`slick-slide ${currentSlide === index ? 'active' : ''}`}>
                                <h1>
                                    {item.title} <span>{item.highlight}</span>
                                </h1>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
            <div className="lazy-featured-clients">
                <FeaturedClients title="Featured Clients" slidesImages={slidesImages} />
            </div>
            <div className="video-holder">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={Images.homeBannerBG}
                    preload="metadata"
                    aria-label="Promotional video showing our services in action"
                >
                    <source src={Videos.about} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}