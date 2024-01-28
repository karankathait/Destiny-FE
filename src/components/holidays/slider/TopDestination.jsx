import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "@/images/TopDestinationImg/Top-Destination-1.jpg";
import Image2 from "@/images/TopDestinationImg/Top-Destination-2.jpg";
import Image3 from "@/images/TopDestinationImg/Top-Destination-3.jpg";
import Image4 from "@/images/TopDestinationImg/Top-Destination-4.jpg";
import Image5 from "@/images/TopDestinationImg/Top-Destination-5.jpg";
import Image6 from "@/images/TopDestinationImg/Top-Destination-6.jpg";
import Image7 from "@/images/TopDestinationImg/Top-Destination-7.jpg";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TopDestinationData = [
  {
    id: 1,
    image: Image1,
    location: "Himanchal Pradesh",
  },
  {
    id: 2,
    image: Image2,
    location: "Vietnam",
  },
  {
    id: 1,
    image: Image3,
    location: "Lakshadweep",
  },
  {
    id: 1,
    image: Image4,
    location: "South Africa",
  },
  {
    id: 1,
    image: Image5,
    location: "Goa",
  },
  {
    id: 1,
    image: Image6,
    location: "South India",
  },
  {
    id: 1,
    image: Image7,
    location: "Australia",
  },
];
const TopDestination = () => {
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

export default TopDestination;
