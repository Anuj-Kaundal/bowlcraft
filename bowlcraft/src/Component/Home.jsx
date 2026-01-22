import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import data from "./data.js";
import { FaMobileAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
// console.log(data)
function Home() {
  return (
        <div className='bg-[#e5e7eb44] select-none'>
          {/* hero section start */}
          <div className='lg:pt-40 pt-30 p-10 lg:p-20 flex flex-col lg:flex-row'>
            <div className='lg:w-1/2 space-y-10'>
              <h1 className='text-[#5CD65C] text-2xl lg:text-4xl'>𝓌𝑒 𝓈𝓅𝑒𝒶𝓀 𝒻𝓁𝓊𝑒𝓃𝓉 𝒻𝑜𝑜𝒹</h1>
              <h1 className='lg:text-6xl text-3xl font-bold'>NO MATTER WHICH<br className="hidden lg:block" /> CORNER OF THE<br className="hidden md:block lg:block" /> WORLD <span className='text-[#F9CE10]'>𝒾𝓉'𝓈 𝒻𝓇𝑜𝓂.</span></h1>
              <p className='text-gray-500'>Freshly cooked global food bowls. From Tokyo to Tuscany, authentic<br className="hidden lg:block" />flavours delivered fresh to your everyday.</p>
              <button className='bg-[#F9CE10] text-center w-full md:w-40 lg:w-40 lg:pl-5 lg:pr-5 p-2 rounded-md flex justify-center items-center gap-5 cursor-pointer'>Order Now<FaArrowRightLong className='mt-1' /></button>
              <ul className='flex flex-wrap text-gray-500 gap-5 lg:gap-20'>
                <li className='flex items-center'><RxDotFilled className='text-[#F9CE10] text-2xl mt-1' />Cooked to Order</li>
                <li className='flex items-center'><RxDotFilled className='text-[#F9CE10] text-2xl mt-1' />Menu Changes Weekly</li>
                <li className='flex items-center'><RxDotFilled className='text-[#F9CE10] text-2xl mt-1' />Everyday Pricing</li>
              </ul>
            </div>
            <div className='lg:w-1/2 pt-5'>
              <img src="hero.jpg" alt="" className='rounded-xl w-full h-full' />
            </div>
          </div>
          {/* hero section end */}
          {/* Bowls Beyond section start */}
          <div className='text-center p-10 space-y-5'>
            <h1 className='lg:text-4xl text-2xl font-bold'>BOWLS BEYOND BORDERS</h1>
            <p className='text-lg text-gray-500'>Six promises that make us different. Six reasons to choose global flavours for<br className="hidden md:block lg:block" />your everyday.</p>
          </div>
          {/* first row div start */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:pl-20 lg:pr-20 mt-10 p-5'>
            {
              data.map((item) => (
                <>
                  <div key={item.id} className='p-10 bg-white text-center shadow-2xl cursor-pointer rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-pink-300'>
                    <img src={item.img} alt="" height={400} width={400} className='rounded-2xl  pointer-events-none' />
                    <h1 className='text-lg font-bold mt-5 mb-3'>{item.title}</h1>
                    <p>{item.disc}</p>
                  </div>
                </>
              ))
            }
          </div>
          {/* first row div end */}
          {/* Bowls Beyond section end */}
          {/* cookfresh section start */}
          <div className='flex flex-col items-center gap-10 p-10 pt-30 mt-20 bg-[#1A1A1A]'>
            <h1 className='lg:text-5xl font-bold text-white'>SEE HOW WE <span className='text-[#F9CE10]'>COOK FRESH</span></h1>
            {/* first image div start */}
            <div className='relative text-white flex justify-center items-center'>
              <img src="/cookfresh.jpg" alt="" height={900} width={900} className='rounded-2xl opacity-30 w-full' />
              <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>YOU TAP, WE COOK!</h1>
                <p className='mt-4 text-sm md:text-base lg:text-lg text-[#e5e7eb] font-semibold'>
                  Every order is prepared fresh. No reheating, no <br className='hidden md:block' />shortcuts.</p>
              </div>
            </div>
            {/* first image div end */}
            {/* 2nd div start */}
            <div className='text-[#e5e7eb] flex gap-5 lg:gap-25 text-center'>
              <div>
                <h1 className='text-[#F9CE10] lg:text-3xl font-bold'>Fresh Ingredients</h1>
                <p className='text-sm'>Sourced daily from local markets</p>
              </div>
              <div>
                <h1 className='text-[#F9CE10] lg:text-3xl font-bold'>Made to Order</h1>
                <p>Cooking starts only after you order</p>
              </div>
              <div>
                <h1 className='text-[#F9CE10] lg:text-3xl font-bold'>Expert Chefs</h1>
                <p>Trained in authentic global cuisines</p>
              </div>
            </div>
            {/* 2nd div end */}
          </div>
          {/* cookfresh section end */}
          {/* Ready to taste section start */}
          <div className='bg-[#F9CE10] text-center m-10 lg:m-30 p-10 space-y-5 rounded-2xl'>
            <h1 className='text-xl lg:text-5xl font-bold'>READY TO TASTE THE DIFFERENCE?</h1>
            <p className='text-lg lg:text-xl'>Join thousands who've discovered that world-class flavours belong in your<br className="hidden lg:block" /> everyday — not just special occasions.</p>
            <div className='flex flex-wrap gap-7 justify-center'>
              <button className='bg-white pl-5 pr-5 p-2 rounded-md flex items-center gap-5 cursor-pointer'><FaMobileAlt />Download App</button>
              <button className='bg-white pl-5 pr-5 p-2 rounded-md flex items-center gap-5 cursor-pointer'>Order Online<FaLongArrowAltRight className='mt-1' /></button>
            </div>
            <ul className='flex gap-5 justify-center'>
              <li className='flex items-center gap-2'><GoDotFill className='text-white mt-1' />New menu every week</li>
              <li className='flex items-center gap-2'><GoDotFill className='text-white mt-1' />Everyday pricing</li>
            </ul>
          </div>
          {/* Ready to taste section end */}
        </div>
  )
}

export default Home