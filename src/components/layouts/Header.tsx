import { FaAngleDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { CgCloseR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import LogoutIcon from "../../assets/LogoutIcon";
import QuestionIcon from "../../assets/QuestionIcon";
import { sideBarLinks } from "../../lib/links";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex bg-white w-full max-h-[80px] h-[70px] lg:h-[80px] shadow">
      <div className="w-full flex items-center justify-between px-2 lg:px-4">
        <button
          onClick={() => setOpenMenu(true)}
          className="lg:hidden flex items-center"
        >
          <TfiMenuAlt size={23} color="#002561" />
        </button>

        <AnimatePresence>
          {openMenu && (
            <motion.section
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 2 }}
              style={{ backgroundColor: "#002561" }}
              className="fixed left-0 w-60 h-[100vh] top-0 flex flex-col justify-between z-10"
            >
              <div className="flex flex-col gap-3">
                <CgCloseR
                  onClick={() => setOpenMenu(false)}
                  size={28}
                  color="#fff"
                  className="flex items-center self-end mt-1 mr-3"
                />

                <div className="flex flex-col gap-4 px-4 text-xs">
                  {sideBarLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu(false);
                        setTimeout(() => {
                          navigate(link.path);
                        }, 500);
                      }}
                      className={`${
                        location.pathname.includes(link.path)
                          ? "bg-white rounded-md"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-1.5 py-2 px-2.5">
                        {
                          <link.icon
                            fill={
                              location.pathname.includes(link.path)
                                ? "#002561"
                                : "white"
                            }
                          />
                        }
                        <p
                          className={`${
                            location.pathname.includes(link.path)
                              ? "#text-primary"
                              : "text-white"
                          }`}
                        >
                          {link.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-white text-xs mx-6 mb-6 bg-[#FFFFFF26] rounded-xl">
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
                  <p className="text-[#F5F7FA] font-light">
                    © 2025 Keystone Bank.
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="border border-[#EFEFEF] rounded-lg lg:w-52 hidden md:block">
          <p className="text-[#98A2B3] text-xs md:text-sm lg:text-base py-1.5 lg:py-2 px-2">
            Witty Technology Limited
          </p>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="bg-[#FAFAFA] rounded-full">
            <div className="p-2.5 md:px-3 px-2 relative">
              <IoIosNotificationsOutline size={20} />
              <div className="bg-[#F74A4A] absolute top-1.5 right-1 lg:right-2 rounded-full flex items-center justify-center text-xs text-white">
                <p className="px-1">6</p>
              </div>
            </div>
          </div>

          {/* user deets */}
          <div className="bg-[#FAFAFA] rounded-3xl flex items-center">
            <div className="flex items-center gap-3 lg:gap-5 px-2 md:px-3 py-1.5">
              <div>
                <img src="/dashboard/userImg.png" alt="user image" />
              </div>
              <FaAngleDown color="#718096" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
