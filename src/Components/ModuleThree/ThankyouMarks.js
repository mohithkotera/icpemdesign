import React from "react";
import { useNavigate } from "react-router-dom";

const ThankMarks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto border-t-4 border-[#E5D610] bg-[#ffffff] shadow-lg p-8 m-20 rounded-xl">
        <div className=" grid justify-center">
          <h3 className="text-black-800 font-bold text-3xl text-center py-5">
            Thank You EMP!
          </h3>

          <p className="text-xs py-2 text-[#414141] font-semibold text-center">
            You’ve Successfully Generate The Mark Sheet That Registration Number
            Is <span className="font-bold text-black">GACA17097877</span>. Once
            The
            <br /> Quality Has Been Checked, You Can Print The Mark Sheet.
          </p>
        </div>

        <div className="flex border-b-2 border-b-gray-400 w-full py-1"></div>
        <div className=" grid grid-cols-2 py-8 ">
          <div className=" grid justify-end col-span-1">
            <div
              className="border-2 border-solid border-black flex justify-center p-2 rounded-lg w-64 m-1"
              onClick={() => navigate("/GenerateCerti")}
            >
              <button className="text-black-500 text-xs font-semibold text-center">
                Back To Last Page
              </button>
            </div>
          </div>
          <div className=" grid justify-start col-span-1">
            <div className="border-2 border-solid bg-[#41414120]  flex justify-center p-2 rounded-lg w-64 m-1">
              <button className="text-[#fff] text-xs font-semibold text-center">
                Print Mark Sheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankMarks;
