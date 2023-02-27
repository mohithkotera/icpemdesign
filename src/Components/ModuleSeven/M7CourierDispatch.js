import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const CourierDispatch = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-80 h-fit shadow-lg border-t-2 bg-[#ffffff] rounded-xl px-8 ">
        <p className=" text-center text-[#414141] font-bold text-xl py-6">
          Courier Dispatch
        </p>
        <div className="py-3">
          <p className="text-sm font-semibold ">Tracking Number</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="123456789012345"
          ></input>
          <BiUser color="#414141" />
        </div>

        <div className="py-3">
          <p className="text-sm font-semibold ">Address</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex">
          <textarea
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="Enter Address Where You Want To Dispatch"
          ></textarea>
          <CiLocationOn color="#414141" />
        </div>

        <p className="text-[#139729] text-xs py-4">
          *This Details Will Be record For Future Process.
        </p>
        <div
          className="flex justify-center py-7 "
          onClick={() => navigate("/PocLogin")}
        >
          <button className="  bg-[#E5D610] text-center w-full rounded-xl p-3 font-semibold text-black text-xs">
            Ready To Dispatch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourierDispatch;
