import Authlayout from "../layouts/Authlayout";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Authlayout>
      <div className="flex flex-col gap-2">
        <p className="text-primary font-semibold text-xl md:text-3xl">
          Terminal Management System
        </p>
        <p className="text-secondary font-medium text-xs md:text-sm lg:text-base text-center lg:text-start">
          Welcome back, Kindly enter your credentials to <br /> login to the
          portal
        </p>
      </div>

      <form className="flex flex-col gap-10 lg:gap-5 xl:gap-10 w-full px-2 lg:p-0">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-primary text-sm xl:text-base">
            Enter Email
          </label>
          <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
            <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm xl:text-base">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
              />
              <TbUserEdit size={20} className="" />
            </div>
          </div>
        </div>
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
                type="password"
                placeholder="Password"
                className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl"
              />
              <AiOutlineEyeInvisible size={20} className="cursor-pointer" />
              {/* <AiOutlineEye /> */}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm xl:text-base">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4 rounded-2xl cursor-pointer"
              />
              <p>Remember me</p>
            </div>
            <Link
              to={"/forgot-password"}
              className="text-tertiary text-xs xl:text-sm text-right"
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="bg-primary rounded-3xl py-2 xl:py-2.5 2xl:py-3 w-full text-white cursor-pointer text-xs md:text-sm xl:text-base xl:mt-10"
        >
          Login
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
    </Authlayout>
  );
};

export default Login;
