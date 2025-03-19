import DashLayout from "../../components/layouts/DashLayout";

const RequestDetails = () => {
  return (
    <DashLayout>
      <div className="bg-white rounded-2xl h-full overflow-y-auto">
        <div className="px-2 py-3 lg:px-8 lg:py-8 flex flex-col gap-7 lg:gap-0">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
                Request Details
              </p>
              <p className="text-xs lg:text-sm text-secondary">
                The request details include: Business information,
                <br /> director details, contact persons, and account specifics.
              </p>
            </div>

            <p className="text-[#F69625] bg-[#FDF5ED] rounded-3xl px-4 py-1 capitalize text-xs md:text-sm lg:text-base w-fit">
              Pending
            </p>
          </div>
          {/* deets */}
          <div className="flex flex-col md:self-start lg:self-end gap-4 md:gap-6 lg:gap-8 text-primary">
            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Request ID
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    REQ-1023456789
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Request Date & Time
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    2024-09-25 09:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Number of Terminals
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    02
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Preferred Settlement Type
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Instant Settlement
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Payment Terminal Service Provider
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Paystack
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Preferred Network Provider
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    MTN (NG)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Assigned Relationship Manager
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Emeka Bankole
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Assigned Terminal IDs
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Not yet Assigned
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  POS Deployment Status
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Not Configured
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-2 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Shipping Delivery Status
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#F5F7FA] w-full">
                  <p className="w-full py-2 px-3 lg:px-4 text-xs md:text-sm lg:text-base">
                    Not Scheduled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default RequestDetails;
