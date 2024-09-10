import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Reviews = () => {
  return (
    <>
      <div className="Services-Header">
        <h2>Our Happy Clients</h2>
        <p>What people say about us</p>
      </div>
      <div>
        <Swiper
          className="Reviews-Slider"
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide className="review-slide">
            <div className="content">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae omnis ducimus nisi unde quas ab excepturi ipsum nobis
                dolorem. Unde sint, impedit ad voluptatibus suscipit doloribus
                voluptatem deleniti dolor officia!
              </p>
              <p>
                <span>،،</span>
              </p>
              <h4>Umar Afzal</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-slide">
            <div className="content">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae omnis ducimus nisi unde quas ab excepturi ipsum nobis
                dolorem. Unde sint, impedit ad voluptatibus suscipit doloribus
                voluptatem deleniti dolor officia!
              </p>
              <p>
                <span>،،</span>
              </p>
              <h4>Burhan Ahmad</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-slide">
            <div className="content">
              <img
                src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae omnis ducimus nisi unde quas ab excepturi ipsum nobis
                dolorem. Unde sint, impedit ad voluptatibus suscipit doloribus
                voluptatem deleniti dolor officia!
              </p>
              <p>
                <span>،،</span>
              </p>
              <h4>Umair Ejaz</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
