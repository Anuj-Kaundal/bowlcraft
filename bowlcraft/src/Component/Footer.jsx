import React from 'react'

function Footer() {
  return (
    <div>
      {/* footer flex div start */}
      <div className='bg-[#1A1A1A] text-white flex flex-wrap gap-10 justify-between p-10'>
        {/* first col start */}
        <div>
          <img src="/footerlogo.png" alt="" height={200} width={200} className='select-none pointer-events-none rounded-xl'/>
          <p className='text-sm space-y-2 opacity-80 pt-5'>Bringing you fresh, global cuisine delivered<br className='hidden md:block lg:block' /> right to your door. Every bowl tells a story of<br className='hidden md:block lg:block' /> flavor, quality, and care.</p>
          <div className='flex flex-wrap'>
            <h1>instagram</h1>
            <h1>facebook</h1>
            <h1>twitter</h1>
          </div>
        </div>
        {/* first col end */}
        {/* 2nd col start */}
        <div>
          <h1 className='font-semibold text-2xl pb-2'>Quick Links</h1>
          <ul className='text-sm space-y-2 opacity-80'>
            <li>Menu</li>
            <li>Locations</li>
            <li>About Us</li>
            <li>Corporate Ordering</li>
            <li>Bulk Order</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* 2nd end */}
        {/* 3rd start */}
        <div>
          <h1 className='font-semibold text-2xl pb-2'>Support</h1>
          <ul className='text-sm space-y-2 opacity-80'>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
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
        <div className="border-t border-gray-500 w-[90%] mx-auto"></div>

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