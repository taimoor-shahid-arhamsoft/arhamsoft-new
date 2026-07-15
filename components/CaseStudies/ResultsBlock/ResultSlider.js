"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cloudinaryImages, Images } from "@/assets/assets";
import Slider from "react-slick";
import { usePathname } from "next/navigation";

const THUMB_RESPONSIVE = [
  {
    breakpoint: 993,
    settings: {
      slidesToShow: 4,
    },
  },
];

export default function ResultSlider({ resultSliderImages }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const pathname = usePathname();
  const isSmartFarm = pathname === "/case-studies/smart-farm-irrigation-system";

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      <div className="main-slider-holder position-relative d-flex justify-content-center">
        <div className={isSmartFarm ? "tab-image-holder" : "mobile-image-holder"}>
          <Image
            src={isSmartFarm ? cloudinaryImages.SmartResultFrame : Images.ImgCaseStudiesResultMobile}
            width="435"
            height="705"
            alt="Case Studies - Result Mobile"
          />
        </div>
        <Slider
          asNavFor={nav2}
          ref={sliderRef1}
          infinite={true}
          loop={true}
          arrows={false}
          className={isSmartFarm ? "result-main-slider-tab" : "result-main-slider"}
        >
          {resultSliderImages?.map((sliderImage, index) => (
            <div key={index}>
              <div className="slide-holder">
                <Image
                  src={sliderImage.image}
                  alt="Result Image"
                  width="311"
                  height="661"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="thumb-slider"
        responsive={THUMB_RESPONSIVE}
      >
        {resultSliderImages?.map((sliderImage, index) => (
          <div key={index}>
            <div className="slide-holder">
              <Image
                src={sliderImage.image}
                alt="Result Image"
                width="63"
                height="63"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
