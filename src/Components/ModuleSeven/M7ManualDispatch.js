import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ManualDispatch = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-80 h-fit shadow-lg border-t-2 bg-[#ffffff] rounded-xl px-8 ">
        <p className=" text-center text-[#414141] font-bold text-xl py-6">
          Manual Dispatch
        </p>
        <div className="py-3">
          <p className="text-sm font-semibold ">Dispatch By</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="Ex: Student, Co-ordinator"
          ></input>
          <BiUser color="#414141" />
        </div>

        <div className="py-3">
          <p className="text-sm font-semibold ">Name</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="Ex: Student, Co-ordinator"
          ></input>
        </div>

        <div className="py-3">
          <p className="text-sm font-semibold ">Contact Number</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="+91 - 1234567890"
          ></input>
          <BiPhone color="#414141" />
        </div>

        <div className="py-3">
          <p className="text-sm font-semibold ">Date Of Dispatch</p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            placeholder="DD / MM / YYYY"
          ></input>
          <AiOutlineCalendar color="#414141" />
        </div>

        <p className="text-[#139729] text-xs py-4">
          *This Details Will Be record For Future Process.
        </p>
        <div
          className="flex py-7 w-full justify-center "
          onClick={() => navigate("/CourierDispatch")}
        >
          <button className=" bg-[#E5D610] text-center w-full rounded-xl p-3 font-semibold text-black text-xs">
            Ready To Dispatch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManualDispatch;
