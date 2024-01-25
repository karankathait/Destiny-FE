import React from 'react'
import img1 from '@/images/CategoryIcons/p-1.jpg';
import img2 from '@/images/CategoryIcons/p-2.jpg';
import img3 from '@/images/CategoryIcons/p-3.jpg';
import img4 from '@/images/CategoryIcons/p-4.jpg';
import img5 from '@/images/CategoryIcons/p-5.jpg';
import img6 from '@/images/CategoryIcons/p-6.jpg';
const toursData = [
    { image:img1, title: 'Adventure', count: 25 },
    { image:img2, title: 'City Tour', count: 85 },
    { image:img3, title: 'Hiking', count: 46 },
    { image:img4, title: 'Beach', count: 87 },
    { image:img5, title: 'Boat', count: 65 },
    { image:img6, title: 'Forest', count: 100 },
  ];
const BrowseByCategory = () => {
  return (
    <div className='w-full flex justify-center bg-slate-50 py-20'>
        <div className='w-10/12 text-center'>
            <div>
                <p className='text-lg font-semibold py-1'><span className='pl-12 pr-2 bg-[#FF9933]'>Browse</span> By Category</p>
                <p className='text-3xl lg:text-4xl font-bold py-1'>Pick your Perfect Tour</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 py-10">
            {toursData.map((tour, index) => (
                <div key={index} className="rounded overflow-hidden">
                <div className="h-20 w-20 mx-auto mt-4 bg-gray-300 rounded-full">
                    <img
                    src={tour.image.src}
                    alt={tour.title}
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className=" py-4 flex flex-col items-center">
                    <div className="font-bold text-lg mb-2">{tour.title}</div>
                    <p className="bg-[#63AB45] w-1/2 text-white text-base font-normal rounded-sm">{tour.count}+ Tours</p>
                </div>
                
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default BrowseByCategory