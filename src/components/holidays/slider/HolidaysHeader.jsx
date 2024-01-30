import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Image1 from "@/images/HolidayPosterImg/holiday-poster-1.png";
import Image2 from "@/images/HolidayPosterImg/holiday-poster-2.png";
import Image3 from "@/images/HolidayPosterImg/holiday-poster-3.png";
import Image4 from "@/images/HolidayPosterImg/holiday-poster-4.png";
import Image5 from "@/images/HolidayPosterImg/holiday-poster-5.png";
import Image6 from "@/images/HolidayPosterImg/holiday-poster-6.png";
import Image7 from "@/images/HolidayPosterImg/holiday-poster-7.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PosterData = [
  {
    id: 1,
    title: "Cherry Blossoms Of Japan",
    image: Image1,
  },

  {
    id: 2,
    title: "Dubai Shopping Festival",
    image: Image2,
  },
  {
    id: 3,
    title: "Andaman Holidays",
    image: Image3,
  },
  {
    id: 4,
    title: "Europe Holidays",
    image: Image4,
  },
  {
    id: 5,
    title: "Azerbaijan Holidays",
    image: Image5,
  },
  {
    id: 6,
    title: "Lakshadweep Holidays",
    image: Image6,
  },
  {
    id: 7,
    title: "USA Holidays",
    image: Image7,
  },
];

const HolidaysHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    // autoplaySpeed: 2000, // Delay between each slide in milliseconds
    // arrows: true,
  };

  const sliderRef = useRef(null);
  const handleNext = (e) => {
    console.log("Button clicked!");
    sliderRef.current.slickNext();
  };

  const handlePrev = (e) => {
    console.log("Button clicked!");

    sliderRef.current.slickPrev();
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden relative">
        <Slider {...settings} ref={sliderRef}>
          {PosterData.map((imageUrl, index) => {
            // console.log(imageUrl); // Log the imageUrl
            return (
              <div
                key={index}
                className="relative w-full h-72 md:h-auto flex items-center justify-center"
              >
                <Image
                  src={imageUrl.image.src}
                  width={1300}
                  height={500}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-16 w-full flex items-center justify-center">
                  <h1 className="cedarville-cursive-regular text-center text-white font-medium text-4xl ">
                    {imageUrl.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="w-full absolute bottom-12 lg:bottom-20 flex flex-col items-center text-center ">
          <div className="w-full lg:w-3/6 tet-sm lg:text-4xl font-semibold text-white pb-6">
            Turn Your Dream Holiday Into A Reality
          </div>
          <div className="relative w-5/6 lg:w-2/6 flex">
            <input
              type="text"
              className="rounded w-full p-5 py-2 lg:py-4 outline-none"
              placeholder="Hey Traveller, Where Do You Want To Go?"
            />{" "}
            <button className="bg-[#FF9933] text-white px-4 lg:px-8 absolute py-3 rounded lg:py-5 right-0">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={handlePrev}
            className="text-white text-3xl absolute top-36 left-2"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="text-white text-3xl absolute top-36 right-2"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidaysHeader;
