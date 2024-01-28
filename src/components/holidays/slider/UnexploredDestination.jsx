import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/UnexploredImg/unexplored-1.jpg";
import Image2 from "@/images/UnexploredImg/unexplored-2.jpg";
import Image3 from "@/images/UnexploredImg/unexplored-3.jpg";
import Image4 from "@/images/UnexploredImg/unexplored-4.jpg";
import Image5 from "@/images/UnexploredImg/unexplored-5.jpg";

import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TopDestinationData = [
  {
    id: 1,
    image: Image1,
    location: "Kenya",
  },
  {
    id: 2,
    image: Image2,
    location: "Egypt",
  },
  {
    id: 1,
    image: Image3,
    location: "South Africa",
  },
  {
    id: 1,
    image: Image4,
    location: "Vietnam",
  },
  {
    id: 1,
    image: Image5,
    location: "Australia",
  },
  {
    id: 1,
    image: Image1,
    location: "Kenya",
  },
  {
    id: 2,
    image: Image2,
    location: "Egypt",
  },
  {
    id: 1,
    image: Image3,
    location: "South Africa",
  },
  {
    id: 1,
    image: Image4,
    location: "Vietnam",
  },
  {
    id: 1,
    image: Image5,
    location: "Australia",
  },
  
];
const UnexploredDestination = () => {
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 780, // Adjust the breakpoint as needed
        settings: {
          slidesToShow:3,
        },
      },
      
      {
        breakpoint: 450, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {TopDestinationData.map((TourType) => {
          return (
            <div key={TourType.id} className="px-2">
              <div className="relative bg-red-300 rounded-xl overflow-hidden">
                <div className="w-full h-80">
                  <img
                    src={TourType.image.src}
                    alt={`Slide ${TourType.title}`}
                    className="w-full h-full object-cover hover:scale-105 duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
                {/* Light overlay */}
                <div className="absolute bottom-8 w-full text-center">
                  <p className="text-white text-2xl font-semibold">{TourType.location}</p>{" "}
                  {/* Centered location text */}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        <button
          onClick={handlePrev}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-40 left-4"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-40 right-4"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default UnexploredDestination;
