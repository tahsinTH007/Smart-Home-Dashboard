import React, { useState } from 'react'
import { PiFanLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { LuLamp } from "react-icons/lu";
import { FaTv } from "react-icons/fa";

const AirConditionar = () => {

    const [progress, setProgress] = useState(10)

  return (
    <div className='mt-8 pb-6'>
        <div className='flex'>
        <div className="w-[440px] p-4 mr-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <div className=' flex items-center justify-center w-10 h-10 rounded-md bg-white'>
                      <PiFanLight className='text-3xl' />
                    </div>
                    <h5 className=" ml-2 mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Air Conditionar</h5>
                </div>
                <label className="inline-flex items-center pt-3 mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-900">On/Off</span>
                </label>
            </div>
            <div className='flex items-center justify-around mt-4'>
                <button 
                    type="button"
                    onClick={() => setProgress(progress - 1)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-3 text-center me-2 mb-2"
                >
                <FaMinus className='text-xl' />
                </button>
                <div className="relative size-40">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="4"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="4"
                    stroke-dasharray="100" stroke-dashoffset={100 - progress} stroke-linecap="round"></circle>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">{`${progress}°`}</span>
                </div>
                </div>
                <button 
                    type="button"
                    onClick={() => setProgress(progress + 1)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-3 text-center me-2 mb-2"
                >
                <FaPlus className='text-xl' />
                </button>
            </div>
        </div>
        <div>
            <div className="w-[210px] p-3 mr-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
                <div className='flex items-center justify-between'>
                    <div className=' flex items-center justify-center w-8 h-8 rounded-md bg-white'>
                        <LuLamp  className='text-xl' />
                        </div>
                        <BsThreeDots className='text-xl' />
                </div>
                <div className='flex items-center justify-around'>
                    <div>
                        <h3 className='text-lg'>Smart Lamp</h3>
                        <p className='mt-0 text-md'>4 devices connnected</p>
                    </div>
                    <label className="inline-flex items-center pt-3 mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
            </div>
            <div className="w-[210px] mt-2 p-3 mr-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
                <div className='flex items-center justify-between'>
                    <div className=' flex items-center justify-center w-8 h-8 rounded-md bg-white'>
                        <FaTv  className='text-xl' />
                        </div>
                        <BsThreeDots className='text-xl' />
                </div>
                <div className='flex items-center justify-around'>
                    <div>
                        <h3 className='text-lg'>Television</h3>
                        <p className='mt-0 text-md'>2 devices connnected</p>
                    </div>
                    <label className="inline-flex items-center pt-3 mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default AirConditionar