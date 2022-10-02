import dayjs from "dayjs";
import React, { useContext } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logo from "../Assets/logo.png";
import GlobalContext from "../context/GlobalContext";

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };
  return (
    <header className="px-4 my-2 flex items-center justify-between">
      <div className="flex">
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
        <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      </div>
      <div className="flex">
        <button onClick={handleReset} className="border rounded px-4 py-2 mr-5">
          Today
        </button>
        <h2 className="ml-2 text-2xl text-gray-600 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(" MMMM YYYY")}
        </h2>
        <button
          onClick={handlePrevMonth}
          className="material-icons-outline cursor-pointer text-gray-600 mx-2 font-bold h-10 text-center "
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleNextMonth}
          className="material-icons-outline cursor-pointer text-gray-600 h-10 font-bold mx-2 text-center "
        >
          <FiChevronRight />
        </button>
      </div>
    </header>
  );
};

export default CalenderHeader;
