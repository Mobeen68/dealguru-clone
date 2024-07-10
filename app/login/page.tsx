"use client";
import Image from "next/image";
import loginImg from "../assets/images/login-right-side6-min.png";
import "@/app/login/style.css";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Metadata, ResolvingMetadata } from "next";
import { IoKeySharp } from "react-icons/io5";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Link } from "@chakra-ui/next-js";

// export async function generateMetadata(
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: `Login`,
//   };
// }

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <div className="mx-auto max-w-[1920px] px-3 2xl:px-16 mt-8">
      <div className="py-3 lg:py-3">
        <div className="responsive-columns block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 items-start">
          <div className="col-span-4">
            <div className="overflow-hidden bg-white mx-auto rounded-lg p-1 sm:p-1 md:p-8">
              <div
                style={{
                  maxWidth: "400px",
                  // justifyContent: "flex-end",
                  margin: "0 auto",
                }}
              >
                <div>
                  <div className="mb_txt_center_login">
                    <h3
                      className="mb-1.5 pt-6 sm:pt-6 md:pt-12 login_heading_text_wc text-center"
                      style={{
                        // fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        lineHeight: "30px",
                        color: "#000",
                      }}
                    >
                      <div
                        style={{
                          verticalAlign: "inherit",
                        }}
                      >
                        <div style={{ verticalAlign: "inherit" }}>
                          Welcome to DealGuru
                        </div>
                      </div>
                    </h3>
                  </div>
                </div>
                <button
                  className="text-[13px] md:text-sm font-bold leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body border-0 border-transparent rounded-full placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white  hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover social_login_st mb-1 hover:shadow-lg"
                  style={{
                    border: "1px solid #3b5998",
                    // color: "#1B2738",
                    background: " #3b5998",
                  }}
                >
                  <div
                    className="flex"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    <FaFacebook className="me-3" size={19} />
                    <span
                      style={{
                        verticalAlign: "inherit",
                      }}
                    >
                      Continue with Facebook
                    </span>
                  </div>
                </button>
                <button
                  className="mt-2.5 text-[13px] md:text-sm font-bold leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body border-0 border-transparent rounded-full placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white  hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full  bg-google hover:bg-googleHover social_login_st"
                  style={{
                    border: "1px solid #DD4B39 !important",
                    background: "#DD4B39",
                    color: "#fff",
                  }}
                >
                  <div className="flex m-auto">
                    <FaGoogle className="me-3" size={19} />
                    <span
                      style={{
                        verticalAlign: "inherit",
                      }}
                    >
                      Continue with Google
                    </span>
                  </div>
                </button>
                <div
                  className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 mb-8"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#1B2738",
                  }}
                >
                  <hr className="w-full border-gray-300" />
                  <span className="absolute -top-2.5 px-2 bg-white">
                    <div style={{ verticalAlign: "inherit" }}>
                      <div style={{ verticalAlign: "inherit" }}>Or</div>
                    </div>
                  </span>
                </div>

                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center"
                >
                  {error && <div className="text-red-500">{error}</div>}
                  <div className="flex flex-col space-y-3.5">
                    <div className="block">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_feilds_logins email_address_field py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        style={{
                          background: "#FAFBFE",
                          // border: "1px solid #E7EBF3",
                          paddingLeft: "44px",
                        }}
                        placeholder="Email"
                      />
                      <CiMail
                        width={18}
                        height={14}
                        color="#6c7c88"
                        style={{
                          position: "absolute",
                          marginTop: "-33px",
                          marginLeft: "16px",
                        }}
                      />
                    </div>
                    <div className="block">
                      <input
                        type="password"
                        name=""
                        id=""
                        className="input_feilds_logins email_address_field py-2 px-4 md:px-5 w-full appearance-none border text-input lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        style={{
                          background: "#FAFBFE",
                          // border: "1px solid #E7EBF3",
                          paddingLeft: "44px",
                        }}
                        placeholder="Password"
                      />
                      <IoKeySharp
                        width={18}
                        height={14}
                        color="#6c7c88"
                        style={{
                          position: "absolute",
                          marginTop: "-33px",
                          marginLeft: "16px",
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-start">
                      <div className="flex items-center flex-shrink-0">
                        <label className="switch relative inline-block w-10 cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            defaultChecked={true}
                            className="sr-only peer"
                          />
                          <div
                            className="w-10 h-6 bg-[#d9d8d9]  peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-[#0066e0] after:content-[''] after:absolute after:top-[2px] after:left-[0px] after:bg-white after:border-[#d9d8d9] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066e0] hover:peer-checked:bg-[#0066e0]"
                            style={
                              {
                                // width: "38px",
                                // height: "22px",
                                // borderRadius: "41px",
                              }
                            }
                          ></div>
                        </label>
                        <div className="flex items-center justify-between w-full">
                          <label
                            htmlFor="remeberme"
                            className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer label_n_design"
                          >
                            Remember me
                          </label>
                          <div className="label_n_design">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="label_n_design">
                              Sign Up
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div style={{ verticalAlign: "inherit" }}>
                        <div style={{ verticalAlign: "inherit" }}>
                          <button
                            type="submit"
                            style={{
                              margin: "0",
                              width: "100%",
                              // background: "#0067e1",
                            }}
                            className="w_f_deal_btn text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-100 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md py-3 bg-heading text-white px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0 bg-[#0067e1] hover:bg-white"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <div
                  className="mt-3 mb-3 label_n_design"
                  style={{
                    // fontFamily: "Nunito Sans",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "19px",
                    letterSpacing: "0em",
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  By registering, you agree to ours{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "underline #ccc",
                    }}
                  >
                    membership terms{" "}
                  </a>
                  and{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "underline #ccc",
                    }}
                  >
                    privacy policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div
              style={{
                position: "relative",
                paddingTop: ".75rem",
                paddingBottom: "0",
              }}
            >
              <div>
                <Image
                  src={loginImg}
                  alt="login section image"
                  // className="w-full"
                  style={{
                    width: "100%",
                    borderRadius: "14px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
