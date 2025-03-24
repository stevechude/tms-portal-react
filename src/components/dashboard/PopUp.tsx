import InfoCircle from "../../assets/InfoCircle";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
};

const PopUp = ({ onClose }: Props) => {
  return (
    <div className="bg-[#F696251A] rounded-3xl">
      <div className="flex items-center justify-between px-2 md:px-3 lg:px-5 py-2">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <InfoCircle />
          <div className="flex flex-col gap-0.5">
            <p className="text-[#15171C] font-medium lg:text-lg">
              Profile Update - Business Information
            </p>
            <p className="text-secondary font-light text-xs">
              POS requests require completed business information - update your
              profile to continue
            </p>
          </div>
        </div>
        <IoArrowForwardCircleOutline
          onClick={onClose}
          size={20}
          color="#FF2828"
          className="cursor-pointer hover:animate-bounce"
        />
      </div>
    </div>
  );
};

export default PopUp;
