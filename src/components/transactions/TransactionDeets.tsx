import { FaCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RxCopy } from "react-icons/rx";
import SavePic from "../../assets/SavePic";
import SavePDF from "../../assets/SavePDF";

type Props = {
  onClose: () => void;
};

const TransactionDeets = ({ onClose }: Props) => {
  return (
    <div className="bg-white rounded-3xl w-[90vw] md:w-[50vw] lg:w-[22rem] xl:w-[24rem]">
      <div className="bg-button rounded-t-3xl">
        <div className="p-2 md:px-3 lg:p-4 flex items-center justify-between">
          <p className="text-[#131B33] text-sm md:text-base lg:text-lg font-medium">
            Transaction Details
          </p>
          <button
            onClick={onClose}
            className="bg-[#F0F2F5] p-1 shadow rounded-full cursor-pointer"
          >
            <IoMdClose />
          </button>
        </div>
      </div>
      <div className="p-2 md:px-3 lg:p-4 flex flex-col items-center gap-4 text-xs md:text-sm lg:text-base">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-lg md:text-xl lg:text-2xl flex font-semibold">
            <span className="text-xs ">₦</span>
            5,000
          </p>
          <p className="text-xs md:text-sm">Nov 01, 2023 ・5:20pm</p>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl px-2 lg:px-3 w-full">
          <div className="py-3 px-2 flex flex-col gap-2 lg:gap-3 text-xs lg:text-sm">
            <div className="flex items-center justify-between">
              <p className="font-light">Transaction Status</p>
              <div className="flex items-center gap-2 text-[#2CC974]">
                <FaCircleCheck />
                <p>Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Payment Method</p>
              <p className="font-medium">Bank Transfer</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Fee</p>
              <p className="font-medium">NGN 5.00</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Reference</p>
              <div className="flex items-center gap-2 font-medium">
                <p>clp188ptj0001c90cyuzl2</p>
                <RxCopy className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Terminal ID</p>
              <p className="font-medium">10049854773</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Transaction ID</p>
              <div className="flex items-center gap-2 font-medium">
                <p>1012080001902</p>
                <RxCopy className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-light">Transaction Location</p>
              <p className="font-medium">Lagos Mainland</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl px-2 lg:px-3 w-full text-[#131B33]">
          <div className="px-2 py-3 flex flex-col gap-4 text-xs lg:text-sm">
            <div className="flex items-center justify-between">
              <p className="font-light">Save as Picture</p>
              <SavePic />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-light">Save as PDF</p>
              <SavePDF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDeets;
