import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import PackagesPosters from '@/components/Posters/PackagePosters'
import BrowseByCategory from '@/components/Layout/Category'
import OurServices from '@/components/Layout/OurServices'
import PopularPackages from '@/components/Layout/PopularPackages'
import LatestNews from '@/components/Layout/LatestNews'
import TestimonialsSlider from '@/components/Slider/TestimonialSlider'
import ScrollToTopButton from '@/components/Utility/ScrollToTop'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/footer'
import PopularDestination from '@/components/Layout/PopularDestination'
import HomeScreen from '@/components/Slider/HomeScreenSlider'
import TourTypesSlider from '@/components/Slider/TourTypesSlider'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className='w-full'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <HomeScreen />
          <BrowseByCategory />
          <PackagesPosters />
          <TourTypesSlider />
          <PopularPackages />

          {/* <LatestNews /> */}

          <PopularDestination />
          <TestimonialsSlider />
          <Footer />
          <ScrollToTopButton />
          {/* <Navigation /> */}
          {/* <SingleProduct /> */}
        </div>
      )}
    </div>
  );
}
