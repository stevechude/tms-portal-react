import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import TextBtn from "../buttons/TextBtn";
import { useRef, useState } from "react";
import { Modal } from "../modal/Modal";
import CardSuccessful from "../cards/CardSuccessful";
import UploadIcon from "../../assets/UploadIcon";

const bizDescription = [
  "Hospitality",
  "Food and Beverage",
  "Retail",
  "Technology",
  "Healthcare",
];

const BusinessInfo = () => {
  const [profileUpdated, setProfileUpdated] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<string>("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectFile(file.name); // Store file name instead of FormData
    }
  };

  const handleClick = () => {
    uploadRef.current?.click(); // Trigger file input click
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setProfileUpdated(!profileUpdated);
  };

  return (
    <>
      <div className="lg:px-7 flex gap-7 flex-wrap lg:flex-nowrap justify-between overflow-y-auto h-full w-full">
        <div className="flex flex-col gap-1">
          <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
            Business Information
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
            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="first-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Business Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="text"
                      placeholder="Witty Technology Limited"
                      className="w-full h-full pl-4 py-2 lg:py-2.5 outline-0 rounded-l-3xl placeholder:text-[#98A2B3]"
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
                  Business Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-full pl-4 py-2 lg:py-2.5 outline-0 rounded-l-3xl spin-button-none placeholder:text-[#98A2B3]"
                    />
                    <MdOutlinePhoneEnabled size={20} className="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex flex-col gap-1 w-full lg:w-64">
                <label
                  htmlFor="business-name"
                  className="text-primary text-sm lg:text-base"
                >
                  Business Email<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-full pl-4 py-2 lg:py-2.5 outline-0 rounded-l-3xl"
                    />
                    <MdOutlineEmail size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full lg:w-64">
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
                    className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 lg:py-2.5 outline-0 placeholder:text-[#98A2B3]"
                  >
                    <option value="">Select Category</option>
                    {bizDescription?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="business-name"
                className="text-primary text-sm lg:text-base"
              >
                Business Address<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full h-full pl-4 py-2 lg:py-2.5 outline-0 rounded-l-3xl"
                  />
                  <TbUserEdit size={20} className="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex items-start text-sm lg:text-base text-primary">
                Upload Proof of Address(Utility Bill, Bank Statement, Tax
                Assessment) <span className="text-red-500">*</span>
              </p>
              <div className="bg-button rounded-2xl w-full">
                <div className="flex flex-col gap-1 items-center py-3">
                  <div
                    onClick={handleClick}
                    className="flex items-center gap-2 text-primary cursor-pointer"
                  >
                    <input
                      type="file"
                      name=""
                      id=""
                      ref={uploadRef}
                      onChange={handleUpload}
                      accept="image/*, application/pdf"
                      className="hidden"
                    />
                    <UploadIcon />
                    <p className="text-xs md:text-sm lg:text-base font-medium">
                      Click to upload
                    </p>
                  </div>
                  <span className="text-xs md:text-sm text-tertiary">
                    {selectFile}
                  </span>
                  <p className="text-xs lg:text-sm 2xl:text-base">
                    PNG, JPG, JPEG or PDF
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TextBtn title="Save Changes" className="self-end" />
        </form>
      </div>
      {profileUpdated && (
        <Modal show={profileUpdated} onClose={() => setProfileUpdated(false)}>
          <CardSuccessful
            close={() => setProfileUpdated(false)}
            header="Profile Updated"
            description="Excellent! Your profile has been successfully updated with the
            information you provided."
          />
        </Modal>
      )}
    </>
  );
};

export default BusinessInfo;
