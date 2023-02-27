import React from "react";
import { useNavigate } from "react-router-dom";

const AutoGenrate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto border-t-4 border-[#E5D610] bg-[#ffffff] shadow-lg p-8 m-20 rounded-xl">
        <div className=" grid justify-center">
          <h3 className="text-black-800 font-bold text-3xl text-center py-5">
            Thank You Solo!
          </h3>

          <p className="text-xs py-2 text-[#414141] font-semibold text-center">
            You’ve Successfully Registered To{" "}
            <span className="font-bold text-black">institute.poc.</span> For
            This Course. Once Submitted Documents Will
            <br /> Have Approved, We Will Get Back To You Via Mail / Call As
            Soon As Possible.
          </p>
        </div>

        <div className="flex border-b-2 border-b-gray-400 w-full py-1"></div>
        <div
          className="flex justify-center  mt-8"
          onClick={() => navigate("/Verify")}
        >
          <button className=" bg-[#E5D610] rounded-xl p-3 font-semibold text-black text-xs">
            Back To Last Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoGenrate;
