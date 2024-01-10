import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <div className='bg-cyan-100 bg-gradient-to-r h-screen'>
          hello world
       </div>
    </main>
  )
}
