import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   console.log('here ')
  return (
    <main>
       <div className='bg-cyan-100 bg-gradient-to-r h-screen'>
          <h1>hello world, Home Page</h1>
       </div>
    </main>
  )
}
