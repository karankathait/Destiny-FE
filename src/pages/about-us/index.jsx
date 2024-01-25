import AboutUsPoster2 from '@/components/AboutUs/AboutUSPoster2'
import AboutUsHeader from '@/components/AboutUs/AboutUsHeader'
import AboutUsPoster1 from '@/components/AboutUs/AboutUsPoster1'
import GetToKnowUs from '@/components/AboutUs/GetToKnowUs'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/Navbar'
import ScrollToTopButton from '@/components/Utility/ScrollToTop'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <AboutUsHeader />
        <AboutUsPoster1 />
        <GetToKnowUs />
        <AboutUsPoster2 />
        <ScrollToTopButton />
        <Footer />
    </div>
  )
}

export default index