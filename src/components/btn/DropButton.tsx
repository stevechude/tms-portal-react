import { FaAngleDown } from "react-icons/fa";

type Props = {
  title: string;
  clickDrop?: boolean;
};

const DropButton = ({ title, clickDrop }: Props) => {
  return (
    // <button className="flex items-center lg:gap-1 bg-button rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm lg:text-base cursor-pointer">
    //   <select
    //     id="customSelect"
    //     name="customSelect"
    //     className="appearance-none flex items-center gap-1 md:gap-2 w-full h-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base py-0.5 outline-0 text-[#131B33] cursor-pointer"
    //   >
    //     <option value="">{title}</option>
    //   </select>
    //   <div className="bg-white rounded-full">
    //     <FaAngleDown />
    //   </div>
    // </button>

    <div className="relative w-fit bg-button rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm lg:text-base">
      <select
        id="customSelect"
        name="customSelect"
        className="appearance-none w-full outline-0 text-[#131B33] pr-6 cursor-pointer"
      >
        <option value="">{title}</option>
      </select>

      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none bg-white rounded-full h-fit my-auto">
        <FaAngleDown />
      </div>
    </div>
  );
};

export default DropButton;
