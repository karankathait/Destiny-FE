import React from 'react';
import Image1 from '@/images/AccessoriesImg/accessories-1.jpg'
import Image2 from '@/images/AccessoriesImg/accessories-2.jpg'
import Image3 from '@/images/AccessoriesImg/accessories-3.jpg'
import Image4 from '@/images/AccessoriesImg/accessories-4.jpg'
const TrendingAccesoriesData  = [
    {
        id : 1,
        image : Image1,
        title : 'Machined Pen',
        colour : 'Black',
        price : '$35'
    },
    {
        id : 2,
        image : Image2,
        title : 'Earthen Mug',
        colour : 'Matte Black',
        price : '$28'
    },
    {
        id : 3,
        image : Image3,
        title : 'Leatherboun Daily Journal Set',
        colour : 'Natural',
        price : '$50'
    },
    {
        id : 4,
        image : Image4,
        title : 'Leatherboun Daily Journal Set',
        colour : 'Black',
        price : '$50'
    },
]
const TrendingAccesories = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className='flex justify-between'>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending Products
        </h2>
        <p className="text-indigo-600 font-semibold">Browse all favorites →</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {TrendingAccesoriesData.map((product) => {
            return (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image.src}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                    <h3 className="py-2 text-lg font-semibold text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.title}
                      </a>
                    </h3>
                    
                  </div>
                  <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default TrendingAccesories