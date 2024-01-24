import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/Component/navbar'
import Cards from '@/Component/cards'
import SingleProduct from '@/Component/singleProduct'
import PackagesPosters from '@/Component/Posters/PackagePosters'

export default function Home() {
   console.log('here ')
  return (
    <main>
       <div className=''>
          <h1>Home Page</h1>
          {/* <Navbar /> */}
          {/* <Cards /> */}
          <PackagesPosters />
          {/* <Navigation /> */}
          {/* <SingleProduct /> */}
       </div>
    </main>
  )
}
