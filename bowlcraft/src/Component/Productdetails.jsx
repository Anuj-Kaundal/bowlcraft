import React from 'react'
import { useParams } from 'react-router-dom'
import menudata from './menudata'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
function Productdetails() {
  const { id } = useParams();
  console.log(id);
  const showdetails = menudata.find(item => item.id === parseInt(id));
  console.log(showdetails);
  return (
    <div>
      <div className="lg:pt-20 pt-28">
        {/* main flex div start */}
        <div className='lg:flex flex-row justify-between gap-10 p-10'>
          {/* left(image) side div */}
          <div>
            <img src={showdetails.img} alt="" height={700} width={700} className='rounded-xl' />
            <div className='flex justify-center lg:justify-start gap-5 mt-4'>
              <img src={showdetails.img} alt="" className='w-20 h-15 cursor-pointer rounded-sm' />
              <img src={showdetails.img} alt="" className='w-20 h-15 cursor-pointer rounded-sm' />
              <img src={showdetails.img} alt="" className='w-20 h-15 cursor-pointer rounded-sm' />
            </div>
            {/* some import div */}
            <div className='lg:flex flex-row items-center justify-center lg:justify-between mt-5 gap-10'>
              <div className='border w-52 flex flex-col items-center gap-2 p-8 rounded-xl border-gray-300'>
                <FaRegClock className='text-xl text-[#F9CE10]' />
                <h1 className='text-sm font-medium'>30-40 mins</h1>
                <p className='text-xs'>Prep Time</p>
              </div>
              <div className='border w-52 flex flex-col items-center gap-2 text-center p-8 rounded-xl border-gray-300'>
                <FaFireFlameCurved className='text-xl text-[#F9CE10]' />
                <h1 className='text-sm font-medium'>291 kcal</h1>
                <p className='text-xs'>Calories</p>
              </div>
              <div className='border w-52 flex flex-col items-center gap-2 p-8 rounded-xl border-gray-300'>
                <FaUsers className='text-xl text-[#F9CE10]' />
                <h1 className='text-sm font-medium'>4</h1>
                <p className='text-xs'>Reviews</p>
              </div>
            </div>
          </div>
          {/* content div right side */}
          <div className='lg:w-1/2 p-5 space-y-5'>
            {/* title part div */}
            <div className='border-b border-gray-300 lg:pb-10 pb-5'>
              <h1 className='lg:text-4xl text-2xl text-center lg:text-left font-bold pb-4'>{showdetails.title}</h1>
              <p className='text-sm lg:w-fit bg-gray-200  text-center pl-2 pr-3 rounded-full mb-4'>{showdetails.cal}</p>
              <div className='flex gap-5 lg:justify-start justify-center items-center'>
                <p className='text-4xl font-bold text-[#F9CE10]'>{showdetails.disprice}</p>
                <p className='text-xl line-through text-[#737373]'>{showdetails.price}</p>
              </div>
            </div>
            {/* discription part div */}
            <div className='border-b text-center border-gray-300 pb-10'>
              <h1 className='text-xl font-bold mb-2 pt-2 pb-2'>DESCRIPTION</h1>
              <p className='text-[#737373]'>Here is our all time favourite signature <span className='text-[#F9CE10] font-semibold'>{showdetails.title}</span>. Paneer steaks, infused with hot and tangy habanero-jalapeno duo, is grilled, sliced and served with an exciting satiating combo of tomato-paprika rice, crunchy roasted-corn salsa, tomato salsa and sour cream. All our meals are prepared fresh on order. Note: Broccoli may be replaced with green beans due to seasonality constraint. Energy 291 Kcal, Fat 7 gms, Carbs 53 gms, Fiber 3 gms, Protein 6 gms</p>
            </div>
            {/* Nutrition part div */}
            <div className='border-b text-center border-gray-300 pb-5'>
              <h1 className='text-xl font-bold pt-2 pb-2'>NUTRITION INFORMATION</h1>
              {/* Nutrition Information section start */}
              <div className='lg:flex flex-row gap-10 text-center pt-5 pb-5'>
                {/* 1st */}
                <div className='border m-2 pl-5 pr-5 p-2 rounded-xl border-gray-300'>
                  <h1 className='text-3xl font-bold text-[#F9CE10]'>291</h1>
                  <p className='text-[#737373] text-sm pt-2'>KCAL</p>
                </div>
                {/* 2nd */}
                <div className='border m-2 pl-7 pr-7 p-2 rounded-xl border-gray-300'>
                  <h1 className='text-3xl font-bold text-[#F9CE10]'>7g</h1>
                  <p className='text-[#737373] text-sm pt-2'>Fat</p>
                </div>
                {/* 3rd */}
                <div className='border m-2 pl-5 pr-5 p-2 rounded-xl border-gray-300'>
                  <h1 className='text-3xl font-bold text-[#F9CE10]'>53g</h1>
                  <p className='text-[#737373] text-sm pt-2'>Carbs</p>
                </div>
                {/* 4th */}
                <div className='border m-2 pl-7 pr-7 p-2 rounded-xl border-gray-300'>
                  <h1 className='text-3xl font-bold text-[#F9CE10]'>3g</h1>
                  <p className='text-[#737373] text-sm pt-2'>Fiber</p>
                </div>
                {/* 5th */}
                <div className='border m-2 pl-5 pr-5 p-2 rounded-xl border-gray-300'>
                  <h1 className='text-3xl font-bold text-[#F9CE10]'>6g</h1>
                  <p className='text-[#737373] text-sm pt-2'>Protein</p>
                </div>
              </div>
            </div>
            {/* Nutrition Information section end */}
            {/* add to cart div start */}
            <div className='flex lg:justify-start justify-center gap-5 pt-5 pb-5'>
              <h1 className='text-xl font-bold mb-2'>Quantity:</h1>
              <div className='flex gap-5 items-center font-bold'>
                <div className='border border-gray-300 hover:bg-[#F9CE10] cursor-not-allowed pl-3 pr-3 p-2 rounded-sm'><FaMinus /></div>
                <h1 className='text-3xl'>1</h1>
                <div className='pl-3 pr-3 p-2 rounded-sm bg-[#F9CE10] cursor-not-allowed'><FaPlus /></div>
              </div>
            </div>
            {/* add to cart div end */}
            <div className='bg-[#F9CE10] lg:w-fit pl-4 pr-4 p-2 flex items-center gap-5 rounded-sm cursor-pointer mt-5 mb-5' onClick={() => alert('the website is under work')}><FaCartArrowDown />Customize & Add to Cart - {showdetails.disprice}</div>
          </div>
        </div>
        {/* main flex div end */}
      </div>
    </div>
  )
}

export default Productdetails