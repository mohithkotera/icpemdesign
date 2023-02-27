import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const M7LastPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-fit h-fit border-t-4 shadow-lg border-[#E5D610] bg-[#fffceb] rounded-xl px-8 ">
        <div className="flex justify-center ">
          <img src={require("../../images/Frame 33.png")} />
        </div>
        <div className="flex justify-center ">
          <img src={require("../../images/Messenger-cuate 1.png")} />
        </div>
        <div className="py-3">
          <p className="text-sm">
            Hi <span className="text-[#414141] font-bold">Manisha Kumari</span>
            👋
          </p>
        </div>
        <div className="py-3">
          <p className="text-sm text-[#414141] ">
            We’re Proudly Annaunced That You Have Completed{" "}
            <span className="text-[#414141] font-bold">GA &nbsp;</span>
            Course And We’re
            <br />
            Sending You Your All Mark Sheets And Certificates Via Courier.
          </p>
        </div>
        <div className="py-3">
          <p className="text-sm text-[#414141] ">
            We Hope That It Will Beneficial For Your Great Future.
          </p>
        </div>
        <div className="py-3">
          <p className="text-sm text-[#414141] ">
            Tracking Number:
            <span className="text-[#414141] font-bold">123456789012345</span>
          </p>
        </div>
        <p className="text-sm text-[#414141] ">
          Thanks & Regards <br />
          ICPEM Team
        </p>
        <div className="flex border-b-2 border-b-gray-400 w-full py-2"></div>

        <p className="text-sm text-[#414141] py-4">
          Lorem ipsum jussry jahau kakush
        </p>
        <p className="text-sm text-[#414141] ">
          Questions or faq? Contact us at{" "}
          <span className="text-[#E5D610] underline">icpem.com</span>
          . If you'd rather not receive this kind of
          <br /> email, Don’t want any more emails from admintool?
          <span className="text-[#E5D610] underline">Unsubscribe</span>.
        </p>
        <p className="text-sm text-[#414141] py-6 ">
          100 Smith Street, Melbourne VIC 3000 <br />© 2022 Admintool
        </p>
      </div>
    </div>
  );
};

export default M7LastPage;
