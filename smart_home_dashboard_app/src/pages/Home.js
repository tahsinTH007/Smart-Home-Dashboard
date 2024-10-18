import React from 'react'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Feed from "../components/Feed.js"

const Home = () => {
  return (
    <div className='flex w-full bg-[#eff2fa]'>
      <SideBar/>
      <Feed /> 
      <RightBar />
    </div>
  )
}

export default Home