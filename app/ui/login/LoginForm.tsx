import { Spinner } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeySharp } from "react-icons/io5";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
      setLoading(false);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex flex-col space-y-3.5">
        <div className="block">
          <input
            type="text"
            name="email"
            id=""
            className="input_feilds_logins email_address_field py-2 px-4 md:px-5 w-full appearance-none border text-input lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
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
            name="password"
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
            <label
              htmlFor="remeberme"
              className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer label_n_design"
            >
              Remember me
            </label>
          </div>
        </div>
        <div>
          {loading ? (
            <div
              style={{
                margin: "0",
                width: "100%",
                // background: "#0067e1",
              }}
              className="w_f_deal_btn text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-100 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md py-3 bg-heading text-white px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0 bg-[#0067e1] hover:bg-white"
            >
              <Spinner />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
