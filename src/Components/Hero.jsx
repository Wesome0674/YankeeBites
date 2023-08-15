import React from 'react'
import bg from '../img/bg.jpg'

const Hero = () => {
  return (
    <div className='p-4 max-w-[1640px] mx-auto  font-body '>
        <div className='max-h-[500px] relative'>
            <div className='absolute max-h-[500px] h-full w-full bg-black/50 text-white flex flex-col justify-center'>
                <h2 className='font-bold text-5xl ml-5 pb-1 lg:text-[5rem] md:text-7xl'>Taste <span className='text-orange-500'>America</span>'s</h2>
                <h2 className='font-bold text-5xl ml-5 lg:text-[5rem] md:text-7xl text-orange-500 '>Finest !</h2>
            </div>
            <img src={bg} className=' max-h-[500px] object-cover w-full' alt="/"  />
        </div>
       
    </div>
  )
}

export default Hero