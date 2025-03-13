import BtnArrow from "../../assets/BtnArrow";
import RecentIcon from "../../assets/RecentIcon";
import { recentTableData } from "../../lib/recentTrxTable";
import Table from "../table/Table";

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-t-2xl overflow-y-auto">
      <div className="px-2 py-3 md:p-4 lg:px-5 lg:py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 lg:gap-2">
            <RecentIcon />
            <p className="lg:text-lg font-medium">Recent Transactions</p>
          </div>
          <BtnArrow className="cursor-pointer self-end" />
        </div>
        {/* Table */}
        <div>
          <Table
            headers={[
              { key: "amount", label: "Amount" },
              { key: "trxLocation", label: "Transaction Location" },
              { key: "trxId", label: "Transaction ID" },
              { key: "dateTime", label: "Date & Time" },
              { key: "status", label: "Status" },
            ]}
            data={recentTableData}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
