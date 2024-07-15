import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { IoMdChatbubbles, IoMdPricetag, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdWidgets } from "react-icons/md";

const Sidebar = () => {
  return (
    <nav
      className="hidden lg:block"
      style={{
        width: "20rem",
        marginRight: "28px",
      }}
    >
      <div className="">
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
        >
          <MdWidgets className="text-[#c6c9ce]" />
          <span className="ps-2">My account</span>
        </a>
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
        >
          <IoMdPricetag className="text-[#c6c9ce]" />
          <span className="ps-2">My deals</span>
        </a>
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
        >
          <FaBookmark className="text-[#c6c9ce]" />
          <span className="ps-2">Saved offers</span>
        </a>
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
        >
          <IoMdChatbubbles className="text-[#c6c9ce]" />
          <span className="ps-2">My discussions</span>
        </a>
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 aside_back_color_003"
        >
          <IoMdSettings className="text-[#c6c9ce]" />
          <span className="ps-2">Settings</span>
        </a>
        <a
          href="#"
          className="ss_popup_a  flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
        >
          <IoLogOut className="text-[#c6c9ce]" />
          <span className="ps-2">Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
