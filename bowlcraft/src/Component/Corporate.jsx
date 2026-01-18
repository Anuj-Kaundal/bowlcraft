import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
function Corporate() {
  return (
    <div>
      {/* Corporate Catering section start */}
      <div className='lg:pt-40 pt-30 p-10 space-y-5 text-center'>
        <h1 className='text-4xl font-bold'>CORPORATE <span className='text-[#F9CE10]'>CATERING</span></h1>
        <p className='text-gray-500 text-2xl'>Fuel your team with fresh, global flavors delivered right to your office</p>
        <div className='flex justify-center gap-30'>
          <div>
            <h1 className='text-[#F9CE10] text-3xl font-bold pb-3'>50+</h1>
            <p>Minimum Order</p>
          </div>
          <div>
            <h1 className='text-[#F9CE10] text-3xl font-bold pb-3'>24h</h1>
            <p>Advance Notice</p>
          </div>
          <div>
            <h1 className='text-[#F9CE10] text-3xl font-bold pb-3'>Free</h1>
            <p>Delivery Over ₹2000</p>
          </div>
        </div>
      </div>
      {/* Corporate Catering section end */}
      {/* Bulk Order Quote section start */}
      <div className='mt-30 space-y-5 text-center'>
        <h1 className='text-4xl font-bold'>GET YOUR <span className='text-[#F9CE10]'>BULK ORDER</span> QUOTE </h1>
        <p className='text-gray-500 text-xl'>Fill out the form below and our corporate catering team will get back to you<br className='hidden md:block lg:block' /> within 24 hours</p>
      </div>
      {/* Bulk Order Quote section end */}
      {/* Bulk Order Inquiry section start */}
      <div className='flex justify-center p-20'>
        <div className='p-5 rounded-2xl shadow-2xl shadow-pink-300'>
          <h1 className='font-semibold tracking-tight text-2xl pb-5'>BULK ORDER INQUIRY</h1>
          <p className='text-xl pb-5'>Hungering for ambition is more satisfying over a good meal.</p>
          <p className='text-gray-500 pb-5'>
            We at Bowlcraft have been working hard to bring you safety-assured food during these times.
            <br className='hidden md:block lg:block' />
            We have taken multiple measures, including following WHO and FSSAI guidelines, strict hand and
            <br className='hidden md:block lg:block' />
            kitchen sanitization routines, daily staff temperature checks, and contactless delivery to ensure
            <br className='hidden md:block lg:block' />
            that we continue bringing wholesome, delicious food straight to your desk. We are now gearing up
            <br className='hidden md:block lg:block' />
            for the lockdown opening and can support you in the early days with neatly packed meals for your
            <br className='hidden md:block lg:block' />
            team to help maintain social distancing. Tell us more about your requirements here, and we’ll take
            <br className='hidden md:block lg:block' />
            care of the rest.
          </p>
          <form action="form">
            <div className='flex items-center gap-3'>
              <MdOutlineMail />
              <label htmlFor="email" className='font-semibold'>Email Address *</label>
            </div>
            <input type="email" name="email" id="email" placeholder='Enter your Email Address' className='h-10 border border-gray-100 w-full rounded-md p-3 mt-2 mb-2 focus:border-[#F9CE10] focus:outline-none focus:border-2' /><br />
            <div className='flex items-center gap-3'>
              <FaRegUser />
              <label htmlFor="name" className='flex gap-5 items-center font-semibold'>Name</label>
            </div>
            <input type="text" name="name" id="name" placeholder='Enter your Name' className='h-10 border border-gray-100 w-full rounded-md p-3 mt-2 mb-2 focus:border-[#F9CE10] focus:outline-none focus:border-2' /><br />
            <div className='flex items-center gap-3'>
              <FiPhone />
              <label htmlFor="phone" className='flex gap-5 items-center font-semibold'>Phone Number</label>
            </div>
            <input type="number" name="phone" id="phone" placeholder='Enter your Phone Number' className='h-10 border border-gray-100 w-full rounded-md p-3 mt-2 mb-2 focus:border-[#F9CE10] focus:outline-none focus:border-2' /><br />
            <div className='flex items-center gap-3'>
              <FiMessageSquare />
              <label htmlFor="query" className='flex flex-row gap-5 items-center font-semibold'>Your Query</label><br />
            </div>
            <textarea name="query" id="query" placeholder='Tell us about your bulk order requirements...' className='border border-gray-100 w-full rounded-md p-3 mt-2 mb-2 focus:border-[#F9CE10] focus:outline-none focus:border-2'></textarea>
            <button className='bg-[#F9CE10] cursor-pointer w-full h-13 font-bold rounded-md'>Submit Request</button>
          </form>
        </div>
      </div>
      {/* Bulk Order Inquiry section end */}
    </div>
  )
}
export default Corporate