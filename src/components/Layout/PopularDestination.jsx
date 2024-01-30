import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";
import destinationImage1 from "@/images/PopularDestinationImg/popular-destination-img-1.jpg";
import destinationImage2 from "@/images/PopularDestinationImg/popular-destination-img-2.jpg";
import destinationImage3 from "@/images/PopularDestinationImg/popular-destination-img-3.jpg";
import destinationImage4 from "@/images/PopularDestinationImg/popular-destination-img-4.jpg";
import destinationImage5 from "@/images/PopularDestinationImg/popular-destination-img-5.jpg";
import destinationImage6 from "@/images/PopularDestinationImg/popular-destination-img-6.jpg";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const slides = [
  {
    image: destinationImage1,
    title: "Majestic Wonders Expedition",
    location: "Paris, France",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  {
    image: destinationImage2,
    title: "Tropical Paradise Escape",
    location: "Agra,India",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  {
    image: destinationImage3,
    title: "Cultural Odyssey Experience",
    location: "Tokyo, Japan",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  {
    image: destinationImage4,
    title: "Adventure Seeker's Safari",
    location: "Sydney, Australia",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  {
    image: destinationImage5,
    title: "Enchanting Coastal Retreat",
    location: "New York City, USA",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  {
    image: destinationImage6,
    title: "Mountain Majesty Discovery",
    location: "Rio de Janeiro, Brazil",
    price: "999.99",
    rating: "4.5",
    peoples: "20",
    duration: "3 Days 4 Night",
  },
  // Add more items as needed
];

const PopularDestination = () => {
  const sliderRef = useRef(null);
  const handleNext = (e) => {
    console.log("Button clicked!");
    sliderRef.current.slickNext();
  };

  const handlePrev = (e) => {
    console.log("Button clicked!");

    sliderRef.current.slickPrev();
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
    <div className="w-full flex justify-center bg-fuchsia-50 pt-16">
      <div className="w-11/12 text-center">
        <p className="text-lg font-semibold py-1">
          <span className="pl-12 pr-2 text-[#222222] bg-[#FF9933]">Popular</span> Destination
        </p>
        <p className="palanquin-dark-medium text-[#222222] text-3xl lg:text-4xl font-bold py-1">
          Travel Most Popular Place <br></br>In The World
        </p>
        <div className="py-8">
          {/* Navigation buttons */}

          <Slider ref={sliderRef} {...settings}>
            {slides.map((data, index) => {
              return (
                <div
                  key={index}
                  className="rounded overflow-hidden min-h-[480px] max-h-[520px] shadow-sm bg-white px-2"
                >
                  <div className="relative">
                    <Image
                      src={data.image.src}
                      width={500}
                      height={800}
                      className=""
                      alt={`popular destination ${data.title}`}
                    />
                    <div className="absolute top-10 right-10 text-lg font-bold">
                      <span className="text-white text-2xl font-bold">
                        <span className="text-orange-400">$</span>
                        {data.price}
                      </span>
                    </div>
                  </div>
                  <div className="py-8 text-start">
                    <div className="rounded text-[#7EB966]">
                      <p className="w-2/4 px-1 rounded bg-[#F3F7F6]">
                        {data.location}
                      </p>
                    </div>
                    <p className="text-[#222222] text-xl py-4 font-bold">
                      {data.title}
                    </p>
                    <p className="flex gap-3">
                      <span className="flex items-center gap-2 text-slate-500">
                        <FaRegClock className="text-[#FF9933]" />
                        {data.duration}
                      </span>
                      <span className="flex items-center gap-2 text-slate-500">
                        <IoMdPerson className="text-[#FF9933]" />
                        {data.peoples}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-slate-500">
                      <FaRegStar className="text-[#FF9933]" />
                      {data.rating}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="pt-8 flex justify-center gap-5">
            <button
              onClick={handlePrev}
              className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white"
            >
              <TiArrowLeftThick />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white"
            >
              <TiArrowRightThick />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
