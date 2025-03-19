import Loader from "../../assets/Loader";

type TextBtnProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const TextBtn = ({ title, className, isLoading }: TextBtnProps) => {
  return (
    <button
      className={`flex items-center gap-3 bg-primary rounded-3xl px-3 lg:px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer text-white w-fit font-light ${className}`}
    >
      {isLoading ? <Loader /> : <p>{title}</p>}
    </button>
  );
};

export default TextBtn;
