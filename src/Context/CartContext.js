import React,{ createContext, useState,useContext } from "react";

const CartContext = createContext()
export const useCart = ()=>{
    return useContext(CartContext)
}

 const CartProvider = (props)=>{
    const [cartCount,setCartCount] = useState(0)
    const [price,setPrice] = useState(0)
    return(
        <CartContext.Provider value={{cartCount,setCartCount,price,setPrice}}>
        {props.children}
    </CartContext.Provider>
    )
}
export default CartProvider