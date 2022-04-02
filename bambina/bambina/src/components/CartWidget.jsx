import * as  React from "react";
import s from "./CartWidget.module.css";

import {AiOutlineShoppingCart } from "react-icons/ai";
export default function CartWidget() {
    return(
        <>
        <span className={s.carrito}><AiOutlineShoppingCart/></span>
        </>
    );
}