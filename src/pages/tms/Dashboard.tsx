import { GoTriangleUp } from "react-icons/go";
import InfoCircle from "../../assets/InfoCircle";
import DashLayout from "../../components/layouts/DashLayout";

const Dashboard = () => {
  return (
    <DashLayout>
      <div className="flex flex-col gap-4 w-full">
        {/* greeting */}
        <div className="bg-white rounded-xl">
          <div className="flex flex-col gap-1 px-2 lg:px-4 py-2">
            <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
              Good Afternoon, John Doe 👋
            </p>
            <p className="text-xs lg:text-sm text-secondary font-light">
              Time to check in on today's portfolio activity
            </p>
          </div>
        </div>
        {/* stats */}
        <div className="bg-[#F696251A] rounded-3xl">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 px-2 md:px-3 lg:px-5 py-2">
            <InfoCircle />
            <div className="flex flex-col gap-0.5">
              <p className="text-[#15171C] font-semibold lg:text-lg">
                Profile Update - Business Information
              </p>
              <p className="text-secondary font-light text-xs">
                POS requests require completed business information - update
                your profile to continue
              </p>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="rounded-xl bg-primary relative">
            <img
              src="/dashboard/faded-pos.png"
              alt=""
              className="md:w-80 lg:w-full"
            />
            <div className="w-full flex flex-col gap-5 lg:gap-12 p-2 lg:p-4 absolute top-2">
              <div className=" flex items-center justify-between">
                <p className="text-white font-semibold text-base md:text-lg lg:text-xl">
                  Total POS Terminal
                </p>
              </div>
              <div className="flex flex-col items-center mx-auto gap-2 w-full">
                <p className="text-white font-semibold text-base md:text-lg lg:text-5xl">
                  30
                </p>
                <p className="text-xs lg:text-sm text-white">
                  See full terminal listing -{" "}
                  <span className="text-[#009FE3]">click here</span>
                </p>
                <hr className="bg-white w-full h-0.5 mt-1.5" />
              </div>

              <div className="flex items-center justify-between lg:gap-10">
                <div className="flex flex-col gap-3 items-center">
                  <p className="text-xs md:text-sm lg:text-base text-white">
                    Active Terminals
                  </p>
                  <div className="flex items-center gap-2 w-full">
                    <p className="text-white text-lg md:text-2xl lg:text-3xl">
                      21
                    </p>
                    <div className="bg-white rounded-3xl">
                      <div className="flex items-center gap-1.5 lg:py-0.5 px-1 lg:px-1.5 text-[#2CC974]">
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
                    <p className="text-white text-lg md:text-2xl lg:text-3xl">
                      09
                    </p>
                    <div className="bg-white rounded-3xl">
                      <div className="flex items-center gap-1.5 lg:py-0.5 px-1 lg:px-1.5 text-[#FF2828]">
                        <GoTriangleUp />
                        <p>70%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Dashboard;
