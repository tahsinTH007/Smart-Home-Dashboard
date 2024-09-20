import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { MdInsertDriveFile } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className='bg-[#eff2fa] h-[calc(100vh-18px)] p-3 mx-6 my-2 rounded-lg shadow-lg shadow-[_rgba(4,114,247,0.5)] flex flex-col justify-between '>
         <div className='flex flex-col'>
            <div className='h-10 w-10 mt-2 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <IoMdHome className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <BsBarChartLineFill className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <IoMdPerson className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <MdInsertDriveFile className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <IoMdNotifications className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
              <IoMdSettings className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
         </div>
         <div>
          <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
                <TbLogout className='text-[#2D89FF] text-2xl cursor-pointer'/>
              </div>
         </div>
    </div>
  )
}

export default SideBar