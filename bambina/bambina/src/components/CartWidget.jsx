import * as  React from "react";
import s from "./CartWidget.module.css";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../components/CartContext";

export default function CartWidget() {
    const {cart} = React.useContext(CartContext)
    function totalItems() {


        return cart.reduce((acc, item) => acc + item.number, 0);
        
        }
    return(
        <>
        <span className={s.carrito}>{totalItems()} <AiOutlineShoppingCart/></span>
        
        </>
    );
}