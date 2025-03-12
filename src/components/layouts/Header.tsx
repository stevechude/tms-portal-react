import { FaAngleDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex bg-white w-full max-h-[80px] h-[70px] lg:h-[80px] shadow">
      <div className="w-full flex items-center justify-between px-2 lg:px-4">
        <div className="border border-[#EFEFEF] rounded-lg lg:w-52">
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
