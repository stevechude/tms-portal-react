import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Authlayout from "../../components/layouts/Authlayout";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import ResetSuccessful from "../../components/cards/ResetSuccessful";
import CardSuccessful from "../../components/cards/CardSuccessful";

const ResetPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetDone = () => {
    setIsSuccess(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Authlayout>
      <div className="flex flex-col gap-10 lg:gap-5 2xl:gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-primary font-semibold text-xl md:text-3xl">
            Reset Password
          </p>
          <p className="text-secondary font-medium text-xs md:text-sm 2xl:text-base text-center lg:text-start">
            Enter your new password and confirm it below to reset your password.
          </p>
        </div>

        <form className="flex flex-col gap-10 lg:gap-5 2xl:gap-10 w-full px-2 lg:p-0">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-primary text-sm 2xl:text-base"
            >
              Enter Password
            </label>
            <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
              <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm 2xl:text-base">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-full pl-4 py-2 md:py-3 outline-0 rounded-l-3xl"
                />
                <AiOutlineEyeInvisible size={20} className="cursor-pointer" />
                {/* <AiOutlineEye /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-primary text-sm 2xl:text-base"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
              <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm 2xl:text-base">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-full pl-4 py-2 md:py-3 outline-0 rounded-l-3xl"
                />
                <AiOutlineEyeInvisible size={20} className="cursor-pointer" />
                {/* <AiOutlineEye /> */}
              </div>
            </div>
          </div>

          <button
            onClick={handleResetPassword}
            className="bg-primary rounded-3xl py-2 2xl:py-3 w-full text-white cursor-pointer mt-10 text-xs md:text-sm 2xl:text-base"
          >
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
      {isSuccess && (
        <Modal show={isSuccess} onClose={() => setIsSuccess(false)}>
          <CardSuccessful
            header="Password Reset"
            description="Fantastic! Your password is now reset. Kindly proceed to the
            login page."
            close={() => setIsSuccess(false)}
          />
        </Modal>
      )}
    </Authlayout>
  );
};

export default ResetPassword;
