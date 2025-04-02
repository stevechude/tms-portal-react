import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Authlayout from "../../components/layouts/Authlayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccountType } from "../../types/auth";
import { CreateAccount } from "../../services/auth-services";
import Loader from "../../assets/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import OtpVerification from "../../components/cards/Otp";
import { useAppDispatch } from "../../redux/hooks";
import { setUserEmail } from "../../redux/features/authSlice";

// character validation error message
const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const registerSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    companyName: yup.string().required("Business name is required"),
    email: yup.string().required().email("Email is not valid"),
    phoneNumber: yup
      .string()
      .required()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "phone number is not valid"
      ),
    password: yup
      .string()
      .required("please enter a password")
      .min(6, "password is too short!")
      .max(20, "password is too  long!")
      .matches(/[0-9]/, "password should have 1 digit")
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
      .matches(
        /[!@#$%^&*()+_"?><]/,
        getCharacterValidationError("special character")
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [userOtp, setUserOtp] = useState(false);
  const dispatch = useAppDispatch();

  const handleRegister = async (data: createAccountType) => {
    try {
      const result = await CreateAccount(data);
      console.log("show result==", result);
      if (result?.code == 200) {
        toast.success(result?.message, {
          theme: "colored",
        });
        dispatch(setUserEmail(result?.data?.email));
        setTimeout(() => {
          setUserOtp(true);
        }, 2000);
      }
    } catch (error: any) {
      console.log("register error==", error);
      toast.error(error?.response?.data?.message || "An error occurred", {
        theme: "colored",
      });
    }
  };

  return (
    <Authlayout>
      <ToastContainer />
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

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-5 lg:gap-3 xl:gap-5 w-full px-2 lg:p-0"
        >
          <div className="flex flex-col gap-5 lg:gap-3 xl:gap-5">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter First Name
                </label>
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        type="text"
                        id="firstName"
                        required
                        {...register("firstName")}
                        placeholder="First Name"
                        className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                      />
                      <TbUserEdit size={20} className="" />
                    </div>
                  </div>
                  <span className="text-red-500 text-xs">
                    {errors.firstName?.message}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="text-primary text-sm xl:text-base"
                >
                  Enter Last Name
                </label>
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        type="text"
                        id="lastName"
                        required
                        {...register("lastName")}
                        placeholder="Last Name"
                        className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                      />
                      <TbUserEdit size={20} className="" />
                    </div>
                  </div>
                  <span className="text-red-500 text-xs">
                    {errors.lastName?.message}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="companyName"
                className="text-primary text-sm xl:text-base"
              >
                Enter Business Name
              </label>
              <div className="flex flex-col">
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                    <input
                      type="text"
                      id="companyName"
                      required
                      {...register("companyName")}
                      placeholder="Business Name"
                      className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
                <span className="text-red-500 text-xs">
                  {errors.companyName?.message}
                </span>
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
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        type="email"
                        {...register("email")}
                        required
                        maxLength={40}
                        placeholder="Email"
                        className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
                      />
                      <MdOutlineEmail size={20} className="" />
                    </div>
                  </div>
                  <span className="text-red-500 text-xs">
                    {errors.email?.message}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phoneNumber"
                  className="text-primary text-sm xl:text-base truncate"
                >
                  Enter Phone Number
                </label>
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        type="number"
                        id="phoneNumber"
                        required
                        {...register("phoneNumber")}
                        placeholder="Phone Number"
                        className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl spin-button-none"
                      />
                      <MdOutlinePhoneEnabled size={20} className="" />
                    </div>
                  </div>
                  <span className="text-red-500 text-xs">
                    {errors.phoneNumber?.message}
                  </span>
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
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        id="password"
                        {...register("password")}
                        required
                        type={togglePassword ? "text" : "password"}
                        placeholder="Password"
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
                  htmlFor="confirmPassword"
                  className="text-primary text-sm xl:text-base"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col">
                  <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                    <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
                      <input
                        type={toggleConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        required
                        {...register("confirmPassword")}
                        placeholder="Confirm Password"
                        className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl spin-button-none"
                      />
                      {toggleConfirmPassword ? (
                        <AiOutlineEye
                          onClick={() => setToggleConfirmPassword(false)}
                          size={20}
                          className="cursor-pointer"
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() => setToggleConfirmPassword(true)}
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
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary rounded-3xl text-xs md:text-sm xl:text-base py-2 xl:py-2.5 2xl:py-3 w-full text-white cursor-pointer mt-4 flex items-center justify-center"
          >
            {isSubmitting ? <Loader /> : <p>Continue</p>}
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
      {userOtp && (
        <Modal show={userOtp} onClose={() => setUserOtp(false)}>
          <OtpVerification cancel={() => setUserOtp(false)} />
        </Modal>
      )}
    </Authlayout>
  );
};

export default Register;
