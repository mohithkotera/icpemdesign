import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-fit w-fit border-t-4 shadow-lg border-[#E5D610] bg-[#FBF9E8]  rounded-xl">
        <p className="text-center text-lg text-[#414141] pt-4 px-3 font-semibold">
          Graduate In Applied Course
        </p>
        <div className="flex border-b-2  border-b-[#E5D610] py-1"></div>
        <div className="flex justify-center ">
          <img src={require("../../images/Studying-cuate 1.png")} />
        </div>

        <div className="flex border-b-2 border-b-[#E5D610]"></div>
        <div className="grid grid-cols-4   items-center p-4 ">
          <div className=" col-span-2 grid grid-cols-5">
            <AiFillStar color="#E5D610" size={20} className="col-span-1" />
            <AiFillStar color="#E5D610" size={20} className="col-span-1" />
            <AiFillStar color="#E5D610" size={20} className="col-span-1" />
            <AiFillStar color="#E5D610" size={20} className="col-span-1" />
            <AiOutlineStar color="#414141" size={20} className="col-span-1" />
          </div>
          <div className="col-span-2 grid justify-end text-lg font-bold text-[#414141]">
            $ 120.00
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="border-2 border-[#0E0D01] rounded-md w-52">
            <p className="text-center text-[#0E0D01] p-2 font-bold">
              Proceed To Ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
