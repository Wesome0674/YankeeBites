import React, { useState } from 'react'
import {RiMenu2Line} from 'react-icons/ri'
import {AiOutlineSearch, AiFillCreditCard, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {FiHelpCircle} from 'react-icons/fi'
import {MdMenuBook, MdRestaurantMenu} from 'react-icons/md'
import { BiMoneyWithdraw} from 'react-icons/bi'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
    <div className='flex justify-between items-center max-w-[1640px] mx-auto p-4 border-b-2 border-black/20 '>
        <div className='flex items-center'>
            <RiMenu2Line size={30} onClick={() => setNav(!nav) } className='cursor-pointer' />
            <Link to={'/'}><h1 className=' font-body ml-4 cursor-pointer text-orange-500 text-xl md:text-2xl'>YANKEE<span className=' font-bold text-black'>BITES</span></h1></Link>
            <div className='ml-10 hidden lg:block'>
              <span className='bg-orange-500 hover:bg-orange-600  py-2 px-3 font-medium  rounded cursor-pointer'>Sign in</span>
              <span className='ml-4 bg-black hover:bg-black/80 text-white py-2 px-3 font-medium rounded cursor-pointer'>Log in</span>
            </div>
        </div>
        <div>
          <img className=' w-14 hidden md:block' src={logo} alt="" />
        </div>
        <div className='md:flex h-10 items-center  rounded-xl border shadow-md p-3 text-sm  border-orange-500   md:w-[250px] lg:w-[400px] relative hidden'>
            <input className='placeholder:text-black outline-none w-full '  type="text" placeholder='Search Food'  />
            <AiOutlineSearch size={20} className='absolute right-3' />
        </div>
        <div className='md:hidden'>
          <AiOutlineSearch size={30}  />
        </div>
    </div>
    {nav ? <div className=' fixed top-0 left-0 h-screen w-full bg-black/30 z-20' onClick={() => setNav(!nav)}></div> : ''}
    <div className={nav ? ' top-0 left-0 h-screen overflow-hidden w-[300px] bg-orange-500 z-30 fixed  duration-300' 
                    : ' top-0 left-[-100%] h-screen overflow-hidden w-[300px] bg-orange-500 z-30 fixed  duration-300'}>
        <div className='flex items-center mx-2 mt-4 justify-between'>
          <h1 className=' font-body text-2xl'>YANKEE <span className=' font-bold text-black'>BITES</span></h1>
          <AiOutlineClose size={30} onClick={() => setNav(!nav)} className='cursor-pointer' />
        </div>
        <ul className='mx-6 mt-8 '>
          <Link to={'/orders'}><li className='p-3 flex items-center' >Orders <BsFillCartCheckFill className='ml-2'  size={20} /> </li></Link>
          <li className='p-3  flex items-center'>Menu <MdMenuBook className='ml-2'  size={20}/></li>
          <li className='p-3  flex items-center'>Restaurants <MdRestaurantMenu className='ml-2'  size={20}/></li>
          <li className='p-3  flex items-center'>Promotions <BiMoneyWithdraw className='ml-2' size={20} /></li>
          <li className='p-3  flex items-center'>Wallet <AiFillCreditCard className='ml-2' size={20} /></li>
          <li className='p-3  flex items-center'>Help <FiHelpCircle className='ml-2' size={20} /></li>
        </ul>
        <div className='mx-6 mt-10'> 
          <span className='bg-orange-500 py-2 px-3 font-medium  border-black border-2 rounded cursor-pointer'>Sign in</span>
          <span className='ml-4 bg-black text-white py-2 px-3 font-medium rounded cursor-pointer'>Log in</span>
        </div>
    </div>
    </>
  )
}

export default Nav