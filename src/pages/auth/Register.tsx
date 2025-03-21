import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Authlayout from "../../components/layouts/Authlayout";

const Register = () => {
  return (
    <Authlayout>
      <div className="flex flex-col gap-7 lg:gap-4 xl:gap-7">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-primary font-semibold text-xl md:text-2xl xl:text-3xl">
            Create an Account
          </p>
          <p className="text-secondary font-medium text-xs md:text-sm xl:text-base text-center lg:text-start">
            You're one step away! Please fill in the details below to create
            your account.
          </p>
        </div>

        <form className="flex flex-col gap-5 lg:gap-3 xl:gap-5 w-full px-2 lg:p-0">
          <div className="flex flex-col gap-5 lg:gap-3 xl:gap-5">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter First Name
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-full pl-4 py-2 2xl:py-3 outline-0 rounded-l-3xl"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter Last Name
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="business-name"
                className="text-primary text-sm xl:text-base"
              >
                Enter Business Name
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl"
                  />
                  <TbUserEdit size={20} className="" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter Email
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl"
                    />
                    <MdOutlineEmail size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter Phone Number
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl spin-button-none"
                    />
                    <MdOutlinePhoneEnabled size={20} className="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter Password
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl"
                    />
                    <AiOutlineEyeInvisible
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="confirm-password"
                  className="text-primary text-sm xl:text-base"
                >
                  Confirm Password
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="Confirm Password"
                      className="w-full h-full pl-4 py-2 xl:py-3 outline-0 rounded-l-3xl spin-button-none"
                    />
                    <AiOutlineEyeInvisible
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-primary rounded-3xl text-xs md:text-sm xl:text-base py-2 xl:py-3 w-full text-white cursor-pointer mt-4">
            Continue
          </button>
        </form>

        <div className="flex items-center justify-center w-full">
          <p className="text-secondary font-inter text-xs md:text-sm xl:text-base">
            Existing user?{" "}
            <Link to={"/"} className="text-tertiary">
              Click here to Login
            </Link>
          </p>
        </div>
      </div>
    </Authlayout>
  );
};

export default Register;
