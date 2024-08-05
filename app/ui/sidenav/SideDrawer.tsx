"use client";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowForward, IoMdListBox, IoMdPricetag } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { MdChat } from "react-icons/md";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="hidden lg:block">
      <button
        className="p-[7px] rounded-lg border border-gray-300"
        ref={btnRef}
        onClick={onOpen}
      >
        <FaBars className="text-gray-600" size={22} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        // size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody
            className="flex flex-col text-heading"
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            <div>
              <div>
                <a href="#">
                  <li className="item-sidebar-desktop-0022">
                    <span className="flex items-center">
                      <IoMdPricetag className="text-[#c6c9ce]" fontSize={30} />
                      <span className="font-normal block truncate ps-3">
                        Brands
                      </span>
                    </span>
                  </li>
                </a>
                <a href="#">
                  <li className="item-sidebar-desktop-0022">
                    <span className="flex items-center">
                      <IoMdPricetag className="text-[#c6c9ce]" fontSize={30} />
                      <span className="font-normal block truncate ps-3">
                        Stores
                      </span>
                    </span>
                  </li>
                </a>
                <a href="#">
                  <li className="item-sidebar-desktop-0022">
                    <span className="flex items-center">
                      <MdChat className="text-[#c6c9ce]" fontSize={30} />
                      <span className="font-normal block truncate ps-3">
                        Discussions
                      </span>
                    </span>
                  </li>
                </a>
                <a href="#">
                  <li
                    className="item-sidebar-desktop-0022"
                    style={{
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <span className="flex items-center">
                      <IoMdListBox className="text-[#c6c9ce]" fontSize={30} />
                      <span className="font-normal block truncate ps-3">
                        Buying guides
                      </span>
                    </span>
                  </li>
                </a>
                <h2 className="flex pt-5 pb-3 ps-3">
                  <IoApps className="text-[#c6c9ce]" fontSize={25} />
                  <span className="font-bold block truncate ps-3">
                    All categories
                  </span>
                </h2>
              </div>
              <div>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="item-sidebar-desktop-002 flex items-center justify-between"
                    >
                      <p
                        style={
                          {
                            // margin: "0",
                          }
                        }
                      >
                        Electronics
                      </p>
                      <div>
                        <IoIosArrowForward
                          className="text-[#c6c9ce]"
                          fontSize={20}
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
