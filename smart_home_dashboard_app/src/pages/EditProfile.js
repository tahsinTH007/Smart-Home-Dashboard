import React, {  useEffect, useRef, useState } from 'react'
import profileImg from "../assect/Profile.png";
// import { FaRegEye } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { clearAllUserErrors, update } from '../store/slice/userSlice';


const EditProfile = () => {
    const { user, error, isUpdated } = useSelector((state) => state.user);
    
    console.log(user)

    const navigateTo = useNavigate()
    const fullName = useRef()
    const email = useRef()
    const currentPassword = useRef()
    const newPassword = useRef()
    const againPassword = useRef()

    const [file, setFile] = useState(null)

    // Handle file selection
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const dispatch = useDispatch();

    const submitHandler = async(e)=> {
        e.preventDefault()

        console.log(newPassword.current.value);
        console.log(againPassword.current.value);

        if(newPassword.current.value !== againPassword.current.value){
          toast("Password don't match",{
            type: "warning"
          })
        }else{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', user._id);
        formData.append('fullName', fullName.current.value);
        formData.append('email', email.current.value);
        formData.append('currentPassword', currentPassword.current.value);
        formData.append('newPassword', newPassword.current.value);

        dispatch(update(formData));
       }
    }

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearAllUserErrors());
      }
      if (isUpdated) {
        navigateTo("/home");
      }
    })

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
    {/* login container */}
    <form className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-8 items-center" onSubmit={submitHandler}>
      {/* form */}
      <div className="md:w-1/2 px-8 md:px-16">
         <h2 className="font-bold text-2xl text-[#002D74]">Edit profile </h2>
         <div className="flex flex-col gap-4" >
          <input 
            className="p-2 bg-gray-100 mt-8 w-[280px] " 
            type="text"  
            placeholder={user.fullName || "User Name"}
            ref={fullName}
          />
          <hr className="w-[280px] border-gray-400 mt-[-14px]" />
          <input 
            className="p-2 bg-gray-100 w-[280px]" 
            type="email"  
            placeholder={user.email || "Email"}
            ref={email}
          />
          <hr className="w-[280px] border-gray-400 mt-[-14px]" />
          <input 
              className="p-2 bg-gray-100 w-[280px]" 
              type="password" 
              placeholder="Current Password"
              ref={currentPassword}
            />
            <hr className="w-[280px] border-gray-400 mt-[-14px]" />
          <input 
              className="p-2 bg-gray-100 w-[280px]" 
              type="password" 
              placeholder="New Password"
              ref={newPassword}
            />
            <hr className="w-[280px] border-gray-400 mt-[-14px]" />
          <input 
              className="p-2 bg-gray-100 w-[280px]" 
              type="password" 
              placeholder="Again New Password"
              ref={againPassword}
            />
            <hr className="w-[280px] border-gray-400 mt-[-14px]" />

          <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Save</button>
         </div>
      </div>
      <div className="md:block hidden w-1/2 ml-14">
       <h2 className="font-bold text-3xl text-[#002D74]">Profile </h2>
       <div class="relative group flex items-center  justify-center">
        <img src={profileImg} alt='img' className='' />
        <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 flex justify-center items-center">
            {
              <label htmlFor='file' className='flex items-center mr-[15px]'>
                 <MdOutlinePermMedia className='text-[18px] mr-[5px] text-orange-600' />
                    <span className='text-sm font-semibold' >Photo</span>
                    <input 
                        type="file"
                        id='file'
                        accept='.png, .jpg, .jpeg'
                        onChange={onFileChange}
                        className='hidden' 
                    />
              </label>
            }
        </div>
        </div>
        {/* <img className="rounded-xl mt-[10px]" alt="hi" src={profileImg} /> */}
      </div>
    </form>
 </section>
  )
}

export default EditProfile