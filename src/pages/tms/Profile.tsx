import { useState } from "react";
import DashLayout from "../../components/layouts/DashLayout";
import AccountDetails from "../../components/profile/AccountDetails";
import PryContactDetails from "../../components/profile/PryContactDetails";
import DirectorDetails from "../../components/profile/DirectorDetails";
import BusinessInfo from "../../components/profile/BusinessInfo";

const requestTabs = [
  "Business Information",
  "Director’s Details",
  "Primary Contact Details",
  "Account Details",
];

const Profile = () => {
  const [selectTab, setSelectTab] = useState("Business Information");

  const handleSelectTab = (tab: string) => {
    setSelectTab(tab);
  };

  return (
    <DashLayout>
      <div className="bg-white rounded-2xl h-full overflow-y-auto">
        <div className="px-2 py-3 lg:px-5 lg:py-5 flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
                Profile Details
              </p>
              <p className="text-xs lg:text-sm text-secondary">
                Time to check in on today's portfolio activity
              </p>
            </div>
            <p className="text-green-500 bg-[#E6F9F0] rounded-3xl px-4 py-1 capitalize text-xs md:text-sm lg:text-base">
              Active
            </p>
          </div>

          {/* tabs */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
            <div className="w-full flex items-center gap-10 border-b border-[#F5F7FA] overflow-x-auto">
              {requestTabs?.map((tab) => (
                <button
                  onClick={() => handleSelectTab(tab)}
                  key={tab}
                  className={`text-[#98A2B3] py-1 lg:py-2 cursor-pointer ${
                    selectTab === tab ? "text-primary font-medium" : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {selectTab === "Business Information" && <BusinessInfo />}
            {selectTab === "Director’s Details" && <DirectorDetails />}
            {selectTab === "Primary Contact Details" && <PryContactDetails />}
            {selectTab === "Account Details" && <AccountDetails />}
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Profile;
