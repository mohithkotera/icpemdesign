import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";

const UploadExcel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto bg-[#FBF9E8] p-8 m-20 rounded-xl">
        <div className="py-3">
          <p className="text-sm font-semibold">
            Fill Student Details By Excel Sheet For Bulk Registration
          </p>
        </div>
        <div className="grid border-2 border-dashed py-14">
          <div className=" grid justify-center items-center">
            <label for="file">
              <div>
                <FiUploadCloud size={39} color="grey" />
                <input className="hidden" type="file" id="file" />
              </div>
            </label>
          </div>

          <div className=" grid justify-center items-center">
            <p className="text-xs text-gray-400 ">
              Please Upload Excel Sheet To Fill Student Details Or You Can
              Manually Fill The Details.
            </p>
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 w-full py-2"></div>
        <p className="text-center py-8 text-[#398331] text-xs">
          You Have Successfully Upload The Student Details
        </p>

        <div
          className="flex justify-center"
          onClick={() => navigate("/AlertMsg")}
        >
          <button className=" bg-[#E5D610] rounded-xl p-3 font-semibold text-black text-xs">
            Check Student List
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadExcel;
