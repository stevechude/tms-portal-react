import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";
import { set } from "date-fns";

const cookies = new Cookies();

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setLoading(true);
    toast.info("Logged out successfully!", {
      theme: "colored",
    });
    // Clear the token from cookies
    cookies.remove("app-tok", { path: "/" });
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="bg-white p-5 md:p-8 rounded-3xl w-[80vw] md:w-[50vw] lg:w-[30rem] xl:w-[32rem] text-black">
      <div className="flex flex-col gap-8">
        <p className="text-primary font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-center">
          Are you sure you want to logout?
        </p>

        <div className="flex item-center justify-center gap-4">
          <button className="bg-primary text-white rounded-lg px-4 py-2 mr-2 text-sm xl:text-base">
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white rounded-lg px-4 py-2 text-sm xl:text-base"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
