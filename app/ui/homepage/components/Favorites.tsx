import Image from "next/image";
import React from "react";
import favorite from "@/app/assets/images/favorite.jpg";
import { BiSolidLike } from "react-icons/bi";

const Favorites = () => {
  return (
    <div className="order-1">
      <div className="flex items-center justify-between -mt-2 mb-4 md:mb-5 lg:mb-3 xl:mb-3 2xl:mb-3 3xl:mb-3 pt-2">
        <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-heading box-sidebar-deals-heading-002 pb-2">
          Selected Favorites
        </h2>
      </div>
      <div className="flex-shrink-0 mb-3">
        <div
          className="px-3 rounded-md bg-white"
          style={{
            boxShadow: "0px 0px 10px 0px #272E610D",
            borderRadius: "12px !important",
            marginTop: "-1px",
          }}
        >
          <div
            className="flex pb-4 pt-3 items-center"
            style={{
              borderBottom: "1px solid #f4f3f8",
            }}
          >
            <div>
              <Image
                src={favorite}
                alt="Rituals Skincare Quiz - get free samples"
                className="deals-sidebar-box-image-002 border rounded-2xl"
              />
            </div>
            <div className="px-3 overflow-hidden">
              <p className="sidebar-deals-title-002 ac_ill_003 pt-1">
                Rituals Skincare Quiz - get free samples
              </p>
              <div className="flex pt-2">
                <div className="flex pe-4 items-center">
                  <span className="-mt-1 me-2">
                    <span className="text-sm leading-4">Rituals Cosmetics</span>
                  </span>
                  <span
                    className="ac_ill_003"
                    style={{
                      borderLeft: "1px solid rgba(27, 39, 56, 0.15)",
                      paddingRight: "5px",
                    }}
                  >
                    <span className="ps-2 flex">
                      <BiSolidLike color="gray" />
                      <p className="deals-counting-likes-sidebar-deals-002">
                        283
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex pb-4 pt-3 items-center"
            style={{
              borderBottom: "1px solid #f4f3f8",
            }}
          >
            <div>
              <Image
                src={favorite}
                alt="Rituals Skincare Quiz - get free samples"
                className="deals-sidebar-box-image-002 border rounded-2xl"
              />
            </div>
            <div className="px-3 overflow-hidden">
              <p className="sidebar-deals-title-002 ac_ill_003 pt-1">
                Rituals Skincare Quiz - get free samples
              </p>
              <div className="flex pt-2">
                <div className="flex pe-4 items-center">
                  <span className="-mt-1 me-2">
                    <span className="text-sm leading-4">Rituals Cosmetics</span>
                  </span>
                  <span
                    className="ac_ill_003"
                    style={{
                      borderLeft: "1px solid rgba(27, 39, 56, 0.15)",
                      paddingRight: "5px",
                    }}
                  >
                    <span className="ps-2 flex">
                      <BiSolidLike color="gray" />
                      <p className="deals-counting-likes-sidebar-deals-002">
                        283
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex pb-4 pt-3 items-center"
            style={{
              borderBottom: "1px solid #f4f3f8",
            }}
          >
            <div>
              <Image
                src={favorite}
                alt="Rituals Skincare Quiz - get free samples"
                className="deals-sidebar-box-image-002 border rounded-2xl"
              />
            </div>
            <div className="px-3 overflow-hidden">
              <p className="sidebar-deals-title-002 ac_ill_003 pt-1">
                Rituals Skincare Quiz - get free samples
              </p>
              <div className="flex pt-2">
                <div className="flex pe-4 items-center">
                  <span className="-mt-1 me-2">
                    <span className="text-sm leading-4">Rituals Cosmetics</span>
                  </span>
                  <span
                    className="ac_ill_003"
                    style={{
                      borderLeft: "1px solid rgba(27, 39, 56, 0.15)",
                      paddingRight: "5px",
                    }}
                  >
                    <span className="ps-2 flex">
                      <BiSolidLike color="gray" />
                      <p className="deals-counting-likes-sidebar-deals-002">
                        283
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex pb-4 pt-3 items-center"
            style={{
              borderBottom: "1px solid #f4f3f8",
            }}
          >
            <div>
              <Image
                src={favorite}
                alt="Rituals Skincare Quiz - get free samples"
                className="deals-sidebar-box-image-002 border rounded-2xl"
              />
            </div>
            <div className="px-3 overflow-hidden">
              <p className="sidebar-deals-title-002 ac_ill_003 pt-1">
                Rituals Skincare Quiz - get free samples
              </p>
              <div className="flex pt-2">
                <div className="flex pe-4 items-center">
                  <span className="-mt-1 me-2">
                    <span className="text-sm leading-4">Rituals Cosmetics</span>
                  </span>
                  <span
                    className="ac_ill_003"
                    style={{
                      borderLeft: "1px solid rgba(27, 39, 56, 0.15)",
                      paddingRight: "5px",
                    }}
                  >
                    <span className="ps-2 flex">
                      <BiSolidLike color="gray" />
                      <p className="deals-counting-likes-sidebar-deals-002">
                        283
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
