import React from "react";
import KeystoneIcon from "../../assets/KeystoneIcon";
import Handle from "../../assets/Handle";
import { sideBarLinks } from "../../lib/links";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "../../assets/LogoutIcon";
import QuestionIcon from "../../assets/QuestionIcon";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="bg-primary hidden lg:flex flex-col justify-between max-w-[300px] w-[280px] h-screen">
      <div className="flex flex-col gap-6">
        <div className="h-[75px] w-full border-b border-b-white flex items-center">
          <div className="flex items-center justify-between w-full px-3">
            <KeystoneIcon className="w-[90px]" />
            <Handle />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-6">
          {sideBarLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              className={`${
                location.pathname.includes(link.path)
                  ? "bg-white rounded-md"
                  : ""
              }`}
            >
              <div className="flex items-center gap-1.5 py-2 px-2.5">
                {
                  <link.icon
                    fill={location.pathname === link.path ? "#002561" : "white"}
                  />
                }
                <p
                  className={`${
                    location.pathname === link.path
                      ? "#text-primary"
                      : "text-white"
                  }`}
                >
                  {link.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* bottom */}
      <div className="text-white text-sm mx-6 mb-6 bg-[#FFFFFF26] rounded-xl">
        <div className="flex flex-col items-center gap-4 py-4 px-4">
          <button className="flex items-center gap-2 cursor-pointer hover:bg-white/20 rounded-2xl px-2 py-1.5">
            <p>Logout</p>
            <LogoutIcon />
          </button>

          <div className="rounded-3xl bg-primary flex">
            <button className="flex items-center gap-3 px-4 py-1.5 cursor-pointer">
              <QuestionIcon />
              <p className="font-extralight">Need Help?</p>
            </button>
          </div>
          <p className="text-[#F5F7FA] text-xs font-light">
            © 2025 Keystone Bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
