import Image from "next/image";
import React from "react";
import favorite from "@/app/assets/images/favorite.jpg";

const Discounts = () => {
  return (
    <div className="order-2">
      <div className="mt-2">
        <div className="flex items-center justify-between -mt-2 mb-4 md:mb-5 lg:mb-3 xl:mb-3 2xl:mb-3 3xl:mb-3 pt-2">
          <h2
            className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-heading pb-2"
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "2rem",
              color: "#1b2738",
            }}
          >
            Selected discount codes and deals
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
              <div className="px-3 overflow-hidden -mt-1">
                <p className="pt-1">
                  Tivoli Copenhagen - 23% discount on package + 20% on entrance
                  fee
                </p>
                <div>
                  <button className="visa_hide_btn tooltip-container">
                    Show discount code
                    <div className="hidden_code sidebar_004_13385"></div>
                  </button>
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
              <div className="px-3 overflow-hidden -mt-1">
                <p className="pt-1">
                  Tivoli Copenhagen - 23% discount on package + 20% on entrance
                  fee
                </p>
                <div>
                  <button className="visa_hide_btn tooltip-container">
                    Show discount code
                    <div className="hidden_code sidebar_004_13385"></div>
                  </button>
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
              <div className="px-3 overflow-hidden -mt-1">
                <p className="pt-1">
                  Tivoli Copenhagen - 23% discount on package + 20% on entrance
                  fee
                </p>
                <div>
                  <button className="visa_hide_btn tooltip-container">
                    Show discount code
                    <div className="hidden_code sidebar_004_13385"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
