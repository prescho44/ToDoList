import { useState } from "react";
import { useNavigate } from "react-router";

const monthDays: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const date = new Date().getMonth();
  const [month, setMonth] = useState<number>(date);
  const navigate = useNavigate();

  if (month > 11) {
    setMonth(0);
  }
  if (month < 0) {
    setMonth(11);
  }

  const handleDate = (day: number) => {
    navigate(`/calendar/${months[month]}/to-dos/${day}`);
  };

  return (
    <>
      <div className="mt-8 items-center justify-center gap-4 rounded-2xl bg-orange-200 shadow-lg dark:bg-gray-800">
        {/* Months */}

        <div className="flex items-center justify-evenly gap-3 rounded-t-2xl border-b-2 bg-orange-300 py-4 sm:max-w-full dark:border-b-white dark:bg-gray-700">
          <p
            onClick={() => setMonth(month - 1)}
            className="hidden cursor-pointer justify-start text-start text-2xl sm:flex dark:text-white"
          >
            {"<"} <span className="hover:underline">February</span>
          </p>
          <p className="justify-start text-start text-4xl dark:text-white">
            {months[month]}
          </p>
          <p
            onClick={() => setMonth(month + 1)}
            className="hidden cursor-pointer justify-start text-start text-2xl sm:flex dark:text-white"
          >
            <span className="hover:underline">April</span> {">"}
          </p>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 content-center gap-7 px-3 py-4 break-words sm:gap-10 sm:px-8 dark:text-white">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="rounded-lg border-gray-500 text-start sm:h-2 sm:min-w-13 sm:text-center lg:p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <span className="hidden rounded-full text-center sm:grid sm:p-2 sm:active:bg-transparent">
                {day}
              </span>
              <span className="grid rounded-full text-center sm:hidden sm:p-2 sm:active:bg-transparent">
                {day[0]}
              </span>
            </div>
          ))}
        </div>
        <hr className="text-black sm:mx-10 sm:mt-4 dark:text-white" />
        <div className="grid grid-cols-7 content-center gap-7 px-3 py-4 break-words sm:gap-10 sm:px-8 dark:text-white">
          {monthDays.map((day, index) => (
            <div
              onClick={() => handleDate(day)}
              key={index}
              className="cursor-pointer rounded-lg border-gray-500 bg-cyan-100 text-center sm:h-20 sm:min-w-10 sm:border sm:shadow-md sm:active:bg-cyan-200 lg:p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:sm:active:bg-cyan-900"
            >
              <span className="rounded-full text-center active:bg-cyan-100 sm:p-2 sm:active:bg-transparent">
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
