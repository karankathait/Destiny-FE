import React from "react";
import Image from "next/image";
import Image1 from "@/images/WomenClothesImg/women-clothes-1.jpg";
import Image2 from "@/images/WomenClothesImg/women-clothes-3.jpg";
import Image3 from "@/images/WomenClothesImg/women-clothes-2.jpg";
const WomenClothesData = [
  {
    id: 1,
    title: "Black Basic Tee",
    thumbnail: Image1,
    images: [
      "image1_1.jpg",
      "image1_2.jpg",
      "image1_3.jpg",
      "image1_4.jpg",
      "image1_5.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum graid mauris et justo ultricies, ut varius ligula iaculis.",
    highlights: [
      "100% Cotton",
      "Comfortable Fit",
      "Breathable Fabric",
      "MultipleColorsAvailable",
      "Machine Washable",
    ],
    details:
      "Sed cursus, velit in condimentum commodo, eros odio sodales dolor, et vulputate odio mi a metus.",
    price: 24.99,
    rating: 4.5,
    totalRatings: 120,
    totalSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 2,
    title: "Mountains Artwork Tee",
    thumbnail: Image2,
    images: [
      "image2_1.jpg",
      "image2_2.jpg",
      "image2_3.jpg",
      "image2_4.jpg",
      "image2_5.jpg",
    ],
    description:
      "In hac habitasse platea dictumst. Maurisiddiam eget orci graid ultrices. Sed tinidnt tortor vel bibendum mattis.",
    highlights: [
      "Soft and Stretchy Fabric",
      "Modern V-Neck Design",
      "idal for Casual Wear",
      "Easy to Mix and Match",
      "Available in VariousColors",
    ],
    details:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed et dapibus elit.",
    price: 29.99,
    rating: 4.8,
    totalRatings: 150,
    totalSizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Navy Blue", "Burgundy", "Olive Green"],
  },
  {
    id: 3,
    title: "Off-White Basic Tee",
    thumbnail: Image3,
    images: [
      "image3_1.jpg",
      "image3_2.jpg",
      "image3_3.jpg",
      "image3_4.jpg",
      "image3_5.jpg",
    ],
    description:
      "Proin bibendum, dolor nec fermentum elementum, mi nisl accumsan metus, at rhoncus dolor risus vel erat.",
    highlights: [
      "Unique Graphic Prints",
      "Durable Print Quality",
      "Casual and Stylish",
      "Made from Quality Materials",
      "Easy to Care For",
    ],
    details:
      "Curabitur ac vestibulum augue. Aenean euismod, ipsum ut efficitur euismod, neque sem aliquet mi, vel aliquet turpis lectus sit amet tellus.",
    price: 19.99,
    rating: 4.2,
    totalRatings: 100,
    totalSizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Charcoal Gray", "Royal Blue"],
  },
];
const WomenClothes = () => {
  return (
    <div className="bg-white pb-10">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <p className="text-indigo-600 font-semibold">Browse all favorites →</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {WomenClothesData.map((product) => {
            return (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[600px]">
                  <Image
                    src={product.thumbnail.src}
                    width={1000}
                    height={1000}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
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

export default WomenClothes;
