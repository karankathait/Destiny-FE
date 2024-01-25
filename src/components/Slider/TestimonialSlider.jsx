import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import profile1 from "@/images/TestimonialImg/profile-pic-1.jpg";
import profile2 from "@/images/TestimonialImg/profile-pic-2.jpg";
import profile3 from "@/images/TestimonialImg/profile-pic-3.jpg";
import profile4 from "@/images/TestimonialImg/profile-pic-4.jpg";
import profile5 from "@/images/TestimonialImg/profile-pic-5.jpg";
// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    image: profile1,
    rating: 5,
    name: "John Doe",
    designation: "CEO, Company A",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: profile2,
    rating: 4,
    name: "Jane Smith",
    designation: "CTO, Company B",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: profile3,
    rating: 4,
    name: "Jane Smith",
    designation: "CTO, Company B",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    image: profile4,
    rating: 4,
    name: "Jane Smith",
    designation: "CTO, Company B",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    image: profile5,
    rating: 4,
    name: "Jane Smith",
    designation: "CTO, Company B",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Set arrows to false to hide default navigation buttons
  };

  return (
    <div className="w-full flex justify-center bg-[#F8FAFC] py-10">
      <div className="bg-white w-full lg:w-6/12 py-8 px-6 shadow-lg rounded-lg">
        <div className="text-center">
          <p className="text-lg font-semibold py-1">
            <span className="pl-12 bg-[#FF9933]">Testimo</span>nials
          </p>
          <p className="text-3xl lg:text-4xl font-bold py-1 mb-6">
            What Saying our Happy <br /> Customers
          </p>
        </div>
        <div>
          {/* Navigation buttons */}
          <div className="hidden lg:flex justify-center gap-5 relative">
            <button
              onClick={handlePrev}
              className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white absolute -left-12 top-28"
            >
              <TiArrowLeftThick />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#FF9933] hover:bg-[#63AB45] duration-300 p-4 rounded-full text-white absolute -right-12 top-28"
            >
              <TiArrowRightThick />
            </button>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {testimonialsData.map((testimonial) => {
              return (
                <div key={testimonial.id} className="py-4">
                  <div className="flex justify-center relative">
                    <img
                      src={testimonial.image.src}
                      className="w-36 rounded-full"
                      alt={`Testimonial ${testimonial.id}`}
                    />
                    <p className="text-xs py-1 lg:py-0 flex items-center justify-center gap-2 absolute -bottom-2 w-[50px] rounded bg-[#63AB45] lg:text-base font-bold text-white">
                      <FaStar />
                      {testimonial.rating}
                    </p>
                  </div>
                  <div className="pt-8 px-10 text-center">
                    <p className="text-lg lg:text-2xl italic text-[#555555]">
                      {testimonial.review}
                    </p>
                    <p className="text-2xl font-bold pt-4">
                      {testimonial.name}
                    </p>
                    <p className="text-sm lg:text-md">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
