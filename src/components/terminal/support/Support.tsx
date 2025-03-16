const Support = () => {
  return (
    <div className="lg:px-7 flex gap-7 flex-wrap justify-between overflow-y-auto h-full">
      <div className="flex flex-col gap-1">
        <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
          Terminal Overview
        </p>
        <p className="text-xs lg:text-sm text-secondary">
          See essential information about your terminal,
          <br /> including recent activity, connectivity, and health status.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[30rem]">
        <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
          <div className="px-2 py-3 md:px-3 md:py-4 lg:px-5 lg:py-6 flex flex-col gap-3 text-primary">
            <p className="font-medium">Relationship Manager</p>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Name</p>
              <p>John Doe</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Phone Number</p>
              <p>08123456789</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Email Address</p>
              <p>JohnDoe1650@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
          <div className="px-2 py-3 md:px-3 md:py-4 lg:px-5 lg:py-6 flex flex-col gap-3 text-primary">
            <p className="font-medium">Contact Support</p>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Twitter, Instagram</p>
              <p>@keystonebankng</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Phone Number</p>
              <p>+234 700 2000 3000, 07046004000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#667085]">Email Address</p>
              <p>Contactcentre@keystonebankng.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
