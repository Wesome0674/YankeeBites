import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";


function App() {

  const [addFood, setAddFood] = useState([])
  const [order, setOrder] = useState(false)
    
  const handleOrder = () =>{
    setOrder(true)
    console.log('ca marche')
    setTimeout(() => {
      setOrder(false)
  }, 4000)
}

    const addOrderList = (item) => {
        handleOrder();
        setAddFood([...addFood, item])
    }

   

  const handleRemoveItem = (id) => {
     setAddFood(addFood.filter(item => item.id !== id))
     
  };

 
  return (
    <div className="w-full  overflow-hidden font-all ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home addOrderList={addOrderList} addFood={addFood} setAddFood={setAddFood} order={order} setOrder={setOrder} handleOrder={handleOrder} />} />
        <Route path="/orders" element={<Order addFood={addFood} setAddFood={setAddFood} handleRemoveItem={handleRemoveItem}   />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;





