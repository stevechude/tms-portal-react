import { TbUserEdit } from "react-icons/tb";
import TextBtn from "../buttons/TextBtn";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import UpdatedPrompt from "./UpdatedPrompt";

const userTitle = ["Mr", "Mrs", "Miss"];

const DirectorDetails = () => {
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
            Director’s Details
          </p>
          <p className="text-xs lg:text-sm text-secondary">
            Update profile information, including business details, <br />{" "}
            director’s details, contact persons, and account specifics.
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-10 px-2 lg:p-0"
        >
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="business-name"
                className="text-primary text-sm lg:text-base"
              >
                Business Description<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="description"
                  name="description"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 placeholder:text-[#98A2B3]"
                >
                  <option value="">Select Category</option>
                  {userTitle?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="text"
                      placeholder="Witty Technology Limited"
                      className="w-full h-full pl-4 py-2 md:py-2.5 outline-0 rounded-l-3xl placeholder:text-[#98A2B3]"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Last Name<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-full pl-4 py-2 md:py-2.5 outline-0 rounded-l-3xl spin-button-none placeholder:text-[#98A2B3]"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="last-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD]">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-full pl-4 py-2 md:py-2.5 outline-0 rounded-l-3xl spin-button-none placeholder:text-[#98A2B3]"
                    />
                    <MdOutlinePhoneEnabled size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Designation <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD]">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="text"
                      placeholder="Witty Technology Limited"
                      className="w-full h-full pl-4 py-2 md:py-2.5 outline-0 rounded-l-3xl placeholder:text-[#98A2B3]"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
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

export default DirectorDetails;
