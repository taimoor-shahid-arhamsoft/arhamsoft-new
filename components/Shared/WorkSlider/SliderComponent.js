"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SliderComponent = ({ workSliderData = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        centerMode: true,
        centerPadding: "8%",
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "5%",
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "15%",
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0%",
                }
            },
        ]
    };
    return (
        <Slider {...settings} className='work-slider-wrapper'>
            {workSliderData?.map((data, index) => {
                return (
                    <div className='slide-card' key={index}>
                        <div className='card-image'>
                            <Link href={data.url} className="d-inline-block align-top">
                                <Image width="666" height="338" src={data.image} className='img-fluid' alt='Card Image' />
                            </Link>
                        </div>
                        <div className='card-body'>
                            <span className='pre-title d-inline-block'>{data.platform}</span>
                            <h3 className='title'>
                                <Link href={data.url} className="d-inline-block align-top">{data.title}</Link>
                            </h3>
                            <p className='description'>{data.description}</p>
                        </div>
                        <ul className='card-footer tech-stacks-wrapper list-unstyled pl-0 mb-0 d-flex align-items-center flex-wrap'>
                            {data.techStacks?.map((image, index) => {
                                if (index >= 7) {
                                    return null;
                                }
                                return (
                                    <li className='icon-wrapper' key={index}>
                                        <Image width="50" height="50" src={image} className='img-fluid' alt='Tech Stack Image' />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SliderComponent;