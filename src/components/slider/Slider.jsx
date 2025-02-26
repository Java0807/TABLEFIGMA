import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

export default function Slider(props) {
  const { product } = props;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={product} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={product} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={product} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={product} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={product} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
