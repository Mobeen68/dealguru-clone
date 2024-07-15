import { BiSolidLike } from "react-icons/bi";
import { BsChatSquareTextFill } from "react-icons/bs";
import { IoMdChatbubbles, IoMdPricetag } from "react-icons/io";
import { LuBadgeHelp } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";

export default function MyAccount() {
  return (
    <div className="w-full">
      <h1
        style={
          {
            // fontWeight: "400 !important",
          }
        }
        className="text-lg md:text-xl xl:text-2xl font-semibold text-heading mb-3 xl:mb-6 listing_deal_para_title003"
      >
        My account
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-2/6 2xl:w-8/12 mt-4 md:mt-0 lg:pe-6">
          <div
            style={{
              pointerEvents: "none",
            }}
          >
            <div
              className="w-full flex flex-col py-4 px-3 sm:px-2 md:px-4 lg:px-4 mb-4"
              style={{
                background: "#fff",
                borderRadius: "10px",
              }}
            >
              <p className="dshbrd_lbl_003 pb-3">Posts</p>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <IoMdPricetag className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Posted deals</span>
              </a>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <IoMdChatbubbles className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Discussions</span>
              </a>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <BsChatSquareTextFill className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Comments</span>
              </a>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <BsChatSquareTextFill className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Discussion comments</span>
              </a>
            </div>
            <div
              className="w-full flex flex-col py-4 px-3 sm:px-2 md:px-4 lg:px-4 mb-4"
              style={{
                background: "#fff",
                borderRadius: "10px",
              }}
            >
              <p className="dshbrd_lbl_003 pb-3">Community</p>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <BiSolidLike className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Reactions</span>
              </a>
              <a
                href="#"
                className="ss_popup_a flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
              >
                <MdPeopleAlt className="text-[#c6c9ce]" />
                <span className="ps-2 deal_cn_txt_003">0</span>
                <span className="ps-1 deal_p_txt_003">Followers</span>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
          <div className="coming-soon-txt">Coming soon!</div>
          <div
            style={{
              filter: "opacity(50%) grayscale(100%)",
              pointerEvents: "none",
            }}
          >
            <div
              className="w-full flex flex-col py-4 px-3 sm:px-2 md:px-4 lg:px-4 mb-4"
              style={{
                background: "#fff",
                borderRadius: "10px",
              }}
            >
              <p className="dshbrd_lbl_003 pb-3">Awards</p>
              <div className="pt-3 flex">
                <LuBadgeHelp className="text-[#c6c9ce]" fontSize={63} />
                <div className="w-full">
                  <span className="ps-2 deal_cn_txt_003 mb-3">2 level</span>
                  <div>
                    <p
                      className="ms-2 mt-3 mb-3"
                      style={{
                        marginBottom: "10px",
                        background: "#E9EAED",
                        height: "8px",
                        borderRadius: "24px",
                      }}
                    ></p>
                    <p
                      className="ms-2"
                      style={{
                        marginBottom: "10px",
                        background: "#0367DD",
                        height: "8px",
                        borderRadius: "24px",
                        width: "50%",
                        marginTop: "-18px",
                      }}
                    ></p>
                  </div>
                  <div className="flex">
                    <span className="ms-2 deal_p_txt_003">25</span>
                    <span
                      className="deal_p_txt_003"
                      style={{
                        float: "right",
                        margin: "0 0 0 auto",
                      }}
                    >
                      60
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col py-4 px-3 sm:px-2 md:px-4 lg:px-4 mb-4"
              style={{
                background: "#fff",
                borderRadius: "10px",
              }}
            >
              <p className="dshbrd_lbl_003 pb-3">Awards received</p>
              <div className="pt-3 flex">
                <LuBadgeHelp className="text-[#c6c9ce]" fontSize={42} />
                <div className="w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
