import ProductOverview from '@/components/Destiny-Store/ProductOverview'
import ProductPage from '@/components/Destiny-Store/ProductPage'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/Navbar'
import SingleProduct from '@/components/Destiny-Store/SingleProduct'
import React from 'react'
import CategoryPage from '@/components/Destiny-Store/CategoryPage'

const index = () => {
  return (
    <div>
        <Navbar />
        <CategoryPage />
        {/* <ProductPage /> */}
        {/* <ProductOverview /> */}
        <Footer />
        {/* <SingleProduct /> */}
    </div>
  )
}

export default index