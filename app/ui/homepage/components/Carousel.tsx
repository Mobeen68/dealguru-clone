"use client";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const data = [
    "Gifts",
    "Toys",
    "Sports",
    "Books",
    "Furniture",
    "Home",
    "Beauty",
    "Grocery",
    "Electronics",
    "Books",
    "Furniture",
    "Home",
    "Beauty",
    "Grocery",
    "Electronics",
    "Gifts",
    "Toys",
    "Sports",
    "Books",
    "Furniture",
    "Home",
    "Beauty",
    "Grocery",
    "Electronics",
    "Books",
    "Furniture",
    "Home",
    "Beauty",
    "Grocery",
    "Electronics",
  ];

  return (
    <div
      className="swiper mySwiper_header_tags_h swiper-initialized swiper-horizontal swiper-css-mode swiper-scrollbar-horizontal"
      style={{
        paddingRight: "22px",
      }}
    >
      <div
        className="swiper-wrapper"
        style={{
          height: "35px",
        }}
        aria-live="polite"
      >
        {data.map((item, index) => (
          <a
            href="#"
            className="swiper-slide rounded-md slides-tags-header flex gap-2 sp_mc_003 swiper-slide-active"
            style={{
              width: "180.571px",
              marginRight: "15px",
            }}
            key={item}
            aria-label={`${index + 1}/${data.length}`}
          >
            <div
              className=""
              style={{
                width: "100%",
                color: "#0067e1",
              }}
            >
              {item}
            </div>
          </a>
        ))}
      </div>
      <div
        className="swiper-button-next header-tag-next-btn swiper-navigation-button"
        style={{
          display: "block",
        }}
        role="button"
        tabIndex={0}
        aria-label="Next slide"
        aria-controls="swiper-wrapper-3f4b6c9f7f24d7b4"
        aria-disabled="false"
      ></div>
      <div
        className="swiper-button-prev header-tag-prev-btn swiper-button-disabled"
        style={{ display: "block" }}
        role="button"
        tabIndex={-1}
        aria-label="Previous slide"
        aria-controls="swiper-wrapper-3f4b6c9f7f24d7b4"
        aria-disabled="true"
      ></div>
      <div
        className="swiper-pagination"
        style={{
          display: "none",
        }}
      ></div>
      <div
        className="swiper-scrollbar-drag"
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          width: "478.157px",
        }}
      ></div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  );
}
