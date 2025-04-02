import Authlayout from "../../components/layouts/Authlayout";
import { Link } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import OtpVerification from "../../components/cards/Otp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { forgotPasswordType } from "../../types/auth";
import { ForgotPasswordService } from "../../services/auth-services";
import Loader from "../../assets/Loader";
import { toast, ToastContainer } from "react-toastify";
import { setUserEmail } from "../../redux/features/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const forgotSchema = yup.object({
  email: yup.string().required().email("Email is not valid"),
});

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(forgotSchema),
    mode: "onChange",
  });
  const [userOtp, setUserOtp] = useState(false);
  const dispatch = useAppDispatch();

  const handleForgotPassword = async (data: forgotPasswordType) => {
    try {
      const result = await ForgotPasswordService(data);
      console.log("show result==", result);
      if (result?.code == 200) {
        dispatch(setUserEmail(result?.data?.email));
        toast.success("OTP Sent!", {
          theme: "colored",
        });
        setTimeout(() => {
          setUserOtp(true);
        }, 2000);
      }
    } catch (error: any) {
      console.log("ForgotPassword error==", error);
      toast.error(error?.response?.data?.message || "An error occurred", {
        theme: "colored",
      });
    } finally {
      reset();
    }
  };

  return (
    <Authlayout>
      <ToastContainer />
      <div className="flex flex-col gap-10 lg:gap-5 xl:gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-primary font-semibold text-xl md:text-3xl">
            Forgot Password
          </p>
          <p className="text-secondary font-medium text-xs md:text-sm xl:text-base text-center lg:text-start">
            Enter your email associated with your account. We will then send you
            an OTP for verification.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleForgotPassword)}
          className="flex flex-col gap-10 lg:gap-5 xl:gap-10 w-full px-2 lg:p-0"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-primary text-sm xl:text-base"
            >
              Enter Email
            </label>
            <div className="flex flex-col">
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                  <input
                    type="email"
                    required
                    {...register("email")}
                    placeholder="Email or Phone Number"
                    className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                  />
                  <TbUserEdit size={20} className="" />
                </div>
              </div>
              <span className="text-red-500 text-xs">
                {errors.email?.message}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary rounded-3xl py-2 xl:py-2.5 2xl:py-3 w-full text-white cursor-pointer mt-10 xl:mt-20 text-xs md:text-sm xl:text-base"
          >
            {isSubmitting ? <Loader /> : <p>Continue</p>}
          </button>
        </form>

        <div className="flex items-center justify-center w-full">
          <p className="text-secondary font-inter text-xs md:text-sm xl:text-base">
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
