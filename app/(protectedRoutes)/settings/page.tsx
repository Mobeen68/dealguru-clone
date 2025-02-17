"use client";
import Image from "next/image";
import avatar from "@/app/assets/images/blank_avatar.png";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { updateProfile } from "@/app/actions/updateProfile";

export default function SettingPage() {
  const { data }: any = useSession();
  // console.log(data);

  const toast = useToast();

  const [userData, setUserData] = useState<any>({
    email: data?.user?.email,
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    profilePic: "",
  });

  useEffect(() => {
    setUserData({
      email: data?.user?.email,
      firstName: data?.user?.name.split(" ")[0],
      lastName: data?.user?.name.split(" ")[1],
      username: "",
      phone: "",
      profilePic: "",
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // app/(protectedRoutes)/settings/page.tsx
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const name = `${userData.firstName} ${userData.lastName}`;
    const formData = {
      name: name,
      email: userData.email,
      phoneNumber: userData.phone,
      profilePic: userData.profilePic,
    };
    try {
      const { success, data, message } = await updateProfile(formData);
      if (success) {
        console.log("Profile updated", data);
        toast({
          title: "Profile updated successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error("Error updating profile:", message);
        toast({
          title: `Error updating profile: ${message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Unexpected error occurred.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="w-full">
      <h1
        style={{
          fontWeight: "400 !important",
        }}
        className="text-lg md:text-xl xl:text-2xl font-semibold text-heading mb-3 xl:mb-6 listing_deal_para_title003"
      >
        Settings
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto flex flex-col justify-center"
      >
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/6 2xl:w-8/12 mt-4 md:mt-0 pe-6">
            <div className="py-4">
              <div className="w-full">
                <Image
                  src={userData.image || avatar}
                  alt="avatar"
                  className="avtar_image-default"
                  style={{
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </div>
            <div className="mt-5 w-full">
              <a
                href="#"
                style={{
                  width: "100%",
                }}
                className="w_f_deal_btn text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-100 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md py-3 bg-heading text-white px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0 bg-[#0067e1] hover:bg-white"
              >
                Style your avatar
              </a>
            </div>
          </div>
          <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <div className="block">
                <label
                  htmlFor="username"
                  className="ac_pc_label_003 block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  id="username"
                  className="ac_pc_input_003 py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  placeholder="Username"
                />
              </div>
              <div className="block mt-3">
                <label
                  htmlFor="firstName"
                  className="ac_pc_label_003 block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  className="ac_pc_input_003 py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  placeholder="First name"
                />
              </div>
            </div>
            <div className="block mt-3">
              <label
                htmlFor="surname"
                className="ac_pc_label_003 block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
              >
                Surname *
              </label>
              <input
                type="text"
                name="lastName"
                id="surname"
                value={userData.lastName}
                onChange={handleChange}
                className="ac_pc_input_003 py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                placeholder="Last name"
              />
            </div>
            <div className="block mt-3">
              <label
                htmlFor="email"
                className="ac_pc_label_003 block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                className="ac_pc_input_003 py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                placeholder="Email"
              />
            </div>
            <label
              htmlFor="phone"
              className="mt-6 ac_pc_label_003 block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
            >
              Phone
            </label>
            <div className="flex">
              <input
                type="text"
                name="phone"
                id="phone"
                className="ac_pc_input_003 py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                placeholder=""
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="active-buton-transition pf_st_btn_003 mt-8 text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 mt-3 w-full"
              >
                Update your profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
