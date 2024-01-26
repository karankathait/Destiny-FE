import GetToKnowUs from '@/components/AboutUs/GetToKnowUs'
import Footer from '@/components/Footer/footer'
import OurServices from '@/components/Layout/OurServices'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <GetToKnowUs />
        <OurServices />
        <Footer />
    </div>
  )
}

export default index