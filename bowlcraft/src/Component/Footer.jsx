import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      {/* footer flex div start */}
      <div className='bg-[#1A1A1A] text-white flex flex-wrap gap-10 justify-between p-10'>
        {/* first col start */}
        <div>
          <img src="/footerlogo.png" alt="" height={200} width={200} className='select-none pointer-events-none rounded-xl' />
          <p className='text-sm space-y-2 opacity-80 pt-5'>Bringing you fresh, global cuisine delivered<br className='hidden md:block lg:block' /> right to your door. Every bowl tells a story of<br className='hidden md:block lg:block' /> flavor, quality, and care.</p>
          <div className='flex flex-wrap gap-5 pt-5 text-2xl opacity-80'>
            <IoLogoInstagram onClick={() => window.open('https://www.instagram.com/desi.gndeck/')} className='cursor-pointer hover:text-[#F9CE10]' />
            <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/anuj-kaundal/')} className='cursor-pointer hover:text-[#F9CE10]'/>
          </div>
        </div>
        {/* first col end */}
        {/* 2nd col start */}
        <div>
          <h1 className='font-semibold text-2xl pb-2'>Quick Links</h1>
          <ul className='text-sm space-y-2 opacity-80'>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Locations</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Corporate Ordering</li>
            <li className='cursor-pointer'>Bulk Order</li>
            <li className='cursor-pointer'>Blogs</li>
          </ul>
        </div>
        {/* 2nd end */}
        {/* 3rd start */}
        <div>
          <h1 className='font-semibold text-2xl pb-2'>Support</h1>
          <ul className='text-sm space-y-2 opacity-80'>
            <li className='cursor-pointer'>Returns & Refunds</li>
            <li className='cursor-pointer'>Privacy Policy</li>
            <li className='cursor-pointer'>Terms</li>
          </ul>
        </div>
        {/* 3rd end */}
        {/* 4th start */}
        <div>
          <h1 className='font-semibold text-2xl pb-2'>Contact Us</h1>
          <p className='text-sm pb-2 opacity-80'>Flat No. 12, Shanti Apartments<br className='hidden md:block lg:block' />
            MG Road, Andheri East<br className='hidden md:block lg:block' />
            Mumbai – 400069<br className='hidden md:block lg:block' />
            Maharashtra, India</p>
          <p className='text-sm pb-2 opacity-80'>order@bowlcraft.com</p>
          <p className='text-sm space-y-2 opacity-30'>Office Hours:<br className='hidden md:block lg:block' />
            Monday - Friday (9:00 AM - 6:00 PM)</p>
        </div>
        {/* 4th end */}
      </div>
      {/* footer flex div end */}
      <div className="bg-[#1A1A1A]">
        {/* border */}
        {/* <div className="border-t border-gray-500 w-[90%] mx-auto"></div> */}
        {/* creator name */}
        <div className="flex items-center justify-between gap-4 p-10">
          <div className="flex-1 border-t border-gray-500"></div>

          <h1 className="text-xl font-bold text-white">
            Created By "ANUJ KAUNDAL"
          </h1>

          <div className="flex-1 border-t border-gray-500"></div>
        </div>


        {/* text */}
        <div className="w-[90%] mx-auto text-center py-8">
          <h1 className="text-gray-400 text-sm cursor-not-allowed">
            © 2024 BowlCraft. All rights reserved. Made with ❤️ for food lovers everywhere.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer