import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import SingleProduct from '@/components/singleProduct'
import PackagesPosters from '@/components/Posters/PackagePosters'
import BrowseByCategory from '@/components/Layout/Category'
import OurServices from '@/components/Layout/OurServices'
import PopularPackages from '@/components/Layout/PopularPackages'
import LatestNews from '@/components/Layout/LatestNews'
import TestimonialsSlider from '@/components/Slider/TestimonialSlider'
import ScrollToTopButton from '@/components/Utility/ScrollToTop'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
   console.log('here ')
  return (
    <main>
       <div className=''>
          {/* <h1 className='text-red-500 text-5xl bg-gray-500'>Home Page</h1> */}
          <Navbar />
          <PackagesPosters />
          {/* <BrowseByCategory /> */}
          <OurServices />
          <PopularPackages />
          <LatestNews />
          <TestimonialsSlider />
          <ScrollToTopButton />
          {/* <Navigation /> */}
          {/* <SingleProduct /> */}
       </div>
    </main>
  )
}
