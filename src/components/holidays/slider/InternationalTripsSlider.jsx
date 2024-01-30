import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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
    id: 3,
    image: Image3,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 4,
    image: Image4,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 5,
    image: Image5,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 6,
    image: Image6,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 7,
    image: Image7,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 8,
    image: Image8,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 9,
    image: Image9,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 10,
    image: Image10,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 11,
    image: Image11,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 12,
    image: Image12,
    location: "Singapore",
    price: "80,890",
    days: 7,
    nights: 6,
  },
  {
    id: 12,
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
        {InternationalTripsData.map((TourType) => {
          return (
            <div key={TourType.id} className="px-2 cursor-pointer">
              <div className="border overflow-hidden rounded-lg">
                <div className="w-full h-48 object-cover overflow-hidden">
                  <Image
                    src={TourType.image.src}
                    width={500}
                    height={300}
                    alt={`Slide ${TourType.title}`}
                    className="w-full h-full hover:scale-110 duration-700"
                  />
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-100">
                  <h2 className="text-lg font-semibold">{TourType.location}</h2>
                  <h2 className="">
                    <span className="text-sm text-slate-500">Starting From </span>
                    <span className="text-xl font-semibold text-green-700">
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

export default InternationaltripsSlider;
