import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "@/images/LatestNewsImg/latest-news-img-1.jpg";
import image2 from "@/images/LatestNewsImg/latest-news-img-2.jpg";
import image3 from "@/images/LatestNewsImg/latest-news-img-3.jpg";
import {
  MdOutlinePerson,
  MdOutlineRemoveRedEye,
  MdOutlineWatchLater,
  MdPerson,
} from "react-icons/md";
const blogData = [
  {
    title: "Man Sitting the Grass Covered Mountains",
    author: "Masum Billah",
    date: "19 Nov, 2023",
    duration: "5 Mins",
    image: image1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam deserunt.",
  },
  {
    title: "Man and Woman Beside Gray 5-door Hatchback",
    author: "Masum Billah",
    date: "19 Nov, 2023",
    duration: "5 Mins",
    image: image2,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam deserunt.",
  },
  {
    title: "Brown Wooden House Near Tree on Blue Sky",
    author: "Masum Billah",
    date: "19 Nov, 2023",
    duration: "5 Mins",
    image: image3,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam deserunt.",
  },
];

const LatestNews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the default duration of animations
      easing: "ease-in-out", // Set the default easing for animations
    });
  }, []);

  return (
    <div className="w-full flex justify-center bg-white py-20">
      <div className="w-10/12 lg:w-11/12 text-center">
        <div>
          <p className="text-lg font-semibold py-1">
            <span className="pl-12 bg-[#FF9933]">Latest N</span>ews
          </p>
          <p className="text-3xl lg:text-4xl font-bold pb-8">
            Updated News and Blog <br />
            From Travelers
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => {
            return (
              <div
                key={index}
                data-aos={
                  index === 0
                    ? "fade-right"
                    : index === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-once="false"
                className="bg-white p-8 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    className="w-full h- rounded-lg object-cover"
                    src={blog.image.src}
                    alt={blog.title}
                  />
                  <button className="absolute -bottom-3 right-4 bg-[#63AB45] text-white text-lg font-medium px-5 rounded">
                    Travel
                  </button>
                </div>
                <div className="pt-6 text-[#555555]">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9933]">
                        <MdOutlinePerson className="h-5 w-5" />
                      </span>
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9933]">
                        <MdOutlineWatchLater className="h-5 w-5" />
                      </span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF9933]">
                      <MdOutlineRemoveRedEye className="h-5 w-5" />
                    </span>
                    <span>{blog.duration}</span>
                  </div>
                </div>
                <div className="text-start py-4">
                  <div className="text-[#333333] font-bold text-xl mb-2">
                    {blog.title}
                  </div>
                  <p className="text-[#868686] text-base">
                    {blog.content.length > 50
                      ? blog.content.slice(0, 100) + "..."
                      : blog.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
