import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="home-banner-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="home-banner-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="home-banner-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="home-banner-slide">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
