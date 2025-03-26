const BasicInfo = () => {
  return (
    <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
      <div className="px-2 py-3 md:px-3 md:py-4 lg:px-5 lg:py-6 flex flex-col gap-3 text-primary">
        <p className="font-medium">Basic Information</p>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Terminal ID</p>
          <p>1025843071</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Activation Date</p>
          <p>2025-03-04</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Last Transaction</p>
          <p>2025-03-04 14:32:50</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">PTSP</p>
          <p>Paystack</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Location</p>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">Branch</p>
          <p>Head-Office Branch</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
