import React, { useContext, useRef, useState } from 'react'
import profileImg from "../assect/Profile.png";
import { FaRegEye } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EditProfile = () => {
    const {user, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const username = useRef()
    const email = useRef()
    const currentPassaword = useRef()
    const newPassword = useRef()
    const againPassword = useRef()

    const [file, setFile] = useState(null)
    const submitHandler = async(e)=> {
        e.preventDefault()
        if(newPassword.current.value !== againPassword.current.value){
            againPassword.current.setCustomValidity("Password don't match")
        }else{
            const newPost = {
                userId: user._id,
                username: username.current.value,
                email: email.current.value,
                currentPassaword: currentPassaword.current.value,
                newPassword: newPassword.current.value,
            }
            console.log("1")
            // if(file){
            //     const Fdata = new FormData()
            //     const filename =`${Date.now()} ${file.name}`;
            //     Fdata.append("file", file)
            //     Fdata.append('name', filename)
            //     newPost.profilePicture = file.name
            //     console.log("2")
            //     try {
            //         await axios.post('/api/upload', Fdata)
            //         console.log("3")
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
            try {
                console.log(newPost)
              const res = await axios.put('/api/user/update',{
                userId: '66e95a1e5ab0e06e0017f09c',
                username: "tahsin",
                email: "tahsin@gamil.com",
                currentPassaword: "098765",
                newPassword: "123456",
            });
            //   dispatch({type: "LOGIN_SUCCESS", payload: res.data})
              navigate("/home")

            } catch (error) {
                console.log(error);
            }
        }

    }
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
            placeholder={user.username || "User Name"}
            ref={username}
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
              ref={currentPassaword}
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
                        onChange={(e) => setFile(e.target.files[0])}
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