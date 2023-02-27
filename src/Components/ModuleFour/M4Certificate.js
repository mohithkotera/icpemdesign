import React from "react";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const M4Certificate = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-80 h-fit shadow-lg border-t-2 bg-[#ffffff] rounded-xl px-8 ">
        <p className=" text-center font-bold text-base py-6 text-[#414141]">
          Certificate
        </p>
        <div className="py-5">
          <p className="text-sm font-semibold text-[#414141] ">Access ID</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="Enter Your Given ID"
          ></input>
          <BiUser color="#414141" />
        </div>

        <div
          className="flex justify-center py-8 w-full"
          onClick={() => navigate("/M4GenerateCerti")}
        >
          <button className=" bg-[#E5D610] text-center rounded-xl w-full p-3 font-semibold text-black text-xs">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default M4Certificate;
