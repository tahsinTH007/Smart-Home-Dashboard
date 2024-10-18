import React from 'react';
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { RiSofaLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";

const OverView = () => {
  return (
    <div className='mt-8'>
        <div className='flex flex-row items-center justify-between'>
            <div>
                <h3 className='text-2xl'>Over View</h3>
                <p>Last 3 months</p>
            </div>
            <div>
            <label className="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-3 after:h-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-900">Instructor</span>
                </label>
            </div>
        </div>
        <div className='flex flex-row mt-5'>
        <div className="w-[210px] p-4 mr-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
            <div className='flex items-center justify-between'>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Living Room</h5>
                <BsThreeDots className='text-2xl' />
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-black'>
                    <RiSofaLine className='text-5xl text-white' />
                </div>
                <div>
                    <h6 className='text-4xl text-black'>190</h6>
                    <span className='self-end text-black'>kwh</span>
                </div>
            </div>
        </div>
        <div className="w-[210px] p-4 mr-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
            <div className='flex items-center justify-between'>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Kitchen</h5>
                <BsThreeDots className='text-2xl' />
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-black'>
                    <TbToolsKitchen2 className='text-5xl text-white' />
                </div>
                <div>
                    <h6 className='text-4xl text-black'>190</h6>
                    <span className='self-end text-black'>kwh</span>
                </div>
            </div>
        </div>
        <div className="w-[210px] p-4 bg-blue-100  border border-gray-200 rounded-lg shadow ">
            <div className='flex items-center justify-between'>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Bed Room</h5>
                <BsThreeDots className='text-2xl' />
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-black'>
                    <IoBedOutline className='text-5xl text-white' />
                </div>
                <div>
                    <h6 className='text-4xl text-black'>190</h6>
                    <span className='self-end text-black'>kwh</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OverView;