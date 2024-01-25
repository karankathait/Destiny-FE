import React, { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import Package1 from "@/images/PopularPackagesImg/package1.jpg";
import Package2 from "@/images/PopularPackagesImg/package2.jpg";
import Package3 from "@/images/PopularPackagesImg/package3.jpg";
const packagesData = [
  {
    image: Package1,
    location: "Prague",
    title: "Idyllic Tropical Beach Resort",
    duration: "3 Days 4 Nights",
    rating: "4.8",
    people: "26",
    price: "250",
  },
  {
    image: Package2,
    location: "California",
    title: "Photography of Hiking Man",
    duration: "3 Days 4 Nights",
    rating: "4.8",
    people: "26",
    price: "360",
  },
  {
    image: Package3,
    location: "Turkey",
    title: "Canal Beside Houses",
    duration: "3 Days 4 Nights",
    rating: "4.8",
    people: "26",
    price: "280",
  },
];


const PopularPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the default duration of animations
      easing: "ease-in-out", // Set the default easing for animations
    });
  }, []);

  return (
    <div className="w-full flex justify-center bg-slate-50 py-5 ">
      <div className="w-10/12 text-center">
        <div>
          <p className="text-lg font-semibold py-1">
            <span className="pl-12 pr-2 bg-[#FF9933]">Popular</span>Packages
          </p>
          <p className="text-3xl lg:text-4xl font-bold py-1">
            The Best Of Our Packages
          </p>
        </div>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagesData.map((packageItem, index) => {
            console.log("packageItem : ",packageItem)
            return (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-once="true"
                className="min-h-[500px] max-h-[500px]"
              >
                <div className="relative">
                  <p className="absolute left-0 right-0 top-10 text-2xl font-extrabold text-white">
                    <span className="text-[#FF9933]">$</span>
                    {packageItem.price}
                  </p>
                  <div>
                    <img
                      src={packageItem.image.src}
                      alt={packageItem.title}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="bg-yellow-200 w-full flex justify-center relative">
                  <div className="w-11/12 p-8 py-12 bg-white shadow-lg h-64 rounded-md absolute -top-10 text-left">
                    <div className="w-2/5">
                      <p className="bg-[#F3F7F6] text-[#6CAC45] text-center py-1 rounded-md">
                        {packageItem.location}
                      </p>
                    </div>
                    <div className="text-xl font-extrabold   text-[#222222] hover:text-[#FF9933] duration-500 cursor-pointer py-4">
                      {packageItem.title}
                    </div>
                    <div>
                      <div className="flex gap-10 items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF9933]">
                            <MdAccessTime />
                          </span>
                          <span className="text-[#9A9A9A]">
                            {packageItem.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF9933]">
                            <BsPerson />
                          </span>
                          <span className="text-[#9A9A9A]">
                            {packageItem.people}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF9933]">
                            <FaRegStar />
                          </span>
                          <span className="text-[#9A9A9A]">
                            {packageItem.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;
