import React from "react";
import { useNavigate } from "react-router-dom";

const AlertReg = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto border-t-4 border-[#E5D610] bg-[#ffffff] shadow-lg p-8 m-20 rounded-xl">
        <div className=" grid justify-center">
          <h3 className="text-black-800 font-bold text-3xl text-center py-5">
            Thank You Manisha Kumari!
          </h3>

          <p className="text-sm py-2 text-[#414141] font-semibold text-center">
            You’ve Successfully Registered For This Course. Once Your Documents
            Approved, We Will Get Back To <br /> You Via Mail / Call As Soon As
            Possible. Your Registration Number Number is{" "}
            <span className="font-bold text-black">GACA17097877</span>
          </p>
        </div>

        <div className="flex border-b-2 border-b-gray-400 w-full py-1"></div>
        <div
          className="flex justify-center  mt-8"
          onClick={() => navigate("/M2ScreenOne")}
        >
          <p className=" bg-[#E5D610] rounded-xl p-3 font-semibold text-[#0E0D01]  text-xs">
            Go Back To Website
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertReg;
