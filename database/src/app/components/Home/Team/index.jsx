import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Team = () => {
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
          <SwiperSlide className="team-slide">
            <div className="person">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <h4>Dr. Joseph Phillips</h4>
              <h5>Senior Doctor</h5>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-slide">
            <div className="person">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <h4>Dr. Joseph Phillips</h4>
              <h5>Senior Doctor</h5>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-slide">
            <div className="person">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <h4>Dr. Joseph Phillips</h4>
              <h5>Senior Doctor</h5>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-slide">
            <div className="person">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <h4>Dr. Joseph Phillips</h4>
              <h5>Senior Doctor</h5>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-slide">
            <div className="person">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <h4>Dr. Joseph Phillips</h4>
              <h5>Senior Doctor</h5>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Team;
