import React from "react";
import { useNavigate } from "react-router-dom";

const M4Alert = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto  bg-[#fdf8e1] p-8 m-20 rounded-xl">
        <div className="h-full w-auto border-t-4 border-[#E5D610] bg-[#ffffff] shadow-lg p-8 m-20 rounded-xl">
          <div className=" grid justify-center">
            <h3 className="text-black-800 font-bold text-3xl text-center py-5">
              Certificate
            </h3>

            <p className="text-xs py-2 text-[#414141] font-semibold text-center">
              Certificate We’re Proudly Announced That Manisha Kumari
              Successfully Completed Graduate Course <br /> From Indian Council
              For Professional Education Mission. We Hope, That Will Beneficial
              For
              <br />
              His / Her Great Future.
            </p>
          </div>
        </div>

        <div className="flex border-b-2 border-b-gray-400 w-full py-10"></div>
        <div className=" grid grid-cols-2 py-8 ">
          <div className=" grid justify-end col-span-1">
            <div
              className="border-2 border-solid flex justify-center border-black p-2 rounded-lg w-64 m-1"
              onClick={() => navigate("/M7LastPage")}
            >
              <button className="text-black-500 text-xs font-semibold text-center">
                Back To Last Page
              </button>
            </div>
          </div>
          <div className=" grid justify-start col-span-1">
            <div className="border-2 border-solid flex justify-center bg-[#E5D610] p-2 rounded-lg w-64 m-1">
              <button className="text-black text-xs font-semibold text-center">
                Approve For Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M4Alert;
