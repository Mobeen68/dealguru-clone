"use client";
import Image from "next/image";
import { FaBars, FaBell, FaBookmark, FaRegBookmark } from "react-icons/fa6";
import logo from "@/app/assets/images/logo.png";
import { Link } from "@chakra-ui/next-js";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import productLogo from "@/app/assets/images/specilnew2.png";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosLogOut,
  IoMdChatbubbles,
  IoMdPricetag,
  IoMdSettings,
} from "react-icons/io";
import { MdWidgets } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
export default function SideNav() {
  const { status } = useSession();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <header
      className="flex items-center justify-between gap-x-8 w-full h-16 lg:h-16 xl:h-16 lg:px-10 px-2 mx-auto"
      style={{ maxWidth: "1440px" }}
      id="header"
    >
      <div className="flex justify-between items-center gap-x-2 w-1/3">
        <div className="hidden lg:block">
          <button className="p-[7px] rounded-lg border border-gray-300">
            <FaBars className="text-gray-600" size={22} />
          </button>
        </div>
        <div className="w-full">
          <Link className="" href="/">
            <Image
              src={logo}
              alt="logo"
              height={32}
              className="lg:w-[240px] w-[135px]"
            />
          </Link>
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <label
          className="py-[2px] relative flex flex-col md:flex-row items-center justify-center border rounded-xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="Write what you are looking for..."
            type="text"
            className="px-6 py-2 flex-1 outline-none rounded-2xl placeholder-shown:font-light placeholder-shown:text-sm"
          />
          <div className="mx-1">
            <button className="w-full px-4 py-1 bg-[#0067e1] border-[#0067e1] text-white fill-white hover:text-[#0067e1] hover:fill-[#0067e1] hover:bg-white border overflow-hidden relative rounded-md disabled:opacity-70">
              <div className="relative">
                <div className="flex items-center transition-all opacity-1 valid:">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    search
                  </span>
                </div>
              </div>
            </button>
          </div>
        </label>
      </div>
      <div className="flex flex-row items-center justify-end gap-x-5 w-1/2">
        {status === "authenticated" ? (
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
                  <PopoverHeader fontWeight="semibold">
                    dealmobeene981
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverBody>
                    <ul>
                      <li className="flex items-center">
                        <MdWidgets className="text-gray-400 me-2" />
                        My account
                      </li>
                      <li className="flex items-center">
                        <IoMdPricetag className="text-gray-400 me-2" />
                        My deals
                      </li>
                      <li className="flex items-center">
                        <FaBookmark className="text-gray-400 me-2" />
                        Saved offers
                      </li>
                      <li className="flex items-center">
                        <IoMdChatbubbles className="text-gray-400 me-2" />
                        My discussions
                      </li>
                      <li className="flex items-center">
                        <IoMdSettings className="text-gray-400 me-2" />
                        Settings
                      </li>
                      <li className="flex items-center">
                        <IoLogOut className="text-gray-400 me-2" />
                        Log out
                      </li>
                    </ul>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <div className="ps-2 flex items-center justify-center">
                My Account{" "}
                {isOpen ? (
                  <IoIosArrowUp className="text-gray-400 ms-1" />
                ) : (
                  <IoIosArrowDown className="text-gray-400 ms-1" />
                )}
              </div>
            </div>

            <div>
              <FaBell className="text-gray-400" />
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
        )}
      </div>
    </header>
  );
}
