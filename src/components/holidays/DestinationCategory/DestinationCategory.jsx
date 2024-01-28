import React, { useRef, useState } from "react";
import TopDestination from "../slider/TopDestination";
import UnexploredDestination from "../slider/UnexploredDestination";

// const TopDestination = () => <div>Top Destination  </div>;
// const TopUnexploredDestination = () => <div>Top Unexplored Destination</div>;

const DestinationCategory = () => {
  const [activeTab, setActiveTab] = useState("TopDestination");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  

  const renderTabContent = () => {
    switch (activeTab) {
      case "TopDestination":
        return <TopDestination />;
      case "TopUnexploredDestination":
        return <UnexploredDestination />;
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
              activeTab === "TopDestination"
                ? "border-b-4 border-[#FF9933] text-slate-800 lg:text-lg font-extrabold"
                : "text-slate-500 lg:text-lg font-bold "
            }`}
          >
            <a
              onClick={() => handleTabClick("TopDestination")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              Top Destinations
            </a>
          </li>
          <li
            className={` ${
              activeTab === "TopUnexploredDestination"
                ? "border-b-4 border-[#FF9933] text-slate-800 lg:text-lg font-extrabold"
                : "text-slate-500 lg:text-lg font-bold "
            }`}
          >
            <a
              onClick={() => handleTabClick("TopUnexploredDestination")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              Unexplored Destinations
            </a>
          </li>
          
        </ul>
      </div>
      {renderTabContent()}
    </div>
    </div>
  );
};

export default DestinationCategory;
