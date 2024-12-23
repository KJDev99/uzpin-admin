import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Kalendar uslubi
import "react-date-range/dist/theme/default.css"; // Tema uslubi

const CustomCalendar = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Kalendarni ko'rsatish/nodon holati
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(new Date().setDate(new Date().getDate() - 30)), // 30 kun oldingi sana
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="relative">
      <button
        className="rounded-md border p-2 font-medium uppercase text-dark dark:text-dark-6"
        onClick={toggleCalendar}
      >
        {`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
      </button>

      {isCalendarOpen && (
        <div className="absolute left-[-110px] z-50 mt-2 rounded bg-white shadow-lg">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
          <button
            className="mx-auto mt-2 w-full rounded bg-blue-500 px-4 py-2 text-white"
            onClick={toggleCalendar}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
