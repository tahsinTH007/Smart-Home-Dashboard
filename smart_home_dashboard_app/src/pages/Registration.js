import React, { useEffect, useRef } from 'react'
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router'
import img1 from '../img/img2.jpg'
import { FaRegEye } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa";
import { clearAllUserErrors, register } from '../store/slice/userSlice';

const Registration = () => {
  
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const isOwner = useRef()

  const navigateTo = useNavigate()

  const { isAuthenticated, error } = useSelector((state) => state.user);

  const dispatch = useDispatch()
  

  const handleRegistration = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      toast("Password don't match",{
        type: "warning"
      })
    }else{
      console.log(isOwner.current.value);
      const user = {
        fullName : fullName.current.value,
        email : email.current.value,
        password: password.current.value,
        isOwner: isOwner.current.value
      };
      dispatch(register(user));
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  })

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-16">
             <h2 className="font-bold text-2xl text-[#002D74]">Registration </h2>
             <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in </p>
             <form className="flex flex-col gap-4" onSubmit={handleRegistration}>
              <input 
                className="p-2 mt-8 rounded-xl border" 
                type="text"  
                placeholder="User Name"
                ref={fullName}
              />
              <input 
                className="p-2  rounded-xl border" 
                type="email"  
                placeholder="Email"
                ref={email}
              />
              <div className="relative">
                <input 
                  className="p-2 rounded-xl border w-full" 
                  type="password" 
                  placeholder="Password"
                  ref={password}
                />
                <FaRegEye className='absolute top-1/2 right-3 -translate-y-1/2' />
              </div>
              <div className="relative">
                <input 
                  className="p-2 rounded-xl border w-full" 
                  type="password" 
                  placeholder="Again Password"
                  ref={passwordAgain}
                />
                <FaRegEye className='absolute top-1/2 right-3 -translate-y-1/2' />
              </div>
              <label class="checkbox-label">Owner
              <input type="checkbox" ref={isOwner} />
              <span class="check"></span>
              </label>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Registration</button>
             </form>
             {/* <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-4 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <FaGoogle className='mr-3' />
              Register with Google</button> */}
          </div>
          <div className="md:block hidden w-1/2">
           <h2 className="font-bold text-3xl text-[#002D74]">Smart Home Dashboard </h2>
            <img className="rounded-xl mt-[10px]" alt="hi" src={img1} />
          </div>
        </div>
     </section>
  )
}

export default Registration