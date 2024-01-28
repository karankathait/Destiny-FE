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
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {DomesticTripsData.map((TourType) => {
          return (
            <div key={TourType.id} className="px-2 ">
              <div className="w-full h-44 object-cover">
                <img
                  src={TourType.image.src}
                  alt={`Slide ${TourType.title}`}
                  className="w-full h-full  rounded"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
              </div>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{TourType.location}</h2>
                <h2 className="">
                  Starting From
                  <br />
                  {TourType.price}
                </h2>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        <button
          onClick={handlePrev}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-20"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-20 right-0"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DomesticTripsSlider;
