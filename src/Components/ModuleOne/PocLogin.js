import React from "react";
import { BiUser } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PocLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-80 h-fit shadow-lg border-t-2 bg-[#ffffff] rounded-xl px-8 ">
        <p className=" text-center font-bold text-xl  py-6 text-[#414141]">
          Institute POC
        </p>
        <div className="py-5">
          <p className="text-sm font-semibold text-[#414141] ">
            Enter Institute POC ID
          </p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            value="intitute.poc.in"
          ></input>
          <BiUser color="#414141" />
        </div>

        <div className="py-5">
          <p className="text-sm font-semibold text-[#414141]">
            Registration Type
          </p>
        </div>
        <div className=" border-2 border-solid p-2 rounded-lg  flex items-center">
          <input
            className="text-[#414141] bg-transparent text-xs flex-1 outline-none border-none font-semibold"
            type="text"
            value="Ex: Bulk, Manual"
          ></input>
          <BsChevronDown color="#414141" />
        </div>

        <div
          className="flex justify-center w-full py-8 "
          onClick={() => navigate("/RegInOffice")}
        >
          <button className="  bg-[#E5D610] text-center w-full rounded-xl p-3 font-semibold text-black text-xs">
            Generate The Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PocLogin;
