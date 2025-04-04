import Header from "./Header";
import SideBar from "./SideBar";
import "react-toastify/dist/ReactToastify.css";

const DashLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex w-full h-screen">
        <SideBar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="bg-[#f5f7fa] h-full w-full p-2 md:py-[15px] md:px-[21px] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
