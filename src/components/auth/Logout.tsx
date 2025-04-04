import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";
import { set } from "date-fns";
import { LuLogOut } from "react-icons/lu";

const cookies = new Cookies();

type LogoutProps = {
  onCancel: () => void;
};

const Logout = ({ onCancel }: LogoutProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setLoading(true);
    toast.info("Logging you out!", {
      theme: "colored",
    });
    // Clear the token from cookies
    cookies.remove("app-tok", { path: "/" });
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="bg-white p-5 md:p-8 rounded-3xl w-[80vw] md:w-[50vw] lg:w-[30rem] xl:w-[32rem] text-black">
      <div className="flex flex-col gap-8">
        <div className="bg-[#FEF3F2] p-2 md:p-2.5 xl:p-3 w-fit rounded-full mx-auto">
          <div className="bg-[#FEE4E2] p-2 md:p-2.5 xl:p-3 rounded-full">
            <LuLogOut
              color="#DE3024"
              // size={32}
              className="w-5 h-5 md:w-8 md:h-8 xl:w-10 xl:h-10"
            />
          </div>
        </div>
        <p className="text-primary font-medium text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-center">
          Are you sure you want to logout?
        </p>

        <div className="flex item-center justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-primary text-white rounded-lg px-4 py-2 mr-2 text-sm xl:text-base cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white rounded-lg px-4 py-2 text-sm xl:text-base cursor-pointer"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
