import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  cancel: () => void;
};

const OtpVerification = ({ cancel }: Props) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleTwoFaCode = async (element: any, index: number) => {
    if (isNaN(element.value)) return false;

    // setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = element.value;
      return newOtp;
    });

    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handlePaste = (e: any) => {
    const pasteData = e.clipboardData.getData("text");
    const pastedOtp = pasteData.split("").slice(0, 6); // Limit to 6 characters
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      for (let i = 0; i < pastedOtp.length; i++) {
        newOtp[i] = pastedOtp[i];
      }
      return newOtp;
    });
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = ""; // Clear the previous input
          return newOtp;
        });
      }
    }
  };

  const handleVerify = (e: any) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="bg-white p-5 md:p-8 rounded-3xl w-[80vw] md:w-[50vw] lg:w-[30rem] xl:w-[32rem] text-black">
      <div className="flex flex-col gap-8">
        <p className="text-primary font-semibold text-xl md:text-3xl text-center">
          OTP Verification
        </p>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-secondary text-xs lg:text-sm xl:text-base text-center">
              We have sent 6 digits OTP to{" "}
              <span className="text-primary">ola*****@gmail.com</span> Kindly
              enter the code below.
            </p>

            <div className="flex flex-col mx-auto gap-2">
              <div className="flex gap-1.5 md:gap-2 relative">
                {otp.map((pin, index) => (
                  <input
                    key={index}
                    type="text"
                    onChange={(e) => handleTwoFaCode(e.target, index)}
                    onPaste={handlePaste}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength={1}
                    value={pin}
                    className="border-[#F0F2F5] bg-[#F5F7FA] shadow text-center w-7 md:w-10 h-7 md:h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-md outline-[#C4C7C7]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-end text-xs lg:text-sm">
                <p className="text-secondary text-xs md:text-sm lg:text-base cursor-pointer">
                  <span className="text-primary text-base lg:text-lg">
                    Resend OTP
                  </span>{" "}
                  in <span className="text-red-500">59</span> secs
                </p>
              </div>
            </div>
          </div>

          {/* btns */}
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={cancel}
              className="text-primary bg-white rounded-3xl shadow px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleVerify}
              className="bg-primary text-white rounded-3xl px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
