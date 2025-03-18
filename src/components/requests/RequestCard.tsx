import TextBtn from "../buttons/TextBtn";

type Props = {
  onConfirm: () => void;
  cancel: () => void;
};

const RequestCard = ({ onConfirm, cancel }: Props) => {
  const handleRequest = (e: any) => {
    e.preventDefault();
    onConfirm();
    console.log("Request sent");
  };

  return (
    <div className="bg-white rounded-3xl w-[90vw] md:w-[50vw] lg:w-[22rem] xl:w-[24rem]">
      <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-8 p-2 md:p-4 lg:p-5">
        <h1 className="text-primary font-semibold text-xl md:text-2xl">
          Terminal Request
        </h1>

        <form
          onSubmit={handleRequest}
          className="flex flex-col gap-10 px-2 lg:p-0 w-full"
        >
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="numberOfTerminals"
                className="text-primary text-sm lg:text-base"
              >
                Number of Terminals
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="numberOfTerminals"
                  name="numberOfTerminals"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 text-[#98A2B3]"
                >
                  <option value="">Number of Terminals</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="settlemntType"
                className="text-primary text-sm lg:text-base"
              >
                Preferred Settlement Type
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="settlemntType"
                  name="settlemntType"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 text-[#98A2B3]"
                >
                  <option value="">Settlement Type</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="ptsp"
                className="text-primary text-sm lg:text-base"
              >
                Preferred Payment Terminal Service Provider
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="ptsp"
                  name="ptsp"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 text-[#98A2B3]"
                >
                  <option value="">PTSP</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="pnProvider"
                className="text-primary text-sm lg:text-base"
              >
                Preferred Network Provider
              </label>
              <div className="flex items-center border border-[#E3EFFC] rounded-3xl bg-[#FCFCFD] w-full">
                <select
                  id="pnProvider"
                  name="pnProvider"
                  className="flex items-center gap-1 md:gap-2 w-full mr-3 lg:mr-4 text-xs md:text-sm lg:text-base pl-4 py-2 md:py-3 outline-0 text-[#98A2B3]"
                >
                  <option value="">Network Provider</option>
                </select>
              </div>
            </div>
          </div>
          {/* btns */}
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={cancel}
              className="text-primary bg-white rounded-3xl shadow px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer"
            >
              Cancel
            </button>
            <TextBtn title="Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestCard;
