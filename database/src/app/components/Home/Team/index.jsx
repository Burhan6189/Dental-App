import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Team = async () => {


  const data = await fetch('http://localhost:3000/api/doctors');
  const jsondata = await data.json();


  return (
    <>
      <div className="Meet-Our-Team-Header">
        <h2>Meet Our Team</h2>
        <p>This is optional subheading</p>
      </div>
      <div className="Meet-Our-Team-Slider">
        <Swiper
          modules={[Autoplay]}
          className="swiper-wrapper "
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // loop={true}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
            1440: { slidesPerView: 4, spaceBetween: 0 },
            2560: { slidesPerView: 4, spaceBetween: 0 },
          }}
        >
          {jsondata?.map((item) => (

            <SwiperSlide className="team-slide">
              <Link style={{textDecoration:'none'}} href={'/dentistprofile/'+item?._id}>
              <div className="person">
                <img
                  src={item?.Image}
                  alt={item?.Image}
                />
                <h4>{item?.Name}</h4>
                <h5>{item?.Desigination}</h5>
                <p>
                 {item?.Description}
                </p>
              </div>
              </Link>
            </SwiperSlide>

          ))}
  
        </Swiper>
      </div>
    </>
  );
};

export default Team;
