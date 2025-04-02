const Logout = () => {
  return (
    <div className="bg-white p-5 md:p-8 rounded-3xl w-[80vw] md:w-[50vw] lg:w-[30rem] xl:w-[32rem] text-black">
      <div className="flex flex-col gap-8">
        <p className="text-primary font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-center">
          Are you sure you want to logout?
        </p>

        <div className="flex item-center justify-center gap-4">
          <button className="bg-primary text-white rounded-lg px-4 py-2 mr-2 text-sm xl:text-base">
            Cancel
          </button>
          <button className="bg-red-500 text-white rounded-lg px-4 py-2 text-sm xl:text-base">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
