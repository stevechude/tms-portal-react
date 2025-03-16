import { CiSearch } from "react-icons/ci";
import DropButton from "../../components/btn/DropButton";
import DashLayout from "../../components/layouts/DashLayout";
import DocumentIcon from "../../assets/DocumentIcon";
import Table from "../../components/table/Table";
import { terminalData } from "../../lib/terminalData";

const Terminals = () => {
  return (
    <DashLayout>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
        <div className="bg-white rounded-3xl">
          <div className="flex items-center justify-between p-2 lg:px-5">
            <div className="flex flex-col gap-1">
              <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
                Terminals
              </p>
              <p className="text-xs lg:text-sm text-secondary">
                Time to check in on today's portfolio activity
              </p>
            </div>
            <DropButton title="Today" />
          </div>
        </div>

        {/* trx table section */}
        <div className="bg-white w-full rounded-t-3xl overflow-y-auto">
          <div className="px-2 py-4 lg:p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex items-center lg:gap-2 bg-button rounded-3xl lg:w-72">
                <div className="px-2 py-2 lg:py-3 flex items-center gap-1 w-full">
                  <CiSearch className="#98A2B3 ml-2" />
                  <input
                    type="text"
                    placeholder="Search history here..."
                    className="pl-2 h-full w-full outline-0 text-sm lg:text-base"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <button className="flex items-center gap-3 bg-primary rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm lg:text-base cursor-pointer text-white">
                  <DocumentIcon />
                  <p>Export</p>
                </button>
                <DropButton title="Filter" />
              </div>
            </div>
            {/* table */}
            <div>
              <Table
                headers={[
                  { key: "terminalId", label: "Terminal ID" },
                  { key: "terminalLocation", label: "Terminal Location" },

                  { key: "dateTime", label: "Activation Date & Time" },
                  { key: "batteryHealth", label: "Battery Health" },
                  { key: "terminalStatus", label: "Terminal Status" },
                ]}
                data={terminalData}
                click={true}
              />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Terminals;
