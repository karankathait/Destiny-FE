import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster1 from "@/images/DestinationPoster/poster-1.png";
import poster2 from "@/images/DestinationPoster/poster-2.png";
import poster3 from "@/images/DestinationPoster/poster-3.png";
import poster4 from "@/images/DestinationPoster/poster-4.png";
import poster5 from "@/images/DestinationPoster/poster-5.png";
import poster6 from "@/images/DestinationPoster/poster-6.png";
import poster7 from "@/images/DestinationPoster/poster-7.png";
import poster8 from "@/images/DestinationPoster/poster-8.png";
import poster9 from "@/images/DestinationPoster/poster-9.png";
import poster10 from "@/images/DestinationPoster/poster-10.png";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const PackagesPosters = () => {

    const sliderRef = useRef(null);
    const handleNext = (e) => {
      sliderRef.current.slickNext();
    };
  
    const handlePrev = (e) => {  
      sliderRef.current.slickPrev();
    };
      
  const images = [
      poster2,
    poster1,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    poster8,
    poster9,
    poster10,
  ];

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

  

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-11/12 overflow-hidden rounded-2xl relative">
        <Slider {...settings} ref={sliderRef}>
        {images.map((imageUrl, index) => {
        // console.log(imageUrl); // Log the imageUrl
        return (
            <div key={index} className="w-full h-72 md:h-auto flex items-center justify-center">
            <img
                src={imageUrl.src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
            />
            </div>
        );
        })}

        </Slider>
        <div className='pt-8 flex justify-center gap-5'>
              <button onClick={handlePrev} className='bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white'><TiArrowLeftThick /></button>
              <button onClick={handleNext} className='bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white'><TiArrowRightThick /></button>
            </div>
      </div>
    </div>
  );
};

export default PackagesPosters;
