import React from "react";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

const Filters = () => {
  return (
    <div
      className="flex items-center justify-between -mt-2 mb-3  mb_margin_dx_003"
      style={{
        justifyContent: "right",
      }}
    >
      <div className="w-full">
        <h1
          style={{
            // fontFamily: "Nunito Sans",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "#1B2738",
          }}
        >
          Best deals right now
        </h1>
      </div>
      <div className="lg:flex sm:pb-1 hidden w-full">
        <div
          style={{
            background: "#fff",
            padding: "5px",
            borderRadius: "6px",
          }}
        >
          <ul
            className="gap-2"
            style={{
              display: "flex",
            }}
          >
            <a href="#">
              <li
                className="p-2 rounded-md hover:bg-[#F4F3F8] hover:text-[#0367DD] text-[GrayText]"
                style={{
                  fontSize: "15px",
                }}
              >
                Selected favorites
              </li>
            </a>
            <a href="#">
              <li
                className="p-2 rounded-md hover:bg-[#F4F3F8] hover:text-[#0367DD] text-[GrayText]"
                style={{
                  fontSize: "15px",
                }}
              >
                New deals
              </li>
            </a>
            <a href="#">
              <li
                className="p-2 rounded-md hover:bg-[#F4F3F8] hover:text-[#0367DD] text-[GrayText]"
                style={{
                  fontSize: "15px",
                }}
              >
                Highest rating
              </li>
            </a>
          </ul>
        </div>
        <div className="ps-2">
          <div
            style={{
              background: "#fff",
              padding: "5px",
              borderRadius: "6px",
            }}
          >
            <ul
              className="gap-2"
              style={{
                display: "flex",
                listStyle: "none",
              }}
            >
              <a href="#">
                <li
                  className="p-2 rounded-md hover:bg-[#F4F3F8] hover:text-[#0367DD] text-[GrayText]"
                  style={{
                    fontSize: 25,
                  }}
                >
                  <IoGrid />
                </li>
              </a>
              <a href="#">
                <li
                  className="p-2 rounded-md hover:bg-[#F4F3F8] hover:text-[#0367DD] text-[GrayText]"
                  style={{
                    fontSize: 25,
                  }}
                >
                  <TfiMenuAlt />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
