import React from 'react'
import NavBar from './NavBar'
import OverView from './OverView'
import AirConditionar from './AirConditionar'

const feed = () => {
  return (
    <div className='w-[65%]'>
        <NavBar />
        <OverView />
        <AirConditionar />
    </div>
  )
}

export default feed