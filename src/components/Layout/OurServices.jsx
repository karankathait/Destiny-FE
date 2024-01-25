import React from 'react'
const cardData = [
    {
      image: '/double-bed.png',
      title: 'Luxury Cabin',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique.',
    },
    {
      image: '/images/fast-food.png',
      title: 'Delicious Food',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique.',
    },
    {
      image: '/images/parachute.png',
      title: 'Paragliding',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      image: '/images/hiking.png',
      title: 'Adventure',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      image: '/images/save-money.png',
      title: 'MoneyBack Guarantee',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      image: '/images/swimming-pool.png',
      title: 'Swiming Pool',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      image: '/images/guide.png',
      title: 'Friendly Guide',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique',
    },
    {
      image: '/images/customer-service.png',
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
                    {cardData.map((item, index) => (
                      <div  key={index} className='pt-1 bg-[#63AB45] rounded-lg'>
                        <div className="py-10 h-[400px] bg-white overflow-hidden rounded-lg shadow-lg">
                          <div className='w-full h-24 object-cover flex justify-center items-center'>
                            <img
                                className="h-16 w-16"
                                src={item.image}
                                alt={item.title}
                            />
                          </div>
                          <div className="p-6 h-44">
                              <div className="font-bold text-xl mb-2">{item.title}</div>
                              <p className="text-gray-700 text-base">{item.description}</p>
                          </div>
                          <div className="p-6">
                              <button className="text-[#63AB45]">
                              Explore More
                              </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices