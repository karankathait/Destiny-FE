import React from "react";
import image1 from "@/images/AboutUs/about-2-img-1.jpg";
import image2 from "@/images/AboutUs/about-2-img-2.jpg";
import image3 from "@/images/AboutUs/about-2-img-3.jpg";
import { ImEarth } from "react-icons/im";
import { FaBoxes } from "react-icons/fa";

const AboutUsPoster2 = () => {
  return (
    <div className="w-full flex justify-center  bg-[#FFFFFF] py-12">
      <div className="w-10/12 lg:w-10/12 flex flex-col lg:flex-row gap-5 lg:gap-20">
        <div className="w-full lg:w-1/2">
         <div className="text-center lg:text-start">
         <p className="text-lg font-semibold pb-2">
            <span className="bg-[#FF9933] pl-4">About U</span>s
          </p>
          <h1 className=" text-2xl lg:text-4xl text-[#222222] font-extrabold">
            Planning a trip should be very exciting adventure
          </h1>
          <p className="py-6 text-lg text-slate-500">
            We're dedicated to offering exceptional value for your travel
            investment. Our relationships with trusted travel partners
          </p>
         </div>
          <div className="flex items-center gap-4 py-4">
            <div className="bg-[#FCEFE5] p-4 rounded-full">
              <ImEarth className="text-[#FF6B00] w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl text-[#FF9933] font-bold py-2">
                International Tours
              </h1>
              <p className="text-sm lg:text-base text-slate-500">
                Our team of travel professional brings a wealth of knowledge and
                expertise to the table.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4">
            <div className="bg-[#FCEFE5] p-4 rounded-full">
              <FaBoxes className="text-[#FF6B00] w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl text-[#FF9933] font-bold py-2">
                Multiple Options to Choose
              </h1>
              <p className="text-sm lg:text-base text-slate-500">
                Planning trip should be an exciting adventure, not stressful
                ordeal. Let us handle the logistics
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center gap-3">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={image1.src}
              alt=""
              className="rounded-3xl hover:scale-105 duration-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={image2.src}
                alt=""
                className="rounded-3xl hover:scale-105 duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={image3.src}
                alt=""
                className="rounded-3xl hover:scale-105 duratio500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPoster2;
