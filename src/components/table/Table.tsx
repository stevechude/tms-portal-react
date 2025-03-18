import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [openTrxDetails, setOpenTrxDetails] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();

  const trxDeets = () => {
    location.pathname.includes("/transactions")
      ? setOpenTrxDetails(true)
      : setOpenTrxDetails(false);
    return;
  };

  const seeTerminalDetails = (terminalId: number | string) => {
    navigation(`/terminals/${terminalId}`);
  };

  const seeRequestDetails = (requestId: number | string) => {
    navigation(`/requests/${requestId}`);
  };

  const handleClickIcon = (
    terminalId: number | string,
    requestId: number | string
  ) => {
    if (!click) return;
    if (click && location.pathname.includes("transactions")) {
      trxDeets();
    }
    if (click && location.pathname.includes("terminals")) {
      seeTerminalDetails(terminalId);
    }
    if (click && location.pathname.includes("requests")) {
      seeRequestDetails(requestId);
    }
  };

  function formatAmount(amount: number) {
    // const numericAmount =
    const amountString =
      typeof amount === "string" ? amount : amount?.toString();

    // Remove commas from the amount
    const numericAmount = parseFloat(amountString?.replace(/,/g, ""));

    return Number(numericAmount).toLocaleString(undefined, {
      maximumFractionDigits: 2,
    }); // Format the number with commas
  }

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
                <td
                  key={i}
                  className={`text-left px-4 py-3 ${
                    click ? "cursor-pointer" : ""
                  }`}
                >
                  {header.key === "amount" ? (
                    <span className="text-xs">₦</span>
                  ) : (
                    ""
                  )}
                  <Link
                    to={""}
                    className={`${click ? "cursor-pointer" : ""} ${
                      header.key === "batteryHealth" ? "text-red-500" : ""
                    } ${
                      header.key === "amount" && dt[header.key] < 1
                        ? "text-red-500"
                        : ""
                    } ${
                      header.key === "status" && dt[header.key] === "completed"
                        ? "text-green-500 bg-[#E6F9F0] rounded-3xl px-2 py-1 capitalize"
                        : ""
                    } ${
                      header.key === "terminalStatus" &&
                      dt[header.key] === "Active"
                        ? "text-green-500 bg-[#E6F9F0] rounded-3xl px-2 py-1 capitalize"
                        : ""
                    } ${
                      header.key === "requestStatus" &&
                      dt[header.key] === "Approved"
                        ? "text-green-500 bg-[#E6F9F0] rounded-3xl px-2 lg:px-4 py-1 capitalize"
                        : ""
                    } ${
                      header.key === "requestStatus" &&
                      dt[header.key] === "Pending"
                        ? "text-[#F69625] bg-[#FDF5ED] rounded-3xl px-2 lg:px-4 py-1 capitalize"
                        : ""
                    } ${
                      header.key === "requestStatus" &&
                      dt[header.key] === "Rejected"
                        ? "text-[#FF2828] bg-[#F8F2F2] rounded-3xl px-2 lg:px-4 py-1 capitalize"
                        : ""
                    }`}
                  >
                    {header.key === "createdAt"
                      ? dt[header.key].slice(0, 10)
                      : dt[header.key] && header.key === "amount"
                      ? formatAmount(dt[header.key])
                      : dt[header.key]}
                  </Link>
                </td>
              ))}
              {click && (
                <td>
                  <button
                    onClick={() => handleClickIcon(dt?.id, dt?.id)}
                    className="cursor-pointer"
                  >
                    {location.pathname.endsWith("/terminals") ||
                    location.pathname.endsWith("/requests") ? (
                      <FaAngleRight />
                    ) : (
                      <CgMoreVertical />
                    )}
                  </button>
                </td>
              )}
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
