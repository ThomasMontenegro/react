import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./ItemCount.module.css"

export default function ItemCount(){
    const [counter, setCounter] = useState(0);

    return(
        <>
            <div className={s.numero}>{counter}</div>
            <div className={s.contador}>
            <button onClick={() => setCounter(counter - 1)} className= "btn-izq">-</button>
            <button onClick={() => setCounter(0)} className= "btn-cen">Reset</button>
            <button onClick={() => setCounter(counter + 1)} className= "btn-der">+</button>
            </div>
        </>
    )
}