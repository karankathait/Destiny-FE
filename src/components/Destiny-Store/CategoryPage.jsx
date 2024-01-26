import React, { useState } from "react";
import WomenClothes from "./Women/WomenClothes";
import MenClothes from "./Men/MenClothes";
import TrendingAccesories from "./Accesories/TrendingAccesories";
// const MenClothes = () => <div>Men's Clothes Content</div>;
// const WomenClothes = () => <div>Women's Clothes Content</div>;
// const Accessories = () => <div>Accessories Content</div>;

const CategoryPage = () => {
  const [activeTab, setActiveTab] = useState("men");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "men":
        return <MenClothes />;
      case "women":
        return <WomenClothes />;
      case "accessories":
        return <TrendingAccesories />;
      default:
        return null;
    }
  };

  return (
    <div className="m-8">
      <div className="relative mb-8">
        <div
          className="absolute bottom-0 w-full h-px bg-slate-300"
          aria-hidden="true"
        ></div>
        {/* <ul className="relative text-sm font-medium flex flex-nowrap justify-center -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar"> */}
        <ul className="relative text-sm font-medium flex gap-10 justify-center">
          <li
            className={` ${
              activeTab === "men"
                ? "border-b-2 border-indigo-500 text-indigo-500"
                : "text-[#4E5765] hover:text-indigo-600 duration-300"
            }`}
          >
            <a
              onClick={() => handleTabClick("men")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              Men
            </a>
          </li>
          <li
            className={` ${
              activeTab === "women"
                ? "border-b-2 border-indigo-500 text-indigo-500"
                : "text-[#4E5765] hover:text-indigo-600 duration-300"
            }`}
          >
            <a
              onClick={() => handleTabClick("women")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              Women
            </a>
          </li>
          <li
            className={` ${
              activeTab === "accessories"
                ? "border-b-2 border-indigo-500 text-indigo-500"
                : "text-[#4E5765] hover:text-indigo-600 duration-300"
            }`}
          >
            <a
              onClick={() => handleTabClick("accessories")}
              className="block pb-3 whitespace-nowrap"
              href="#0"
            >
              Accessories
            </a>
          </li>
        </ul>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default CategoryPage;
