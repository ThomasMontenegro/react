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

    const cleanCart = () =>  {
        setCart([]);
        setCartEmpty(true)
    }

    const cartPrice = () => {
        return cart.reduce((acc, e) => acc + e.number * e.precio, 0)
    }
    const onCart = (id) => {
        return cart.some((el) => el.id === id)
    }
    return(
        <>
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, cartPrice, cleanCart, onCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;