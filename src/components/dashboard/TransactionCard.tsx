import { GoTriangleUp } from "react-icons/go";
import CardPin from "../../assets/CardPin";

type Props = {
  title: string;
  digit: string;
  extra?: string;
  percentage: string;
  info: string;
};

const TransactionCard = ({ title, digit, extra, percentage, info }: Props) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl w-80 lg:w-72 xl:w-full 2xl:w-full xl:h-[150px]">
      <div className="p-2 md:p-3 2xl:p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>{title}</p>
          <div className="bg-[#F5F7FA] rounded-full p-1.5">
            <CardPin />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg 2xl:text-2xl">
            {digit}{" "}
            {extra && (
              <span className="text-[#2CC974] text-xs lg:text-sm">
                ({extra})
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-[#F5F7FA] flex items-center p-1 text-[#2CC974]">
              <GoTriangleUp />
              <p className="text-xs">{percentage}</p>
            </div>
            <p className="text-xs lg:text-sm text-secondary">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
