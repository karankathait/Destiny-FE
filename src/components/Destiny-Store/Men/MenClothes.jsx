import { useState } from "react";
import { MenClothesData } from "@/components/DataFiles/MenClothesData";
import BuyNowOverlay from "../BuyNowOverlay";
import Image from "next/image";
import Link from "next/link";
const MenClothes = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State to track overlay open/close
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product

  const handleBuyNowOverlay = (id) => {
    // alert(id)
    setSelectedProduct(id);
    setIsOverlayOpen(true)
    // alert("clicked")
    // console.log("Clicked")
  }

  // const closeOverlay = () => {
  //   setIsOverlayOpen(false); // Close the overlay
  // };

  return (
    <div className="bg-white pb-10">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {MenClothesData.map((product) => {
            return (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                  <Image
                    width={900}
                    height={900}
                    src={product.thumbnail.src}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full hover:scale-110 duration-500 object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <Link href="/">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.title}
                      </Link> */}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div className="text-center py-2">
                  <button
                    onClick={(e)=>{handleBuyNowOverlay(product.id)}}
                    className="w-full bg-indigo-600 rounded text-white font-semibold py-3">
                      Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isOverlayOpen && (
        <BuyNowOverlay
          productId={selectedProduct}
          isOpen={isOverlayOpen}
          onClose={() => setIsOverlayOpen(false)}
        />
      )}
    </div>
  );
};

export default MenClothes;
