import React from "react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Verify() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto border-t-4 shadow-lg border-[#E5D610] bg-[#FBF9E8] p-8 m-20 rounded-xl">
        <div className="flex border-b-2 border-b-gray-400">
          <div className="flex-1">
            <div>
              <p className="text-xs font-semibold  text-[#414141] mb-1">
                Student Name
              </p>
              <p className="text-sm text-black-900 font-semibold">
                Manisha kumari
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Fathers Name
              </p>
              <p className="text-sm text-black-900 font-semibold">
                Suresh kumar
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Student Registration Id
              </p>
              <p className="text-sm text-black-900 font-semibold">
                BACA17097877
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">Dob</p>
              <p className="text-sm text-black-900 font-semibold">
                16thFeb,1996
              </p>
            </div>
          </div>
          <div className="flex-1 mb-4">
            <div>
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Student Email ID
              </p>
              <p className="text-sm text-black-900 font-semibold">
                manisha123@company
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Year
              </p>
              <p className="text-sm text-black-900 font-semibold">2017</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 py-4">
          <div className="flex-1">
            <div>
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Course name
              </p>
              <p className="text-sm text-black-900 font-semibold">Graduation</p>
            </div>
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Document Submitted
              </p>
              <p className="text-sm text-black-900 font-semibold">All</p>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Specialization
              </p>
              <p className="text-sm text-black-900 font-semibold">
                Commercial Application
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Batch
              </p>
              <p className="text-sm text-black-900 font-semibold">2017-2020</p>
            </div>
          </div>
          <div className="flex-1 ">
            <div>
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Course Code
              </p>
              <p className="text-sm text-black-900 font-semibold">GA</p>
            </div>
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Email ID Of Collage
              </p>
              <p className="text-sm text-black-900 font-semibold">
                collage@company.org
              </p>
            </div>
          </div>
        </div>
        <div className="m-4">
          <p className="text-gray-400 text-sm">Uploaded Documents</p>
        </div>
        <div className="flex ">
          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />
                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">Student Passport Size Photo</p>
                </div>
              </div>
            </label>
          </div>
          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />

                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">
                    10th Mark Sheet / Certificate / Pass TC
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />

                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">
                    12th Mark Sheet / Certificate / Pass TC
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />

                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">Joining Letter Of Current Company</p>
                </div>
              </div>
            </label>
          </div>
          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />

                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">Adhar card / Passport</p>
                </div>
              </div>
            </label>
          </div>

          <div className=" flex-1 place-items-center bg-[#48DA3820] mr-5 p-3 border-dashed border-2">
            <label for="file">
              <div className="flex">
                <div>
                  <BsFileEarmarkArrowDown />

                  <input className="hidden" type="file" id="file" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">
                    Any relavent course completion certificate
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 mt-4"></div>
        <div className="flex border-b-2 border-b-gray-400">
          <div className="flex-1">
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Payment Amount
              </p>
              <p className="text-sm text-black-900 font-semibold">$ 3000.00</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Payment Status
              </p>
              <p className="text-sm text-black-900 font-semibold">
                Full Payment
              </p>
            </div>
          </div>
          <div className="flex-1 mb-4">
            <div className="mt-4">
              <p className="text-xs  mb-1 font-semibold  text-[#414141]">
                Transaction Id
              </p>
              <p className="text-sm text-black-900 font-semibold">
                124421124421
              </p>
            </div>
          </div>
        </div>
        <div className="grid justify-center py-5 w-full">
          <p className="text-[#139729] text-xs">
            *There is No Deviation in Uploaded details. You Can approved The
            Ticket.
          </p>
        </div>
        <div
          className="py-1 grid grid-cols-2 "
          onClick={() => navigate("/AssignTo")}
        >
          <div className=" grid justify-end col-span-1">
            <div className="border-2 border-solid flex justify-center border-black p-2 rounded-lg w-64 m-1">
              <button className="text-black-500 text-xs font-semibold text-center">
                Assign To Module 1 For Redo Ticket
              </button>
            </div>
          </div>
          <div className=" grid justify-start col-span-1">
            <div className="border-2 border-solid flex justify-center bg-[#E5D610] p-2 rounded-lg w-64 m-1">
              <button className="text-black-500 text-xs font-semibold text-center">
                Approved Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
