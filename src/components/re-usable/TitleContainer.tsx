import { LuCalendarDays } from "react-icons/lu";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  subTitle: string;
  calendarRef: React.RefObject<HTMLDivElement | null>;
  calendar: any;
  setCalendar: (dt: string) => void;
};

const TitleContainer = ({
  title,
  subTitle,
  calendarRef,
  calendar,
  setCalendar,
}: Props) => {
  const [openDate, setOpenDate] = useState(false);
  useEffect(() => {
    setCalendar(format(new Date(), "dd-MM-yyyy"));

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, [calendarRef]);

  const handleSelectDate = (date: any) => {
    setCalendar(format(date, "dd-MM-yyyy"));
    setOpenDate(false);
  };

  //   hide date on ESC press
  const hideOnEscape = (e: any) => {
    if (e.key === "Escape") setOpenDate(false);
  };

  //   hide date on click outside
  const hideOnClickOutside = (e: any) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node)
    ) {
      setOpenDate(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl">
        <div className="relative flex items-center justify-between p-2 lg:px-5">
          <div className="flex flex-col gap-1">
            <p className="text-base text-primary md:text-lg lg:text-xl font-semibold">
              {title}
            </p>
            <p className="text-xs lg:text-sm text-secondary">{subTitle}</p>
          </div>

          <div
            onClick={() => setOpenDate(!openDate)}
            className="xl:w-36 w-28 md:w-32 flex items-center gap-3 relative bg-button rounded-3xl text-xs md:text-sm lg:text-base"
          >
            <input
              type="text"
              value={calendar}
              readOnly
              className="h-full rounded-3xl px-2 lg:px-3 py-2 xl:py-2.5 outline-none cursor-pointer"
            />
            <LuCalendarDays
              size={18}
              color="#000"
              className="absolute right-2"
            />
          </div>
          {openDate && (
            <div ref={calendarRef} className="absolute right-0 top-10 z-10">
              <Calendar
                date={new Date()}
                onChange={handleSelectDate}
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TitleContainer;
