import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Order = ({handleRemoveItem, addFood, setAddFood}) => {

  if (addFood.length === 0) {
    return (
      <div className="max-w-[1640px] p-4 grid content-center  ">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-500">No items have been added to the order.</p>
          <Link to={'/'}><button className='bg-orange-500 p-3 text-md rounded text-white hover:bg-orange-600 mt-4' >Back to Home</button></Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
      <div className=''>
        <div className='mb-4'>
          <h1><span className='text-3xl font-body underline text-orange-500 mb-10 mr-2'>Your order</span>({addFood.length} elements)</h1>
        </div>
        {addFood.map((item, index) => (
          <div key={index} className='border-b-2 mt-4 border-b-black/25 pb-4 flex justify-between items-center'>
            <div className='w-[30%] '>
              <img className='h-[125px] md:h-[175px]  w-full object-cover' src={item.image} alt="" />
            </div>
            <div className='flex flex-col gap-4 ml-4'>
              <h1 className='font-body text-orange-500 text-md md:text-2xl  '>{item.name} - {item.category}</h1>
              <AiFillDelete
                  size={25}
                  className='text-orange-500 cursor-pointer'
                  onClick={() => handleRemoveItem(item.id)}
              />
            </div>
            <div>
              <span className='inline-block px-5 py-2   text-white bg-orange-500 rounded-full hover:bg-orange-600  text-sm items-center cursor-pointer'>{item.price}</span>
            </div>
            <span className=' mx-4 text-xl'>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order;