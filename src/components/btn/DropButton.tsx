import { FaAngleDown } from "react-icons/fa";

type Props = {
  title: string;
  clickDrop?: boolean;
};

const DropButton = ({ title, clickDrop }: Props) => {
  return (
    <button className="flex items-center gap-3 bg-button rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm lg:text-base cursor-pointer">
      <p>{title}</p>
      <div className="bg-white">
        <FaAngleDown />
      </div>
    </button>
  );
};

export default DropButton;
