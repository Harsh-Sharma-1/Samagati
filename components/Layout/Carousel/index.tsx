import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src="/public/assets/vacation.jpg"
            alt="k"
            height={300}
            width={750}
          />
        </div>
        <div>
          <Image
            src="/public/assets/pexels.jpg"
            alt="k"
            height={300}
            width={750}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
