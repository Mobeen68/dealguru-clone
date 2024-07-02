"use client";
import logo from "@/app/assets/images/logo.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import "@/app/ui/footer/footer.css";
export default function Footer() {
  const scrollToTop = () => {
    // scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="max-w-[1920px] px-4 2xl:px-16 mx-auto"
      style={{
        maxWidth: "1440px",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 xl:gap-5 pb-9 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 xl:grid-cols-6">
        <div className="pb-3 md:pb-0 col-span-2">
          <div className="me-4 flex flex-col space-y-7 lg:space-y-7.5">
            <a href="/" className="inline-flex focus:outline-none">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "200px",
                  height: "80px",
                  background: "none",
                  opacity: "1",
                  border: "0px none",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                }}
              >
                <Image
                  src={logo}
                  alt="logo"
                  height={53}
                  width={250}
                  style={{
                    width: "170px",
                  }}
                />
              </span>
            </a>
            <p
              className="text-sm font-normal text-[#1D1E1F] leading-6 max-w-[334px] mt-0"
              style={{
                marginTop: "-22px",
                // fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19px",
                color: "#637381",
              }}
            >
              Dealguru.se is a community for those who love good deals and
              deals. Together we help each other make better deals by finding
              and sharing the best deals by sharing them with each other. It is
              completely free to be a member of DealGuru, so if you want to make
              better buying decisions and save both time and money, become a
              DealGuru you too!
            </p>
            <ul className="text-xs lg:text-sm text-body flex items-center space-x-3 lg:space-x-3.5">
              <li className="flex items-baseline">
                <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                  <a href="#" className="transition">
                    <FaTiktok fill="#0367dd" fontSize={22} />
                  </a>
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                  <a href="#" className="transition">
                    <AiFillInstagram fontSize={22} fill="#0367dd" />
                  </a>
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                  <a href="#" className="transition">
                    <FaFacebook fill="#0367dd" fontSize={22} />
                  </a>
                </span>
              </li>
            </ul>
            <div className="">
              <p
                style={{
                  fontFamily: "Nunito Sans",
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "#1B2738",
                  marginBottom: "1.25rem",
                }}
              >
                Become a member
              </p>
              <p
                className="pt-1 pb-5"
                style={{
                  //   fontFamily: "Nunito Sans",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#637381",
                }}
              >
                Register and access exclusive deals
              </p>
              <button
                className="px-4 bg-[#0067e1] border-[#0067e1] text-white fill-white hover:text-[#0067e1] hover:fill-[#0067e1] hover:bg-white border overflow-hidden relative rounded-md disabled:opacity-70"
                style={{
                  //   fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "19px",
                  height: "40px",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="pb-3 md:pb-0 undefined">
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-bold mb-4">
            DealGuru
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Deals
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Blog
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                discussions
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 text-[#8493a0] hover:text-black"
              >
                About us
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Contact us
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                DealGuru in media
              </a>
            </li>
          </ul>
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-bold mb-4 mt-5">
            Community
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Get started
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                FAQ
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                memberships Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-3 md:pb-0 undefined">
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-bold mb-4">
            Categories
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Free things
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Gifts
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                discount codes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 text-[#8493a0] hover:text-black"
              >
                free samples
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Electronics
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Tv
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Grills
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Shoes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Robot Vacuum Cleaners
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Coupons
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-3 md:pb-0 undefined">
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-bold mb-4">
            Trademarks
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Yasuragi
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Telemart
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                discount codes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 text-[#8493a0] hover:text-black"
              >
                free samples
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Electronics
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Tv
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Grills
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Shoes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Robot Vacuum Cleaners
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Coupons
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-3 md:pb-0 undefined">
          <h4 className="text-heading text-sm md:text-base xl:text-lg font-bold mb-4">
            Shops
          </h4>
          <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Matsmart
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Telemart
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                discount codes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 text-[#8493a0] hover:text-black"
              >
                free samples
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Electronics
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Tv
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Grills
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Shoes
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Zolando
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-black text-[#8493a0]"
              >
                Samsung
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0 pb_specific_padding">
        <div className="footer_dis text-center mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <p
            className="text-body text-xs lg:text-sm leading-6 p-0 m-0 copy_foot"
            style={{
              //   fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "19px",
              textAlign: "center",
              display: "inline-flex",
            }}
          >
            Copyright 2023-2024 DealGuru AB
          </p>
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 mb-1 md:mb-0 mx-auto md:mx-0"></ul>
          <div
            className="hidden lg:block"
            style={{
              margin: "0 auto",
            }}
          >
            <span
              onClick={scrollToTop}
              className="active-buton-transition cursor-pointer"
              style={{
                margin: "0 auto",
                paddingLeft: "65px",
                background: "#1B2738",
                color: "#fff",
                padding: "10px 15px 10px 15px",
                borderRadius: "24px",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "22px",
                letterSpacing: "0em",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              To the top
              <MdKeyboardArrowUp size={20} className="ms-2" fill="#fff" />
            </span>
          </div>
          <div
            className="pt-2"
            style={{
              display: "inline-block",
            }}
          >
            <div
              className=""
              style={{
                float: "right",
                margin: "0 0 0 auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className="me-6 text-sm font-semibold leading-[19px] text-[#212121] cursor-pointer">
                <a
                  href="#"
                  style={{
                    // fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "19px",
                  }}
                >
                  Privacy Policy
                </a>
              </span>
              <span className="font-semibold leading-[19px] text-[#212121] cursor-pointer">
                <a
                  href="#"
                  style={{
                    // fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "19px",
                  }}
                >
                  Terms of use
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
