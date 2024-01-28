import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/DomesticTripsImg/domestic-1.jpg";
import Image2 from "@/images/DomesticTripsImg/domestic-2.jpg";
import Image3 from "@/images/DomesticTripsImg/domestic-3.jpg";
import Image4 from "@/images/DomesticTripsImg/domestic-4.jpg";
import Image5 from "@/images/DomesticTripsImg/domestic-5.jpg";
import Image6 from "@/images/DomesticTripsImg/domestic-6.jpg";
import Image7 from "@/images/DomesticTripsImg/domestic-7.jpg";
import Image8 from "@/images/DomesticTripsImg/domestic-8.jpg";
import Image9 from "@/images/DomesticTripsImg/domestic-9.jpg";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const DomesticTripsData = [
  {
    id: 1,
    location: "Rishikesh",
    image: Image1,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image2,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image3,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image4,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image5,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image6,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image7,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image8,
    days: 5,
    nights: 4,
    price: "12,999",
  },
  {
    id: 1,
    location: "Rishikesh",
    image: Image9,
    days: 5,
    nights: 4,
    price: "12,999",
  },
];
const DomesticTripsSlider = () => {
  const sliderRef = useRef(null);
  const handleNext = (e) => {
    sliderRef.current.slickNext();
  };

  const handlePrev = (e) => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed (laptop screens)
        settings: {
          slidesToShow: 4, // Number of slides to show on larger screens
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed (tablet screens)
        settings: {
          slidesToShow: 2, // Number of slides to show on tablet screens
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as needed (mobile screens)
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile screens
        },
      },
    ],
  };
  
  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {DomesticTripsData.map((TourType) => {
          return (
            <div key={TourType.id} className="px-2 cursor-pointer">
              <div className="border overflow-hidden rounded-lg">
                <div className="w-full h-48 object-cover overflow-hidden">
                  <img
                    src={TourType.image.src}
                    alt={`Slide ${TourType.title}`}
                    className="w-full h-full hover:scale-110 duration-700"
                  />
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-100">
                  <h2 className="text-lg font-semibold">{TourType.location}</h2>
                  <h2 className="">
                    <span className="text-sm text-slate-500">
                      Starting From{" "}
                    </span>
                    <span className="font-semibold text-green-700">
                      {TourType.price}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        <button
          onClick={handlePrev}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-28"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-28 right-0"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DomesticTripsSlider;
