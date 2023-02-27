import React from "react";
import {
  AiFillCaretDown,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { TbCheck } from "react-icons/tb";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const M3ScreenOne = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-full w-auto border-t-4 shadow-lg border-[#E5D610] bg-[#FBF9E8] p-8 m-20 rounded-xl">
        <p className="font-semibold">Personal Information</p>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Student Full Name
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Manisha Kumari"
            ></input>
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Father's Name
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Suresh Kumar"
            ></input>
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Date Of Birth
            </p>

            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="16 / 02 / 1996"
            ></input>
            <p className="text-[#414141] text-xs font-semibold flex-1"></p>
            <AiOutlineCalendar
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
          <div className=" col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Student Email ID
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="email"
              placeholder="manisha123@company.com"
            ></input>

            <AiOutlineMail
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
        </div>

        <div className="flex border-b-2 border-b-gray-400 py-4"></div>
        <p className="font-semibold py-6">Education Qualifications</p>

        <div className=" flex-1">
          <p className="text-[#414141] text-xs font-semibold py-2">
            Previous Qualification
          </p>
          <input
            className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
            type="text"
            placeholder="BA"
          ></input>

          <AiFillCaretDown
            color="#414141"
            className="relative right-0 left-56 bottom-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Name of University
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Delhi University"
            ></input>

            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Name of Collage
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Indraprasth Collage, New Delhi"
            ></input>

            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Year of Completion
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="2017"
            ></input>

            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 py-1"></div>
        <p className="font-semibold py-4">Course Details</p>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Reference Person
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Dheeraj Dabhi"
            ></input>
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Course Name
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="GA"
            ></input>

            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Specialization
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Commerce"
            ></input>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="py-4 col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Email ID Of Collage
            </p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="email"
              placeholder="collage@company.org"
            ></input>
          </div>

          <div className="py-4  col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">Batch</p>
            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="2017-2020"
            ></input>

            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
          <div className="py-4  col-span-1">
            <p className="text-[#414141] text-xs font-semibold py-2">
              Name Of Collage
            </p>

            <input
              className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64"
              type="text"
              placeholder="Indraprasth Collage, New Delhi"
            ></input>
            <AiFillCaretDown
              color="#414141"
              className="relative right-0 left-56 bottom-6"
            />
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 py-1"></div>
        <p className="font-semibold py-4">Document Submitted</p>
        <div className="flex  items-center py-1">
          <div className="bg-yellow-300 h-4 mr-2">
            <TbCheck size={15} color="#fff" />
          </div>
          <div>
            <p className="text-[#414141] text-xs font-semibold py-2">
              10th Mark Sheet / Certificate / Pass TC
            </p>
          </div>
        </div>
        <div className="flex  items-center  py-1">
          <div className="bg-yellow-300 h-4 mr-2">
            <TbCheck size={15} color="#fff" />
          </div>
          <div>
            <p className="text-[#414141] text-xs font-semibold py-2">
              12th Mark Sheet / Certificate / Pass TC
            </p>
          </div>
        </div>
        <div className="flex  items-center py-1">
          <div className="bg-yellow-300 h-4 mr-2">
            <TbCheck size={15} color="#fff" />
          </div>
          <div>
            <p className="text-[#414141] text-xs font-semibold py-2">
              Joining Letter
            </p>
          </div>
        </div>
        <div className="flex  items-center py-1 ">
          <div className="bg-yellow-300 h-4 mr-2">
            <TbCheck size={15} color="#fff" />
          </div>
          <div>
            <p className="text-[#414141] text-xs font-semibold py-2">
              Aadhar Card / Passport
            </p>
          </div>
        </div>

        <div className="flex  items-center py-1 ">
          <div className="bg-yellow-300 h-4 mr-2">
            <TbCheck size={15} color="#fff" />
          </div>
          <div>
            <p className="text-[#414141] text-xs font-semibold py-2">
              Any Relevant Course Completion Certificate
            </p>
          </div>
        </div>

        <div className="flex border-b-2 border-b-gray-400 py-1"></div>
        <p className="font-semibold py-4">Upload Documents</p>

        <div className="flex py-1">
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  Upload Student Passport Size Photo
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2 rounded-md">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">Student Passport Size Photo</p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  Upload Student Passport Size Photo
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2 rounded-md">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">
                      10th Mark Sheet / Certificate / Pass TC
                    </p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  12th Mark Sheet / Certificate / Pass TC
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2 rounded-md">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">
                      12th Mark Sheet / Certificate / Pass TC
                    </p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex py-2">
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  Upload Joining Letter Of Current Company
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2  rounded-md ">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">Joining Letter </p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  Upload Aadhar Card / Passport
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2  rounded-md">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">Aadhar Card / Passport</p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
          <div className=" flex-1 place-items-center">
            <div className="flex-col">
              {/* <div>
                <p className="text-xs py-2 text-[#414141] font-semibold">
                  Upload Any Relevant Course Completion Certificate
                </p>
              </div> */}
              <label for="file">
                <div className="flex bg-[#48DA3820] mr-5 p-3 border-dashed border-2  rounded-md">
                  <div>
                    <BsFileEarmarkArrowUp />
                    <input className="hidden" type="file" id="file" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs">
                      Any Relevant Course Completion Certificate
                    </p>
                  </div>
                </div>
              </label>
              {/* <div>
                <p className="text-xs py-2 text-[#41414160]">
                  Document Should Not Be More Than 200 KB
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex border-b-2 border-b-gray-400 py-1"></div>
        <p className="font-semibold py-3">Payment Method</p>
        <div className="py-1 flex-1">
          <p className="text-[#414141] text-xs font-semibold py-2">
            Payment Status
          </p>

          <input
            className="text-[#414141] text-xs font-semibold border-2 border-solid p-2 rounded-lg  w-64 flex"
            type="text"
            placeholder="Full Payment"
          ></input>

          <AiFillCaretDown
            color="#414141"
            className="relative right-0 left-56 bottom-6"
          />
        </div>
        <div className="flex border-b-2 border-b-gray-400 py-1"></div>

        <div className="py-4 grid grid-cols-3 gap-2 ">
          <div
            className=" bg-[#E5D610] p-2 flex justify-center rounded-lg col-span-1 m-1"
            onClick={() => navigate("/GenerateMarks")}
          >
            <button className="text-black-500 text-xs font-semibold text-center">
              Generate The Marks Sheet
            </button>
          </div>
          <div className="border-2 border-solid flex justify-center border-black p-2 rounded-lg col-span-1 m-1">
            <button className="text-black-500 text-xs font-semibold text-center">
              Generate The Certificate
            </button>
          </div>

          <div className=" p-2  col-span-1 m-1 flex justify-center">
            <button className="text-black-500 text-xs  font-semibold text-center underline">
              Reassign To Module 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M3ScreenOne;
