import KeystoneIcon from "../../assets/KeystoneIcon";

const Performance = () => {
  return (
    <div className="w-full h-full bg-[url('/performance.png')] bg-no-repeat object-cover bg-cover rounded-2xl z-10">
      <div className="p-[28px] flex flex-col justify-between h-full">
        <div>
          <KeystoneIcon />
        </div>
        <div className="flex flex-col gap-2 text-white pb-12 max-w-[636px] font-urbanist">
          <p className="text-3xl font-semibold">Performance Management</p>
          <p>
            Gain a comprehensive view of your business performance with
            real-time analytics to identify areas for improvement and drive
            growth.
          </p>
          <div className="flex items-center gap-0.5">
            <div className="bg-[#FFFFFF66] w-3.5 h-1 rounded-xl" />
            <div className="bg-white w-7 h-1 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
