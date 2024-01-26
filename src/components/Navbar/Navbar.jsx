import Link from "next/link";
import React, { useState } from "react";
import profile from "@/images/profile.jpg";
import { useRouter } from "next/router";
console.log("profile : ", profile);
const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleScroll = () => {
    // Set isSticky to true when the user scrolls down, and false when they scroll up
    setIsSticky(window.scrollY > 0);
  };

  // Attach scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`bg-white border shadow-md ${
          isSticky ? "fixed top-0 left-0 w-full z-50" : ""
        }`}
      >
        {" "}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={handleShowMobileMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-3xl font-bold">
                  <span className="text-orange-500">D</span>estiny
                </span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
              </div>
              <div className="hidden pl-44 sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className={`${
                      router.pathname === "/"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current={router.pathname === "/" ? "page" : undefined}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${
                      router.pathname === "/about-us"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-services"
                    className={`${
                      router.pathname === "/our-services"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className={`${
                      router.pathname === "/projects"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`${
                      router.pathname === "/contact-us"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/destiny-store"
                    className={`${
                      router.pathname === "/destiny-store"
                        ? "bg-[#FF9933] text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={showProfile}
                      onClick={handleShowProfile}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile.src}
                        alt=""
                      />
                    </button>
                  </button>
                </div>

                {showProfile && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          {showMobileMenu && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
              <div className="relative max-w-xs w-full bg-white h-full overflow-y-auto">
                <div className="flex justify-end p-4">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleShowMobileMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <Link
                    href="/"
                    className={`${
                      router.pathname === "/"
                        ? "bg-[#FF9933] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                    aria-current={router.pathname === "/" ? "page" : undefined}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${
                      router.pathname === "/about-us"
                        ? "bg-[#FF9933] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                    aria-current={router.pathname === "/about-us" ? "page" : undefined}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-services"
                    className={`${
                      router.pathname === "/our-services"
                        ? "bg-[#FF9933] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`${
                      router.pathname === "/contact-us"
                        ? "bg-[#FF9933] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/destiny-store"
                    className={`${
                      router.pathname === "/destiny-store"
                        ? "bg-[#FF9933] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
