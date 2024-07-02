"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Swiper
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      // slidesPerView={8}
      cssMode
      mousewheel
      modules={[Navigation]}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
      }}
      className="w-full h-[77%]"
      style={
        {
          // paddingRight: "22px",
        }
      }
    >
      <div
        style={{
          height: "35px",
        }}
      >
        {data.map((num: number) => (
          <SwiperSlide className="" key={num}>
            <div
              key={num}
              className="w-fit text-[#0067e1] text-center p-2 rounded-md bg-white font-semibold"
              style={{
                fontSize: "12px",
                width: "90px",
              }}
            >
              Slide {num}
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
