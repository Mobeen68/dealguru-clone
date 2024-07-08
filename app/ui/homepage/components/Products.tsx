import Image from "next/image";
import React from "react";
import { FaRegBookmark, FaSmile, FaThumbsDown } from "react-icons/fa";
import { FaFaceSmile, FaHeart, FaThumbsUp } from "react-icons/fa6";
import lego from "@/app/assets/images/legoland.jpg";
import add from "@/app/assets/images/add.jpg";
import productLogo from "@/app/assets/images/specilnew2.png";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Products = () => {
  return (
    <div
      className="box-border overflow-hidden rounded-md  bg-white p-0 lg:pe-0 2xl:pe-0  deals_card_ret_radius deals_cards_retailer_home mb-5"
      style={{
        boxShadow: "0px 0px 10px 0px #272E610D",
      }}
    >
      <div className="p_in_mb_2_003">
        <div
          className="badge_box box-badge-new13652"
          style={{
            margin: "6px",
          }}
        >
          <FaSmile />
          <p
            style={{
              fontSize: "13px",
              //   fontFamily: "Nunito Sans",
              fontWeight: 700,
              marginTop: "3px",
              marginRight: "5px",
            }}
          >
            LEGO
          </p>
        </div>
        <div className="flex flex-row">
          <a href="#" className="cursor-pointer">
            <div className="flex flex-shrink-0 w-24 sm:w-24 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
              <span
                className="deals-card-img deals-img-testing-page deals_res_cards_w_increase"
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "200px",
                  background: "none",
                  opacity: 1,
                  border: "0px none",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <Image
                  src={add}
                  className="object-cover rounded-s-md rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105 images-box-responsove"
                  alt="50% discount on family ticket to LEGOLAND Billund"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "medium none",
                    margin: "auto",
                    display: "block",
                    maxHeight: "100%",
                  }}
                />
              </span>
              <div className="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 flex flex-col gap-y-1 items-start"></div>
            </div>
          </a>
          <div className="w-full overflow-hidden  ps-3.5 sm:ps-5 md:ps-4 xl:ps-5 2xl:ps-6 3xl:ps-10 pt-0">
            <div
              style={{
                display: "grid",
                height: "100%",
              }}
            >
              <div className="">
                <div
                  className="hidden lg:block"
                  style={{
                    margin: "0 0 0 auto",
                  }}
                >
                  <div className="pb-4 mb-1.5">
                    <div>
                      <p
                        className="ps-4 text-sm"
                        style={{
                          float: "right",
                          color: "#1B2738",
                          fontSize: "12px",
                          fontFamily: "Nunito Sans",
                          fontWeight: 700,
                        }}
                      >
                        Good deal? Vote here:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex content-between items-start">
                  <div className="margin_tp_dx_003">
                    <div className="flex flex-grow">
                      <h3
                        className="flex mb-1 w-full"
                        style={{
                          display: "-webkit-box",
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          // fontFamily: "Nunito Sans",
                          fontSize: "17px",
                          fontWeight: 700,
                          lineHeight: "27px",
                          color: "#1B2738",
                        }}
                      >
                        Become a test pilot of DealGurus&apos;s new app - get 2
                        ice creams & win Apple AirPods Pro!
                      </h3>
                    </div>
                    <div
                      className="flex deals-price font-semibold text-sm sm:text-base md:text-base lg:text-xl  text-heading"
                      style={{
                        fontSize: "18px !important",
                        lineHeight: "27px",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{
                          color: "#0367DD",
                        }}
                      >
                        15 kr
                      </span>
                      <span
                        className="font-bold ps-2"
                        style={{
                          color: "#B1B9C0",
                          textDecoration: "line-through 2px",
                        }}
                      >
                        39 kr
                      </span>
                      <span
                        className="ms-2"
                        style={{
                          background: "#0367DD",
                          borderRadius: "5px",
                          padding: "4px 10px 4px 10px",
                          color: "#fff",
                          fontSize: "15px",
                        }}
                      >
                        -62%
                      </span>
                      <span
                        className="min-w-px w-px h-6 bg-[#d1d5db] inline-block mt-[2px] me-2 ms-2"
                        style={{
                          position: "relative",
                        }}
                      ></span>
                      <span
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        Amazon
                      </span>
                    </div>
                    <div className="pt-1 pb-1">
                      <div className="flex items-center">
                        <Image
                          src={productLogo}
                          alt="avatar"
                          style={{
                            backgroundColor: "#f6bdcf",
                            padding: "5px",
                            borderRadius: "200px",
                            backgroundSize: "cover",
                            width: "30px",
                            height: "30px !important",
                            objectFit: "scale-down",
                            border: "1px solid #d0d0d0",
                          }}
                        />
                        <p
                          className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed  ps-1 pe-2"
                          style={{
                            color: "#637381",
                            fontSize: "14px",
                            fontFamily: "Nunito Sans",
                            fontWeight: 500,
                            paddingRight: "10px",
                            width: "fit-content",
                          }}
                        >
                          <span
                            className="pe-1"
                            style={{
                              fontWeight: 700,
                              color: "#1B2738",
                            }}
                          >
                            Malin
                          </span>
                          Updated 5 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="deals-price">
                      <span className="pt-3"></span>
                      <a href="#" className="cursor-pointer m-0">
                        <span
                          className="text-black text-sm lg:text-base leading-6 lg:leading-8"
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "15px",
                          }}
                        >
                          Affordable headphones for both children and adults!
                        </span>
                      </a>
                    </div>
                    <div className="flex deals-price font-semibold text-sm sm:text-base md:text-base lg:text-xl text-heading">
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#0067e1",
                        }}
                      >
                        Philips
                      </span>
                      <span className="min-w-px w-px h-6 bg-[#d1d5db] inline-block mt-[2px] me-2 ms-2"></span>
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#0067e1",
                        }}
                      >
                        headphones
                      </span>
                      {/* <span className="min-w-px w-px h-6 bg-[#d1d5db] inline-block mt-[2px] me-2 ms-2"></span> */}
                    </div>
                  </div>
                  <div className="all-buttons-likes-dislikes mt-1 mb-3 social_st_mb_003">
                    <div
                      className="flex"
                      style={{
                        gap: "4px",
                      }}
                    >
                      <div className="border border-[#0367dd] rounded-md font-semibold min-w-10 h-full pb-1 flex items-center justify-center">
                        <div
                          style={{
                            color: "#000",
                          }}
                        >
                          39
                        </div>
                      </div>
                      <div
                        className="heart-button like-dislike-buttons heart_btn"
                        title="Heart"
                      >
                        <div className="hrt_btn_003">
                          <div className="img">
                            <FaHeart className="text-[#c8cdd4] hover:text-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="heart-button like-dislike-buttons heart_btn">
                        <div className="hrt_btn_003">
                          <div className="img">
                            <FaThumbsUp className="text-[#c8cdd4] hover:text-green-500" />
                          </div>
                        </div>
                      </div>
                      <div className="heart-button like-dislike-buttons heart_btn">
                        <div className="hrt_btn_003">
                          <div className="img">
                            <FaThumbsDown className="text-[#c8cdd4] hover:text-blue-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  height: "100%",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-full items-center all-buttons-likes-dislikes">
                      <div className="like-dislike-buttons" title="message">
                        <div className="w-fit text-end h-10">
                          <div className="p-[10px] h-full flex gap-x-[10px]">
                            <TbMessageCircle2Filled
                              className="text-[#c8cdd4]"
                              size={20}
                            />
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "19px",
                                color: "#1B273899",
                              }}
                            >
                              8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full items-center all-buttons-likes-dislikes ms-2">
                      <div className="like-dislike-buttons" title="message">
                        <div className="w-fit text-end h-10">
                          <div className="p-[10px] h-full flex gap-x-[10px]">
                            <FaRegBookmark
                              className="text-[#A6ADB5]"
                              size={20}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "50%",
                    }}
                  >
                    <div className="font-semibold text-sm space-s-2 sm:text-xl md:text-base lg:text-xl  2xl:mt-3 text-heading">
                      <div
                        style={{
                          textAlign: "left",
                          margin: "0 !important",
                          width: "unset",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            margin: "0 !important",
                            height: "42px",
                            width: "100%",
                          }}
                          className="bg-[#0067e1] hover:border hover:border-[#0067e1] text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md py-3  bg-heading text-white px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:bg-white hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0"
                        >
                          <span className="lg:py-0.5 flex">
                            Go straight to the deal
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
