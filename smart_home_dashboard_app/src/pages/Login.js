import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../img/img2.jpg'
import { FaGoogle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import ApiLoginCalls from '../ApiCalls';

const Login = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  
  const {user, isFetching, dispatch} = useContext(AuthContext)
  console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = {
      email: email.current.value,
      password: password.current.value
  }
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post('/api/auth/login', user)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        navigate('/home')
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
    // const user = {
    //   email: email.current.value,
    //   password: password.current.value
    // }
    // const data = await axios.post("/api/auth/login", user)
    // console.log(data);
  }




  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-16">
             <h2 className="font-bold text-2xl text-[#002D74]">Login </h2>
             <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in </p>
             <form className="flex flex-col gap-4" onSubmit={handleLogin} >
              <input 
                className="p-2 mt-8 rounded-xl border" 
                type="email" 
                placeholder="Email"
                required
                ref={email}
              />
              <div className="relative">
                <input 
                  className="p-2 rounded-xl border w-full" 
                  type="password" 
                  placeholder="Password"
                  required
                  ref={password}
                />
                <FaRegEye className='absolute top-1/2 right-3 -translate-y-1/2' />
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
             </form>
             <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <FaGoogle className='mr-3' />
              Login with Google</button>
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <Link to='/register'>
                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
           <h2 className="font-bold text-3xl text-[#002D74]">Smart Home Dashboard </h2>
            <img className="rounded-xl mt-[10px]" alt="hi" src={img1} />
          </div>
        </div>
     </section>
  )
}

export default Login;