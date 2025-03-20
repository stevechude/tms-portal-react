import Authlayout from "../../components/layouts/Authlayout";
import { Link } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import OtpVerification from "../../components/cards/Otp";

const ForgotPassword = () => {
  const [userOtp, setUserOtp] = useState(false);

  const handleForgotPassword = (e: any) => {
    e.preventDefault();
    setUserOtp(true);
  };

  return (
    <Authlayout>
      <div className="flex flex-col gap-10 lg:gap-5 2xl:gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-primary font-semibold text-xl md:text-3xl">
            Forgot Password
          </p>
          <p className="text-secondary font-medium text-xs md:text-sm 2xl:text-base text-center lg:text-start">
            Enter your phone number or email associated with your account. We
            will then send you an OTP for verification.
          </p>
        </div>

        <form
          onSubmit={handleForgotPassword}
          className="flex flex-col gap-10 lg:gap-5 2xl:gap-10 w-full px-2 lg:p-0"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-primary text-sm 2xl:text-base"
            >
              Enter Email or Phone Number
            </label>
            <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
              <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm 2xl:text-base">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full h-full pl-4 py-2 md:py-3 outline-0 rounded-l-3xl"
                />
                <TbUserEdit size={20} className="" />
              </div>
            </div>
          </div>

          <button className="bg-primary rounded-3xl py-2 2xl:py-3 w-full text-white cursor-pointer mt-10 2xl:mt-20 text-xs md:text-sm 2xl:text-base">
            Continue
          </button>
        </form>

        <div className="flex items-center justify-center w-full">
          <p className="text-secondary font-inter text-xs md:text-sm 2xl:text-base">
            New user?{" "}
            <Link to={"/register"} className="text-tertiary">
              Click here to register
            </Link>
          </p>
        </div>
      </div>
      {userOtp && (
        <Modal show={userOtp} onClose={() => setUserOtp(false)}>
          <OtpVerification cancel={() => setUserOtp(false)} />
        </Modal>
      )}
    </Authlayout>
  );
};

export default ForgotPassword;
