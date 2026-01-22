import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'
function Header() {
    const navigate = useNavigate();
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <div>
            <div className='fixed w-full top-0 z-50 isolate left-0 bg-white/70 backdrop-blur-sm flex justify-between items-center p-2 border-b-2 border-gray-400'>
                {/* ""z-50 isolate"" jab koi section hover par header ko overley krta hai  usko rokne k liye */}
                <div className='ml-4 lg:ml-15'>
                    <img src="/logo.png" alt="" height={100} width={100} className='select-none pointer-events-none'/>
                    {/* ""select-none pointer-events-none"" with this right click not working and image can not be saved */}
                </div>

                <div>
                    <ul className='hidden lg:flex font-bold gap-10'>
                        <li className='cursor-pointer hover:text-[#F9CE10]' onClick={()=>navigate('/menu')}>Menu</li>
                        <li className='cursor-pointer hover:text-[#F9CE10]' onClick={()=>navigate('/corporate')}>Corporate</li>
                        <li className='cursor-pointer hover:text-[#F9CE10]' onClick={()=>navigate('/about')}>About</li>
                        <li className='cursor-pointer hover:text-[#F9CE10]' onClick={()=>navigate('/blog')}>Blogs</li>
                    </ul>
                </div>

                <div className='hidden lg:flex items-center font-medium gap-10'>
                    <button className='bg-[#F9CE10] px-2 cursor-pointer py-1 rounded-md' onClick={() =>alert('website under work')}>
                        Order Now
                    </button>

                    <span className='text-xl cursor-pointer hover:text-[#F9CE10]'>
                        <FaCartArrowDown />
                    </span>

                    <button className='cursor-pointer hover:text-[#F9CE10] font-bold mr-4 lg:mr-18'>Sign In</button>
                </div>
                {
                    MobileMenu ?
                        <IoClose className='lg:hidden text-3xl mr-4' onClick={() => setMobileMenu(false)} /> :
                        <GiHamburgerMenu className='lg:hidden text-3xl mr-4' onClick={() => setMobileMenu(true)} />
                }
                {
                MobileMenu && (
                    <div className="absolute top-full left-0 w-full bg-white lg:hidden border-t">
                        <ul className="flex flex-col items-center gap-6 py-6 font-bold">
                            <li className='cursor-pointer hover:text-[#F9CE10]' onClick={() => { navigate('/menu'); setMobileMenu(false)}}>Menu</li>
                            <li className='cursor-pointer hover:text-[#F9CE10]' onClick={() => { navigate('/corporate'); setMobileMenu(false)}}>Corporate</li>
                            <li className='cursor-pointer hover:text-[#F9CE10]' onClick={() => { navigate('/about'); setMobileMenu(false)}}>About</li>
                            <li className='cursor-pointer hover:text-[#F9CE10]' onClick={() => { navigate('/blog'); setMobileMenu(false)}}>Blogs</li>

                            <button className="bg-[#F9CE10] px-4 py-2 rounded-md">
                                Order Now
                            </button>

                            <FaCartArrowDown className="text-xl" />

                            <button className='cursor-pointer hover:text-[#F9CE10]'>Sign In</button>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
