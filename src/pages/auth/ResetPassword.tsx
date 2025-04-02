import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Authlayout from "../../components/layouts/Authlayout";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import CardSuccessful from "../../components/cards/CardSuccessful";
import { useAppSelector } from "../../redux/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ResetPasswordService } from "../../services/auth-services";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../assets/Loader";

const resetSchema = yup.object({
  password: yup.string().required("please enter your new password").required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(resetSchema),
    mode: "onChange",
  });
  const { userEmail, userOtp } = useAppSelector((state) => state.authSlice);
  const [isSuccess, setIsSuccess] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const body = {
        email: userEmail,
        otp: userOtp,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };
      const result = await ResetPasswordService(body);
      console.log("show result==", result);
      if (result?.code == 200) {
        setIsSuccess(true);
        toast.success("Password Reset Successfully!", {
          theme: "colored",
        });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "An error occurred", {
        theme: "colored",
      });
    } finally {
      reset();
    }
  };

  const resetDone = async () => {
    setIsSuccess(false);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Authlayout>
      <ToastContainer />
      <div className="flex flex-col gap-10 lg:gap-5 xl:gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-primary font-semibold text-xl md:text-3xl">
            Reset Password
          </p>
          <p className="text-secondary font-medium text-xs md:text-sm xl:text-base text-center lg:text-start">
            Enter your new password and confirm it below to reset your password.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col gap-10 lg:gap-5 xl:gap-10 w-full px-2 lg:p-0"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-primary text-sm xl:text-base"
            >
              Enter Password
            </label>
            <div className="flex flex-col">
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    {...register("password")}
                    className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                  />
                  {togglePassword ? (
                    <AiOutlineEye
                      onClick={() => setTogglePassword(false)}
                      size={20}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setTogglePassword(true)}
                      size={20}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-primary text-sm xl:text-base"
            >
              Confirm Password
            </label>
            <div className="flex flex-col">
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                  <input
                    type="password"
                    required
                    {...register("confirmPassword")}
                    placeholder="Confirm Password"
                    className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                  />
                  {togglePassword ? (
                    <AiOutlineEye
                      onClick={() => setTogglePassword(false)}
                      size={20}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setTogglePassword(true)}
                      size={20}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <span className="text-red-500 text-xs">
                {errors.confirmPassword?.message}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary rounded-3xl py-2 xl:py-2.5 2xl:py-3 w-full text-white cursor-pointer mt-10 text-xs md:text-sm xl:text-base"
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
      {isSuccess && (
        <Modal show={isSuccess} onClose={() => setIsSuccess(false)}>
          <CardSuccessful
            header="Password Reset"
            description="Fantastic! Your password is now reset. Kindly proceed to the
            login page."
            close={resetDone}
          />
        </Modal>
      )}
    </Authlayout>
  );
};

export default ResetPassword;
