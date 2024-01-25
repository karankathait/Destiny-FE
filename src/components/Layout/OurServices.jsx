import React from 'react'
import image1 from '@/images/OurServicesIcon/double-bed.png'
import image2 from '@/images/OurServicesIcon/fast-food.png'
import image3 from '@/images/OurServicesIcon/parachute.png'
import image4 from '@/images/OurServicesIcon/hiking.png'
import image5 from '@/images/OurServicesIcon/save-money.png'
import image6 from '@/images/OurServicesIcon/swimming-pool.png'
import image7 from '@/images/OurServicesIcon/guide.png'
import image8 from '@/images/OurServicesIcon/customer-service.png'
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'
const cardData = [
    {
      id:"01",
      image: image1,
      title: 'Luxury Cabin',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique.',
    },
    {
      id:"02",
      image: image2,
      title: 'Delicious Food',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique.',
    },
    {
      id:"03",
      image: image3,
      title: 'Paragliding',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      id:"04",
      image: image4,
      title: 'Adventure',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      id:"05",
      image: image5,
      title: 'MoneyBack Guarantee',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      id:"06",
      image: image6,
      title: 'Swiming Pool',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      id:"07",
      image: image7,
      title: 'Friendly Guide',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      id:"08",
      image: image8,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    // Add more data as needed
  ];
  
const OurServices = () => {
  return (
    <div className='bg-[#F3F7F6]'>
        <div className='w-full flex justify-center bg-[#F3F7F6] py-10'>
            <div className='w-10/12 text-center'>
                <div>
                    <p className='text-lg font-semibold py-1'><span className='pl-12 bg-[#FF9933]'>Our Ser</span>vices</p>
                    <p className='text-3xl lg:text-4xl font-bold py-1'>What We Offer For You <br></br>In Great Packages</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-16">
                    {cardData.map((item, index) => {
                      console.log("items : ",item)
                      return(
                        <div  key={item.id} className='pt-1 bg-[#63AB45] rounded-lg'>
                        <div className="py-10 h-[400px] bg-white overflow-hidden rounded-lg shadow-lg">
                          <div className='w-full h-24 object-cover flex justify-center items-center'>
                            <img
                                className="h-16 w-16"
                                src={item.image.src}
                                alt={item.title}
                            />
                          </div>
                          <div className="p-6 h-44">
                              <div className="font-bold text-xl mb-2">{item.title}</div>
                              <p className="text-gray-700 text-base">{item.description}</p>
                          </div>
                          <div className="p-6">
                              <button className="text-[#63AB45] hover:underline duration-300">
                                <span className='flex items-center gap-2'>Explore More <FaArrowRight /></span>
                              </button>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices