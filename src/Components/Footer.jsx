import React from 'react'
import logo from '../img/logo.png'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  const today = new Date();
  return (
    <div className='max-w-[1640px] p-4 mx-auto mb-5' >
          <div className='flex items-center justify-between border-b-2 border-b-black pb-5  '>
            <img className='w-10 cursor-pointer' src={logo} alt="" />
            <div>
              <ul className='flex flex-col ps:flex-row gap-x-4 gap-y-2 text-sm cursor-pointer '>
                <li className='hover:text-orange-500'>Orders</li>
                <li className='hover:text-orange-500'>Favourites</li>
                <li className='hover:text-orange-500'>Wallet</li>
                <li className='hover:text-orange-500'>Help</li>
                <li className='hover:text-orange-500'>Promotions</li>
              </ul>
            </div>
            <div className='flex cursor-pointer'>
                <AiOutlineInstagram size={30} className='text-orange-600' />
                <AiOutlineTwitter size={30} className='text-orange-600'  />
                <AiFillFacebook size={30} className='text-orange-600'  />
                <AiFillLinkedin size={30} className='text-orange-600'  />
            </div>
          </div>
          <div className='flex-col md:flex-row gap-y-5 text-center flex justify-center text-sm mt-5'>
            <div>
            <p>&copy; {today.getFullYear()} YankeeBites. All right reserved.</p>
            </div>
            <div className='flex justify-center '>
                <ul className='flex gap-4 md:ml-16'>
                  <li className='underline hover:text-blue-600'><a href="/">Privacy Policy</a></li>
                  <li className='underline hover:text-blue-600'><a href="/">Terms of Service</a></li>
                  <li className='underline hover:text-blue-600'><a href="/">Cookies Settings</a></li>
                </ul>
            </div>
          </div>
    </div>
  )
}

export default Footer