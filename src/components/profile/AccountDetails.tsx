import { TbUserEdit } from "react-icons/tb";
import TextBtn from "../buttons/TextBtn";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import CardSuccessful from "../cards/CardSuccessful";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { accountDetailsType } from "../../types/profile";
import { createAccountDetails } from "../../services/profile-services";

// const accountType = ["savings", "Corporate"];

const accountDetailsSchema = yup
  .object({
    accountNumber: yup
      .string()
      .required("Account Number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Account number is not valid"
      ),
    branchCode: yup.string().required("Title is required"),
  })
  .required();

const branch = ["Ajah", "Lekki", "Yaba", "Gbagada"];

const AccountDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(accountDetailsSchema),
    mode: "onChange",
  });
  const [profileUpdated, setProfileUpdated] = useState(false);

  const handleUpdate = async (body: accountDetailsType) => {
    try {
      const result = await createAccountDetails(body);
      console.log("create account result", result);
      if (result?.code == 200) {
        setProfileUpdated(true);
      }
    } catch (error: any) {
      console.log("create account error==", error);
      toast.error(error?.response?.data?.message || "An error occurred", {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="lg:px-7 flex gap-7 flex-wrap lg:flex-nowrap justify-between overflow-y-auto h-full w-full">
        <div className="flex flex-col gap-1">
          <p className="text-base text-primary md:text-lg lg:text-xl font-medium">
            Account Details
          </p>
          <p className="text-xs lg:text-sm text-secondary">
            Update profile information, including business details, <br />{" "}
            director’s details, contact persons, and account specifics.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="flex flex-col gap-10 px-2 lg:p-0 w-full md:w-[30rem]"
        >
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="accountNumber"
                className="text-primary text-sm lg:text-base"
              >
                Account Number<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col">
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <div className="flex items-center gap-1 md:gap-2 w-full pr-3 lg:pr-4 text-xs md:text-sm lg:text-base">
                    <input
                      type="number"
                      {...register("accountNumber")}
                      placeholder="Account Number"
                      className="w-full h-full pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 rounded-l-3xl spin-button-none"
                    />
                    <TbUserEdit size={20} className="" />
                  </div>
                </div>
                <span className="text-red-500 text-xs">
                  {errors.accountNumber?.message}
                </span>
              </div>
            </div>

            {/* <div className="flex flex-col gap-1">
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
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 placeholder:text-[#98A2B3]"
                >
                  <option value="">Account Type</option>
                  {accountType?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}

            <div className="flex flex-col gap-1">
              <label
                htmlFor="branchCode"
                className="text-primary text-sm lg:text-base"
              >
                Branch<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col">
                <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                  <select
                    id="branchCode"
                    {...register("branchCode")}
                    className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 xl:py-2.5 2xl:py-3 outline-0 placeholder:text-[#98A2B3]"
                  >
                    <option value="">Branch</option>
                    {branch?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-red-500 text-xs">
                  {errors.branchCode?.message}
                </span>
              </div>
            </div>
          </div>
          <TextBtn
            isLoading={isSubmitting}
            title="Save Changes"
            className="self-end"
          />
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

export default AccountDetails;
