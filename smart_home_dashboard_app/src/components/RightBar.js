import React, { useContext } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import profileImg from "../assect/Profile.png";
import { AuthContext } from '../context/AuthContext';

const RightBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className='w-[25%] flex flex-col ml-8 shadow-[rgba(4,114,247,0.2)_-10px_0px_3px_0px]'>
     <div className='flex mx-4 flex-row items-start justify-between '>
      <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
          <BsQrCode className='text-[#2D89FF] text-2xl cursor-pointer'/>
        </div>
        <div className='h-10 w-10 mt-3 rounded-full bg-white flex justify-center items-center shadow-md shadow-[_rgba(4,114,247,0.5)]'>
          <MdModeEditOutline className='text-[#2D89FF] text-2xl cursor-pointer'/>
        </div>
     </div>
     <div className='flex flex-col items-center justify-center'>
        <div  className='h-40 w-40 rounded-full overflow-hidden'>
          <img src={profileImg} alt="" />
        </div>
        <h2 className='font-semibold text-2xl text-[#2D89FF]'>KH.Tahsin Hassan</h2>
        <h2 className='font-semibold text-[#2D89FF]'>tahsin@gmail.com</h2>
     </div>
    </div>
  )
}

export default RightBar