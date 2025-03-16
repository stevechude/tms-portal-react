type Props = {
  cancel: () => void;
};

const LostDevice = ({ cancel }: Props) => {
  return (
    <div className="bg-white rounded-3xl w-[90vw] md:w-[50vw] lg:w-[28rem] xl:w-[30rem]">
      <div className="flex flex-col gap-8 lg:gap-10 p-2 md:p-5 lg:p-8">
        <h1 className="text-lg text-primary md:text-xl lg:text-2xl font-semibold text-center">
          Lost Device
        </h1>

        <div className="flex flex-col items-center gap-1">
          <p className="text-[#131B33] text-sm md:text-base lg:text-lg font-medium">
            Terminal ID - <span>1012345678</span>
          </p>
          <p className="text-xs md:text-sm text-secondary text-center">
            Misplaced a terminal device? Request deactivation. <br />
            <span className="text-red-500">*</span>this will incurs a cost.
            <span className="text-red-500">*</span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={cancel}
            className="text-primary bg-white rounded-3xl shadow px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer hover:bg-[#000]/10"
          >
            Cancel
          </button>
          <button className="bg-primary text-white rounded-3xl px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default LostDevice;
