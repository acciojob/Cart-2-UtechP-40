import React, { useEffect } from 'react'
import { useCart } from '../Context/CartContext'
import Cart from './Cart'

function App() {
  const {cartCount,setCartCount,price,setPrice} = useCart()
    
  return (

    <div id="main" >
      <nav>Cart:{cartCount}  :  {price}</nav>
      <Cart />
    </div>
  )
}

export default App