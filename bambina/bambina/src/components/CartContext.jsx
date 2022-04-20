import React, { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const[cart, setCart] = useState([])

    const addCart = (item)=> console.log(item)
    const removeCart = (item)=> console.log(item)


    return(
        <>
        <CartContext.Provider value={{cart, setCart, addCart, removeCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;