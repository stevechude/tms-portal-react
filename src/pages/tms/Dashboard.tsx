import DashLayout from "../../components/layouts/DashLayout";
import PopUp from "../../components/dashboard/PopUp";
import PosTerminal from "../../components/dashboard/PosTerminal";
import { mockTrxData } from "../../lib/mockTrxData";
import TransactionCard from "../../components/dashboard/TransactionCard";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import { useState } from "react";

const Dashboard = () => {
  const [callPopUp, setCallPopUp] = useState(true);

  return (
    <DashLayout>
      <div className="flex flex-col gap-4 w-full">
        {/* greeting */}
        <div className="bg-white rounded-xl">
          <div className="flex flex-col gap-1 px-2 lg:px-4 py-2">
            <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
              Good Afternoon, John Doe 👋
            </p>
            <p className="text-xs lg:text-sm text-secondary font-light">
              Time to check in on today's portfolio activity
            </p>
          </div>
        </div>
        {/* pop up info */}
        {callPopUp && <PopUp onClose={() => setCallPopUp(false)} />}

        {/* cards */}
        <div className="flex items-center 2xl:justify-between gap-4 lg:gap-2 2xl:gap-4 flex-wrap xl:grid xl:grid-cols-2 w-full">
          <PosTerminal />
          <div className="flex items-center lg:justify-end gap-5 flex-wrap xl:grid xl:grid-cols-2 w-full h-full">
            {mockTrxData?.map((data) => (
              <TransactionCard
                key={data.id}
                title={data.title}
                digit={data.digit}
                percentage={data.percentage}
                info={data.info}
                extra={data.extra}
              />
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </div>
    </DashLayout>
  );
};

export default Dashboard;
