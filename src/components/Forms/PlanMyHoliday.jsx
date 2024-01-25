import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";

const PlanMyHolidayForm = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleCodeSelection = (code) => {
    // You can handle the selected code here
    console.log(`Selected code: ${code}`);
    setIsOpen(false); // Close the dropdown after selection
  };

  const countryCodes = [
    { code: '+91', flag: '🇮🇳' },
    { code: '+1', flag: '🇺🇸' },
    // Add more country codes as needed
  ];
  const validationSchema = Yup.object({
    to: Yup.string().required('To is required'),
    email: Yup.string().required('Email is required'),
    // Add more validation for other fields
    email: Yup.string().email('Invalid email address').required('Email is required'),
    // mobile: Yup.number().mobile('Invalid contact number').required('Mobile Number is required')
    // ... other fields
  });

  const formik = useFormik({
    initialValues: {
      to: '',
      from: '',
      email: '',
      // ... other fields
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your form submission logic goes here
      console.log('Form submitted:', values);
    },
  });

  
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-full md:w-8/12 lg:w-7/12 p-6 shadow-sm flex justify-center">
        <div className="flex border shadow-lg w-full">
          <div className="hidden lg:block lg:w-2/5 bg-[#F2F2F2]">
            <h1 className="text-center text-[#F4364F] text-2xl py-6">
              How We Work?
            </h1>
            <div className="p-6">
              <div className="flex items-center gap-4 pb-4">
                <div>
                  <img
                    src="https://www.tripclap.com/assets/admin/images/3.png"
                    alt=""
                    className="w-10"
                  />
                </div>
                <div>
                  <h1>Select your tour</h1>
                  <p>tell us your Requirements</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <div>
                  <img
                    src="https://www.tripclap.com/assets/admin/images/2.png"
                    alt=""
                    className="w-10"
                  />
                </div>
                <div>
                  <h1>Get Multiple Free Quotes</h1>
                  <p>From Our Verified Travel Experts</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <div>
                  <img
                    src="https://www.tripclap.com/assets/admin/images/1.png"
                    alt=""
                    className="w-10"
                  />
                </div>
                <div>
                  <h1>Customize & Book</h1>
                  <p>Your Preferred Tour</p>
                </div>
              </div>
            </div>

            <div className="text-center text-2xl font-normal text-[#F4364F] pb-6">We're a growing company</div>
            <div className="flex justify-evenly">
              <div className="text-center">
                <div><img src="https://www.tripclap.com/assets/admin/images/agent2a.png" alt="" /></div>
                <h1 className="font-medium">750+</h1>
                <h1 className="">Tours</h1>
              </div>
              <div className="text-center">
                <div><img src="https://www.tripclap.com/assets/admin/images/traveler1.png" alt="" /></div>
                <h1 className="font-medium">750+</h1>
                <h1 className="">Tours</h1>
              </div>
              <div className="text-center">
                <div><img src="https://www.tripclap.com/assets/admin/images/places1.png" alt="" /></div>
                <h1 className="font-medium">750+</h1>
                <h1 className="">Tours</h1>
              </div>
            </div>
            <div className="py-8">
              <hr />
            </div>
            <div className="text-center">
              <h1 className="flex items-center justify-center text-sm gap-2 py-2">
                <span><img src="https://www.tripclap.com/assets/admin/images/call.png" alt="" className="w-4"/></span> Call Us for details
              </h1>
              <h1 className="text-3xl text-[#F4364F]">122 453 637</h1>
            </div>
          </div>
          <div className="w-full lg:w-3/5 p-8">
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src="https://tcsg.in/assets/images/homecards/places_new.png"
                  alt=""
                />
              </div>
              <div className="text-[#F4364F] text-xl">
                Where do you want to go?
              </div>
            </div>
            <form action="">
              <div className="pb-4">
                <label htmlFor="to">
                  <div className="pb-2">To*</div>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.to}
                      className="w-full py-3 border border-l-slate-300 rounded outline-none focus:border-[#F4364F] p-14"
                    />
                    <span className="absolute left-5">
                      <ImLocation className="text-[#F4362F]" />
                    </span>
                  </div>
                </label>
              </div>
              <div className="pb-4">
                <label htmlFor="from">
                  <div className="pb-2">From*</div>
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      className="w-full py-3 border border-l-slate-300 rounded outline-none focus:border-[#F4364F] p-14"
                    />
                    <span className="absolute left-5">
                      <ImLocation className="text-[#F4362F]" />
                    </span>
                  </div>
                </label>
              </div>
              <div className="pb-2">Departure Date (Choose Any)*</div>
              <div className="flex gap-1 pb-4">
                <button className="border w-1/3 py-3 rounded bg-slate-500 text-white">
                  Fixed
                </button>
                <button className="border w-1/3 py-3 rounded bg-slate-500 text-white">
                  Flexible
                </button>
                <button className="border w-1/3 py-3 rounded bg-slate-500 text-white">
                  Anytime
                </button>
              </div>
              <div className="pb-4">
                <label htmlFor="">
                  <div className="pb-2">Email*</div>
                  <div className="flex items-center relative">
                    <input
                        type="email"
                        placeholder="Enter Your Email ID"
                        className="p-14 w-full py-3 border border-slate-300 shadow-sm outline-none focus:border-[#F4364F]"
                    />
                    <span className="absolute left-5">
                    <MdOutlineMailOutline className="h-5 w-5 text-[#F4364F]"/>
                    </span>
                  </div>
                </label>
              </div>
              <div className="">
                <label htmlFor="">
                  <div className="pb-2">Phone Number</div>
                  <div className="flex items-center relative">
                    <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="p-24 w-full py-3 border border-slate-300 shadow-sm outline-none focus:border-[#F4364F]"
                    />
                    <button
                        onClick={toggleDropdown}
                        className="bg-[#F2F2F2] py-2 p-1 absolute left-2 flex items-center text-gray-600"
                    >
                        {countryCodes[0].flag} {countryCodes[0].code} {/* Display the first code by default */}
                        <svg
                        className="ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 6.70711C6.68342 7.09763 7.31658 7.09763 7.70711 6.70711L10 4.41421L12.2929 6.70711C12.6834 7.09763 13.3166 7.09763 13.7071 6.70711C14.0976 6.31658 14.0976 5.68342 13.7071 5.29289L10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L6.29289 5.29289C5.90237 5.68342 5.90237 6.31658 6.29289 6.70711Z"
                            />
                        ) : (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L13.7071 10.2929C14.0976 10.6834 14.0976 11.3166 13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071L10 9.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z"
                            />
                        )}
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        {countryCodes.map((country, index) => (
                            <button
                            key={index}
                            onClick={() => handleCodeSelection(country.code)}
                            className="block w-full text-left px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            >
                            {country.flag} {country.code}
                            </button>
                        ))}
                        </div>
                    )}
                    </div>
                </label>
              </div>
              <div className="pt-5">
                <button className="w-full py-3 bg-[#F4364F] text-white">
                  Plan My Holiday
                </button>
              </div>
              <span className="text-sm italic text-slate-400 pt-2">
                <input type="checkbox" /> I agree to get contacted by tripclap
                partners and get updates on whatsapp as per terms & privacy
                policy
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanMyHolidayForm;
