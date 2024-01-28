import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "@/images/TourTypesImg/tour-type-1.jpg";
import image2 from "@/images/TourTypesImg/tour-type-2.jpg";
import image3 from "@/images/TourTypesImg/tour-type-3.jpg";
import image4 from "@/images/TourTypesImg/tour-type-4.jpg";
import image5 from "@/images/TourTypesImg/tour-type-5.jpg";
import image6 from "@/images/TourTypesImg/tour-type-6.jpg";
const TourTypesSlider = () => {
  const TourType = [
    {
      id: 1,
      image: image1,
      title: "City Tour",
    },
    {
      id: 2,
      image: image2,
      title: "Beach Party",
    },
    {
      id: 3,
      image: image3,
      title: "Museum Tour",
    },
    {
      id: 4,
      image: image4,
      title: "Cruise Ship",
    },
    {
      id: 5,
      image: image5,
      title: "explore History",
    },
    {
      id: 6,
      image: image6,
      title: "Hiking & Diving",
    },
    {
      id: 7,
      image: image1,
      title: "City Tour",
    },
    {
      id: 8,
      image: image2,
      title: "Beach Party",
    },
    {
      id: 9,
      image: image3,
      title: "Museum Tour",
    },
    {
      id: 10,
      image: image4,
      title: "Cruise Ship",
    },
    {
      id: 11,
      image: image5,
      title: "explore History",
    },
    {
      id: 12,
      image: image6,
      title: "Hiking & Diving",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 450, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center py-14">
      <div className="w-11/12">
        <div className="text-center pb-8">
          <p className="text-lg font-semibold py-1">
            <span className="pl-12 pr-2 bg-[#FF9933]">Tour</span>Types
          </p>
          <p className="palanquin-dark-medium text-[#222222] text-3xl lg:text-4xl font-bold py-1">
          Find Adventure in Life
          </p>
        </div>
        <Slider {...settings} className="">
          {TourType.map((TourType) => {
            return (
              <div key={TourType.id} className="px-2">
                <div className="w-full">
                  <img
                    src={TourType.image.src}
                    alt={`Slide ${TourType.title}`}
                    className="w-full h-full object-cover rounded"
                  />
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
                </div>
                <div className="text-center pt-4">
                  <h2 className="text-lg font-semibold">{TourType.title}</h2>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TourTypesSlider;
