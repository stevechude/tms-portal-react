const StatusOverview = () => {
  return (
    <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
      <div className="px-2 py-3 md:px-3 md:py-4 lg:px-5 lg:py-6 flex flex-col gap-3 text-primary">
        <p className="font-medium">Status Overview</p>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Terminal Status</p>
          <p className="text-[#2CC974]">Active</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Signal Strength</p>
          <p>Strong</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">SIM Status</p>
          <p>Active(MTN NG)</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Data Usage</p>
          <p>10GB</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Battery Health</p>
          <p className="text-[#2CC974]">85%</p>
        </div>
      </div>
    </div>
  );
};

export default StatusOverview;
