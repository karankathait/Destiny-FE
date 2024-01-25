import ProductOverview from '@/components/Destiny-Store/ProductOverview'
import ProductPage from '@/components/Destiny-Store/ProductPage'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <ProductPage />
        <ProductOverview />
    </div>
  )
}

export default index