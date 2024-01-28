import { MenClothesData } from "@/components/DataFiles/MenClothesData";
import { useState } from "react";
const BuyNowOverlay = ({ productId, onClose }) => {
  const product = MenClothesData.find((item) => item.id === productId);

  // Check if product exists
  if (!product) {
    return <div>No product found</div>;
  }

  const [selectedSize, setSelectedSize] = useState(null); // Initialize selectedSize state

  const handleSizeChange = (sizeOption) => {
    setSelectedSize(sizeOption); // Update selectedSize state when a size option is selected
  };

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (colorOption) => {
    setSelectedColor(colorOption);
  };

  console.log("product : ", product);
  return (
    <div>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0  bg-gray-700 bg-opacity-75 transition-opacity md:block"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="pt-5 lg:pt-10 flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div className="flex w-10/12 transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  onClick={onClose}
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span className="sr-only">Close</span>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 h-full">
                    <img
                      src={product.thumbnail.src}
                      alt="Two each of gray, white, and black shirts arranged on table."
                      className="object-cover object-center rounded"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {product.title}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${product.price}</p>

                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="text-slate-500 pr-2">
                            {product.rating}
                          </div>
                          <div className="flex items-center">
                            {/* Render filled stars */}
                            {[...Array(Math.floor(product.rating))].map(
                              (_, index) => (
                                <svg
                                  key={index}
                                  className="text-[#FACC15] h-5 w-5 flex-shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )
                            )}

                            {/* Render half star if applicable */}
                            {product.rating % 1 !== 0 && (
                              <svg
                                key="half-star"
                                className="text-gray-400 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 1l2.601 5.417 6.166.899-4.475 4.369 1.061 6.162L10 15.334l-5.354 2.513 1.061-6.162-4.475-4.369 6.166-.899L10 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}

                            {/* Render empty stars */}
                            {[...Array(Math.floor(5 - product.rating))].map(
                              (_, index) => (
                                <svg
                                  key={index + Math.floor(product.rating)}
                                  className="text-gray-400 h-5 w-5 flex-shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )
                            )}
                          </div>

                          <p className="sr-only">3.9 out of 5 stars</p>
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            See all {product.totalRatings} Reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Color
                          </h4>

                          <fieldset className="mt-4">
                            <legend className="sr-only">Choose a color</legend>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((colorOption, index) => (
                                <label
                                  key={`${colorOption}-${index}`}
                                  className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                                    selectedColor === colorOption
                                      ? "ring-2 ring-indigo-500"
                                      : ""
                                  }`}
                                  onClick={() => handleColorChange(colorOption)}
                                >
                                  <input
                                    type="radio"
                                    name="color-choice"
                                    value={colorOption}
                                    className="sr-only"
                                    aria-labelledby={`color-choice-${index}-label`}
                                  />
                                  <span
                                    id={`color-choice-${index}-label`}
                                    className="sr-only"
                                  >
                                    {colorOption}
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className={`h-8 w-8 bg-${colorOption.toLowerCase()} rounded-full border border-black border-opacity-10`}
                                  ></span>
                                </label>
                              ))}
                            </div>
                          </fieldset>
                        </div>

                        <div className="mt-10">
                          <div className="flex items-center justify-between pb-2">
                            <h4 className="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <a
                              href="#"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Size guide
                            </a>
                          </div>
                          <fieldset className="grid grid-cols-7 gap-4">
                            {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map(
                              (sizeOption, index) => (
                                <label
                                  key={`${sizeOption}-${index}`}
                                  className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-300 focus:outline-none sm:flex-1 cursor-pointer ${
                                    selectedSize === sizeOption
                                      ? "bg-indigo-600  text-white"
                                      : "bg-white text-gray-900 shadow-sm"
                                  }`}
                                  onClick={() => handleSizeChange(sizeOption)}
                                >
                                  {sizeOption}
                                </label>
                              )
                            )}
                          </fieldset>
                        </div>

                        <button
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>
                        <button
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center text-base font-medium text-indigo-600"
                        >
                          View full details
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowOverlay;
