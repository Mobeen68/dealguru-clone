import Image from "next/image";
import React from "react";
import { FaSmile, FaThumbsDown } from "react-icons/fa";
import { FaFaceSmile, FaHeart, FaThumbsUp } from "react-icons/fa6";
import lego from "@/app/assets/images/legoland.jpg";
import productLogo from "@/app/assets/images/specilnew2.png";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1">
      <div className="h-auto">
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
                <div className="flex flex-shrink-0 w-24 sm:w-24 md:w-40 lg:w-52 2xl:w-56 3xl:w-64 mb_hm_d_003">
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
                      src={lego}
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
                  <div>
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
                    <div className="all-buttons-likes-dislikes mt-1 mb-3 social_st_mb_003">
                      <div
                        className="flex"
                        style={{
                          gap: "4px",
                        }}
                      >
                        <div
                          className="icons-buttons number-button"
                          style={{
                            border: "1px solid",
                            borderRadius: "4px",
                            minWidth: "40px",
                            textAlign: "center",
                          }}
                        >
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
                    <div className="margin_tp_dx_003">
                      <div className="flex flex-grow">
                        <h3
                          className="flex mb-1 w-full"
                          style={{
                            display: "-webkit-box",
                            maxWidth: "100%",
                            "-webkit-line-clamp": 3,
                            "-webkit-box-orient": "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "Nunito Sans",
                            fontSize: "19px",
                            fontWeight: 700,
                            lineHeight: "27px",
                            color: "#1B2738",
                          }}
                        >
                          Become a test pilot of DealGurus's new app - get 2 ice
                          creams & win Apple AirPods Pro!
                        </h3>
                      </div>
                      <div
                        className="mb-1 flex deals-price font-semibold text-sm   sm:text-xl md:text-base lg:text-xl  text-heading"
                        style={{
                          fontSize: "16px !important",
                          lineHeight: "27px",
                          alignItems: "center",
                        }}
                      >
                        <span
                          className="text-heading"
                          style={{
                            fontSize: "13px",
                          }}
                        ></span>
                      </div>
                      <div className="pt-1 pb-1">
                        <div className="mbb_hid_div_003">
                          <a
                            href="#"
                            style={{
                              display: "flex",
                              alignContent: "center",
                              alignSelf: "center",
                              alignItems: "center",
                              columnGap: "5px",
                            }}
                          >
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
                              className=" text-body text-xs lg:text-sm leading-normal xl:leading-relaxed gaping_fix av_p_text_003  ps-1 pe-2"
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
    </div>
  );
};

export default Products;
