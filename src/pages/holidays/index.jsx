import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/Navbar'
import PackagesPosters from '@/components/Posters/PackagePosters'
import TestimonialsSlider from '@/components/Slider/TestimonialSlider'
import DestinationCategory from '@/components/holidays/DestinationCategory/DestinationCategory'
import TourCategory from '@/components/holidays/TourCategory/TourCategory'
import BestSellingPackages from '@/components/holidays/slider/BestSellingPackages'
import ExploreThemes from '@/components/holidays/slider/ExploreThemes'
import HolidaysHeader from '@/components/holidays/slider/HolidaysHeader'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <HolidaysHeader />
        <TourCategory />
        <BestSellingPackages />
        <PackagesPosters />
        <DestinationCategory />
        <ExploreThemes />
        <TestimonialsSlider />
        <Footer />  
    </div>
  )
}

export default index