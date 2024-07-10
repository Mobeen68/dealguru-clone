"use client";
import Image from "next/image";
import loginImg from "../assets/images/login-right-side6-min.png";
import "@/app/login/style.css";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useState } from "react";
import LoginForm from "../ui/login/LoginForm";
import SignupForm from "../ui/login/SignupForm";

// export async function generateMetadata(
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: `Login`,
//   };
// }

export default function LoginPage() {
  const [form, setForm] = useState("login");

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
                  <span className="absolute -top-2.5 px-2 bg-white">Or</span>
                </div>
                {form === "login" ? (
                  <>
                    <LoginForm />
                    <div
                      className="label_n_design mt-1"
                      style={{
                        textAlign: "end",
                      }}
                      onClick={() => setForm("signup")}
                    >
                      Don&apos;t have an account?{" "}
                      <span className="text-blue-600 cursor-pointer">
                        Register here
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <SignupForm setForm={setForm} />
                    <div
                      className="label_n_design mt-1"
                      style={{
                        textAlign: "end",
                      }}
                      onClick={() => setForm("login")}
                    >
                      Already have an account?{" "}
                      <span className="text-blue-600 cursor-pointer">
                        Login here
                      </span>
                    </div>
                  </>
                )}

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
