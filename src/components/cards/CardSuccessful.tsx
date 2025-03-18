import Good from "../../assets/Good";

type Props = {
  close?: () => void;
  header: string;
  description: string;
};

const CardSuccessful = ({ close, header, description }: Props) => {
  return (
    <div className="bg-white p-5 md:p-8 rounded-3xl w-[80vw] md:w-[50vw] lg:w-[25rem] xl:w-[28rem] text-black">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <Good />
          <p className="text-primary font-semibold text-xl md:text-3xl text-center">
            {header}
          </p>
          <p className="text-secondary text-xs lg:text-sm xl:text-base text-center">
            {description}
          </p>
        </div>
        <button
          onClick={close}
          className="bg-primary text-white rounded-3xl px-4 md:px-5 lg:px-6 py-1.5 lg:py-2 w-fit cursor-pointer text-sm lg:text-base"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CardSuccessful;
