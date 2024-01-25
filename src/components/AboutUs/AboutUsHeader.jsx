import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import backgroundImage from "@/images/AboutUs/about-us-header-img.jpg";
const AboutUsHeader = () => {
  return (
    // <div
    //   className="h-[45vh] bg-cover flex justify-center items-center"
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //   }}
    // >
    <div className="bg-fuchsia-200 h-72">
      <div className="flex flex-col items-center gap-5 text-white">
        <div className="text-5xl font-bold">About Us</div>
        <div className="flex font-semibold items-center">
          Home{" "}
          <span className="px-4">
            <MdOutlineArrowForwardIos />
          </span>
          About Us
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
