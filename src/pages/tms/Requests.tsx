import { CiSearch } from "react-icons/ci";
import DropButton from "../../components/btn/DropButton";
import DashLayout from "../../components/layouts/DashLayout";
import Table from "../../components/table/Table";
import AddCircle from "../../assets/AddCircle";
import { requestTableData } from "../../lib/requestTableData";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const Requests = () => {
  const [itemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [showingNumber, setShowingNumber] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = requestTableData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(requestTableData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % requestTableData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (requestTableData.length > 10) {
      setShowingNumber(10);
    } else if (requestTableData.length <= 10) {
      setShowingNumber(itemsPerPage);
    }
  }, [requestTableData]);

  return (
    <DashLayout>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
        <div className="bg-white rounded-3xl">
          <div className="flex items-center justify-between p-2 lg:px-5">
            <div className="flex flex-col gap-1">
              <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
                Requests
              </p>
              <p className="text-xs lg:text-sm text-secondary">
                Time to check in on today's portfolio activity
              </p>
            </div>
            <DropButton title="Today" />
          </div>
        </div>

        {/* trx table section */}
        <div className="bg-white w-full rounded-t-3xl overflow-y-auto">
          <div className="px-2 py-4 lg:p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 flex-wrap lg:flex-nowrap">
              <div className="flex items-center lg:gap-2 bg-button rounded-3xl lg:w-72">
                <div className="px-2 py-2 lg:py-3 flex items-center gap-1 w-full">
                  <CiSearch className="#98A2B3 ml-2" />
                  <input
                    type="text"
                    placeholder="Search history here..."
                    className="pl-2 h-full w-full outline-0 text-sm lg:text-base"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <button className="flex items-center gap-3 bg-primary rounded-3xl px-2 lg:px-3 py-1.5 text-xs md:text-sm lg:text-base cursor-pointer text-white">
                  <AddCircle />
                  <p>Make New Request</p>
                </button>
                <DropButton title="Filter" />
              </div>
            </div>
            {/* table */}
            <div>
              <Table
                headers={[
                  { key: "requestId", label: "Request ID" },
                  { key: "requestLocation", label: "Request Location" },

                  { key: "dateTime", label: "Request Date & Time" },
                  { key: "numberOfTerminals", label: "Number of Terminals" },
                  { key: "requestStatus", label: "Request Status" },
                ]}
                data={currentItems}
                click={true}
              />

              <div className="flex items-center w-full justify-between flex-wrap">
                <div className="bg-button rounded-3xl flex items-center text-xs md:text-sm">
                  <div className="px-2 py-1.5 lg:px-3 lg:py-2 flex items-center gap-2">
                    <p className="text-[#131B33]">
                      Showing 1 - {showingNumber} of
                    </p>
                    <div className="bg-primary rounded-3xl text-white">
                      <p className="px-1.5 py-0.5 md:px-2 md:py-1">
                        {requestTableData.length}
                      </p>
                    </div>
                  </div>
                </div>

                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageCount={pageCount}
                  previousLabel="Prev"
                  containerClassName="paginationContainer"
                  activeClassName="paginationActive"
                  pageClassName="eachElem"
                  previousLinkClassName="prevBtnClass"
                  nextLinkClassName="nexBtnClass"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Requests;
