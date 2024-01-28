import React from "react";
import BackgrondImage from "@/images/AboutUs/why-to-choose-us-img.jpg";
import { FaTent } from "react-icons/fa6";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";

const GetToKnowUs = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-10/12 flex flex-col lg:flex lg:flex-row">
        <div className="w-full lg:w-3/5">
          <div className="">
          <p className="text-lg font-semibold py-1">
            <span className="pl-12 bg-[#FF9933]">Get to K</span>now Us
          </p>
          <p className=" text-3xl lg:text-4xl text-[#222222] font-extrabold">
            Why You Choose our <br />
            Company
          </p>
          </div>
          <p className="text-lg w-full lg:w-10/12 text-[#555555] leading-8 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            egestas, neque ut hendrerit egestas, lorem velit venenatis urna,
            vitae consequat enim purus tincidunt urna. Maecenas sollicitudin mi
            id odio lacinia feugiat
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 pb-3">
            <div className="flex items-center gap-5">
              <div className="bg-[#FF9933] p-4 rounded-full">
                <FaPersonWalkingLuggage className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-xl pb-2 text-[#222222] font-bold">0 k</div>
                <div className="text-slate-700">Happy Traveler</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#FF9933] p-4 rounded-full">
                <FaTent className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-xl pb-2 text-[#222222] font-bold">0 k</div>
                <div className="text-slate-700">Tent Sites</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 pt-3">
            <div className="flex items-center gap-5">
              <div className="bg-[#FF9933] p-4 rounded-full">
                <LuMessagesSquare className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-xl pb-2 text-[#222222] font-bold">0 k</div>
                <div className="text-slate-700">Satisfaction Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#FF9933] p-4 rounded-full">
                <IoPeopleSharp className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-xl pb-2 text-[#222222] font-bold">0 k</div>
                <div className="text-slate-700">Team Members</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5 relative">
          <div className="hidden lg:block bg-[#63AB45] w-full h-full rounded-tl-3xl rounded-bl-[100px]"></div>
          <img
            src={BackgrondImage.src}
            alt="why-to-choose-us"
            className="absolute top-20 right-16 border-white border-4 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
