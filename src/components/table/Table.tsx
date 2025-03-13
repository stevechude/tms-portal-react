import { Link, useLocation } from "react-router-dom";
import { CgMoreVertical } from "react-icons/cg";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import TransactionDeets from "../transactions/TransactionDeets";
import { FaAngleRight } from "react-icons/fa";

interface Header {
  key: string;
  label: string;
}

type Props = {
  headers: Header[];
  data: any[];
  click?: boolean;
  onView?: () => void;
};

const Table = ({ headers, data, click }: Props) => {
  const location = useLocation();
  const [openTrxDetails, setOpenTrxDetails] = useState(false);

  const trxDeets = () => {
    location.pathname.includes("/transactions")
      ? setOpenTrxDetails(true)
      : setOpenTrxDetails(false);
    return;
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F7FA]">
            {headers?.map((header, i) => (
              <th
                key={header?.key}
                className={`text-left text-black px-4 py-3.5 text-sm lg:text-base ${
                  i === 0 ? "rounded-l-2xl" : ""
                }`}
              >
                {header.label}
              </th>
            ))}
            <th className="rounded-r-2xl"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dt, idx) => (
            <tr
              key={dt?._id ? dt?._id : idx}
              className={`text-[#4f4f4f] border border-[#F5F7FA] rounded-lg text-xs md:text-sm lg:text-base ${
                click ? "hover:bg-slate-100" : ""
              }`}
            >
              {headers.map((header, i) => (
                <td key={i} className={`text-left px-4 py-3`}>
                  {/* {header.key === "amount" ? "₦" : ""} */}
                  <Link
                    to={""}
                    className={`${click ? "cursor-text" : ""} ${
                      header.key === "amount" ? "text-red-500" : ""
                    } ${
                      header.key === "status" && dt[header.key] === "completed"
                        ? "text-green-500 bg-[#E6F9F0] rounded-3xl px-2 py-1 capitalize"
                        : ""
                    }`}
                  >
                    {header.key === "createdAt"
                      ? dt[header.key].slice(0, 10)
                      : dt[header.key] && header.key === "amount"
                      ? dt[header.key]
                      : dt[header.key]}
                  </Link>
                </td>
              ))}
              <td>
                <button onClick={trxDeets} className="cursor-pointer">
                  {location.pathname.includes("/terminals") ? (
                    <FaAngleRight />
                  ) : (
                    <CgMoreVertical />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openTrxDetails && (
        <Modal show={openTrxDetails} onClose={() => setOpenTrxDetails(false)}>
          <TransactionDeets onClose={() => setOpenTrxDetails(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Table;
