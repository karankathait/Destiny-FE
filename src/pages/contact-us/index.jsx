import Footer from '@/components/Footer/footer'
import PlanMyHolidayForm from '@/components/Forms/PlanMyHoliday'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <PlanMyHolidayForm />
        <Footer />
    </div>
  )
}

export default index