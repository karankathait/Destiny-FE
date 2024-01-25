import React from 'react'
import destinyImage from '@/images/FooterImg/footer-bg.png'
import { MdCall, MdEmail } from 'react-icons/md'
import { BsSend } from "react-icons/bs";
import { FaFacebookF, FaMap, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#00102A] flex justify-center relative overflow-hidden'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center animate-moveLeft'
        style={{ backgroundImage: `url(${destinyImage.src})` }}
      ></div>

        <div className='w-10/12 py-16'>
            <div className='flex flex-col gap-8 lg:flex-row justify-between'>
                <div className='w-full lg:w-2/6 text-white text-lg'>
                    <h1 className='text-3xl font-bold pb-4'><span className='text-[#FF9933]'>D</span>estiny.</h1>
                    <p className='pb-4 leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam similique deserunt</p>
                    <div className='text-base flex items-center gap-2 pb-2'><span className='text-[#FF9933] text-lg'><MdEmail /></span><span> example@example.com</span></div>
                    <div className='text-base flex items-center gap-2 pb-2'><span className='text-[#FF9933] text-lg'><MdCall /></span><span> +956 542 6584</span></div>
                    <div className='text-base flex items-center gap-2 pb-2'><span className='text-[#FF9933] text-lg'><FaMap /></span><span> 203 Fake St ,California, USA</span></div>
                </div>
                <div className='w-full lg:w-1/6 text-white'>
                  <h1 className='text-2xl font-bold pb-4'>Quick Links</h1>
                  <p className='pb-2'>London</p>
                  <p className='pb-2'>Dubai</p>
                  <p className='pb-2'>California</p>
                  <p className='pb-2'>Tokyo</p>
                  <p className='pb-2'>Las Vegas</p>
                  <p className='pb-2'>New York Cities</p>
                </div>
                <div className='w-full lg:w-1/6 text-white'>
                  <h1 className='text-2xl font-bold pb-4'>Support</h1>
                  <p className='pb-2'>Customer Support</p>
                  <p className='pb-2'>Privacy & Policy</p>
                  <p className='pb-2'>Terms & Condition</p>
                  <p className='pb-2'>Tour Guid</p>
                  <p className='pb-2'>Contact us</p>
                </div>
                <div className='wfull lg:w-1/6 text-white'>
                  <h1 className='text-2xl font-bold pb-4'>Newsletter</h1>
                  <div className='flex items-center relative pb-4'><input type='email' className='w-full py-3 p-4 rounded-3xl outline-none target:outline-blue-600' placeholder='Enter Your Email'></input><button className='absolute right-2 bg-[#FF9933] p-3 rounded-full text-white hover:bg-[#63AB45] duration-300'><BsSend /></button></div>
                  <p className='leading-7'>By subscribing to our mailing list you will always be updated</p>
                </div>
            </div>
            <hr className='mt-12'></hr>
            <div className='grid grid-cols-1 gap-4 text-center lg:grid-cols-2 mt-10'>
              <div>
                <p className='text-base font-medium text-white'>Copyright @ 2023 Destiny All Right reserved.</p>
              </div>
              <div className='flex justify-center gap-4'>
                <div className='cursor-pointer'><button className='text-white p-3 bg-[#63AB45] rounded-full'><FaFacebookF /></button></div>
                <div className='cursor-pointer'><button className='text-white p-3 bg-[#63AB45] rounded-full'><FaTwitter /></button></div>
                <div className='cursor-pointer'><button className='text-white p-3 bg-[#63AB45] rounded-full'><FaYoutube /></button></div>
                <div className='cursor-pointer'><button className='text-white p-3 bg-[#63AB45] rounded-full'><FaPinterest /></button></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer