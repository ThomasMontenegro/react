import * as  React from "react";
import s from "./CartWidget.module.css";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
    const {cart} = React.useContext(CartContext)
    function totalItems() {


        return cart.reduce((acc, item) => acc + item.number, 0);
        
        }
    return(
        <>
        <Link to="/cart" className={s.add}><span className={s.carrito}>{totalItems()} <AiOutlineShoppingCart /></span></Link>
        
        </>
    );
}