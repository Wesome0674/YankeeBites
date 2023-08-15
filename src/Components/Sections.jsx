import React from 'react'
import menu from '../img/menu.jpg'
import restaurant from '../img/restaurant.jpg'
import deal from '../img/deal.jpg'

const Sections = () => {
  return (
   <div className=' max-w-[1640px] mx-auto grid md:grid-cols-3 gap-8 p-4'>
        <div className='w-full mx-auto  rounded-md  bg-orange-500 shadow-md shadow-black/30 '>
            <img className='h-[150px]  rounded-t-md w-full object-cover' src={menu} alt="" />
            <div className='m-3'>
                <h1 className='text-xl font-bold font-body text-gray-100'>Menu</h1>
                <p className='text-sm my-2'>
                    Explore our menu filled with iconic American flavors. 
                </p>
                <button type="button" className="font-body text-white bg-[#050708] hover:bg-[#050708]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-2 ">
                    Explore more
                </button>
            </div>
        </div>

        <div className='w-full mx-auto  rounded-md  bg-orange-500 shadow-md shadow-black/30 '>
            <img className='h-[150px] rounded-t-md  w-full object-cover' src={restaurant} alt="" />
            <div className='m-3'>
                <h1 className='text-xl font-bold font-body text-gray-100'>Restaurant</h1>
                <p className='text-sm my-2'>
                    Enjoy YankeeBites at our partner restaurants! 
                </p>
                <button type="button" className="font-body  text-white bg-[#050708] hover:bg-[#050708]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-2  ">
                    Explore more
                </button>
            </div>
        </div>

        <div className='w-full mx-auto  rounded-md  bg-orange-500 shadow-md shadow-black/30 '>
            <img className='h-[150px] rounded-t-md  w-full object-cover' src={deal} alt="" />
            <div className='m-3'>
                <h1 className='text-xl font-bold font-body text-gray-100'>Deals</h1>
                <p className='text-sm my-2'>
                    Enjoy unbeatable deals and discounts on our mouthwatering 
                    menu items. 
                </p>
                <button type="button" className="font-body text-white bg-[#050708] hover:bg-[#050708]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-2  ">
                    Explore more
                </button>
            </div>
        </div>
   </div>
  )
}

export default Sections