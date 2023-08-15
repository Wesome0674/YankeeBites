import React, {useState } from 'react'
import { menu } from '../data/menu'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'



const Menu = ({addOrderList, addFood, setAddFood, order, setOrder, handleOrder}) => {
    const [food, setFood] = useState(menu)
   
    
  const filterFood = (category) => {
    setFood(
      menu.filter((item) => {
        return item.category === category
      })
    )
  }

  const filterPrice = (price) =>{
    setFood(
      menu.filter((item) =>{
        return item.price === price
      })
    )
  }
   

  return (
    <>
    <div className='max-w-[1640px] mx-auto p-4'>
        <div>
          <h2 className='font-bold m-5 border-b-black border-b-2 pb-2'>Categories</h2>
          <div className='flex  gap-x-8 gap-y-4 mx-5 flex-wrap mb-4'>
          <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => setFood(menu)}>all</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('burger')}>Burgers</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('fries')}>Fries</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('pizza')}>Pizza</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('burritos')}>Buritos</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('wings')}>Wings</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterFood('dessert')}>Dessert</span>
          </div>
          <h2 className='font-bold m-5 border-b-black border-b-2 pb-2'>Prices</h2>
          <div className='flex  gap-x-8 gap-y-4  mx-5 flex-wrap '>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterPrice('$')}>$</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterPrice('$$')}>$$</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterPrice('$$$')}>$$$</span>
            <span className='inline-block px-5 py-2  text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer' onClick={() => filterPrice('$$$$')}>$$$$</span>
          </div>
        </div>
    </div>
    <div className='max-w-[1640px] mx-auto px-2 md:px-4 shadow-sm shadow-black my-4 py-2'>
        <h1 className='mx-auto text-center text-4xl text-orange-500 font-bold font-body mb-8 border-b-4 border-b-black border-double py-3'>Menu</h1>
        <div className='grid  lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2 border-x-4 border-black border-double px-4 pb-4  '>
        {food.map((item, index) => (
        <div key={index} className='w-full rounded-lg hover:scale-105 duration-200 bg-orange-500'>
                <img className='md:h-[135px] h-[110px] rounded-t-md object-cover w-full' src={item.image} alt="" />
                <div className='p-4'>
                    <h3 className=' uppercase font-bold font-body text-white text-sm'>{item.name} - <span className=' font-all font-medium'>{item.category}</span></h3>
                    <div className='flex items-center mt-3 justify-between'>
                        <p className=''>Price: <span className='font-medium text-sm text-white'> {item.price}</span></p>
                        <div>
                            <BsFillCartPlusFill title="Ordered" size={25} className='icon' onClick={() => addOrderList(item)}  />
                        </div>
                    </div>
                </div>
          </div>
    ))}
        </div>
    </div>

    <div>
    
        <div className={ order ? 'bg-black fixed top-0 right-0 duration-200 p-3 text-sm  text-white rounded' : 'bg-black fixed top-12 right-[-100%] duration-200  p-3 text-sm text-white rounded' }>
            <span>saved in <Link to={'/orders'}><a href='/' className='underline text-blue-600'>cart</a></Link></span>
        </div>
    </div>
    
    </>
  )
}

export default Menu