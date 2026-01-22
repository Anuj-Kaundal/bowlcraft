import React, { useState } from 'react'
import menudata from './menudata.js'
import { IoMdCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
// console.log(menudata)
function Menu() {
    const [Open, setOpen] = useState(false);
    const Navigate = useNavigate()
    return (
        <div>
            {/* main div start */}
            <div className="lg:pt-20 pt-28">
                {/* heading div start */}
                <div className='text-center p-30 bg-pink-300/20 space-y-8'>
                    <h1 className='text-[#5CD65C] text-2xl lg:text-4xl'>𝒻𝓇𝑒𝓈𝒽 𝒻𝓁𝒶𝓋𝑜𝓇𝓈 𝒶𝓌𝒶𝒾𝓉</h1>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black">OUR MENU</h1>
                    <p className='text-xl'>Discover our curated selection of fresh, healthy, and delicious meals <br className='hidden md:block lg:block' /> crafted with love</p>
                </div>
                {/* heading div end */}
                {/* locate me start */}
                <div className='bg-[#e5e7eb] flex flex-wrap justify-center lg:gap-20 gap-5 p-10 border-b border-gray-300'>
                    <select name="location" id="location" className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F9CE10] appearance-none bg-white rounded-full w-80 p-3'>
                        <option value="setect">📍SELECT LOCATION</option>
                        <option value="dehradun">Dehradun, uttarakhand</option>
                        <option value="bengaluru">Bengaluru, Karnataka</option>
                        <option value="mumbai">Mumbai, Maharashtra</option>
                        <option value="delhi">Rajouri Garden, Delhi</option>
                        <option value="gurgaon">Gurgaon, Haryana</option>
                    </select>
                    <button className='bg-[#F9CE10] cursor-pointer text-center lg:pl-20 lg:pr-20 p-3 rounded-full'>Locate Me</button>
                </div>
                {/* locate me end */}
                {/* category section start */}
                <div className='flex flex-wrap justify-center p-15 gap-8 font-semibold border-b border-gray-300'>
                    <button className='bg-[#F9CE10] cursor-pointer rounded-full pl-5 pr-5 p-2'>All</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Burrito Bowls</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Asian Bowls</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Continental Bowls</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Korean Bowls</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Indian Meals</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Pastas</button>
                </div>
                {/* category section end */}
                {/* filter section start */}
                <div className='flex flex-wrap lg:justify-end p-10 gap-8 font-semibold border-b border-gray-300'>
                    <button className='border bg-green-600 text-white border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] hover:text-black cursor-pointer'>Veg</button>
                    <button className='border border-gray-200 bg-red-600 text-white pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] hover:text-black cursor-pointer'>Non-Veg</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Price</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Filter</button>
                    <button className='border border-gray-200 pl-5 pr-5 p-2 rounded-full duration-700 hover:bg-[#F9CE10] cursor-pointer'>Reset All</button>
                </div>
                {/* filter section start */}
                {/* menu section start */}
                <div className='lg:p-20 p-10'>
                    <button className='bg-[#F9CE10] cursor-pointer rounded-full pl-5 pr-5 p-2'>All</button>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-8'>
                        {
                            menudata.map((menu) => (
                                <>
                                    <div key={menu.id} className='border border-gray-200 rounded-xl shadow shadow-gray-400 overflow-hidden'>
                                        <img src={menu.img} alt="" className='rounded-t-xl object-cover transition-transform duration-400 ease-out hover:scale-105 cursor-pointer' />
                                        <div className='space-y-2 p-5'>
                                            <div className='flex justify-between'>
                                                <h1 className='truncate w-48 uppercase text-lg font-bold cursor-pointer' onClick={() => Navigate(`/productdetails/${menu.id}`)}>{menu.title}</h1> {/* remember that "/productdetails/" this path is always same as the path define in app.jsx path */}
                                                <button className='font-medium text-sm border border-gray-200 pl-2 pr-2 rounded-full'>{menu.cal}</button>
                                            </div>
                                            <p className='line-clamp-2'>{menu.disc}</p>
                                            <div className='flex gap-3 items-center font-semibold'>
                                                <h1 className='text-2xl font-bold text-[#F9CE10]'>{menu.disprice}</h1>
                                                <h2 className='line-through'>{menu.price}</h2>
                                                <h3 className='text-[#5CD65C]'>{menu.discout}</h3>
                                            </div>
                                            <button className='w-full bg-[#F9CE10] p-2 font-bold rounded-md cursor-pointer flex justify-center items-center gap-5' onClick={() => setOpen(true)}>{menu.cart}<FaPlus className='mt-1'/></button>
                                            <h1 className='text-center text-sm'>{menu.custom}</h1>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                {/* menu section end */}
            </div>
            {/* main div end */}
            {/* popup section */}
            {
                Open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

                        {/* Modal Box */}
                        <div className="relative bg-red-600 rounded-2xl shadow-2xl p-6 max-w-md w-[90%] animate-scaleIn">

                            {/* Close Button */}
                            <IoMdCloseCircle
                                onClick={() => setOpen(false)}
                                className="absolute -top-4 -right-4 text-white text-4xl cursor-pointer hover:scale-110 transition"
                            />

                            {/* Image */}
                            <img
                                src="/undermain.webp"
                                alt="Under Maintenance"
                                className="w-full rounded-xl"
                            />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Menu