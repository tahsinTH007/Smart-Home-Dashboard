import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { AuthContext } from '../context/AuthContext';
const NavBar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='h-14 flex flex-row items-center justify-between sticky top-0 z-50  '>
       <div className='w-[65%] mt-3 ml-2 flex items-center '>
            <div className='w-full h-10 rounded-[30px] shadow-md shadow-[_rgba(4,114,247,0.3)] flex items-center bg-white'>
               <IoSearchOutline className='ml-[10px] text-2xl' />
               <input placeholder="Search" className='border-none w-[80%] focus:outline-none ml-1' />
            </div>

        </div>
        <div className='flex' >
        <div className='h-10 w-[130px] rounded-[30px] mt-3 mr-3  bg-white flex justify-center items-center shadow-md shadow-[inset_rgba(4,110,247,0.3)]'>
              <FaPlus  className='text-[#2D89FF] text-2xl cursor-pointer'/>
              <h3 className='ml-2'>New Post</h3>
            </div>
            <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.3)]'>
              <IoMdNotifications className='text-[#2D89FF] text-2xl cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar