import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/BestSellingImg/best-selling-1.jpg";
import Image2 from "@/images/BestSellingImg/best-selling-2.jpg";
import Image3 from "@/images/BestSellingImg/best-selling-3.jpg";
import Image4 from "@/images/BestSellingImg/best-selling-4.jpg";
import Image5 from "@/images/BestSellingImg/best-selling-5.png";
import Image6 from "@/images/BestSellingImg/best-selling-6.jpg";
import Image7 from "@/images/BestSellingImg/best-selling-7.jpg";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TopDestinationData = [
  {
    id: 1,
    image: Image1,
    location: "Kashmir",
    country: "India",
  },
  {
    id: 2,
    image: Image2,
    location: "Mauritius",
    country: "Majestic Mauritius",
  },
  {
    id: 3,
    image: Image3,
    location: "Europe",
    country: "Europe",
  },
  {
    id: 4,
    image: Image4,
    location: "North East",
    country: "India",
  },
  {
    id: 5,
    image: Image5,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    id: 6,
    image: Image6,
    location: "Bhutan",
    country: "Bhutan",
  },
  {
    id: 7,
    image: Image7,
    location: "Bali",
    country: "Indonesia",
  },
];
const BestSellingPackages = () => {
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
          <div className="text-xl font-bold">Best Selling packages</div>
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
            {TopDestinationData.map((TourType) => {
              return (
                <div key={TourType.id} className="px-2">
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="w-full h-44">
                      <img
                        src={TourType.image.src}
                        alt={`Slide ${TourType.title}`}
                        className="w-full h-full object-cover hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
                    {/* Light overlay */}
                    <div className="absolute bottom-4 w-full px-4">
                      <p className="text-white text-xl font-semibold">
                        {TourType.location}
                      </p>{" "}
                      <p className="text-white">{TourType.country}</p>
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

export default BestSellingPackages;
