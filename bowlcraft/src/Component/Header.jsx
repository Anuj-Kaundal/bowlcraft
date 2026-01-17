import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function Header() {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <div>
            <div className='fixed w-full top-0 z-50 isolate left-0 bg-white/70 backdrop-blur-sm flex justify-between items-center p-7 border-b-2 border-gray-400'>
                {/* ""z-50 isolate"" jab koi section hover par header ko overley krta hai  usko rokne k liye */}
                <div className='ml-15'>
                    <img src="bowlcraft.png" alt="" height={50} width={100}/>
                </div>

                <div>
                    <ul className='hidden lg:flex font-bold gap-10'>
                        <li>Menu</li>
                        <li>Corporate</li>
                        <li>About</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div className='hidden lg:flex items-center font-medium gap-10'>
                    <button className='bg-[#F9CE10] px-2 py-1 rounded-md'>
                        Order Now
                    </button>

                    <span className='text-xl cursor-pointer'>
                        <FaCartArrowDown />
                    </span>

                    <button>Sign In</button>
                </div>
                {
                    MobileMenu ?
                        <IoClose className='lg:hidden text-3xl' onClick={() => setMobileMenu(false)} /> :
                        <GiHamburgerMenu className='lg:hidden text-3xl' onClick={() => setMobileMenu(true)} />
                }
                {
                MobileMenu && (
                    <div className="absolute top-full left-0 w-full bg-white lg:hidden border-t">
                        <ul className="flex flex-col items-center gap-6 py-6 font-bold">
                            <li onClick={() => setMobileMenu(false)}>Menu</li>
                            <li onClick={() => setMobileMenu(false)}>Corporate</li>
                            <li onClick={() => setMobileMenu(false)}>About</li>
                            <li onClick={() => setMobileMenu(false)}>Blogs</li>

                            <button className="bg-[#F9CE10] px-4 py-2 rounded-md">
                                Order Now
                            </button>

                            <FaCartArrowDown className="text-xl" />

                            <button>Sign In</button>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
