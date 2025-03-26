import { GoTriangleUp } from "react-icons/go";

const PosTerminal = () => {
  return (
    <div className="rounded-xl bg-primary relative 2xl:flex-1/2 max-h-[352px] h-fit max-w-[35re] lg:w-full xl:w-[100%] overflow-y-auto">
      <img
        src="/dashboard/faded-pos.png"
        alt=""
        className="md:w-80 lg:w-full xl:w-full max-h-80 xl:h-80"
      />
      <div className="w-full flex flex-col gap-5 xl:gap-8 p-2 xl:p-4 absolute top-2">
        <div className="flex items-center justify-center">
          <p className="text-white font-medium text-base md:text-lg xl:text-2xl">
            Total POS Terminal
          </p>
        </div>
        <div className="flex flex-col items-center mx-auto gap-2 w-full">
          <p className="text-white font-medium text-base md:text-lg lg:text-3xl xl:text-3xl">
            30
          </p>
          <p className="text-xs lg:text-sm text-white">
            See full terminal listing -{" "}
            <span className="text-[#009FE3]">click here</span>
          </p>
          <hr className="bg-white w-full h-0.5 mt-1.5" />
        </div>

        <div className="flex items-center justify-between 2xl:gap-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-xs md:text-sm lg:text-base text-white">
              Active Terminals
            </p>
            <div className="flex items-center gap-2 w-full">
              <p className="text-white text-lg md:text-2xl 2xl:text-3xl">21</p>
              <div className="bg-white rounded-3xl">
                <div className="flex items-center lg:py-0.5 px-1 lg:px-1.5 text-[#2CC974]">
                  <GoTriangleUp />
                  <p>70%</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-0.5 h-24 bg-white" />

          <div className="flex flex-col gap-3 items-center">
            <p className="text-xs md:text-sm lg:text-base text-white">
              Inactive Terminals
            </p>
            <div className="flex items-center gap-2 w-full">
              <p className="text-white text-lg md:text-2xl 2xl:text-3xl">09</p>
              <div className="bg-white rounded-3xl">
                <div className="flex items-center lg:py-0.5 px-1 lg:px-1.5 text-[#FF2828]">
                  <GoTriangleUp />
                  <p>30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosTerminal;
