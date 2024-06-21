import React from 'react'
import { IoBeer } from "react-icons/io5";


function BigScreens() {
  return (
    <div className='hidden sm:flex h-screen w-full justify-center items-center text-center text-sm'>
        Please view this site on a mobile device!
        Cheers! <IoBeer />
    </div>
  )
}

export default BigScreens