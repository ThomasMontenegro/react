import React, { createContext, useState } from "react";


export const CartContext = createContext()
const CartContextProvider = ({children}) => {
    const[cart, setCart] = useState([])
    const[cartEmpty, setCartEmpty] = useState([false])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((el) => el.id !== id))
    }

    const totalItemsCart = () => {
        return cart.reduce((acc, e) => acc + e.cantidad, null)
    }
    
    const cleanCart = () =>  {
        setCart([]);
        setCartEmpty(true)
    }

    function totalCart() {

        return cart.reduce((acc, item) => acc + item.precio * item.number, 0);
        
    }
    const onCart = (id) => {
        return cart.some((el) => el.id === id)
    }
    return(
        <>
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, totalCart, cleanCart, onCart, totalItemsCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;