import DashLayout from "../../components/layouts/DashLayout";

const RequestDetails = () => {
  return (
    <DashLayout>
      <div className="bg-white rounded-2xl h-full overflow-y-auto">
        <div className="px-2 py-3 lg:px-8 lg:py-8 flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
                Request Details
              </p>
              <p className="text-xs lg:text-sm text-secondary">
                The request details include: Business information,
                <br /> director details, contact persons, and account specifics.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 lg:gap-2">
              <p className="text-[#F69625] bg-[#FDF5ED] rounded-3xl px-4 py-1 capitalize text-xs md:text-sm lg:text-base">
                Pending
              </p>
              {/* deets */}
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default RequestDetails;
