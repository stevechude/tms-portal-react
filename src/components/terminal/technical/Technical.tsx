import { useState } from "react";
import { Modal } from "../../modal/Modal";
import RequestMaintenance from "./RequestMaintenance";
import LostDevice from "./LostDevice";

const Technical = () => {
  const [maintenance, setMaintenance] = useState(false);
  const [lostDevice, setLostDevice] = useState(false);

  return (
    <>
      <div className="lg:px-7 flex gap-7 flex-wrap justify-between overflow-y-auto h-full">
        <div className="flex flex-col gap-1">
          <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
            Technical Overview
          </p>
          <p className="text-xs lg:text-sm text-secondary">
            Section provides a summary of the terminal's version status, <br />{" "}
            including software update, terminal health, and battery health.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-[30rem]">
          {/* software information */}
          <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
            <div className="px-2 py-3 md:px-3 md:py-4 lg:px-5 lg:py-6 flex flex-col gap-3 text-primary">
              <p className="font-medium">Software Information</p>
              <div className="flex items-center justify-between">
                <p className="text-[#667085]">Terminal Version</p>
                <p className="text-[#2CC974]">Active</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#667085]">Update Status</p>
                <p>Up to date</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#667085]">Terminal Health</p>
                <p> Functional</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#667085]">Battery Health</p>
                <p>85%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#667085]">Warranty Expiry Date</p>
                <p className="text-[#2CC974]">2025-03-04%</p>
              </div>
            </div>
          </div>
          {/* request btns */}
          <div className="bg-button rounded-2xl w-full text-xs md:text-sm lg:text-base">
            <div className="px-2 py-3 md:px-3 md:py-4 lg:px-8 lg:py-6 flex flex-col gap-4 lg:gap-6">
              <button
                onClick={() => setMaintenance(true)}
                className="w-full bg-primary text-xs md:text-sm text-white py-4 rounded-3xl cursor-pointer"
              >
                Request Maintenance
              </button>
              <button
                onClick={() => setLostDevice(true)}
                className="w-full bg-white text-xs md:text-sm text-red-500 py-4 rounded-3xl cursor-pointer hover:bg-[#000]/10"
              >
                Report Lost Device
              </button>
            </div>
          </div>
        </div>
      </div>
      {maintenance && (
        <Modal show={maintenance} onClose={() => setMaintenance(false)}>
          <RequestMaintenance cancel={() => setMaintenance(false)} />
        </Modal>
      )}
      {lostDevice && (
        <Modal show={lostDevice} onClose={() => setLostDevice(false)}>
          <LostDevice cancel={() => setLostDevice(false)} />
        </Modal>
      )}
    </>
  );
};

export default Technical;
