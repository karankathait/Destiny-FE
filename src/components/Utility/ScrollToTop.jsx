import React, { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 20px from the top of the document
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener to avoid memory leaks
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 bg-gray-400">
        <button
          className={`${
            isVisible ? "block" : "hidden"
          } z-20 fixed bottom-4 right-4 bg-[#FF9933] hover:bg-[#63AB45] duration-300 text-white p-4 rounded-full focus:outline-none`}
          onClick={scrollToTop}
        >
          <TiArrowUpThick />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
