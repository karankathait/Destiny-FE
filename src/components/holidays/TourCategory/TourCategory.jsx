import React, { useRef, useState } from "react";
import InternationaltripsSlider from "../slider/InternationalTripsSlider";
import DomesticTripsSlider from "../slider/DomesticTripsSlider";

// const International = () => <div>International trips </div>;
// const Domestic = () => <div>Domestic trips</div>;

const TourCategory = () => {
  const [activeTab, setActiveTab] = useState("international");
  const sliderRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleNext = () => {
    sliderRef.current.handleNext();
  };

  const handlePrev = () => {
    sliderRef.current.handlePrev();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "international":
        return <InternationaltripsSlider />;
      case "domestic":
        return <DomesticTripsSlider />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center py-10">
        <div className="w-11/12">
      <div className="relative mb-8">
        {/* <div
          className="absolute bottom-0 w-full h-px bg-slate-300"
          aria-hidden="true"
        ></div> */}
        {/* <ul className="relative text-sm font-medium flex flex-nowrap justify-center -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar"> */}
        <ul className="relative text-sm font-medium flex gap-4 lg:gap-8 justify-start">
          <li
            className={` ${
              activeTab === "international"
                ? "border-b-4 border-[#FF9933] text-slate-800 lg:text-lg font-extrabold"
                : "text-slate-500 lg:text-lg font-bold "
            }`}
          >
            <a
              onClick={() => handleTabClick("international")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              INTERNATIONAL
            </a>
          </li>
          <li
            className={` ${
              activeTab === "domestic"
                ? "border-b-4 border-[#FF9933] text-slate-800 lg:text-lg font-extrabold"
                : "text-slate-500 lg:text-lg font-bold "
            }`}
          >
            <a
              onClick={() => handleTabClick("domestic")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              DOMESTIC
            </a>
          </li>
          
        </ul>
      </div>
      {renderTabContent()}
    </div>
    </div>
  );
};

export default TourCategory;
