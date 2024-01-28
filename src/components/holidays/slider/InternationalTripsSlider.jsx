import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/InternationalTrips/international-1.jpg";
import Image2 from "@/images/InternationalTrips/international-2.jpg";
import Image3 from "@/images/InternationalTrips/international-3.jpg";
import Image4 from "@/images/InternationalTrips/international-4.jpg";
import Image5 from "@/images/InternationalTrips/international-5.jpg";
import Image6 from "@/images/InternationalTrips/international-6.jpg";
import Image7 from "@/images/InternationalTrips/international-7.jpg";
import Image8 from "@/images/InternationalTrips/international-8.jpg";
import Image9 from "@/images/InternationalTrips/international-9.jpg";
import Image10 from "@/images/InternationalTrips/international-10.jpg";
import Image11 from "@/images/InternationalTrips/international-11.jpg";
import Image12 from "@/images/InternationalTrips/international-12.jpg";
import Image13 from "@/images/InternationalTrips/international-13.jpg";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const InternationalTripsData = [
  {
    id: 1,
    image: Image1,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 2,
    image: Image2,
    location: "Europe",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image3,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image4,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image5,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image6,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image7,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image8,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image9,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image10,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image11,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image12,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 1,
    image: Image13,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
];
const InternationaltripsSlider = () => {
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
        {InternationalTripsData.map((TourType) => {
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
              <div className="bg-red-100 flex justify-between">
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
        <button onClick={handlePrev} className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-20"><MdKeyboardArrowLeft /></button>
        <button onClick={handleNext} className="absolute bg-black bg-opacity-50 text-white p-1 lg:p-2 rounded-full top-20 right-0"><MdOutlineKeyboardArrowRight /></button>
      </div>
    </div>
  );
};

export default InternationaltripsSlider;