import BasicInfo from "./BasicInfo";
import StatusOverview from "./StatusOverview";

const Overview = () => {
  return (
    <div className="lg:px-7 flex gap-7 flex-wrap justify-between overflow-y-auto h-full">
      <div className="flex flex-col gap-1">
        <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
          Terminal Overview
        </p>
        <p className="text-xs lg:text-sm text-secondary">
          See essential information about your terminal,
          <br /> including recent activity, connectivity, and health status.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[30rem]">
        <BasicInfo />
        <StatusOverview />
      </div>
    </div>
  );
};

export default Overview;
