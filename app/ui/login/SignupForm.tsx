import { Spinner } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeySharp, IoPersonSharp } from "react-icons/io5";

const SignupForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
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
      ref.current?.reset();
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
            name="name"
            id=""
            className="input_feilds_logins email_address_field py-2 px-4 md:px-5 w-full appearance-none border text-input lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
            style={{
              background: "#FAFBFE",
              // border: "1px solid #E7EBF3",
              paddingLeft: "44px",
            }}
            placeholder="Name"
          />
          <IoPersonSharp
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

export default SignupForm;
