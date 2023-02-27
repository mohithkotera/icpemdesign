import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  sub,
  format,
  add,
} from "date-fns";

const Calender = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [toggle, setToggle] = useState(false);

  const [val, setVal] = useState(new Date());
  const Start = startOfMonth(val);
  const End = endOfMonth(val);
  const Diff = differenceInDays(End, Start) + 1;
  const Days = Start.getDay();
  const Last = 6 - End.getDay();

  function Prev() {
    setVal(sub(val, { months: 1 }));
  }
  function Next() {
    setVal(add(val, { months: 1 }));
  }
  function PrevYr() {
    setVal(sub(val, { years: 1 }));
  }
  function NextYr() {
    setVal(add(val, { years: 1 }));
  }

  useEffect(() => {
    Prev();
    Next();
    PrevYr();
    NextYr();
  }, []);

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" w-[400px] border grid grid-cols-7 justify-center text-center items-center">
        <div className="border-b border-r" onClick={() => PrevYr()}>
          {"<<"}
        </div>
        <div className="border-b border-r" onClick={() => Prev()}>
          {"<"}
        </div>
        <div className="border-b border-r col-span-3">
          {format(val, "LLLL yyyy")}
        </div>
        <div className="border-b border-r" onClick={() => Next()}>
          {">"}
        </div>
        <div className="border-b border-r" onClick={() => NextYr()}>
          {">>"}
        </div>
        {days.map((item, index) => {
          return (
            <div className="border-b border-r p-3" key={index}>
              {item}
            </div>
          );
        })}
        {Array.from({ length: Days }).map((days, index) => {
          return <div className="border-b border-r p-6" key={index} />;
        })}
        {Array.from({ length: Diff }).map((days, index) => {
          return (
            <div className="border-b border-r p-3" key={index}>
              {index + 1}
            </div>
          );
        })}
        {Array.from({ length: Last }).map((days, index) => {
          return (
            <div className="border-b border-r p-3" key={index}>
              *
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
