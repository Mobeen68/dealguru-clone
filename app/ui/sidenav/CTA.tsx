"use client";
import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaBell, FaBookmark } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdChatbubbles,
  IoMdPricetag,
  IoMdSettings,
} from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdWidgets } from "react-icons/md";

const CTA = ({ session }: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return session ? (
    <div className="flex items-center justify-between ps-3 w-full cursor-pointer">
      <div
        className="flex items-center"
        onClick={onToggle}
        style={{ zIndex: 999 }}
      >
        <Popover
          // returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement="bottom"
        >
          <PopoverTrigger>
            <Avatar
              // name="Dan Abrahmov"
              src="https://bit.ly/broken-link"
              style={{
                padding: "0px",
                borderRadius: "200px",
                minHeight: "40px",
                backgroundSize: "cover",
                width: "40px",
                height: "40px",
                objectFit: "scale-down",
                margin: "0 auto",
              }}
            />
          </PopoverTrigger>
          <PopoverContent
            style={{
              width: "200px",
              boxShadow: "-20px 20px 40px -4px rgb(145 158 171 / 24%)",
              filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, .24))",
            }}
          >
            <PopoverHeader fontWeight="semibold">dealmobeene981</PopoverHeader>
            <PopoverArrow />
            <PopoverBody>
              <ul>
                <li>
                  <Link
                    href="/my-account"
                    className="flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <MdWidgets className="text-[#c6c9ce] me-2" />
                    My account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-deals"
                    className="flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <IoMdPricetag className="text-[#c6c9ce] me-2" />
                    My deals
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/saved-offers"
                    className="flex items-center"
                  >
                    <FaBookmark className="text-[#c6c9ce] me-2" />
                    Saved offers
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/my-discussions"
                    className="flex items-center"
                  >
                    <IoMdChatbubbles className="text-[#c6c9ce] me-2" />
                    My discussions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <IoMdSettings className="text-[#c6c9ce] me-2" />
                    Settings
                  </Link>
                </li>
                <li
                  className="flex items-center"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <IoLogOut className="text-[#c6c9ce] me-2" />
                  Log out
                </li>
              </ul>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <div className="ps-2 flex items-center justify-center">
          My Account{" "}
          {isOpen ? (
            <IoIosArrowUp className="text-[#c6c9ce] ms-1" />
          ) : (
            <IoIosArrowDown className="text-[#c6c9ce] ms-1" />
          )}
        </div>
      </div>

      <div>
        <FaBell className="text-[#c6c9ce]" />
      </div>
      <button className="px-4 h-9 bg-[#0067e1] border border-[#0067e1] text-white fill-white hover:text-[#0067e1] hover:fill-[#0067e1] hover:bg-white rounded-md lg:font-semibold lg:text-sm text-[10px]">
        <Link
          href={"/dashboard"}
          style={{
            textDecoration: "none",
          }}
        >
          + NEW DEAL
        </Link>
      </button>
    </div>
  ) : (
    <>
      <button className="px-4 h-9 bg-[#0067e1] border border-[#0067e1] text-white fill-white hover:text-[#0067e1] hover:fill-[#0067e1] hover:bg-white rounded-md lg:font-semibold lg:text-sm text-[10px]">
        <Link
          href={"/login"}
          style={{
            textDecoration: "none",
          }}
        >
          Join For Free
        </Link>
      </button>
      <button className="px-4 h-9 border rounded-md bg-white border-[#0067e1] text-[#0067e1] fill-white font-semibold lg:text-sm text-[10px] hidden md:block">
        <Link
          href={"/login"}
          style={{
            textDecoration: "none",
          }}
        >
          Log in
        </Link>
      </button>
    </>
  );
};

export default CTA;
