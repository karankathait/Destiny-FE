import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image1 from "@/images/HomePageImg/homescreen-img-1.jpg";
import image2 from "@/images/HomePageImg/homescreen-img-2.jpg";
import image3 from "@/images/HomePageImg/homescreen-img-3.jpg";
import image4 from "@/images/HomePageImg/homescreen-img-4.jpg";
import image5 from "@/images/HomePageImg/homescreen-img-5.jpg";

const photos = [
  {
    id: 1,
    image: image1,
    title: "Discover Paradise...",
    subtitle: "Your Gateway to Dreams...",
    text: "Explore dreamy destinations. Your next adventure awaits!",
  },
  {
    id: 2,
    image: image2,
    title: "Journey to Serenity...",
    subtitle: "Where Tranquility Beckons...",
    text: "Seek tranquil landscapes. Find peace in beauty.",
  },
  {
    id: 3,
    image: image3,
    title: "Explore the Extraordinary...",
    subtitle: "Curated Adventures Await...",
    text: "Experience curated travel. Every moment is a gem.",
  },
  {
    id: 4,
    image: image4,
    title: "Wanderlust Unleashed..",
    subtitle: "Embark on Your Story...",
    text: "Unleash your wanderlust. Every journey is a story.",
  },
  {
    id: 5,
    image: image5,
    title: "Escape to Bliss...",
    subtitle: "Discover Blissful Moments...",
    text: "Find blissful moments. Make travel memories.",
  },
  // Add more photos as needed
];

const settings = {
  //   dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
};

const HomeScreen = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="relative w-full h-full">
              <div className="w-full h-[100vh] relative">
                <Image
                  src={photo.image.src}
                  width={1200}
                  height={700}
                  alt={`Slide ${photo.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              </div>
              <div className="w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="cedarville-cursive-regular text-lg lg:text-3xl text-[#EFC03E] font-cursive font-semibold mb-4">
                  {photo.title}
                </h2>
                <h1 className="text-3xl lg:text-6xl font-bold mb-5">
                  {photo.subtitle}
                </h1>
                <p className="text-lg">{photo.text}</p>
                {/* Add any additional text or elements as needed */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeScreen;
