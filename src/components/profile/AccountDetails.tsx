import { TbUserEdit } from "react-icons/tb";
import TextBtn from "../buttons/TextBtn";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import UpdatedPrompt from "./UpdatedPrompt";

const accountType = ["savings", "Corporate"];
const branch = ["Ajah", "Lekki", "Yaba", "Gbagada"];

const AccountDetails = () => {
  const [profileUpdated, setProfileUpdated] = useState(false);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setProfileUpdated(!profileUpdated);
  };

  return (
    <>
      <div className="lg:px-7 flex gap-7 flex-wrap lg:flex-nowrap justify-between overflow-y-auto h-full w-full">
        <div className="flex flex-col gap-1">
          <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
            Account Details
          </p>
          <p className="text-xs lg:text-sm text-secondary">
            Update profile information, including business details, <br />{" "}
            director’s details, contact persons, and account specifics.
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-10 px-2 lg:p-0 w-full md:w-[30rem]"
        >
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="business-name"
                className="text-primary text-sm lg:text-base"
              >
                Account Number<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                  <input
                    type="number"
                    placeholder="Account Number"
                    className="w-full h-full pl-4 py-2 md:py-3 outline-0 rounded-l-3xl spin-button-none"
                  />
                  <TbUserEdit size={20} className="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="account-type"
                className="text-primary text-sm lg:text-base"
              >
                Type of Account<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="account-type"
                  name="account-type"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 placeholder:text-[#98A2B3]"
                >
                  <option value="">Account Type</option>
                  {accountType?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="branch"
                className="text-primary text-sm lg:text-base"
              >
                Branch<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="branch"
                  name="branch"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 placeholder:text-[#98A2B3]"
                >
                  <option value="">Branch</option>
                  {branch?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <TextBtn title="Save Changes" className="self-end" />
        </form>
      </div>
      {profileUpdated && (
        <Modal show={profileUpdated} onClose={() => setProfileUpdated(false)}>
          <UpdatedPrompt close={() => setProfileUpdated(false)} />
        </Modal>
      )}
    </>
  );
};

export default AccountDetails;
