import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        className="Banner-Swiper-BG"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="home-slider-slide">
          <div className="content">
            <h3>High Inovative Technology & Proffesional Dentist</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nemo reprehenderit dolorem voluptatum natus omnis quisquam in
              veniam nobis voluptatibus expedita dolorum, et maxime nihil
              explicabo hic alias sed id.
            </p>
            <a href="/calendar">
              <button>Make an Appointment</button>
            </a>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1725444797~exp=1725448397~hmac=3cd18bcefa614398f3ae60d999c1b2a6c9a0c692f4713db346dfe96534d34f4f&w=1480"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-slider-slide">
          <div className="content">
            <h3>High Inovative Technology & Proffesional Dentist</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nemo reprehenderit dolorem voluptatum natus omnis quisquam in
              veniam nobis voluptatibus expedita dolorum, et maxime nihil
              explicabo hic alias sed id.
            </p>
            <button>Make an Appointment</button>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1725444797~exp=1725448397~hmac=3cd18bcefa614398f3ae60d999c1b2a6c9a0c692f4713db346dfe96534d34f4f&w=1480"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
