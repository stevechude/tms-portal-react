import { CiSearch } from "react-icons/ci";
import DocumentIcon from "../../../assets/DocumentIcon";
import DropButton from "../../btn/DropButton";
import Table from "../../table/Table";
import { transactionTableData } from "../../../lib/tranxTableData";

const TransacsTab = () => {
  return (
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
            { key: "amount", label: "Amount" },
            { key: "transactionId", label: "Transaction ID" },
            { key: "dateTime", label: "Date & Time" },
            { key: "status", label: "Status" },
          ]}
          data={transactionTableData}
          click={true}
        />
      </div>
    </div>
  );
};

export default TransacsTab;
