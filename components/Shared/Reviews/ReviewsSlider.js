"use client";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function ReviewsSlider({ reviews = [] }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1400,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 991,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {reviews.map((review, index) => (
                <div className="slide-holder" key={index}>
                    <div className="review-block">
                        <div className="d-flex align-items-center mb-2">
                            <span className="count">{review.count}</span>
                            <ul className="list-unstyled rating-stars ms-2 mb-0 d-flex align-items-center">
                                {[...Array(review.stars)].map((_, i) => (
                                    <li key={i}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <blockquote className="mb-0">
                            <q className="d-block mb-3">{review.text}</q>
                            <cite>{review.author}</cite>
                        </blockquote>
                    </div>
                </div>
            ))}
        </Slider>
    );
}