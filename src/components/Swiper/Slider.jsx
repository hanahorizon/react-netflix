import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../Cards/Card";
import "./slider.css";

const Slider = ({ data }) => {
  return (
<>
    <div className="slider-title container">Trending movies</div>
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={5}
      spaceBetween={20}
      className="mySwiper container"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Card  url={item.url} title={item.title}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Slider;
