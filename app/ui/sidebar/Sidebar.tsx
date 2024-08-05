"use client";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { IoMdChatbubbles, IoMdPricetag, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdWidgets } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:block"
      style={{
        width: "20rem",
        marginRight: "28px",
      }}
    >
      <div className="">
        <Link
          href="/my-account"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2`}
          style={{
            textDecoration: "none",
            color: pathname === "/my-account" ? "#0367dd" : "",
          }}
        >
          <MdWidgets
            className={`${
              pathname === "/my-account" ? "text-[#0367dd]" : "text-[#c6c9ce]"
            } `}
            fontSize={20}
          />
          <span className="ps-2">My account</span>
        </Link>
        <Link
          href="/my-deals"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 ${
            pathname === "/my-deals" && "aside_back_color_003"
          }`}
          style={{
            textDecoration: "none",
          }}
        >
          <IoMdPricetag className="text-[#c6c9ce]" fontSize={20} />
          <span className="ps-2">My deals</span>
        </Link>
        <Link
          href="/saved-offers"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 ${
            pathname === "/saved-offers" && "aside_back_color_003"
          }`}
          style={{
            textDecoration: "none",
          }}
        >
          <FaBookmark className="text-[#c6c9ce]" fontSize={20} />
          <span className="ps-2">Saved offers</span>
        </Link>
        <Link
          href="/my-discussions"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 ${
            pathname === "/my-discussions" && "aside_back_color_003"
          }`}
          style={{
            textDecoration: "none",
          }}
        >
          <IoMdChatbubbles className="text-[#c6c9ce]" fontSize={20} />
          <span className="ps-2">My discussions</span>
        </Link>
        <Link
          href="/settings"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 ${
            pathname === "/settings" && "aside_back_color_003"
          }`}
          style={{
            textDecoration: "none",
          }}
        >
          <IoMdSettings className="text-[#c6c9ce]" fontSize={20} />
          <span className="ps-2">Settings</span>
        </Link>
        <Link
          href="#"
          className={`ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2`}
          style={{
            textDecoration: "none",
          }}
        >
          <IoLogOut className="text-[#c6c9ce]" fontSize={20} />
          <span className="ps-2">Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
