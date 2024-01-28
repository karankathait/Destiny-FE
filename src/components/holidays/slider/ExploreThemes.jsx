import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/Themes/theme-1.jpg";
import Image2 from "@/images/Themes/theme-2.jpg";
import Image3 from "@/images/Themes/theme-3.jpg";
import Image4 from "@/images/Themes/theme-4.jpg";
import Image5 from "@/images/Themes/theme-5.jpg";
import Image6 from "@/images/Themes/theme-6.jpg";
import Image7 from "@/images/Themes/theme-7.jpg";
import Image8 from "@/images/Themes/theme-8.jpg";
import Image9 from "@/images/Themes/theme-9.jpg";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const themes = [
  {
    id: 1,
    image: Image1,
    name: "Summer",
    TotalLocation: "60",
  },
  {
    id: 2,
    image: Image2,
    name: "River",
    TotalLocation: "60",
  },
  {
    id: 3,
    image: Image3,
    name: "Weekend",
    TotalLocation: "60",
  },
  {
    id: 4,
    image: Image4,
    name: "Honeymoon",
    TotalLocation: "60",
  },
  {
    id: 5,
    image: Image5,
    name: "Winter",
    TotalLocation: "60",
  },
  {
    id: 6,
    image: Image6,
    name: "Adventure",
    TotalLocation: "60",
  },
  {
    id: 7,
    image: Image7,
    name: "Beach",
    TotalLocation: "60",
  },
  {
    id: 8,
    image: Image8,
    name: "Camping",
    TotalLocation: "60",
  },
  {
    id: 9,
    image: Image9,
    name: "Rafting",
    TotalLocation: "60",
  },
];
const ExploreThemes = () => {
  const sliderRef = useRef(null);
  const handleNext = (e) => {
    sliderRef.current.slickNext();
  };

  const handlePrev = (e) => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 450, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12">
        <div className="w-full flex items-center justify-between pb-5">
          <div className="text-xl font-bold">Explore Themes</div>
          <div className="bg-[#FF9933] text-xl rounded-full shadow-md">
            <button
              onClick={handlePrev}
              className="text-white lg:p-2 rounded-full top-40 left-4"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="text-white lg:p-2 rounded-full top-40 right-4"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {themes.map((TourType) => {
              return (
                <div key={TourType.id} className="px-2 cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="w-full h-52">
                      <img
                        src={TourType.image.src}
                        alt={`Slide ${TourType.name}`}
                        className="w-full h-full object-cover hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
                    {/* Light overlay */}
                    <div className="absolute bottom-4 w-full px-4">
                      <p className="text-white text-xl font-semibold">
                        {TourType.name}
                      </p>{" "}
                      <p className="text-white">{TourType.TotalLocation} + Destinations</p>
                      {/* Centered location text */}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ExploreThemes;
