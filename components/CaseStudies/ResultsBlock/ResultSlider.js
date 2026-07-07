"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Images } from "@/assets/assets";
import Slider from "react-slick";

export default function ResultSlider(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      <div className="main-slider-holder position-relative d-flex justify-content-center">
        <div className="mobile-image-holder">
          <Image
            src={Images.ImgCaseStudiesResultMobile}
            width="435"
            height="705"
            alt="Case Studies - Result Mobile"
          />
        </div>
        <Slider
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          infinite={true}
          loop={true}
          arrows={false}
          className="result-main-slider"
        >
          {props.resultSliderImages?.map((sliderImage, index) => {
            return (
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
            );
          })}
        </Slider>
      </div>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="thumb-slider"
        responsive={[
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 4,
            },
          },
        ]}
      >
        {props.resultSliderImages?.map((sliderImage, index) => {
          return (
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
          );
        })}
      </Slider>
    </>
  );
}
