import React from 'react'
import Hero from './Hero'
import Sections from './Sections'
import Menu from './Menu'


const Home = ({addOrderList, addFood, setAddFood, order, setOrder, handleOrder }) => {
  return (
    <div>
      <Hero />
      <Sections />
      <Menu addOrderList={addOrderList} addFood={addFood} setAddFood={setAddFood} order={order} setOrder={setOrder} handleOrder={handleOrder} />
    </div>
  )
}

export default Home